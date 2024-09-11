---
layout: post
title: "RocMLMs: predicting rock properties through machine learning models"
author: Buchanan Kerswell, PhD
description: "Applying machine learning (ML) techniques to geochemical and thermodynamic datasets to increase efficiency of predicting rock properties in geodynamic numerical simulations"
date: 2024-09-11
categories: latestWork
---

This work investigates the feasibility of using pre-trained machine learning models to predict density (and other rock properties) during numerical geodynamic simulations of mantle convection. We built a large dataset of rock properties with the Gibbs Free Energy minimization program [Perple_X](https://www.perplex.ethz.ch) (Connolly, 2009). Different regression algorithms were used to train Machine Learning models (RocMLMs), which we then evaluated in terms of accuracy and performance. We found that RocMLMs are able to predict rock properties up to 10$^1$–10$^3$ times faster than conventional approaches with equivalent accuracy. The speed of RocMLM predictions allows dynamic rock properties to be implemented in high-resolution numerical simulations of mantle convection for the first time.

The manuscript is in production at the *Journal of Geophysical Research: Machine Learning and Computation*. You can find the preprint [here]({{ "assets/pdf/kerswell-et-al-rocmlm-g3-2024.pdf" | relative_url }}).

<img src="{{ "assets/images/repo-banner-rocmlm.png" | relative_url }}" width="100%">

***Figure:*** *A pseudosection model for a Primitive Upper Mantle composition (PUM, from Sun & McDonough, 1989) estimated by Perple_X ([Connolly, 2009](https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/2009GC002540)) showing density (a), the gradient of density highlighting phase transitions (b), and density depth profiles along a range of hypothetical mantle geotherms (c). A total of 128$^3$ phase equilibria calculations (128 pseudosections at 128 x 128 PT resolution) were used to train RocMLMs.*

## Coauthors:

- [Nestor Cerpa](https://scholar.google.com/citations?user=D0kBGqcAAAAJ&hl=en&oi=ao) (CNRS & Géosciences Montpellier)
- [Andréa Tommasi](https://scholar.google.com/citations?user=4ibXyDwAAAAJ&hl=en) (CNRS & Géosciences Montpellier)
- [Marguerite Godard](https://scholar.google.com/citations?user=rhF-80oAAAAJ&hl=en&oi=ao) (CNRS & Géosciences Montpellier)
- [José Alberto Padrón-Navarta](https://scholar.google.com/citations?user=5x5JgpIAAAAJ&hl=en&oi=ao) (Instituto Andaluz de Ciencias de la Tierra)

## Acknowledgement

This work was supported by the Tremplin-ERC grant LEARNING awarded to Nestor Cerpa by the I-SITE excellence program at the Université de Montpellier. We thank Maurine Montagnat, Fernando Carazo, Nicolas Berlie, and many researchers and students at Géosciences Montpellier for their thoughtful feedback during the development of this work. We gratefully acknowledge additional support from the European Research Council (ERC) under the European Union Horizon 2020 Research and Innovation program grant agreement No. 882450 (ERC RhEoVOLUTION) awarded to Andréa Tommasi.

## Open Research

All data, code, and relevant information for reproducing this work can be found at [https://github.com/buchanankerswell/kerswell_et_al_rocmlm](https://github.com/buchanankerswell/kerswell_et_al_rocmlm), and at [https://doi.org/10.17605/OSF.IO/K23TB](https://doi.org/10.17605/OSF.IO/K23TB), the official Open Science Framework data repository. All code is MIT Licensed and free for use and distribution (see license details). Reference models PREM and STW105 are freely available from the Incorporated Research Institutions for Seismology Earth Model Collaboration (IRIS EMC, doi: [10.17611/DP/EMC.1](https://doi.org/10.17611/DP/EMC.1), Trabant et al., 2012). All computations were made using CPUs of a Macbook Pro (2022; M2 chip) with macOS 13.4 and using Python 3.11.4.

## Abstract

Mineral phase transformations significantly alter the bulk density and elastic properties of mantle rocks and consequently have profound effects on mantle dynamics and seismic wave propagation. These changes in the physical properties of mantle rocks result from evolution in the equilibrium mineralogical composition, which can be predicted by the minimization of the  Gibbs Free Energy with respect to pressure (P), temperature (T), and chemical composition (X). Thus, numerical models that simulate mantle convection and/or probe the elastic structure of the Earth’s mantle must account for varying mineralogical compositions to be self-consistent. Yet coupling Gibbs Free Energy minimization (GFEM) approaches with numerical geodynamic models is currently intractable for high-resolution simulations because execution speeds of widely-used GFEM programs (10$^0$–10$^2$ ms) are impractical in many cases. As an alternative, this study introduces machine learning models (RocMLMs) that have been trained to predict thermodynamically self-consistent rock properties at arbitrary PTX conditions between 1–28 GPa, 773–2273 K, and mantle compositions ranging from fertile (lherzolitic) to refractory (harzburgitic) end-members defined with a large dataset of published mantle compositions. RocMLMs are 10$^1$–10$^3$ times faster than GFEM calculations or GFEM-based look-up table approaches with equivalent accuracy. Depth profiles of RocMLMs predictions are nearly indistinguishable from reference models PREM and STW105, demonstrating good agreement between thermodynamic-based predictions of density, Vp, and Vs and geophysical observations. RocMLMs are therefore capable, for the first time, of emulating dynamic evolution of density, Vp, and Vs in high-resolution numerical geodynamic models.
