---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>
              

My name is <span class="accent-text">Yinan Deng</span> (pronounced "Yee-nan Dung"). I am a third-year PhD student at <i class="fas fa-university"></i> **Beijing Institute of Technology** under the supervision of Prof. <a href="https://yfyue-bit.github.io/">Yufeng Yue</a>. I earned my Bachelor's degree in Automation from <i class="fas fa-university"></i> **Beijing Institute of Technology** in 2021. I was a research intern at <i class="fab fa-microsoft"></i> **Huawei**.

<div class="quote-accent">
My research focuses on the intersection of <span class="primary-gradient-text">3D vision</span> and <span class="primary-gradient-text">embodied AI</span>. <br>

My goal is to bring intelligent robots into every household.
</div>

Feel free to reach out if you'd like to discuss research or explore potential collaboration!

<div class="highlight-blocks">
  <div class="highlight-block floating-card">
    <h3><i class="fas fa-robot"></i> Robotics Researcher</h3>
    <ul>
      <li>Internships at <span class="primary-gradient-text">top institutions</span></li>
      <li>Publications at <span class="accent-text">TRO</span>, <span class="accent-text">TCSVT</span>, <span class="accent-text">TIE</span>, <span class="accent-text">RAL</span>, <span class="accent-text">CVPR</span>, <span class="accent-text">IROS</span></li>
    </ul>
  </div>
  
  <div class="highlight-block floating-card">
    <h3><i class="fas fa-pen-fancy"></i> Content Creator</h3>
    <ul>
      <li>Technical blogs with <span class="accent-text">150K+ views</span></li>
      <li>Active on <a href="https://github.com/BIT-DYN" class="link-accent">Github</a></li>
    </ul>
  </div>
  
  <div class="highlight-block floating-card">
    <h3><i class="fas fa-globe-asia"></i> Life Explorer</h3>
    <ul>
      <li>Traveled to <span class="accent-text">30+ cities</span> in China</li>
      <li>Rich experience in <span class="primary-gradient-text">social work</span></li>
    </ul>
  </div>
</div>

# <i class="fas fa-fire"></i> News
- *2026.05*: &nbsp;🎉🎉 One paper is accepted by IEEE Transactions on Circuits and Systems for Video Technology (TCSVT).
- *2026.03*: &nbsp;🎉🎉 One paper is accepted by The IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2026) main conference.
- *2025.02*: &nbsp;🎉🎉 Four papers are accepted by The IEEE International Conference on Robotics & Automation (ICRA 2026) oral. See you in <span class="accent-text">Vienna</span>.
- *2025.07*: &nbsp;I have joined <span class="primary-gradient-text">Huawei</span> as a Research Intern, where I focus on data generation for embodied AI.
- *2025.06*: &nbsp;🎉🎉 Four papers are accepted by The IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2025) oral.
- *2025.04*: &nbsp;🎉🎉 One paper is accepted by The  IEEE Robotics and Automation Letters (RAL).


# <i class="fas fa-file-alt"></i> Publications 


<div class='paper-box floating-card highlight-orange'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent">TCSVT</div>
    <img src='images/pamospalt.gif' alt="PamoSplat Demo" width="90%">
  </div>
  <div class='paper-box-text'>
    <h3><a href="/cast/" style="color: inherit; text-decoration: none;">PaMoSplat: Part-Aware Motion-Guided Gaussian Splatting for Dynamic Scene Reconstruction</a></h3>
    <div class="authors"><span class="accent-text">Yinan Deng</span>, Jianyu Dou, Jiahui Wang, Jingyu Zhao, Yi Yang, Yufeng Yue*</div>
    <div class="venue">IEEE Transactions on Circuits and Systems for Video Technology (TCSVT) 2026</div>
    <div class="links">
      <a href="https://pamosplat.github.io" class="btn-accent"><i class="fas fa-home"></i> Project</a>
      <a href="https://github.com/BIT-DYN/pamosplat" class="btn-accent"><i class="fab fa-github"></i> Code</a>
    </div>
  </div>
</div>


<div class='paper-box floating-card highlight-orange'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent">CVPR Main</div>
    <img src='images/Video2Robo-10s.gif' alt="Video2Robo Demo" width="90%">
  </div>
  <div class='paper-box-text'>
    <h3><a href="/cast/" style="color: inherit; text-decoration: none;">Video2Robo: 3DGS-based Synthetic Data from One Video Enables Scalable Robot Learning</a></h3>
    <div class="authors"><span class="accent-text">Yinan Deng</span>, Kejia Hu, Ye Chen, Jianyu Dou, Jiahui Wang,Jingyu Zhao, Haojia Ao, Yi Yang, Yufeng Yue*</div>
    <div class="venue">The IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2026) Main Conference</div>
    <div class="links">
      <a href="https://video2robo.github.io" class="btn-accent"><i class="fas fa-home"></i> Project</a>
    </div>
  </div>
</div>



