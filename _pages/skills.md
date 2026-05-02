---
permalink: /skills/
title: "Scientific Research Skills"
author_profile: false
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
<link rel="stylesheet" href="{{ '/assets/css/project-page.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/skills-page.css' | relative_url }}">

<div class="project-container srs-page">

  <!-- =========================== HERO =========================== -->
  <header class="srs-hero srs-hero--video">
    <div class="srs-hero-video-wrap">
      <img
        class="srs-hero-video"
        src="{{ '/assets/videos/skills-hero-poster.jpg' | relative_url }}"
        alt="Scientific Research Skills — 6 skills connected by a workflow"
        loading="eager">
      <div class="srs-hero-video-fade"></div>
    </div>

    <div class="srs-hero-overlay">
      <p class="srs-hero-tagline">
        High-level research methodology skills for AI coding agents. <br>
        <em>Not another tool list — each skill encodes a research workflow that takes months to develop.</em>
      </p>

      <div class="srs-hero-stats">
        <a class="srs-stat" href="https://github.com/jxtse/scientific-research-skills" target="_blank" rel="noopener">
          <i class="fab fa-github"></i> jxtse/scientific-research-skills
        </a>
        <span class="srs-stat">
          <img src="https://img.shields.io/github/stars/jxtse/scientific-research-skills?style=flat-square&label=Stars&color=181717" alt="GitHub stars">
        </span>
        <span class="srs-stat">
          <img src="https://img.shields.io/github/last-commit/jxtse/scientific-research-skills?style=flat-square&label=Updated&color=2980b9" alt="Last commit">
        </span>
      </div>

      <div class="srs-hero-cta">
        <a href="#install" class="srs-btn srs-btn-primary"><i class="fas fa-download"></i> Install</a>
        <a href="#skills-grid" class="srs-btn srs-btn-ghost"><i class="fas fa-th"></i> Browse 6 Skills</a>
        <a href="#workflow" class="srs-btn srs-btn-ghost"><i class="fas fa-project-diagram"></i> See Workflow</a>
        <a href="https://github.com/jxtse/scientific-research-skills" target="_blank" rel="noopener" class="srs-btn srs-btn-ghost"><i class="fab fa-github"></i> GitHub</a>
      </div>
    </div>
  </header>

  <!-- =========================== PHILOSOPHY =========================== -->
  <section class="srs-philosophy srs-fadeup">
    <div class="srs-pull-quote">
      <i class="fas fa-quote-left"></i>
      Existing AI-for-research repos catalog hundreds of <strong>tools</strong>. This repo encodes the <strong>decision-making process</strong> that experienced researchers internalize over years — <em>when</em> to skim vs. deep-read, <em>how</em> to position a contribution, <em>which</em> engine for which query.
    </div>
    <div class="srs-principles">
      <div class="srs-principle"><i class="fas fa-robot"></i><span><strong>For AI, not for show</strong> — written as agent instructions</span></div>
      <div class="srs-principle"><i class="fas fa-layer-group"></i><span><strong>Methodology &gt; tool calls</strong> — high-level over low-level</span></div>
      <div class="srs-principle"><i class="fas fa-puzzle-piece"></i><span><strong>Modular</strong> — install only what you need</span></div>
      <div class="srs-principle"><i class="fas fa-globe"></i><span><strong>Cross-platform</strong> — OpenClaw, Claude Code, Codex</span></div>
    </div>
  </section>

  <!-- =========================== SKILLS GRID =========================== -->
  <section id="skills-grid" class="srs-section">
    <h2 class="srs-section-title"><i class="fas fa-th-large"></i> The Six Skills</h2>
    <p class="srs-section-sub">
      <span class="srs-tag srs-tag-tool"><i class="fas fa-plug"></i> Tool-integrated</span> requires external APIs &nbsp;·&nbsp;
      <span class="srs-tag srs-tag-method"><i class="fas fa-book"></i> Methodology</span> pure workflow, no dependencies
    </p>

    <div class="srs-grid srs-fadeup-stagger">

      <a class="srs-card" href="https://github.com/jxtse/scientific-research-skills/tree/main/skills/literature-search" target="_blank" rel="noopener">
        <div class="srs-card-head">
          <div class="srs-card-icon" style="background:#e8f0fe;color:#1967d2"><i class="fas fa-search"></i></div>
          <span class="srs-tag srs-tag-tool">Tool-integrated</span>
        </div>
        <h3 class="srs-card-title">literature-search</h3>
        <p class="srs-card-desc">Multi-engine academic paper search with adaptive engine selection across Semantic Scholar, arXiv, Tavily, Exa, Gemini, AMiner.</p>
        <div class="srs-card-foot">
          <span class="srs-chip">Semantic Scholar</span>
          <span class="srs-chip">arXiv</span>
          <span class="srs-chip">Tavily / Exa</span>
          <span class="srs-chip">Gemini</span>
        </div>
      </a>

      <a class="srs-card" href="https://github.com/jxtse/scientific-research-skills/tree/main/skills/paper-reading" target="_blank" rel="noopener">
        <div class="srs-card-head">
          <div class="srs-card-icon" style="background:#e6f4ea;color:#137333"><i class="fas fa-book-open"></i></div>
          <span class="srs-tag srs-tag-method">Methodology</span>
        </div>
        <h3 class="srs-card-title">paper-reading</h3>
        <p class="srs-card-desc">Three-level reading workflow (skim 2 min &rarr; read 10 min &rarr; deep 30 min) producing structured digests with hidden assumptions and reproducibility notes.</p>
        <div class="srs-card-foot">
          <span class="srs-chip">Skim</span>
          <span class="srs-chip">Standard</span>
          <span class="srs-chip">Deep</span>
        </div>
      </a>

      <a class="srs-card" href="https://github.com/jxtse/scientific-research-skills/tree/main/skills/social-media-paper-triage" target="_blank" rel="noopener">
        <div class="srs-card-head">
          <div class="srs-card-icon" style="background:#fce8e6;color:#c5221f"><i class="fas fa-bullhorn"></i></div>
          <span class="srs-tag srs-tag-tool">Tool-integrated</span>
        </div>
        <h3 class="srs-card-title">social-media-paper-triage</h3>
        <p class="srs-card-desc">Extract paper recommendations from 小红书 / 微信公众号 / Twitter / Bilibili posts, find the original arXiv source, then triage for relevance before adding to the library.</p>
        <div class="srs-card-foot">
          <span class="srs-chip">小红书</span>
          <span class="srs-chip">WeChat</span>
          <span class="srs-chip">Twitter/X</span>
          <span class="srs-chip">Jina Reader</span>
        </div>
      </a>

      <a class="srs-card" href="https://github.com/jxtse/scientific-research-skills/tree/main/skills/related-work-survey" target="_blank" rel="noopener">
        <div class="srs-card-head">
          <div class="srs-card-icon" style="background:#fef7e0;color:#b06000"><i class="fas fa-sitemap"></i></div>
          <span class="srs-tag srs-tag-method">Methodology</span>
        </div>
        <h3 class="srs-card-title">related-work-survey</h3>
        <p class="srs-card-desc">Systematic survey: define dimensions &rarr; search each axis &rarr; build a taxonomy &rarr; identify the gap &rarr; produce a positioning narrative for your Related Work section.</p>
        <div class="srs-card-foot">
          <span class="srs-chip">Taxonomy</span>
          <span class="srs-chip">Gap analysis</span>
          <span class="srs-chip">Positioning</span>
        </div>
      </a>

      <a class="srs-card" href="https://github.com/jxtse/scientific-research-skills/tree/main/skills/zotero-management" target="_blank" rel="noopener">
        <div class="srs-card-head">
          <div class="srs-card-icon" style="background:#f3e8fd;color:#8430ce"><i class="fas fa-book-bookmark"></i></div>
          <span class="srs-tag srs-tag-tool">Tool-integrated</span>
        </div>
        <h3 class="srs-card-title">zotero-management</h3>
        <p class="srs-card-desc">Structured library management via local + Web API: Inbox / Active Projects / Background / Reading Queue / Archive collections with project, status, priority tags.</p>
        <div class="srs-card-foot">
          <span class="srs-chip">Zotero local</span>
          <span class="srs-chip">Web API</span>
          <span class="srs-chip">Tag schema</span>
        </div>
      </a>

      <a class="srs-card" href="https://github.com/jxtse/scientific-research-skills/tree/main/skills/academic-figure-generation" target="_blank" rel="noopener">
        <div class="srs-card-head">
          <div class="srs-card-icon" style="background:#fff1e6;color:#c2410c"><i class="fas fa-image"></i></div>
          <span class="srs-tag srs-tag-tool">Tool-integrated</span>
        </div>
        <h3 class="srs-card-title">academic-figure-generation</h3>
        <p class="srs-card-desc">Publication-quality figures from method text via a multi-agent pipeline (PaperBanana). Camera-ready PNG/PDF for ACL, NeurIPS, ICML, EMNLP.</p>
        <div class="srs-card-foot">
          <span class="srs-chip">PaperBanana</span>
          <span class="srs-chip">Multi-agent</span>
          <span class="srs-chip">Camera-ready</span>
        </div>
      </a>

    </div>
  </section>

  <!-- =========================== WORKFLOW DIAGRAM =========================== -->
  <section id="workflow" class="srs-section">
    <h2 class="srs-section-title"><i class="fas fa-project-diagram"></i> How the Skills Compose</h2>
    <p class="srs-section-sub">A typical end-to-end research session uses four to six of these skills in sequence.</p>

    <div class="srs-flow-wrap srs-fadeup">
      <svg viewBox="0 0 1100 520" class="srs-flow" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="srs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#5b6b7d"/>
          </marker>
          <linearGradient id="srs-grad-input" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#dbe9ff"/>
            <stop offset="100%" stop-color="#b6d2ff"/>
          </linearGradient>
          <linearGradient id="srs-grad-process" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#fff4d6"/>
            <stop offset="100%" stop-color="#ffe39a"/>
          </linearGradient>
          <linearGradient id="srs-grad-output" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#d8f5e3"/>
            <stop offset="100%" stop-color="#a5e8c0"/>
          </linearGradient>
        </defs>

        <text x="110" y="36" class="srs-stage-label">DISCOVER</text>
        <text x="475" y="36" class="srs-stage-label">UNDERSTAND</text>
        <text x="840" y="36" class="srs-stage-label">ORGANIZE &amp; PRODUCE</text>

        <line x1="330" y1="55" x2="330" y2="495" stroke="#e3e9f0" stroke-dasharray="4 6"/>
        <line x1="700" y1="55" x2="700" y2="495" stroke="#e3e9f0" stroke-dasharray="4 6"/>

        <g class="srs-node">
          <rect x="40" y="100" width="260" height="80" rx="14" fill="url(#srs-grad-input)" stroke="#3b82f6"/>
          <text x="170" y="135" class="srs-node-title">social-media-paper-triage</text>
          <text x="170" y="158" class="srs-node-sub">XHS / WeChat / Twitter → arXiv</text>
        </g>
        <g class="srs-node">
          <rect x="40" y="220" width="260" height="80" rx="14" fill="url(#srs-grad-input)" stroke="#3b82f6"/>
          <text x="170" y="255" class="srs-node-title">literature-search</text>
          <text x="170" y="278" class="srs-node-sub">Multi-engine paper search</text>
        </g>
        <g class="srs-node">
          <rect x="40" y="340" width="260" height="80" rx="14" fill="url(#srs-grad-input)" stroke="#3b82f6"/>
          <text x="170" y="375" class="srs-node-title">related-work-survey</text>
          <text x="170" y="398" class="srs-node-sub">Define dimensions → taxonomy</text>
        </g>

        <g class="srs-node">
          <rect x="410" y="220" width="260" height="80" rx="14" fill="url(#srs-grad-process)" stroke="#d97706"/>
          <text x="540" y="255" class="srs-node-title">paper-reading</text>
          <text x="540" y="278" class="srs-node-sub">3-level digest (skim / read / deep)</text>
        </g>

        <g class="srs-node">
          <rect x="780" y="160" width="260" height="80" rx="14" fill="url(#srs-grad-output)" stroke="#15803d"/>
          <text x="910" y="195" class="srs-node-title">zotero-management</text>
          <text x="910" y="218" class="srs-node-sub">Filed, tagged, queued</text>
        </g>
        <g class="srs-node">
          <rect x="780" y="280" width="260" height="80" rx="14" fill="url(#srs-grad-output)" stroke="#15803d"/>
          <text x="910" y="315" class="srs-node-title">academic-figure-generation</text>
          <text x="910" y="338" class="srs-node-sub">Camera-ready figures (PaperBanana)</text>
        </g>

        <path d="M 300 140 C 360 140, 380 230, 410 250" fill="none" stroke="#5b6b7d" stroke-width="2" marker-end="url(#srs-arrow)"/>
        <path d="M 300 260 L 410 260" fill="none" stroke="#5b6b7d" stroke-width="2" marker-end="url(#srs-arrow)"/>
        <path d="M 300 380 C 360 380, 380 290, 410 270" fill="none" stroke="#5b6b7d" stroke-width="2" marker-end="url(#srs-arrow)"/>

        <path d="M 670 250 C 730 230, 740 200, 780 200" fill="none" stroke="#5b6b7d" stroke-width="2" marker-end="url(#srs-arrow)"/>
        <path d="M 670 270 C 730 290, 740 320, 780 320" fill="none" stroke="#5b6b7d" stroke-width="2" marker-end="url(#srs-arrow)"/>

        <path d="M 780 180 C 600 60, 200 60, 110 220" fill="none" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="5 5" marker-end="url(#srs-arrow)"/>
        <text x="540" y="82" class="srs-edge-label">Reading queue feeds back into next search round</text>
      </svg>

      <div class="srs-flow-legend">
        <span><span class="srs-dot" style="background:#b6d2ff"></span> Discover — finds candidate papers</span>
        <span><span class="srs-dot" style="background:#ffe39a"></span> Understand — turns papers into knowledge</span>
        <span><span class="srs-dot" style="background:#a5e8c0"></span> Organize &amp; produce — stores or ships output</span>
      </div>
    </div>
  </section>

  <!-- =========================== INSTALL =========================== -->
  <section id="install" class="srs-section">
    <h2 class="srs-section-title"><i class="fas fa-download"></i> Install</h2>
    <p class="srs-section-sub">Each skill is a self-contained folder with a <code>SKILL.md</code> following the <a href="https://agentskills.io/" target="_blank" rel="noopener">open agent skills standard</a>. Drop into any skills directory — auto-discovered, no restart.</p>

    <div class="srs-tabs srs-fadeup" id="srs-install-tabs">
      <div class="srs-tabbar">
        <button class="srs-tab is-active" data-target="openclaw">OpenClaw</button>
        <button class="srs-tab" data-target="claude">Claude Code</button>
        <button class="srs-tab" data-target="codex">Codex</button>
      </div>

      <pre class="srs-code is-active" data-tab="openclaw"><code># clone
