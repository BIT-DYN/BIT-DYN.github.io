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
    <h3><i class="fas fa-microscope"></i> Robotics Researcher</h3>
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
      <a href="https://ieeexplore.ieee.org/abstract/document/9981756" class="btn-accent"><i class="fas fa-external-link-alt"></i> IEEE</a>
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
      <a href="https://ieeexplore.ieee.org/abstract/document/9982101" class="btn-accent"><i class="fas fa-external-link-alt"></i> IEEE</a>
    </div>
  </div>
</div>




# <i class="fas fa-graduation-cap"></i> Professional Memberships
- IEEE <span class="primary-gradient-text">Student Member</span>.
- <span class="primary-gradient-text">Sectional Student Representative </span> of RAS (IEEE Robotics and Automation Society).


# <i class="fas fa-graduation-cap"></i> Academic Services
- IEEE International Conference on Robotics, Automation and Mechatronics (RAM) 2026 AE
- IEEE Transactions on Robotics 2026 Reviewer
- IEEE Robotics and Automation Letters (RAL) 2025/2023 Reviewer
- IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2026/2025/2025/2023 Reviewer
- IEEE/RSJ International Conference on Robotics and Automation (ICRA) 2026/2025/2024 Reviewer


# <i class="fas fa-graduation-cap"></i> Educations
- *2025.09 - Present*: &nbsp;Master of Science at <span class="primary-gradient-text">Kuang Yaming Honors School, Nanjing University</span>.
- *2021.09 - 2025.06*: &nbsp;Bachelor of Science in Information and Computing Science, <span class="primary-gradient-text">Beijing Jiaotong University</span>.

# <i class="fas fa-laptop-code"></i> Internships
- *2025.08 - Present*: &nbsp;Research Intern, <a href="https://www.asintelligence.xyz/" class="link-accent">Artificial Scientific Intelligence Lab</a>, **National University of Singapore**.
- *2024.08 - 2025.08*: &nbsp;Research Intern, <a href="https://www.microsoft.com/en-us/research/group/data-knowledge-intelligence/" class="link-accent">Data, Knowledge and Intelligence (DKI) Group</a>, **Microsoft**.
- *2023.11 - 2024.08*: &nbsp;Research Intern, <a href="https://sai.pku.edu.cn/znxyenglish/" class="link-accent">Wangxuan Institute of Computer Technology</a>, **Peking University**.
<!-- - *2023.05 - 2023.07*: &nbsp;Summer Workshop Student, <a href="https://www.comp.nus.edu.sg/" class="link-accent">School of Computer</a>, **National University of Singapore**. -->

# <i class="fas fa-code-branch"></i> Open Source

<div class="paper-box floating-card">
  <div class="paper-box-image">
    <div class="badge pulse-accent">Skills for AI Agents</div>
    <div style="display:flex;align-items:center;justify-content:center;height:100%;background:linear-gradient(135deg,#0f172a 0%,#1e40af 60%,#0ea5e9 100%);color:#fff;border-radius:8px;padding:24px;text-align:center;">
      <div>
        <div style="font-size:2.4em;line-height:1;margin-bottom:10px;">🔬</div>
        <div style="font-family:ui-monospace,Menlo,monospace;font-weight:700;font-size:1.05em;">scientific-research-skills</div>
        <div style="opacity:0.85;font-size:0.85em;margin-top:6px;">6 workflows · MIT · OpenClaw · Claude Code · Codex</div>
      </div>
    </div>
  </div>
  <div class="paper-box-text">
    <h3><a href="/skills/" style="color: inherit; text-decoration: none;">Scientific Research Skills</a></h3>
    <div class="authors">High-level research methodology skills for AI coding agents</div>
    <div class="venue">Not another tool list — each skill encodes a complete research workflow: literature search, paper reading, social-media triage, related-work survey, Zotero management, and figure generation.</div>
    <div class="links">
      <a href="/skills/" class="btn-accent"><i class="fas fa-home"></i> Project Page</a>
      <a href="https://github.com/jxtse/scientific-research-skills" class="btn-accent"><i class="fab fa-github"></i> GitHub</a>
    </div>
  </div>