<div class='paper-box floating-card highlight-orange'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent">TRO</div>
    <img src='images/omnimap.gif' alt="Omnimap Demo" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3><a href="/cast/" style="color: inherit; text-decoration: none;">OmniMap: A General Mapping Framework Integrating Optics, Geometry, and Semantics</a></h3>
    <div class="authors"> <span class="accent-text">Yinan Deng</span>, Yufeng Yue*, Jianyu Dou, Jingyu Zhao, Jiahui Wang, Yujie Tang, Yi Yang, Mengyin Fu</div>
    <div class="venue">IEEE Transactions on Robotics (TRO) 2025</div>
    <div class="links">
      <a href="https://omni-map.github.io/" class="btn-accent"><i class="fas fa-home"></i> Project</a>
      <a href="https://arxiv.org/abs/2509.07500" class="btn-accent"><i class="fas fa-file-alt"></i> ArXiv</a>
      <a href="https://github.com/BIT-DYN/omnimap" class="btn-accent"><i class="fab fa-github"></i> Code</a>
    </div>
  </div>
</div>


<div class='paper-box floating-card highlight-orange'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent">RAL</div>
    <img src='images/lgsdf.gif' alt="LGSDF Demo" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3><a href="/cast/" style="color: inherit; text-decoration: none;">LGSDF: Continual Global Learning of Signed Distance Fields Aided by Local Updating</a></h3>
    <div class="authors"> <span class="accent-text">Yinan Deng</span>, Yufeng Yue*, Jianyu Dou, Jingyu Zhao, Jiahui Wang, Yujie Tang, Yi Yang, Mengyin Fu</div>
    <div class="venue">IEEE Robotics and Automation Letters (RAL) 2025</div>
    <div class="links">
      <a href="https://LGSDF.github.io/" class="btn-accent"><i class="fas fa-home"></i> Project</a>
      <a href="https://arxiv.org/abs/2404.05187" class="btn-accent"><i class="fas fa-file-alt"></i> ArXiv</a>
      <a href="https://github.com/BIT-DYN/LGSDF" class="btn-accent"><i class="fab fa-github"></i> Code</a>
    </div>
  </div>
</div>



<div class='paper-box floating-card highlight-orange'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent">IROS</div>
    <img src='images/openvox.gif' alt="Openvox Demo" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3><a href="/cast/" style="color: inherit; text-decoration: none;">OpenVox: Real-time Instance-level Open-vocabulary Probabilistic Voxel Representation</a></h3>
    <div class="authors"> <span class="accent-text">Yinan Deng</span>, Bicheng Yao†, Yihang Tang†, Yi Yang, Yufeng Yue*</div>
    <div class="venue">IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2025 </div>
    <div class="links">
      <a href="https://open-vox.github.io" class="btn-accent"><i class="fas fa-home"></i> Project</a>
      <a href="https://arxiv.org/abs/2502.16528" class="btn-accent"><i class="fas fa-file-alt"></i> ArXiv</a>
    </div>
  </div>
</div>


<div class='paper-box floating-card highlight-orange'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent">RAL</div>
    <img src='images/openobj.gif' alt="OpenObj Demo" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3><a href="/cast/" style="color: inherit; text-decoration: none;">OpenObj: Open-Vocabulary Object-Level Neural Radiance Fields with Fine-Grained Understanding</a></h3>
    <div class="authors"> <span class="accent-text">Yinan Deng</span>, Jiahui Wang, Jingyu Zhao, Jianyu Dou, Yi Yang, Yufeng Yue*, </div>
    <div class="venue">IEEE Robotics and Automation Letters (RAL) 2024</div>
    <div class="links">
      <a href="https://openobj.github.io/" class="btn-accent"><i class="fas fa-home"></i> Project</a>
      <a href="https://arxiv.org/abs/2406.08009" class="btn-accent"><i class="fas fa-file-alt"></i> ArXiv</a>
      <a href="https://github.com/BIT-DYN/OpenObj" class="btn-accent"><i class="fab fa-github"></i> Code</a>
    </div>
  </div>
</div>



<div class='paper-box floating-card highlight-orange'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent">RAL</div>
    <img src='images/opengraph.jpg' alt="OpenGraph Demo" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3><a href="#" style="color: inherit; text-decoration: none;">OpenGraph: Open-Vocabulary Hierarchical 3D Graph Representation in Large-Scale Outdoor Environments</a></h3>
    <div class="authors"><span class="accent-text">Yinan Deng</span>, Jiahui Wang, Jingyu Zhao, Xinyu Tian, Guangyan Chen, Yi Yang, Yufeng Yue*</div>
    <div class="venue">IEEE Robotics and Automation Letters (RAL) 2024</div>
    <div class="links">
      <a href="https://arxiv.org/abs/2403.09412" class="btn-accent"><i class="fas fa-file-alt"></i> ArXiv</a>
      <a href="https://github.com/BIT-DYN/OpenGraph" class="btn-accent"><i class="fab fa-github"></i> Code</a>
    </div>
  </div>
</div>

