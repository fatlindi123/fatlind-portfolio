'use client';

import { useEffect, useRef, type PointerEvent, type ReactNode } from 'react';
import styles from './portfolio.module.scss';

const github = 'https://github.com/fatlindi123';
const linkedin = 'https://www.linkedin.com/in/fatlind-lubishtani-589b662b0/';

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add(styles.visible);
        observer.unobserve(node);
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`${styles.reveal} ${className}`}>{children}</div>;
}

function Arrow() { return <span aria-hidden="true">↗</span>; }

function AnalycodeVisual() {
  return <div className={`${styles.visual} ${styles.codeVisual}`} aria-label="AnalyCode flow from repository parsing to a cited answer">
    <div className={styles.visualTop}><span><i /> ANALYCODE / REPOSITORY REVIEW</span><span className={styles.live}><i /> INDEXED</span></div>
    <div className={styles.codeWindow}>
      <div className={styles.fileRail}><b>FILES</b><span>⌄ src</span><span className={styles.fileActive}>◈ auth.py</span><span>◈ routes.py</span><span>◈ models.py</span></div>
      <div className={styles.codePane}><div className={styles.codeLines}><span>01</span><code><em>def</em> verify_token(token):</code><span>02</span><code>    payload = decode(token)</code><span>03</span><code>    <strong>return</strong> payload.get(<i>&quot;sub&quot;</i>)</code><span>04</span><code>    <b>...</b></code></div>
        <div className={styles.citation}><span>↳ MATCHED SOURCE</span><b>src/auth.py : 18–24</b><small>Relevant code chunk</small></div>
      </div>
    </div>
    <div className={styles.flowStrip}><span>REPO</span><i>→</i><span>AST</span><i>→</i><span>CHUNKS</span><i>→</i><span className={styles.flowCurrent}>RETRIEVE</span><i>→</i><span>ANSWER</span></div>
    <div className={styles.answerLine}><span className={styles.answerDot} /> Answer grounded in <b>auth.py, lines 18–24</b></div>
  </div>;
}

function RagVisual() {
  return <div className={`${styles.visual} ${styles.ragVisual}`} aria-label="Enterprise RAG document retrieval pipeline">
    <div className={styles.visualTop}><span>LOCAL KNOWLEDGE / SESSION 04</span><span className={styles.lock}>⌑ PRIVATE</span></div>
    <div className={styles.ragQuestion}>How do I request access to a project?</div>
    <div className={styles.ragPipeline}>
      <div className={`${styles.ragStep} ${styles.docStep}`}><span className={styles.docIcon}>▤</span><b>Documents</b><small>Knowledge base</small></div><i className={styles.ragArrow}>→</i>
      <div className={`${styles.ragStep} ${styles.retrieveStep}`}><span className={styles.retrieveIcon}>⌕</span><b>Retrieval</b><small>Relevant passages</small></div><i className={styles.ragArrow}>→</i>
      <div className={`${styles.ragStep} ${styles.modelStep}`}><span className={styles.modelIcon}>◉</span><b>Qwen 2.5</b><small>Ollama · local</small></div>
    </div>
    <div className={styles.ragAnswer}><span>ANSWER</span><p>Submit a request through the project workspace. Your manager can review access in <b>Settings → Members.</b></p><small>Source · onboarding-guide.pdf, p. 4</small></div>
    <div className={styles.ragFooter}><span>FASTAPI</span><span>OLLAMA</span><span>DOCKER COMPOSE</span></div>
  </div>;
}