</div>

# <i class="fas fa-blog"></i> Blogs

<!-- Local Blog Posts Section -->
{% if site.posts.size > 0 %}
<div class="local-blogs-section">
  <div class="local-blogs-header">
    <h3><i class="fas fa-pen-nib"></i> Latest Posts</h3>
    <a href="{{ '/blog/' | relative_url }}" class="view-all-btn">
      View All Posts <i class="fas fa-arrow-right"></i>
    </a>
  </div>
  <div class="blog-grid">
    {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
    {% for post in sorted_posts limit:9 %}
    <a href="{{ post.url | relative_url }}" class="blog-card-link">
      <div class="blog-card">
        <div class="blog-card-image">
          <div class="blog-badge">{{ post.date | date: "%B, %Y" }}</div>
          {% if post.cover_image %}
          <img src="{{ post.cover_image | relative_url }}" alt="{{ post.title }}">
          {% else %}
          <img src="{{ '/images/default-blog-cover.jpg' | relative_url }}" alt="{{ post.title }}">
          {% endif %}
        </div>
        <div class="blog-card-content">
          <div class="blog-title">{{ post.title }}</div>
          <div class="blog-description">{{ post.description | default: post.excerpt | strip_html | truncate: 120 }}</div>
        </div>
      </div>
    </a>
    {% endfor %}
  </div>
</div>

<!--<div class="external-blogs-divider">
  <span><i class="fas fa-external-link-alt"></i> External Articles</span>
</div>
{% endif %}-->

<!--<div class="blog-grid">-->
  <!--<div class="blog-card">
    <div class="blog-card-image">
      <div class="blog-badge">November, 2025</div>
      <img src="images/claude-pipeline.png" alt="Claude Code Skills 和 Subagents 的个人实践">
    </div>
    <div class="blog-card-content">
      <div class="blog-title">Claude Code Skills and Subagents in Practice</div>
      <div class="blog-description">Two production-grade systems: a paywall-crossing paper harvester and a self-iterating AI Scientist, showing how Skills + Subagents scale LLM workflows.</div>
      <div class="blog-links">
        <a href="https://mp.weixin.qq.com/s/_rHrBpRZX_U2Zmt8vRZ22Q" class="blog-link">
          <i class="fas fa-language"></i> 中文版
        </a>
        <a href="https://jxtse.medium.com/from-chat-tools-to-research-infrastructure-building-production-grade-workflows-with-claude-code-7da19194ab34" class="blog-link">
          <i class="fas fa-globe"></i> English
        </a>
      </div>
    </div>
  </div>-->

<!--<div class="blog-card">
    <div class="blog-card-image">
      <div class="blog-badge">June, 2025</div>
      <img src="images/pic06.jpg" alt="The Limits of My Language Mean the Limits of My World">
    </div>
    <div class="blog-card-content">
      <div class="blog-title">The Limits of My Language Mean the Limits of My World</div>
      <div class="blog-description">Drawing on Wittgenstein's philosophy, a recent paper argues that our existing language might be the fundamental bottleneck.</div>
      <div class="blog-links">
        <a href="https://www.xiaohongshu.com/discovery/item/683c300d000000000f03b1ca?source=webshare&xhsshare=pc_web&xsec_token=AB0PoaiA05YKKE_dU2SOcfxhEzDIPcLsNtqo4slfNuuXw=&xsec_source=pc_share" class="blog-link">
          <i class="fas fa-language"></i> 中文版
        </a>
        <a href="https://jxtse.medium.com/the-limits-of-my-language-are-the-limits-of-my-world-can-we-ever-truly-understand-ai-f7cc72327dac" class="blog-link">
          <i class="fas fa-globe"></i> English
        </a>
      </div>
    </div>
  </div>-->

  <!--<div class="blog-card">
    <div class="blog-card-image">
      <div class="blog-badge">January, 2025</div>
      <img src="images/pic04.jpg" alt="Beyond the Future of AI">
    </div>
    <div class="blog-card-content">
      <div class="blog-title">Beyond the Future of AI: The Dreams and Deceptions of Cryptocurrency</div>
      <div class="blog-description">My vision of the future: from Bitcoin to an AGI-driven decentralized society. We must design a more sophisticated trust mechanism than blockchain to install “guardrails” for AI.</div>
      <div class="blog-links">
        <a href="https://mp.weixin.qq.com/s/luu2qEzPnYAuryJ9mYoJ6Q" class="blog-link">
          <i class="fas fa-language"></i> 中文版
        </a>
        <a href="https://jxtse.medium.com/beyond-the-future-of-ai-the-dreams-and-deceptions-of-cryptocurrency-5da8d4bbf69e" class="blog-link">
          <i class="fas fa-globe"></i> English
        </a>
      </div>
    </div>
  </div>-->

  <!--<div class="blog-card">
    <div class="blog-card-image">
      <div class="blog-badge">November, 2024</div>
      <img src="images/pic05.jpg" alt="LexiMind">
    </div>
    <div class="blog-card-content">
      <div class="blog-title">LexiMind: An Open-Source LLM-Powered Vocabulary Builder</div>
      <div class="blog-description">LexiMind is an AI-powered vocabulary builder that integrates LLM-based translation with smart word retention.</div>
      <div class="blog-links">
        <a href="https://www.xiaohongshu.com/explore/67a48f0d000000001800721c?xsec_token=ABXUfGRE_zHTnXbEyaNmuelNX3M4527lw3zirVu2KJUKA=&xsec_source=pc_user" class="blog-link">
          <i class="fas fa-info-circle"></i> Introduction
        </a>
        <a href="https://github.com/jxtse/LexiMind" class="blog-link">
          <i class="fab fa-github"></i> Project
        </a>
      </div>
    </div>
  </div>-->

  <!-- <div class="blog-card">
    <div class="blog-card-image">
      <div class="blog-badge">July, 2024</div>
      <img src="images/pic02.jpg" alt="NLP Learning Path">
    </div>
    <div class="blog-card-content">
      <div class="blog-title">My NLP Learning Path as a Mathematics Undergraduate Student</div>
      <div class="blog-description">I share my learning path and some insights on natural language processing as a mathematics undergraduate student.</div>
      <div class="blog-links">
        <a href="https://www.xiaohongshu.com/explore/668a35c8000000001e010600?xsec_token=ABl3IEpctnnXxbjsYlUul3nZBcA622VEEpS6zNOEPrxVI=&xsec_source=pc_user" class="blog-link">
          <i class="fas fa-language"></i> 中文版
        </a>
        <a href="https://www.linkedin.com/posts/jinxiang-xie_naturallanguageprocessing-nlp-learningpath-activity-7215638435393359872-dPr8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEmWk88Bhyvl-E41lfo1McNlpiC4YSsk7WQ" class="blog-link">
          <i class="fas fa-globe"></i> English
        </a>
      </div>
    </div>
  </div> -->

  <!--<div class="blog-card">
    <div class="blog-card-image">
      <div class="blog-badge">November, 2023</div>
      <img src="images/pic03.jpg" alt="LLMs Technology">
    </div>
    <div class="blog-card-content">
      <div class="blog-title">LLMs: Cutting-Edge Technology and Future Applications</div>
      <div class="blog-description">My notes from a presentation on LLMs at the Gaoling School of Artificial Intelligence, Renmin University of China.</div>
      <div class="blog-links">
        <a href="https://mp.weixin.qq.com/s?__biz=Mzg5NzczMzM3MA==&mid=2247483926&idx=1&sn=c6dcaf93ec8d7ecaa760df4682589b21" class="blog-link">
          <i class="fas fa-language"></i> 中文版
        </a>
      </div>
    </div>
  </div>-->

<!--</div>-->