<div class='paper-box floating-card highlight-orange'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent">RAL</div>
    <img src='images/macim.jpg' alt="MACIM Demo" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3><a href="#" style="color: inherit; text-decoration: none;">MACIM: Multi-Agent Collaborative Implicit Mapping</a></h3>
    <div class="authors"><span class="accent-text">Yinan Deng</span>, Yujie Tang, Yi Yang, Danwei Wang, Yufeng Yue*</div>
    <div class="venue">IEEE Robotics and Automation Letters (RAL) 2024</div>
    <div class="links">
      <a href="https://drive.google.com/file/d/1Y0tJIY4uLdCNG98D8oiAl4SN65uC9Aff/view" class="btn-accent"><i class="fas fa-file-pdf"></i> PDF</a>
      <a href="https://github.com/BIT-DYN/MACIM" class="btn-accent"><i class="fab fa-github"></i> Code</a>
    </div>
  </div>
</div>

<div class='paper-box floating-card highlight-orange'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent">TIE</div>
    <img src='images/see-csom.jpg' alt="SEE-CSOM Demo" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3><a href="#" style="color: inherit; text-decoration: none;">SEE-CSOM: Sharp-Edged and Efficient Continuous Semantic Occupancy Mapping for Mobile Robots</a></h3>
    <div class="authors"><span class="accent-text">Yinan Deng</span>, Meiling Wang, Yi Yang, Danwei Wang, Yufeng Yue*</div>
    <div class="venue">IEEE Transactions on Industrial Electronics (TIE) 2024</div>
    <div class="links">
      <a href="https://drive.google.com/file/d/1vji6cXKYuk5F8sI14og4HjPpiCddPoaS/view?usp=drive_link" class="btn-accent"><i class="fas fa-file-pdf"></i> PDF</a>
      <a href="https://github.com/BIT-DYN/SEE-CSOM" class="btn-accent"><i class="fab fa-github"></i> Code</a>
    </div>
  </div>
</div>

<div class='paper-box floating-card highlight-orange'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent">IROS</div>
    <img src='images/hd-ccsom.gif' alt="HD-CCSOM Demo" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3><a href="#" style="color: inherit; text-decoration: none;">HD-CCSOM: Hierarchical and Dense Collaborative Continuous Semantic Occupancy Mapping through Label Diffusion</a></h3>
    <div class="authors"><span class="accent-text">Yinan Deng</span>, Meiling Wang, Yi Yang, Yufeng Yue*</div>
    <div class="venue">IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2022</div>
    <div class="links">
      <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9981756" class="btn-accent"><i class="fas fa-file-pdf"></i> PDF</a>
      <a href="https://github.com/BIT-DYN/HD-CCSOM" class="btn-accent"><i class="fab fa-github"></i> Code</a>
    </div>
  </div>
</div>

<div class='paper-box floating-card highlight-orange'>
  <div class='paper-box-image'>
    <div class="badge pulse-accent">IROS</div>
    <img src='images/s-mki.gif' alt="S-MKI Demo" width="100%">
  </div>
  <div class='paper-box-text'>
    <h3><a href="#" style="color: inherit; text-decoration: none;">S-MKI: Incremental Dense Semantic Occupancy Reconstruction Through Multi-Entropy Kernel Inference</a></h3>
    <div class="authors"><span class="accent-text">Yinan Deng</span>, Meiling Wang, Danwei Wang, Yufeng Yue*</div>
    <div class="venue">IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2022</div>
    <div class="links">
      <a href="https://drive.google.com/file/d/16fpqzUqQAHrn9fpw3qczrCvaX6Hfaisz/view?pli=1" class="btn-accent"><i class="fas fa-file-pdf"></i> PDF</a>
    </div>
  </div>
</div>



# <i class="fas fa-people"></i> Professional-Memberships
- IEEE <span class="primary-gradient-text">Student Member</span>.
- <span class="primary-gradient-text">Sectional Student Representative </span> of RAS (IEEE Robotics and Automation Society).


# <i class="fas fa-landmark"></i> Academic-Services
- IEEE International Conference on Robotics, Automation and Mechatronics (RAM) 2026 AE
- IEEE Transactions on Robotics 2026 Reviewer
- IEEE Robotics and Automation Letters (RAL) 2025/2023 Reviewer
- IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2026/2025/2025/2023 Reviewer
- IEEE/RSJ International Conference on Robotics and Automation (ICRA) 2026/2025/2024 Reviewer


# <i class="fas fa-graduation-cap"></i> Educations
- *2021.09 - Present*: &nbsp;Ph.D. in Automation <span class="primary-gradient-text">Beijing Institute of Technology</span>.
- *2021.09 - 2023.06*: &nbsp;Master in Automation <span class="primary-gradient-text">Beijing Institute of Technology</span>.
- *2017.09 - 2021.06*: &nbsp; Bachelor in Automation, <span class="primary-gradient-text">Beijing Institute of Technology</span>.

# <i class="fas fa-laptop-code"></i> Internships
- *2025.087 - Present*: &nbsp;Research Intern, 2012 Laboratory, **Huawei**.