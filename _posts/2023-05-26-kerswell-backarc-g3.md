---
title: A comparison of heat flow interpolations near subduction zones
description: This work investigates methods for interpolating surface heat flow data near subduction zones.
categories:
  - research
  - phd
tags:
  - heat flow
  - subduction
  - applied statistics
  - geodynamics
excerpt: This work investigates methods for interpolating surface heat flow data near subduction zones.
---

This study explores methods for interpolating surface heat flow data in the vicinity of subduction zones. We applied two distinct approaches—Similarity and Kriging—to the Global Heat Flow Database ([GHFDB](http://ihfc-iugg.org/products/global-heat-flow-database)) and compared their results. The interpolated patterns reveal highly variable and often discontinuous surface heat flow near subduction zones along strike. These discontinuities suggest corresponding complexity in the underlying thermal structure and/or modifications within the near-surface environment.

<img src="{{ "assets/images/posts/repo-banner-backarc.png" | relative_url }}" width="100%">

***Figure:*** *Global heat flow data compared to (a) Similarity (b) and Kriging (c) interpolations for near Japan. Volcanoes (white triangles) defined by Syracuse & Abers (2006). Global heat flow data from the International Heat Flow Commission 2024 release (Global Heat Flow Data Assessment Group, 2024). Similarity interpolation from Lucazeau (2019). Plate boundaries (thick white lines) defined by Lawver et al. (2018). Transect is from Submap Lallemand & Heuret (2017).*

## Abstract

The magnitude and spatial extent of heat fluxing through the Earth's surface depend on the integrated thermal state of Earth's lithosphere (conductive heat loss) plus heat generation (e.g. from seismic cycles and radioactive decay) and heat transfer via advection (e.g. by fluids, melts, and plate motions). Surface heat flow observations are thus critically important for understanding the thermo-mechanical evolution of subduction zones. Yet evaluating regional surface heat flow patterns across tectonic features remains difficult due to sparse observations irregularly-spaced at distances from 10$^{-1}$ to 10$^3$ km. Simple sampling methods (e.g. 1D trench-perpendicular transects across subduction zones) can provide excellent location-specific information but are insufficient for evaluating lateral (along-strike) variability. Robust interpolation methods are therefore required. This study compares two interpolation methods based on fundamentally different principles, *Similarity* and *Kriging*, to (1) investigate the spatial variability of surface heat flow near 13 presently active subduction zone segments and (2) provide insights into the reliability of such methods for subduction zone research. Similarity and Kriging predictions show diverse surface heat flow distributions and profiles among subduction zone segments and broad systematic changes along strike. Median upper-plate surface heat flow varies 25.4 mW/m$^2$ for Similarity and 40 mW/m$^2$ for Kriging within segments, on average, and up to 40.7 mW/m$^2$ for Similarity and up to 85.7 mW/m$^2$ for Kriging among segments. Diverse distributions and profiles within and among subduction zone segments imply spatial heterogeneities in lithospheric thickness, subsurface geodynamics, or near-surface perturbations, and/or undersampling relative to the scale and magnitude of spatial variability. Average accuracy rates of Similarity (28.8 mW/m$^2$) and Kriging (29.6 mW/m$^2$) predictions are comparable among subduction zone segments, implying either method is viable for subduction zone research. Importantly, anomalies and methodological idiosyncrasies identified by comparing Similarity and Kriging can aid in developing more accurate regional surface heat flow interpolations and identifying future survey targets.

## Coauthors:

 - [Matthew Kohn](https://scholar.google.com/citations?user=xSyB1KQAAAAJ&hl=en) (Boise State University)

## Acknowledgement

We gratefully acknowledge high-performance computing support of the Borah compute cluster (DOI: [10.18122/oit/3/boisestate](10.18122/oit/3/boisestate)) provided by Boise State University’s Research Computing Department. We thank D. Hasterok for providing the NGHF references and guidance on citing. This work was supported by the National Science Foundation grant OISE 1545903 to M. Kohn, S. Penniston-Dorland, and M. Feineman.

## Open Research

All data, code, and relevant information for reproducing this work can be found at [https://github.com/buchanankerswell/kerswell_et_al_backarc](https://github.com/buchanankerswell/kerswell_et_al_backarc), and at [https://doi.org/10.17605/OSF.IO/CA6ZU](https://doi.org/10.17605/OSF.IO/CA6ZU), the official Open Science Framework data repository ([Kerswell et al., 2023](https://doi.org/10.17605/OSF.IO/CA6ZU)). All code is MIT Licensed and free for use and distribution (see license details).
