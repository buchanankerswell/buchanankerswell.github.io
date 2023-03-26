---
layout: post
title: 'A script for visualizing GPS data with R'
author: Buchanan Kerswell, PhD
description: 'A script demonstrating spatial data visualization in R'
date: 2022-05-16
categories: software
---

Understanding spatial data structures, and writing code to process and visualize spatial data, are critical skills for the modern Geoscientist. The [R script](#code) below demonstrates methods for handling [.gpx](https://en.wikipedia.org/wiki/GPS_Exchange_Format) files from a Garmin® GPS unit. Hopefully, the demo will inspire students to collect GPS data in the field themselves, and to write short scripts to summarize those data in creative ways.

The same methods are useful for summarizing GPS data collected in the field. For example, to draw maps, corroborate notes, and archive evidence (e.g. data, metadata, and notes) to ensure reproducible science.

<img src="/assets/images/snow-canyon-comp.png" style="width:100.0%" />

<iframe src="/assets/html/2022-05-16-guidebook-page-snow-canyon-leaflet.html" style="width: 100%; height: auto; min-height: 45vh;">
</iframe>

## Introduction

The *Simple Features for R* package [sf](https://r-spatial.github.io/sf/) ([Pebesma, 2018](#ref-pebesma2018)) is a wonderful stack of spatial tools written by [Edzer Pebesma](https://scholar.google.com/citations?user=d6jdqdQAAAAJ&hl=en&oi=ao). Simple features are objects that have both spatial data (coordinates in ![XYZ](https://latex.codecogs.com/svg.image?XYZ "XYZ") space) and nonspatial data of any kind (numerical, categorical, etc.). It is an implementation of an ISO [data structure standard](https://www.ogc.org/standards/sfa) for R that interfaces with:

-   [GEOS](https://libgeos.org) for geometric operations on projected points
-   Google’s [s2geometry](https://github.com/google/s2geometry) for geometric operations of points on ellipsoids
-   [GDAL](https://gdal.org) for raster and vector translations
-   [PROJ](https://proj.org) for coordinate reference systems

Think of sf as the complete command line version of GIS software like ESRI’s [ArcGIS](https://www.esri.com/en-us/arcgis/about-arcgis/overview). Together with mapping graphics tools, sf is handy for writing custom geostatistics and mapping programs—especially for those already familiar with R.

### Installing sf

Installing sf can be tricky because of its dependence on GEOS, GDAL, and PROJ. I was successful following the steps [here](https://github.com/r-spatial/sf/issues/1536#issuecomment-727342736) for my M1 macbook. Helpful installation instructions can also be found at sf’s [website](https://r-spatial.github.io/sf/).

### Using sf

sf methods and its many idiosyncrasies take some time to get used to. This blog post is not intended to be a step-by-step guide, but rather an example of working with GPS data end-to-end—from raw data to presentable visualizations.

## Code

``` r
# System info
sessionInfo()
### R version 4.2.0 (2022-04-22)
### Platform: aarch64-apple-darwin20 (64-bit)
### Running under: macOS Monterey 12.3.1
### 
### Matrix products: default
### BLAS:   /Library/Frameworks/R.framework/Versions/4.2-arm64/Resources/lib/libRblas.0.dylib
### LAPACK: /Library/Frameworks/R.framework/Versions/4.2-arm64/Resources/lib/libRlapack.dylib
### 
### locale:
### [1] en_US.UTF-8/en_US.UTF-8/en_US.UTF-8/C/en_US.UTF-8/en_US.UTF-8
### 
### attached base packages:
### [1] stats     graphics  grDevices utils     datasets  methods   base     
### 
### loaded via a namespace (and not attached):
###  [1] fansi_1.0.3     utf8_1.2.2      digest_0.6.29   crayon_1.5.1   
###  [5] lifecycle_1.0.1 magrittr_2.0.3  evaluate_0.15   pillar_1.7.0   
###  [9] stringi_1.7.6   rlang_1.0.2     cli_3.3.0       vctrs_0.4.1    
### [13] ellipsis_0.3.2  rmarkdown_2.14  tools_4.2.0     stringr_1.4.0  
### [17] glue_1.6.2      xfun_0.31       yaml_2.3.5      fastmap_1.1.0  
### [21] compiler_4.2.0  pkgconfig_2.0.3 htmltools_0.5.2 knitr_1.39     
### [25] tibble_3.1.7

# Load libraries
library(sf)
library(magrittr)
library(dplyr)
library(lubridate)
library(purrr)
library(tibble)
library(ggplot2)
library(ggspatial)
library(ggsflabel)
library(ggrepel)
library(viridis)
library(cowplot)
library(patchwork)
library(colorspace)
library(leaflet)
library(htmlwidgets)

# Helper functions

# Function to reads .gpx file and transform marker track into tibble
# with useful features (e.g. gradient, elapsed time, distance travelled)
read_gpx <- function(gpx, layer = 'track_points') {
  raw.gpx <-
    st_read(gpx, layer = layer, quiet = T) %>% # read the .gpx file
    st_set_crs(4326) # set CRS to web standard
  select(raw.gpx, ele, time, geometry) %>% # select <xyzt>
  mutate(
    ele.step = lead(ele) - ele, # [m]
    time = with_tz(time, 'MST'), # standardize time zone
    time.step = as.vector(lead(time) - time), # [POSIXct]
    dist.step = as.vector(st_distance(geometry, lead(geometry), by_element = T)), # [m]
    dist.travelled = cumsum(dist.step), # [m]
    velocity.inst = dist.step/time.step, # [m/s]
    # Gradients need to be filtered and smoothed
    grad.inst = ele.step/dist.step*100, # [%]
    grad.inst = replace(grad.inst, is.infinite(grad.inst), 0), # remove infinite values
    grad.inst = replace(grad.inst, is.na(grad.inst), 0), # remove missing values
    grad.inst = replace_outliers(grad.inst), # remove outliers
    grad.inst = c(rep(0, 100), kernapply(grad.inst, kernel('daniell', 100)), rep(0, 100))
  )
}

# Function to remove outliers from a vector 
# note: outliers defined as 3IQR below the 1st quartile
# or 3IQR above the 3rd quartile
replace_outliers <- function(x, na.rm = TRUE, ...) {
  qnt <- quantile(x, probs=c(.25, .75), na.rm = na.rm, ...)
  H <- 1.5 * IQR(x, na.rm = na.rm)
  y <- x
  y[x < (qnt[1] - 2*H)] <- 0
  y[x > (qnt[2] + 2*H)] <- 0
  y
}

# Function to draw a widened box from a st_bbox object
bbox_widen <- function(bbox = NULL, crs = NULL, borders = c(0.5, 0.5, 0, 0)) {
  # Check for bbox
  if(is.null(bbox)) {
    stop('No bbox given. Please provide an st_bbox object')
  }
  # Check for crs
  if(is.null(crs)) {
    crs <- st_crs(bbox)
  }
  b <- bbox # current bounding box
  xrange <- b$xmax - b$xmin # range of x values
  yrange <- b$ymax - b$ymin # range of y values
  b[1] <- b[1] - (borders[4] * xrange) # xmin - left
  b[3] <- b[3] + (borders[2] * xrange) # xmax - right
  b[2] <- b[2] - (borders[3] * yrange) # ymin - bottom
  b[4] <- b[4] + (borders[1] * yrange) # ymax - top
  box <-
    st_polygon(list(matrix(c(b$xmin, b$ymax, b$xmin, b$ymin, b$xmax, b$ymin, b$xmax, b$ymax, b$xmin, b$ymax), ncol = 2, byrow = TRUE))) %>%
    st_sfc(crs = crs)
  return(box)
}

# Reading .gpx file
fpath <- '../assets/gpx/activity_8676301507.gpx'
route <- read_gpx(fpath)

# Cutting out a segment
depart <- min(route$time)
segment.time.range <- c(depart+hms('00:21:48'), depart+hms('01:06:24'))
segment <-
  route %>%
  filter(time < segment.time.range[2] & time > segment.time.range[1]) %>%
  mutate(dist.travelled.segment = cumsum(dist.step))
segment.depart <- min(segment$time)

# Segment summary
segment.summary <-
  segment %>%
  st_set_geometry(NULL) %>%
  summarise(
    distance.total = sum(dist.step), # [m]
    gradient.avg = mean(grad.inst), # [%]
    gradient.max = max(grad.inst), # [%]
    elevation.gain = sum(ele.step[ele.step > 0]), # [m]
    elevation.max = max(ele), # [m]
    duration = (sum(time.step)) # [POSIXct]
  )

# Drawing maps and profiles
# Define locations of special features en route
features <-
  tibble(
    feature =
      c(
        'gas station/depart',
        'park entrance',
        '*sand dunes',
        'gravel start',
        '*tanks',
        'toilette',
        '*jointed cliffs',
        '*lava flow',
        '*twisted rope',
        'turn around'
      ),
    feature.time =
      c(
        segment.depart,
        segment.depart+hms('00:04:00'),
        segment.depart+hms('00:06:35'),
        segment.depart+hms('00:08:43'),
        segment.depart+hms('00:09:48'),
        segment.depart+hms('00:13:00'),
        segment.depart+hms('00:13:30'),
        segment.depart+hms('00:16:24'),
        segment.depart+hms('00:20:24'),
        segment.depart+hms('00:26:14')
      )
  )

# Get interest points from segments
interest.points <-
  segment %>%
  slice(map_dbl(features$feature.time, ~which.min(abs(segment$time-.x)))) %>%
  bind_cols(features)

# Draw static map
p.map <-
  ggplot() +
  geom_sf(data = bbox_widen(st_bbox(segment), borders = c(0.05, 5, 0.05, 4)), fill = NA) +
  annotation_map_tile('opencycle', zoom = 12) +
  geom_sf(data = segment[segment$grad.inst > 0,]) +
  annotation_north_arrow(location = 'tr') +
  annotation_scale(location = 'br', text_cex = 1, text_face = 'bold') +
  geom_sf(data = interest.points, color = 'deeppink', shape = 20, size = 2) +
  geom_sf_label_repel(
    data = interest.points,
    aes(label = paste0(feature, ' ', round(dist.travelled.segment/1e3, 1), 'km')),
    label.r = 0.01,
    label.padding = 0.2,
    label.size = 0,
    point.padding = 1,
    nudge_x = -4e-1,
    nudge_y = 2.5e-3,
    segment.curvature = -1e-20,
    arrow = arrow(length = unit(0.02, 'npc')),
    fill = rgb(1, 1, 1, 0.9),
    color = 'black',
        size = 4
  ) +
  labs(
    title = 'Snow Canyon Gravel Ride',
    subtitle = 'St. George, Utah',
    caption =
      paste0(
        'West Canyon: ',
        round(sum(segment$dist.step)/1e3, 1),
        'km out-n-back, ',
        round(segment.summary$elevation.gain, 1),
        'm climbing, ',
        round(segment.summary$gradient.max, 1),
        '% max gradient'
      )
  ) +
  scale_fill_manual(name = NULL, values = c('start' = 'cornflowerblue', 'finish' = 'deeppink')) +
  theme_map() +
  theme(
    legend.position = c(0.99, 0.5),
    legend.justification = c(1, 0.5),
    legend.box.background = element_rect(fill = rgb(1, 1, 1, 0.3), color = NA),
    plot.margin = margin(),
    legend.box.margin = margin()
  )

# Draw profile
p.profile <-
  segment %>%
  ggplot() +
  geom_ribbon(
    aes(x = dist.travelled.segment/1e3, ymin = min(ele), ymax = ele),
    fill = 'grey90'
  ) +
  geom_path(
    aes(x = dist.travelled.segment/1e3, y = ele, color = grad.inst),
    size = 2,
    linejoin = 'round',
    lineend = 'round'
  ) +
  geom_point(
    data = interest.points,
    aes(x = dist.travelled.segment/1e3, y = ele),
    shape = 8
  ) +
  geom_text_repel(
    data = interest.points[c(3, 5, 7, 8, 9),],
    aes(x = dist.travelled.segment/1e3, y = ele, label = feature),
    size = 3,
    point.padding = 1,
    segment.curvature = -1e-20,
    nudge_y = -200,
    nudge_x = 2.5,
    arrow = arrow(length = unit(0.02, 'npc'))
  ) +
  labs(x = 'distance (km)', y = 'elev. (m)', color = 'gradient %') +
  scale_color_continuous_diverging(
    'berlin',
    guide = guide_colorbar(title.vjust = 1, barheight = unit(0.015, 'npc'))
  ) +
  scale_y_continuous(limits = c(min(segment$ele), max(segment$ele))) +
  theme_classic() +
  theme(
    legend.direction = 'horizontal',
    legend.position = c(0.99, 0.99),
    legend.justification = c(1, 1),
    legend.box.background = element_rect(fill = rgb(1, 1, 1, 0.3), color = NA),
    plot.margin = margin(10, 0, 0, 0),
    legend.margin = margin(),
    legend.box.margin = margin()
  )

# Composition plot
p <- p.map / p.profile + plot_layout(heights = c(6, 1))
ggsave(
  '../assets/images/snow-canyon-comp.png',
  plot = p, device = 'png', type = 'cairo',
  width = 7, height = 7
)

# Draw interactive Leaflet map
leaflet(st_cast(st_combine(segment), 'LINESTRING'), width = '100%') %>%
  addProviderTiles(providers$OpenTopoMap, group = 'Open Topo') %>%
  addTiles(group = 'Open Street') %>%
  addPolylines(color = 'black', opacity = 1, group = 'West Canyon route') %>%
  addMarkers(data = segment[1,], label = 'Start/Finish', group = 'Start/Finish') %>%
  addCircleMarkers(data = interest.points, stroke = F, color = 'deeppink', radius = 4, fillOpacity = 1, label = ~feature, group = 'Interesting points') %>%
  addLayersControl(
    baseGroups = c('Open Topo', 'Open Street'),
    overlayGroups = c('West Canyon route', 'Start/Finish', 'Interesting points'),
    options = layersControlOptions(collapsed = FALSE)
  ) %>%
  saveWidget('../assets/html/2022-05-16-guidebook-page-snow-canyon-leaflet.html')

print(p)
```

## References

<div id="refs" class="references csl-bib-body hanging-indent"
entry-spacing="1">

<div id="ref-gdal2022" class="csl-entry">

GDAL/OGR contributors. (2022). *GDAL/OGR geospatial data abstraction software library*. Open Source Geospatial Foundation. <https://doi.org/10.5281/zenodo.5884351>

</div>

<div id="ref-geos2021" class="csl-entry">

GEOS contributors. (2021). *GEOS coordinate transformation software library*. Open Source Geospatial Foundation. Retrieved from <https://libgeos.org/>

</div>

<div id="ref-pebesma2018" class="csl-entry">

Pebesma, E. (2018). <span class="nocase">Simple Features for R: Standardized Support for Spatial Vector Data</span>. *The R Journal*, *10*(1), 439–446. <https://doi.org/10.32614/RJ-2018-009>

</div>

<div id="ref-proj2022" class="csl-entry">

PROJ contributors. (2022). *PROJ coordinate transformation software library*. Open Source Geospatial Foundation. <https://doi.org/10.5281/zenodo.5884394>

</div>

</div>
