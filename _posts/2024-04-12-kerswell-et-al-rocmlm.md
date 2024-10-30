---
layout: post
title: "RocMLMs: predicting rock properties through machine learning models"
author: Buchanan Kerswell, PhD
description: "Applying machine learning (ML) techniques to geochemical and thermodynamic datasets to increase efficiency of predicting rock properties in geodynamic numerical simulations"
date: 2024-10-23
categories: latestWork
---

This work investigates the feasibility of using pre-trained machine learning models to predict density (and other rock properties) during numerical geodynamic simulations of mantle convection. We built a large dataset of rock properties with the Gibbs Free Energy minimization program [Perple_X](https://www.perplex.ethz.ch) (Connolly, 2009). Different regression algorithms were used to train Machine Learning models (RocMLMs), which we then evaluated in terms of accuracy and performance. We found that RocMLMs are able to predict rock properties up to 10$^1$–10$^3$ times faster than conventional approaches with equivalent accuracy. The speed of RocMLM predictions allows dynamic rock properties to be implemented in high-resolution numerical simulations of mantle convection for the first time.

The [manuscript](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024JH000264) was published in the *Journal of Geophysical Research: Machine Learning and Computation* on October 23, 2024. You can find the article [here]({{ "assets/pdf/kerswell-et-al-rocmlm-jgr-2024.pdf" | relative_url }}).

<img src="{{ "assets/images/repo-banner-rocmlm.png" | relative_url }}" width="100%">

***Figure:*** *A pseudosection model for a Primitive Upper Mantle composition (PUM, from Sun & McDonough, 1989) estimated by Perple_X ([Connolly, 2009](https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/2009GC002540)) showing density (a), the gradient of density highlighting phase transitions (b), and density depth profiles along a range of hypothetical mantle geotherms (c). A total of 128$^3$ phase equilibria calculations (128 pseudosections at 128 x 128 PT resolution) were used to train RocMLMs.*

## Coauthors:

- [Nestor Cerpa](https://scholar.google.com/citations?user=D0kBGqcAAAAJ&hl=en&oi=ao) (CNRS & Géosciences Montpellier)
- [Andréa Tommasi](https://scholar.google.com/citations?user=4ibXyDwAAAAJ&hl=en) (CNRS & Géosciences Montpellier)
- [Marguerite Godard](https://scholar.google.com/citations?user=rhF-80oAAAAJ&hl=en&oi=ao) (CNRS & Géosciences Montpellier)
- [José Alberto Padrón-Navarta](https://scholar.google.com/citations?user=5x5JgpIAAAAJ&hl=en&oi=ao) (Instituto Andaluz de Ciencias de la Tierra)

## Acknowledgement

We gratefully thank Dr. Zhou Zhang and one anonymous reviewer for their thoughtful feedback that helped improved this work. We also thank Dr. Yangkang Chen and the editorial staff at JGR: MLC for their adept and efficient handling of this manuscript. This work was supported by the Tremplin-ERC Grant LEARNING awarded to Nestor Cerpa by the I-SITE excellence program at the Université de Montpellier. We thank Maurine Montagnat, Fernando Carazo, Nicolas Berlie, and many researchers and students at Géosciences Montpellier for their thoughtful feedback during the development of this work. We gratefully acknowledge additional support from the European Research Council (ERC) under the European Union Horizon 2020 Research and Innovation program Grant agreement No. 882450 (ERC RhEoVOLUTION) awarded to Andréa Tommasi.

## Open Research

All data, code, and relevant information for reproducing this work can be found at [https://github.com/buchanankerswell/kerswell_et_al_rocmlm](https://github.com/buchanankerswell/kerswell_et_al_rocmlm), and archived on the Open Science Framework data repository [https://doi.org/10.17605/OSF.IO/K23TB](https://doi.org/10.17605/OSF.IO/K23TB). All code is MIT Licensed and free for use and distribution (see license details). Reference models PREM and STW105 are freely available from the Incorporated Research Institutions for Seismology Earth Model Collaboration (IRIS EMC, doi: [10.17611/DP/EMC.1](https://doi.org/10.17611/DP/EMC.1), Trabant et al., 2012). All computations were made using CPUs of a Macbook Pro (2022; M2 chip) with macOS 14.5 and using Python 3.12.3.

## Abstract

Mineral phase transformations significantly alter the bulk density and elastic properties of mantle rocks and consequently have profound effects on mantle dynamics and seismic wave propagation. These changes in the physical properties of mantle rocks result from evolution in the equilibrium mineralogical composition, which can be predicted by the minimization of the Gibbs Free Energy with respect to pressure (P), temperature (T), and chemical composition (X). Thus, numerical models that simulate mantle convection and/or probe the elastic structure of the Earth's mantle must account for varying mineralogical compositions to be self-consistent. Yet coupling Gibbs Free Energy minimization (GFEM) approaches with numerical geodynamic models is currently intractable for high-resolution simulations because prediction speeds of widely-used GFEM programs (10$^0$–10$^2$ ms) are impractical in many cases. As an alternative, this study introduces machine learning models (RocMLMs) that have been trained to predict thermodynamically self-consistent rock properties at arbitrary PTX conditions between 1–28 GPa and 773–2,273 K, and dry mantle compositions ranging from fertile (lherzolitic) to refractory (harzburgitic) end-members define9d with a large data set of published mantle compositions. RocMLMs are 10$^1$–10$^3$ times faster than GFEM calculations or GFEM-based look-up table approaches with equivalent accuracy. Depth profiles of RocMLMs predictions are nearly indistinguishable from reference models PREM and STW105, demonstrating good agreement between thermodynamic-based predictions of density, Vp, and Vs and geophysical observations. RocMLMs are therefore capable, for the first time, of emulating dynamic evolution of density, Vp, and Vs due to partial melting and refertilization of dry mantle rocks in high-resolution numerical geodynamic models.
