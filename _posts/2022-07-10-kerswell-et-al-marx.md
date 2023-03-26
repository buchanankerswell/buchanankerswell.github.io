---
layout: post
title: "Computing rates and distributions of rock recovery in subduction zones"
author: Buchanan Kerswell, PhD
description: "Applying machine learning to numerical geodynamic models"
date: 2022-11-25
categories: latestWork
---

This work investigates where, and how many, rocks get detached from subducting oceanic plates beneath convergent margins. Over one-million numerical markers (representing rock fragments) from 64 numerical experiments were traced and classified as recovered, or not recovered, using a bespoke classification algorithm we wrote. Our results indicate that rocks are recovered from discrete depths, rather than continuously along the subduction interface.

I recently presented this work at Goldschmidt 2022 in Honolulu. You can view the slides [here]({{ "assets/html/gs2022-honolulu-slides.html" | relative_url }}). The [manuscript](https://essopenarchive.org/doi/full/10.22541/essoar.167160865.53963950/v1) is currently under review at *Geochemistry, Geophysics, Geosystems*.

<img src="{{ "assets/images/repo-banner-marx.png" | relative_url }}" width="100%">

<iframe width="100%" src="https://www.youtube.com/embed/MpIxZwJmX0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Coauthors:
 - [Matthew Kohn](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj8yqqTw8T5AhWSADQIHaYXAfQQFnoECA4QAQ&url=https%3A%2F%2Fwww.boisestate.edu%2Fearth%2Fstaff-members%2Fmatthew-j-kohn%2F&usg=AOvVaw3-lM9gvqmVRHG-WhSRFOdu) (Boise State University)
 - [Taras Gerya](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjI1eiYw8T5AhViLzQIHdZJDT4QFnoECBMQAQ&url=https%3A%2F%2Ferdw.ethz.ch%2Fen%2Fpeople%2Fprofile.taras-gerya.html&usg=AOvVaw1ZWpP5eVNtfgnNmrhmGcGJ) (ETH Zürich)

## Funding:
This project was supported by the NSF grant OIA1545903 to M. Kohn, S. Penniston-Dorland, and M. Feineman.

## Open Research
All data, code, and relevant information for reproducing this work can be found at [https://github.com/buchanankerswell/kerswell_et_al_marx](https://github.com/buchanankerswell/kerswell_et_al_marx), and at [https://osf.io/3emwf/](https://osf.io/3emwf/), the official Open Science Framework data repository. All code is MIT Licensed and free for use and distribution (see license details).

## Abstract:
Bodies of rock that are detached (recovered) from subducting oceanic plates, and exhumed to Earth's surface, become invaluable records of the mechanical and chemical processing of rock along subduction interface shear zones. Geophysical imaging and well-studied exposures of shear zone rocks with high-pressure (HP) mineral assemblages provide insights into the nature of rock recovery, yet various interpretations concerning thermal gradients, recovery rates, and recovery depths arise when directly comparing the rock record with numerical simulations of subduction. Constraining recovery rates and depths directly from the rock record presents a major challenge---as small sample sizes of HP rocks makes statistical inference weak. As an alternative approach, this study implements a "soft" clustering classification algorithm to identify rock recovery in numerical simulations of oceanic-continental convergence. Over one million markers are traced and classified from 64 simulations representing a large range of presently active subduction zones on Earth. Marker pressure-temperature (PT) distributions are compared across models and with the rock record to address the following three questions: How do recovery rates vary among subduction zones? How is recovery distributed along the subduction interface? How do distributions of recovered material change with subduction zone setting? We find recovery P’s (depths) correlate strongly with convergence velocity and moderately with oceanic plate age, while PT gradients correlate strongly with oceanic plate age and upper-plate thickness. Recovery rates strongly correlate with upper-plate thickness, yet show no correlation with other initial conditions. Likewise, PT distributions of recovered markers vary among numerical experiments and generally show poor overlap with the rock record. For example, a significant gap in predicted marker recovery is found near 2 GPa and 550 ˚C, coinciding with the highest density of exhumed HP rocks. Implications for such a gap in marker recovery include numerical modeling uncertainties, petrologic uncertainties, selective sampling of exhumed HP rocks, or natural geodynamic factors not accounted for in numerical experiments.
