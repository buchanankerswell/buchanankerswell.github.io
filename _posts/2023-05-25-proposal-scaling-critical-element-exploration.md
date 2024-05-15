---
layout: post
title: "Scaling critical element exploration: building Raman data engines to accelerate automated on-site mineral identification"
author: Buchanan Kerswell, PhD
description: "Scaling critical element exploration"
date: 2023-05-25
categories: proposedWork
---

Making reliable on-site decisions with portable low-cost instrumentation is key for exploring critical minerals deposits on Earth (Cai et al., 2022) and compositions of other rocky planets in our solar system (Berlanga et al., 2022). Raman spectroscopy shows promising opportunities as a field instrument that can quickly gather rich mineralogical information at low-cost (Cai et al., 2022). For example, many studies have built various ML classifiers to automatically identify minerals from Raman spectra that can be gathered in less than 30 seconds under laboratory conditions and achieve 80–90%+ accuracy in common mineral identification tasks (Berlanga et al., 2022; Cai et al., 2022; Carey et al., 2015; Ishikawa & Gulick, 2013; Jahoda et al., 2021; Liu et al., 2017; Sang et al., 2022; Sevetlidis & Pavlidis, 2019). **However, all of the current systems are trained on a database (RRUFF, Lafuente et al., 2015) that is severely imbalanced in terms of the number of spectra across all mineral classes (Figure 2). Any classifier trained in this manner will necessarily converge on the same performance accuracy over time for a small subset of rock types.** The only exception to this approach is the remarkable dataset gathered by Berlanga et al. (2022)—correctly claiming that ML classifiers can only achieve flexibility and high-performance accuracy on real-world mineral identification tasks by training on much larger and more balanced datasets than RRUFF.

Berlanga et al. (2022) effectively built a Raman data engine that leverages a feedback loop to improve classifier accuracy on unknown samples relevant to Martian missions. That is, the classifier aides the user in labelling unknown minerals and edge-cases for dusty Martian samples, which then improves the classifier by training it on new data, and the cycle repeats for new unknowns and edge-cases. **My proposed work will build a Raman data engine (after Berlanga et al., 2022) for exploring Ni-rich altered ultramafic rocks from many large ophiolites worldwide—enabling more rapid and cost-effective Ni exploration.** Besides the economic implications, Ni is a key ingredient in battery cathodes and critical resource for transitioning to a sustainable energy future. Building a Raman data engine will offer student support for studying ophiolites in the field, receiving laboratory training on Raman spectroscopy, and contributing directly to the production of sustainable energy systems.


<img src="{{ "assets/images/proposal-scaling-critical-element-exploration.png" | relative_url }}" width="100%">

***Figure:*** *The small and imbalanced number of spectra per mineral class in the RRUFF database. A successful on-site application of mineral identification from Raman spectra will need at least 10$^2$–10$^3$ spectra for all relevant minerals in the targeted rock types. From Sang et al. (2022).*

## References

{:.references}
Berlanga, G., Williams, Q., & Temiquel, N. (2022). Convolutional neural networks as a tool for raman spectral mineral classification under low signal, dusty mars conditions. Earth and Space Science, 9(10), e2021EA002125.
{:.references}
Cai, Y., Xu, D., & Shi, H. (2022). Rapid identification of ore minerals using multi-scale dilated convolutional attention network associated with portable raman spectroscopy. Spectrochimica Acta Part A: Molecular and Biomolecular Spectroscopy, 267, 120607.
{:.references}
Carey, C., Boucher, T., Mahadevan, S., Bartholomew, P., & Dyar, M. (2015). Machine learning tools formineral recognition and classification from raman spectroscopy. Journal of Raman Spectroscopy, 46(10), 894–903.
{:.references}
Ishikawa, S., & Gulick, V. (2013). An automated mineral classifier using raman spectra. Computers & Geosciences, 54, 259–268.
{:.references}
Jahoda, P., Drozdovskiy, I., Payler, S., Turchi, L., Bessone, L., & Sauro, F. (2021). Machine learning for recognizing minerals from multispectral data. Analyst, 146(1), 184–195.
{:.references}
Lafuente, B., Downs, R., Yang, H., & Stone, N. (2015). 1. The power of databases: The RRUFF project. In Highlights in mineralogical crystallography (pp. 1–30). De Gruyter (O).
{:.references}
Liu, J., Osadchy, M., Ashton, L., Foster, M., Solomon, C., & Gibson, S. (2017). Deep convolutional neural networks for raman spectrum recognition: A unified solution. Analyst, 142(21), 4067–4074.
{:.references}
Sang, X., Zhou, R., Li, Y., & Xiong, S. (2022). One-dimensional deep convolutional neural network for mineral classification from raman spectroscopy. Neural Processing Letters, 54(1), 677–690.
{:.references}
Sevetlidis, V., & Pavlidis, G. (2019). Effective raman spectra identification with tree-based methods. Journal of Cultural Heritage, 37, 121–128.
{:.references}