git clone https://github.com/jxtse/scientific-research-skills.git
cd scientific-research-skills

# install all (user-level)
cp -r skills/* ~/.openclaw/skills/

# or pick specific
cp -r skills/literature-search ~/.openclaw/skills/
cp -r skills/paper-reading     ~/.openclaw/skills/</code></pre>

      <pre class="srs-code" data-tab="claude"><code># clone
git clone https://github.com/jxtse/scientific-research-skills.git
cd scientific-research-skills

# user-level (all projects)
cp -r skills/* ~/.claude/skills/

# or project-level (single repo)
cp -r skills/* .claude/skills/</code></pre>

      <pre class="srs-code" data-tab="codex"><code># clone
git clone https://github.com/jxtse/scientific-research-skills.git
cd scientific-research-skills

# user-level (all repos)
cp -r skills/* ~/.agents/skills/

# or project-level
cp -r skills/* .agents/skills/</code></pre>
    </div>
  </section>

  <!-- =========================== DEPENDENCIES =========================== -->
  <section class="srs-section">
    <h2 class="srs-section-title"><i class="fas fa-key"></i> Dependencies at a Glance</h2>
    <p class="srs-section-sub">Methodology skills work out of the box. Tool-integrated skills require setup before they run.</p>

    <div class="srs-table-wrap srs-fadeup">
      <table class="srs-table">
        <thead>
          <tr><th>Skill</th><th>What to configure</th><th>Where to get it</th><th>Required?</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><code>literature-search</code></td>
            <td>One of: <code>TAVILY_API_KEY</code>, <code>EXA_API_KEY</code>, <code>GEMINI_API_KEY</code>, <code>AMINER_API_KEY</code></td>
            <td>Semantic Scholar + arXiv work with no key</td>
            <td><span class="srs-pill srs-pill-recommend">Recommended</span></td>
          </tr>
          <tr>
            <td><code>paper-reading</code></td>
            <td>None</td>
            <td>—</td>
            <td><span class="srs-pill srs-pill-none">None</span></td>
          </tr>
          <tr>
            <td><code>social-media-paper-triage</code></td>
            <td>Jina Reader (no key) covers most URLs. For X / 小红书 / 微信: <a href="https://github.com/Panniantong/Agent-Reach" target="_blank" rel="noopener">Agent Reach</a></td>
            <td>Jina Reader / xreach / Agent Reach</td>
            <td><span class="srs-pill srs-pill-optional">Optional</span></td>
          </tr>
          <tr>
            <td><code>related-work-survey</code></td>
            <td>Inherits literature-search config</td>
            <td>—</td>
            <td><span class="srs-pill srs-pill-optional">Configure search first</span></td>
          </tr>
          <tr>
            <td><code>zotero-management</code></td>
            <td><code>ZOTERO_API_KEY</code> + <code>ZOTERO_USER_ID</code></td>
            <td><a href="https://www.zotero.org/settings/keys" target="_blank" rel="noopener">zotero.org/settings/keys</a></td>
            <td><span class="srs-pill srs-pill-required">Required</span></td>
          </tr>
          <tr>
            <td><code>academic-figure-generation</code></td>
            <td>Local <a href="https://github.com/paperbanana/PaperBanana" target="_blank" rel="noopener">PaperBanana</a> deployment</td>
            <td>See skill SKILL.md</td>
            <td><span class="srs-pill srs-pill-required">Required</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="srs-callout">
      <i class="fas fa-info-circle"></i>
      <div>
        <strong>Configuration etiquette baked into the skills.</strong> When an AI agent installs these for you, it is instructed to: check existing env vars first, walk you through one skill at a time, append <code>export</code> lines to your shell profile (not just the current session), and verify each key with a smoke test before moving on. Never write secrets to a git-tracked file.
      </div>
    </div>
  </section>

  <!-- =========================== FOOTER =========================== -->
  <section class="srs-footer-section">
    <div class="srs-footer-card srs-fadeup">
      <h3><i class="fas fa-code-branch"></i> Contribute a Skill</h3>
      <p>Skills are added as research workflows mature. Create <code>skills/&lt;name&gt;/SKILL.md</code> with YAML frontmatter + markdown body, focus on <em>when</em> and <em>why</em> (not just <em>how</em>), and PR with a one-paragraph description of the workflow it encodes.</p>
      <a class="srs-btn srs-btn-primary" href="https://github.com/jxtse/scientific-research-skills" target="_blank" rel="noopener"><i class="fab fa-github"></i> Open on GitHub</a>
      <a class="srs-btn srs-btn-ghost" href="https://github.com/jxtse/scientific-research-skills/blob/main/LICENSE" target="_blank" rel="noopener"><i class="fas fa-balance-scale"></i> MIT License</a>
    </div>
  </section>

</div>

<script>
(function() {
  // Tab switching for install snippet
  var tabs = document.querySelectorAll('#srs-install-tabs .srs-tab');
  var panes = document.querySelectorAll('#srs-install-tabs .srs-code');
  tabs.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var target = btn.getAttribute('data-target');
      tabs.forEach(function(b){ b.classList.toggle('is-active', b === btn); });
      panes.forEach(function(p){ p.classList.toggle('is-active', p.getAttribute('data-tab') === target); });
    });
  });

  // Scroll fade-in via IntersectionObserver
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, {threshold: 0.15, rootMargin: '0px 0px -12% 0px'});
    document.querySelectorAll('.srs-fadeup, .srs-fadeup-stagger').forEach(function(el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll('.srs-fadeup, .srs-fadeup-stagger').forEach(function(el) {
      el.classList.add('is-visible');
    });
  }
})();
</script>
