---
layout: post
title: "Scaling quantitative petrology: building latent diffusion models to rapidly acquire super-resolution x-ray maps of minerals"
author: Buchanan Kerswell, PhD
description: "Scaling quantitative petrology"
date: 2023-05-25
categories: proposedWork
---

Details about rock-forming processes like melting, (re)crystallization, fluid-rock interactions, and deformation are naturally encoded as sub-micrometer-scale features within mineral grains. Resolving these fine textural and compositional details is key to quantifying important aspects of our dynamic planet including: magmagenesis & volcanic hazards risks, lithospheric deformation & seismic hazards risks, geo-bio-hyrdo-atmosphere interactions & environmental hazards risks, carbon cycling & climate change, and concentration of critical elements required for transitioning to a sustainable energy future. However, **the current state-of-the art for acquiring high-quality micrometer-scale images needed for quantitative petrology is slow and expensive because image quality (spatial resolution) scales with acquisition time.**

New machine learning methods, e.g. latent diffusion models (LDMs, Rombach et al., 2022), can decrease acquisition time while simultaneously increasing spatial resolution of chemical x-ray maps produced by electron-beam instruments (e.g. SEM and EPMA). LDMs add random Gaussian noise to an image in a forward diffusion process and then train deep neural networks to denoise the image in a reverse diffusion process (Sohl-Dickstein et al., 2015). LDMs are derived from non-equilibrium thermodynamics and gained intense popularity recently, in part, because of LDMs ability to generate high-fidelity images from low-resolution inputs (Dhariwal & Nichol, 2021; Ho et al., 2020; Liu et al., 2022; Rombach et al., 2022). Liu et al. (2022) applied a version of LDMs to generate super-resolution remote sensing images, demonstrating successful application of LDMs to geoscience problems (Figure 1), but LDMs have not yet been applied to quantitative petrology. **My proposed work will develop methods for generating super-resolution x-ray maps from low-resolution inputs on EMPA instruments, thus reducing the cost for applying quantitative petrology (coarser analyses → fewer analyses → lower costs).** Reducing analytical costs will increase student support for working in hazards risks mitigation, developing geoengineering solutions to climate change, exploring for critical minerals, and refining tectonic models of our dynamic Earth— especially for underprivileged and underrepresented students.


<img src="{{ "assets/images/proposal-scaling-quantitative-petrology.png" | relative_url }}" width="100%">

***Figure:*** *Example of latent diffusion models generating high-definition remote sensing images (512x512) from low-resolution inputs (64x64). The same technique can be applied to EPMA x-ray maps to generate high-quality raster images from fewer acquisition pixels, thus potentially cutting analyses (time and monetary) costs by a factor of 2 or more. From Liu et al. (2022).*

## References

{:.references}
Dhariwal, P., & Nichol, A. (2021). Diffusion models beat gans on image synthesis. Advances in Neural Information Processing Systems, 34, 8780–8794.

{:.references}
Ho, J., Jain, A., & Abbeel, P. (2020). Denoising diffusion probabilistic models. Advances in Neural Information Processing Systems, 33, 6840–6851.

{:.references}
Liu, J., Yuan, Z., Pan, Z., Fu, Y., Liu, L., & Lu, B. (2022). Diffusion model with detail complement for super-resolution of remote sensing. Remote Sensing, 14(19), 4834.

{:.references}
Plank, T., & Manning, C. E. (2019). Subducting carbon. Nature, 574(7778), 343–352.

{:.references}
Rombach, R., Blattmann, A., Lorenz, D., Esser, P., & Ommer, B. (2022). High-resolution image synthesis with latent diffusion models. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition (pp. 10684–10695). Processing Letters, 54(1), 677–690.

{:.references}
Sohl-Dickstein, J., Weiss, E., Maheswaranathan, N., & Ganguli, S. (2015). Deep unsupervised learning using nonequilibrium thermodynamics. In International conference on machine learning (pp. 2256–2265). PMLR.
