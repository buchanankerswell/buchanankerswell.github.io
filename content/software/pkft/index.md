---
title: "pkft: Peakfit Explorer"
date: "2026-10-28"
tags:
- software
- applied statistics
- peak fitting
author:
- Buchanan Kerswell
description: Find peaks in noisy one-dimensional data
summary: Find peaks in noisy one-dimensional data
cover:
  image: figure.svg
  alt: pkft logo
  relative: true
showToc: false
disableAnchoredHeadings: false
---

**Links:** [Documentation](https://pkft.readthedocs.io/en/latest/) · [GitHub](https://github.com/buchanankerswell/pkft) · [PyPI](https://pypi.org/project/pkft/) · [DOI](https://doi.org/10.5281/zenodo.23735940)

## Summary

[pkft](https://github.com/buchanankerswell/pkft) finds peaks in noisy one-dimensional measurements, such as groups of ages that each come with an uncertainty. Paste in a small table of values, look at the plots, and fit up to 25 peaks—or let the app choose the number of peaks for you. A worked example is built in, so you can try it with one click.

---

![Figure](figure.svg)

*Figure:* pkft logo.

---

## Features

- Paste or import a table of values with uncertainties and explore the plots
- Fit peaks with a few adjustable settings, or let the app pick the peak count automatically
- Download the peak results as a file you can open in a spreadsheet

## Acknowledgement

I gratefully acknowledge feedback and suggestions provided by [Matthew Kohn](https://scholar.google.com/citations?user=xSyB1KQAAAAJ&hl=en&oi=ao) and Kayleigh Harvey. Peak modeling follows [IsoplotR](https://github.com/pvermees/IsoplotR/) (Vermeesch, 2018); demo data from Trayler et al. (2020).

## Open Research

All code is MIT Licensed and free for use and distribution at [https://github.com/buchanankerswell/pkft](https://github.com/buchanankerswell/pkft), with documentation at [https://pkft.readthedocs.io/en/latest/](https://pkft.readthedocs.io/en/latest/), releases on [PyPI](https://pypi.org/project/pkft/) (`pip install pkft`), and an archived release at [doi:10.5281/zenodo.23735940](https://doi.org/10.5281/zenodo.23735940).
