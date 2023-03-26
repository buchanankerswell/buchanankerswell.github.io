---
layout: post
title: "Machine learning applied to Raman microscopy and elastic barometry"
author: Buchanan Kerswell, PhD
description: "A proposal to innovate in situ mineral identification and thermobarometry"
date: 2022-05-08
categories: proposedWork
---

Estimating pressures of rock formation from elastic barometry requires estimating peak positions in Raman spectra for silicate host-inclusion systems (e.g. [Cisneros & Befus, 2020](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2020GC009231)). However, this task is nontrivial because Raman spectra are generally noisey and mix signals from inclusions and their hosts. Application of convolutional neural networks (CNNs) promises to simultaneously solve the spectra unmixing problem and mineral recognition problem. Proof of concept exists ([Liu et al., 2017](https://pubs.rsc.org/en/content/articlelanding/2017/an/c7an01371j/unauth); [Fan et al., 2019](https://pubs.rsc.org/en/content/articlehtml/2019/an/c8an02212g)), but methods have not been widely tested or applied outside of chemistry, biology, and medicine. Further, no standard dataset of real and synthetic Raman spectra has yet been proposed for benchmarking different CNNs. This work proposes two parts: 1) development and maintainance of a standard dataset for CNN testing (much like [MNIST](http://yann.lecun.com/exdb/mnist/), [ImageNet](https://image-net.org), [etc.](https://en.wikipedia.org/wiki/List_of_datasets_for_machine-learning_research)), and 2) web-based, open-source software that takes raw spectra as input, classifies mixture components, unmixes spectra, and estimates peak positions for inclusions. The application would output peak positions, with uncertainties, that could be fed directly into [open-source software](http://www.rossangel.com/home.htm) for elastic barometric estimates (e.g. [Angel et al., 2019](https://www.degruyter.com/view/journals/zkri/234/2/article-p129.xml)).
