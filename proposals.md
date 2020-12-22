---
layout: page
title: Future Projects
description: Proposals + Student Projects
image: assets/images/pic07.jpg
nav-menu: true
include-tile: true
---

<!-- Main -->
<div id="main" class="alt">

<!-- One -->
<section id="one">
	<div class="inner">
    <!-- Content -->
    <h2 id="content">Foreword about my interests and expertise</h2>
    	<p>My primary interests involve using the rock record (petrology) in combination with computation (applied statistics and numerical modelling) and field methods to investigate geologic problems. I also have considerable backgrounds in geochemistry, geochronology, igneous petrology, ore geology,  and environmental science.</p>
    	<p>I am increasingly more interested in machine learning and web-based app development and design. I believe open-source ML and web-based apps for research are the future of all physical sciences as datasets, computation, and open-source libraries continue to grow.</p>
    	<p>I find myself the most enthusiastic when I am trying new things. The projects I propose below reflect my varied and evolving interests. I am delighted to work with students on a variety of geologic and environmental problems using laboratory, computation, and field-based methods.</p>
		<hr class="major" />
		<header class="major">
			<h1>Proposed Post-doc Projects</h1>
		</header>
		<div class="row">
    	<div class="6u 12u$(small)">
    		<h3>Machine learning applied to numerical geodynamic models</h3>
    		<p>Numerical models that use Lagrangian markers to store physical and material information within Eulerian grid cells can generate enormous datasets <a href="https://www.sciencedirect.com/science/article/pii/S0031920103001900?casa_token=0qnFE29TxugAAAAA:07b2EEUPQXsZ8iYBLHyuNTehVTqlwV8TUmrK7yY_FDXN0YNr2ERSi2eJwoDmq_wfTcYGxmlzwQ">(Gerya and Yuen, 2003)</a>. The size of such datasets, which can easily include millions of markers, inhibits regular quantitative techniques (applied statistics) because markers <i>that can be</i> related to relevant processes cannot be easily distinguished. <b>A combination of feature engineering and machine learning can "identify" markers related to specific processes</b> (Kerswell et al., in prep). This approach can be applied to any model that uses Lagrangian markers, so the proposed work is virtually unlimited. Currently my work focuses on subduction zone processes, but this work could be in collaboration with researchers working in the cryosphere, atmosphere, hydrosphere, or non-geoscience fields that use computational fluid dynamics (i.e. engineering applications).</p>
    	</div>
    	<div class="6u$ 12u$(small)">
    		<h3>Machine learning applied to elastic barometry of quartz inclusions in garnet</h3>
    		<p>Application of elastic barometry of quartz inclusions in garnet (QuiG) requires estimating peak positions in Raman spectra. The problem is that QuiG spectra are mixed and require deconvolution of quartz spectra from interference noise (from garnet and other minerals) for proper peak position estimates. <b>Robust methods currently do not exist for deconvolution of Raman spectra for QuiG</b>, or are at least not widely available. This work proposes web-based, open-source software that uses deep learning to take raw spectra as input, specifically identify and deconvolve minerals contributing to the mixed spectra, and estimate peak positions. The application would output peak positions, with uncertainties, that could be fed directly into <a href="http://www.rossangel.com/home.htm">open-source software</a> for elastic barometric estimates <a href="https://www.degruyter.com/view/journals/zkri/234/2/article-p129.xml">(Angel et al., 2019)</a></p>
    	</div>
			<div class="inner">
    		<h3>Web based applications for data reduction, visualization, and applied statistics</h3>
    		<p>Web-hosted applications have potential to improve workflows of labs by replacing proprietary software that handle specific tasks like data reduction, visualization, and statistical analysis. <b>Many simple tasks do not require large software packages that have inaccessible documentation and need expensive licensing</b>. You know the clunky software, loaded on <i>that one computer</i>, located in a cold, noisy lab. Open-source, web-based apps have many advantages, like running on web browsers. They can be accessed anywhere with a URL, on any device with a web browser. The user interacts with a clean interface that includes only relevant inputs, outputs, and documentation. Importantly, translation of research practices into classroom exercises becomes seamless, as users do not need to load software or have coding experience.</p>
				<p>I am looking for collaborators who would help propose specific problems and design solutions. Project quality will be evaluated based on relevance and likeliness of use by the highest number of labs. Examples of projects could include data reduction apps for commonly used instruments (SEM, EPMA, LA-ICPMS, TIMS, etc.).</p>
				<p><a href="https://kerswell.shinyapps.io/peak_demo/">A recent example</a>, presented at the 2020 Geological Society of America conference (<a href="https://gsa.confex.com/gsa/2020AM/webprogram/Paper357491.html">Kohn et al., 2020</a>), demonstrates a simple app for data visualization and Gaussian Mixture Model analysis using R's <code>IsoploR</code> package.</p>
    	</div>
    	<!-- Break -->
    	<div class="6u 12u$(small)">
    		<h3>Reaction overstepping in subduction zones: case studies from the W. Alps</h3>
    		<p>The kinematics of important metamorphic reactions is undergoing reinvestigation (<a href="https://www.tandfonline.com/doi/abs/10.1080/00206814.2016.1200499">Castro et al., 2017; </a><a href="https://www.sciencedirect.com/science/article/pii/S0009254117301250?casa_token=DGNNlObHVPgAAAAA:KAjlV9ivQVnhaqEK9NQm1LV51C3ON5PBCrV8UJn-LJNyWEux-mpQmDafuIJb5SbI56c8pv3dAA">Spear and Pattison, 2017</a>). Garnet forming and consuming reactions have important implications for subduction zone dynamics (<a href="https://www.sciencedirect.com/science/article/abs/pii/S0009254112001829">Dragovic et al., 2012; </a><a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2001jb001127">Hacker et al., 2003</a>), so the rates, P-T conditions, and (dis)continuity of these reactions is critically important. Currently, the evidence for significant overstepping in subduction zones is limited to few examples (e.g. Castro et al., 2017). This work proposes replicating estimates of reaction overstepping using rocks from two exhumed ophiolites in the W. Alps—Monviso and Corsica-Sardinia. The results will provide more evidence to support or contradict the hypothesis that significant reaction overstepping occurs in subduction zones.</p>
    	</div>
    	<div class="6u$ 12u$(small)">
    		<h3>Web based applications to assess student reading comprehension and compliance</h3>
    		<p>This project is based on the work by <a href="https://repository.lib.ncsu.edu/bitstream/handle/1840.20/37510/etd.pdf?sequence=1">(Jones, 2020)</a>, who developed a web-based tool for assessing student learning in intro Geoscience courses: Confidence-based Learning Accuracy Support System (CLASS). The system takes input from students during examinations on their perceived confidence levels. The volume of responses allows questions about student learning to be evaluated quantitatively, providing rapid feedback to instructors. The proposed work extends this system (or similar system) to reading comprehension and compliance. Questions one could address with large volumes of student responses include: perceived level of comprehension, perceived level of relevance, time to completion, number of rereads, and more. This work would require support from collaborators with expertise in pedagogy to help direct the development of the system (headed by myself).</p>
    	</div>
    </div>
    <hr class="major" />
  </div>
</section>