function WorkflowVisual() {
  return <div className={`${styles.visual} ${styles.workflowVisual}`} aria-label="FlowForge automation graph with trigger, HTTP, JSON, condition, AI and output nodes">
    <div className={styles.workflowTop}><span><b>Untitled workflow</b> / Draft</span><button type="button" className={styles.runButton}>▶ Run workflow</button></div>
    <div className={styles.workflowCanvas}>
      <div className={`${styles.node} ${styles.triggerNode}`}><small>TRIGGER</small><b>◉ Webhook</b><em>Waiting for input</em></div>
      <div className={styles.edge} /><div className={`${styles.node} ${styles.httpNode}`}><small>REQUEST</small><b>↗ HTTP</b><em>GET /api/jobs</em></div>
      <div className={styles.edge} /><div className={`${styles.node} ${styles.jsonNode}`}><small>TRANSFORM</small><b>{'{ }'} Parse JSON</b><em>Extract 8 fields</em></div>
      <div className={styles.edge} /><div className={`${styles.node} ${styles.conditionNode}`}><small>LOGIC</small><b>◇ Condition</b><em>match_score &gt; 0.7</em></div>
      <div className={styles.workflowBranch}><div className={styles.branchLabel}>YES</div><div className={styles.edge} /><div className={`${styles.node} ${styles.aiNode}`}><small>AI MODEL</small><b>✳ Groq</b><em>Summarize listing</em></div><div className={styles.edge} /><div className={`${styles.node} ${styles.outputNode}`}><small>RESULT</small><b>↗ Output</b><em>Ready to send</em></div></div>
    </div>
    <div className={styles.workflowStatus}><i /> Execution preview <span>Sample flow · 6 nodes</span></div>
  </div>;
}

function PunaksVisual() {
  return <div className={`${styles.visual} ${styles.punaksVisual}`} aria-label="Job discovery and candidate match preview">
    <div className={styles.visualTop}><span>PUNAKS / JOB DISCOVERY</span><span className={styles.development}>IN DEVELOPMENT</span></div>
    <div className={styles.matchLayout}>
      <div className={styles.profileCard}><div className={styles.profileGlyph}>FL</div><b>Your profile</b><small>CV · skills · interests</small><div className={styles.skillPills}><span>Python</span><span>SQL</span><span>AI</span></div></div>
      <div className={styles.matchConnector}><i /><span>MATCH</span><i /></div>
      <div className={styles.jobCard}><div className={styles.jobLabel}>NEW LISTING</div><b>Python Developer</b><small>Technology · Kosovo</small><div className={styles.matchMeter}><span /></div><div className={styles.matchScore}><strong>AI fit</strong><b>Strong match</b></div><div className={styles.source}>SOURCE ATTRIBUTED <span>↗</span></div></div>
    </div>
    <div className={styles.punaksFoot}>Multiple sources <i>·</i> Matched to your CV <i>·</i> Apply at the original listing</div>
  </div>;
}

const stackGroups = [
  { label: 'Languages', skills: ['Python', 'TypeScript', 'SQL'] },
  { label: 'Backend', skills: ['FastAPI', 'PostgreSQL', 'REST APIs', 'Celery', 'Redis'] },
  { label: 'AI & Data', skills: ['LLM APIs', 'RAG', 'NumPy', 'pandas'] },
  { label: 'Tools', skills: ['React', 'Docker', 'Git'] },
];

export default function Portfolio() {
  const artRef = useRef<HTMLDivElement>(null);
  const moveHeroArt = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || !artRef.current) return;
    const bounds = artRef.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    artRef.current.style.setProperty('--orb-x', `${x * 9}px`);
    artRef.current.style.setProperty('--orb-y', `${y * 9}px`);
    artRef.current.style.setProperty('--node-x', `${x * 4}px`);
    artRef.current.style.setProperty('--node-y', `${y * 4}px`);
  };
  const resetHeroArt = () => {
    artRef.current?.style.setProperty('--orb-x', '0px');
    artRef.current?.style.setProperty('--orb-y', '0px');
    artRef.current?.style.setProperty('--node-x', '0px');
    artRef.current?.style.setProperty('--node-y', '0px');
  };

  return <main className={styles.main} id="top">
    <section className={styles.hero}>
      <div className={styles.heroGrid} />
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}><i /> COMPUTER SCIENCE · KOSOVO</div>
          <h1><span>Fatlind</span><span>Lubishtani<span className={styles.namePeriod}>.</span></span></h1>
          <p className={styles.role}>AI Engineer <b>/</b> Software Developer</p>
          <p className={styles.heroText}>I build useful AI-powered software, developer tools, and backend systems — with a focus on how the pieces work together.</p>
          <div className={styles.heroActions}><a className={styles.primaryButton} href="#projects">View projects <Arrow /></a><a className={styles.textButton} href="#contact">Contact me <Arrow /></a></div>
          <div className={styles.heroSocials}><a href={github} target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div>
        </div>
        <div ref={artRef} onPointerMove={moveHeroArt} onPointerLeave={resetHeroArt} className={styles.heroArt} aria-label="Animated code and retrieval network" role="img">
          <div className={styles.artOrb}><span>AI</span><i /><i /><i /></div>
          <div className={`${styles.artNode} ${styles.nodeCode}`}><small>INPUT</small><b>{'{ }'} Codebase</b></div>
          <div className={`${styles.artNode} ${styles.nodeContext}`}><small>CONTEXT</small><b>⌘ Retrieval</b></div>
          <div className={`${styles.artNode} ${styles.nodeAnswer}`}><small>OUTPUT</small><b>↳ Cited answer</b></div>
          <svg className={styles.artLines} viewBox="0 0 520 440" fill="none" aria-hidden="true"><path d="M104 104 C170 108 176 184 244 206"/><path d="M402 112 C336 126 328 184 276 207"/><path d="M252 236 C236 303 146 323 113 361"/><path d="M274 234 C314 302 375 312 410 359"/></svg>
          <div className={styles.artCaption}><span>01 — BUILD</span><span>02 — CONNECT</span><span>03 — SHIP</span></div>
          <div className={styles.artOrbit} />
        </div>
        <div className={styles.heroIndex}><span>PORTFOLIO</span><span>2026</span></div>
      </div>
      <a href="#about" className={styles.scrollCue}><span /> SCROLL TO EXPLORE</a>
    </section>

    <section className={styles.about} id="about">
      <Reveal className={styles.sectionLabel}><span>01</span> A LITTLE ABOUT ME</Reveal>
      <div className={styles.aboutGrid}><Reveal><h2>Curiosity in.<br /><em>Useful software out.</em></h2></Reveal><Reveal className={styles.aboutBody}><p>I’m a computer science student and developer in Kosovo. I enjoy taking a problem apart, understanding what the system needs to do, and building a practical solution around it.</p><p>My work sits across AI engineering and backend development — from retrieval pipelines and code analysis to the APIs and data systems behind them.</p><div className={styles.education}><span>EDUCATION</span><b>Bachelor of Computer Science</b><small>University “Kadri Zeka”</small></div></Reveal></div>
    </section>

    <section className={styles.projects} id="projects">
      <div className={styles.sectionHead}><Reveal className={styles.sectionLabel}><span>02</span> SELECTED WORK</Reveal><Reveal><h2>Featured <em>projects</em></h2></Reveal><Reveal><p>Systems built to make complex work easier to understand, automate, or act on.</p></Reveal></div>
      <article className={`${styles.project} ${styles.projectAnalycode}`}>
        <Reveal className={styles.projectVisualWrap}><AnalycodeVisual /></Reveal>
        <Reveal className={styles.projectInfo}><div className={styles.projectKicker}><span>01 / CODE INTELLIGENCE</span><span>PERSONAL PROJECT</span></div><h3>AnalyCode<span>.</span></h3><p className={styles.problem}>Finding the right code in an unfamiliar repository takes time and context.</p><p className={styles.projectDesc}>A code analysis platform that ingests Git repositories, retrieves relevant source, and answers codebase questions with file and line citations.</p><div className={styles.decision}><span>ENGINEERING DECISION</span><p>Python AST chunking preserves code structure. Retrieval works with pgvector, and citations point back to the source lines.</p></div><div className={styles.tags}><span>Python · FastAPI</span><span>RAG · pgvector</span><span>Celery · Redis</span><span>React · TypeScript</span><span>PostgreSQL · Docker</span></div><a className={styles.repoLink} href="https://github.com/fatlindi123/Analycode" target="_blank" rel="noreferrer">Explore repository <Arrow /></a></Reveal>
      </article>
      <article className={`${styles.project} ${styles.projectRag}`}>
        <Reveal className={styles.projectInfo}><div className={styles.projectKicker}><span>02 / KNOWLEDGE RETRIEVAL</span><span>PERSONAL PROJECT</span></div><h3>Enterprise-RAG<span>.</span></h3><p className={styles.problem}>General language models do not know the contents of a private document library.</p><p className={styles.projectDesc}>A knowledge assistant that retrieves relevant document passages and uses them as context for locally hosted Qwen answers.</p><div className={styles.decision}><span>ENGINEERING DECISION</span><p>Ollama keeps inference local. Retrieved document context is passed into generation before the answer is returned.</p></div><div className={styles.tags}><span>Python · FastAPI</span><span>RAG · Ollama</span><span>Qwen 2.5 3B</span><span>React</span><span>Docker Compose</span></div><a className={styles.repoLink} href="https://github.com/fatlindi123/Enterprise-RAG" target="_blank" rel="noreferrer">Explore repository <Arrow /></a></Reveal>
        <Reveal className={styles.projectVisualWrap}><RagVisual /></Reveal>
      </article>
      <article className={`${styles.project} ${styles.projectWorkflow}`}>
        <Reveal className={styles.projectVisualWrap}><WorkflowVisual /></Reveal>
        <Reveal className={styles.projectInfo}><div className={styles.projectKicker}><span>03 / WORKFLOW AUTOMATION</span><span>PERSONAL PROJECT</span></div><h3>FlowForge AI<span>.</span></h3><p className={styles.problem}>Connecting API calls, logic, and AI steps often means writing the same orchestration code again.</p><p className={styles.projectDesc}>A visual workflow builder for composing, running, and inspecting multi-step automations with execution state and node-level logs.</p><div className={styles.decision}><span>ENGINEERING DECISION</span><p>An AIProviderFactory keeps provider calls separate from execution logic; encrypted user keys support Groq and Gemini.</p></div><div className={styles.tags}><span>React Flow · TypeScript</span><span>FastAPI · SQLAlchemy</span><span>Groq · Gemini</span><span>JWT · PostgreSQL</span><span>Docker</span></div><a className={styles.repoLink} href="https://github.com/fatlindi123/AI-Automation-Workflow" target="_blank" rel="noreferrer">Explore repository <Arrow /></a></Reveal>
      </article>
      <article className={`${styles.project} ${styles.projectPunaks}`}>
        <Reveal className={styles.projectInfo}><div className={styles.projectKicker}><span>04 / JOB DISCOVERY</span><span className={styles.inDev}>IN DEVELOPMENT</span></div><h3>Punaks<span>.</span></h3><p className={styles.problem}>Finding relevant openings means checking multiple job sources and comparing each one to your experience.</p><p className={styles.projectDesc}>A job discovery concept for Kosovo that brings listings together and helps people assess how well each role fits their CV.</p><div className={styles.decision}><span>PRODUCT FOCUS</span><p>Keep the original source attached to every listing, with applications redirected to the employer’s page.</p></div><div className={styles.tags}><span>Job aggregation</span><span>AI job analysis</span><span>CV matching</span><span>Notifications</span></div></Reveal>
        <Reveal className={styles.projectVisualWrap}><PunaksVisual /></Reveal>
      </article>
    </section>

    <section className={styles.skills} id="skills">
      <Reveal className={styles.sectionLabel}><span>03</span> TOOLS I WORK WITH</Reveal><div className={styles.skillsIntro}><Reveal><h2>A practical<br /><em>toolkit.</em></h2></Reveal><Reveal><p>The right tool depends on the problem. These are the ones I reach for across application, AI, and data work.</p></Reveal></div>
      <div className={styles.skillGroups}>{stackGroups.map((group, index) => <Reveal className={styles.skillGroup} key={group.label}><span className={styles.skillIndex}>0{index + 1}</span><h3>{group.label}</h3><div>{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></Reveal>)}</div>
    </section>

    <section className={styles.contact} id="contact">
      <Reveal className={styles.sectionLabel}><span>04</span> SAY HELLO</Reveal><div className={styles.contactInner}><Reveal><p className={styles.contactEyebrow}>HAVE A PROJECT OR JUST WANT TO TALK?</p><h2>Let’s make<br /><em>something useful.</em></h2></Reveal><Reveal className={styles.contactLinks}><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href={github} target="_blank" rel="noreferrer">GitHub <Arrow /></a></Reveal></div><div className={styles.contactFoot}><span>FATLIND LUBISHTANI</span><span>BASED IN KOSOVO</span></div>
    </section>
  </main>;
}
