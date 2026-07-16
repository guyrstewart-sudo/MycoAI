/* ---- project data ---- */
const projects = [
  {t:"Brewing",n:"Yeast & Strain Bank Buildout",d:"Cryogenic master/working cell bank with documented propagation SOPs so a brewery owns its strains.",c:"Breweries · Distilleries",p:"Build"},
  {t:"Brewing",n:"Contamination Forensics Sprint",d:"Root-cause a recurring sour or wild-yeast outbreak with plating, PCR, and process-flow mapping.",c:"Producer in crisis",p:"Sprint"},
  {t:"Brewing",n:"Fermentation-Monitoring AI Assistant",d:"Tool that ingests gravity, temp & pH logs, flags abnormal ferments live, and recommends fixes in plain language.",c:"Tech-forward producer",p:"Build"},
  {t:"Brewing",n:"Fractional Quality Director",d:"Outsourced head of quality for shops too small to hire one — visits, data review, troubleshooting hotline.",c:"Small/mid producer",p:"Retainer"},
  {t:"AI",n:"AI Front-Desk Phone Agent",d:"Voice agent answers every call, books appointments and FAQs 24/7 — recovers 15–30% of missed-call revenue.",c:"Local service businesses",p:"Build"},
  {t:"AI",n:"RAG Knowledge Base Copilot",d:"Private chatbot trained on your SOPs and manuals so staff get instant, sourced answers.",c:"Multi-location ops",p:"Build"},
  {t:"AI",n:"Six Sigma AI Process Audit",d:"Map workflows, quantify waste, and deliver a prioritized automation roadmap with ROI estimates.",c:"Any SMB exploring AI",p:"Sprint"},
  {t:"AI",n:"Invoice & Receipt Pipeline",d:"Document-extraction agent reads invoices, validates line items, and pushes clean data into QuickBooks/Xero.",c:"Accounting, restaurants",p:"Build"},
  {t:"Web",n:"Restaurant Online Ordering System",d:"Direct ordering and curbside flow that bypasses third-party fees, integrated with the kitchen POS.",c:"Restaurants & cafes",p:"Build"},
  {t:"Web",n:"Production Batch-Tracking Dashboard",d:"Custom dashboard tracking batches, yields and quality through production — built by someone who's run it.",c:"Breweries · Makers",p:"Build"},
  {t:"Web",n:"Bespoke Shopify Build & Launch",d:"Conversion-focused store from scratch — theme, payments, shipping, launch QA and handoff training.",c:"DTC & craft brands",p:"Build"},
  {t:"Web",n:"Vacation Rental Direct-Booking Site",d:"Availability calendar, instant quotes and Stripe payments so owners escape platform commissions.",c:"Short-term rentals",p:"Build"},
  {t:"Hospitality",n:"Wild Ferment Cocktail Program",d:"Rotating seasonal menu built on house-made ferments, with batching specs and bartender training.",c:"Bars · Tasting rooms",p:"Build"},
  {t:"Hospitality",n:"AI Concierge Chatbot",d:"Web/SMS bot answers guest questions, recommends local food & drink, and upsells tours 24/7.",c:"Hotels · B&Bs",p:"Build"},
  {t:"Hospitality",n:"In-House Kombucha & Shrub Build-Out",d:"Compliant small-batch production corner: equipment, cultures, logs and pH/food-safety controls.",c:"Cafes · Restaurants",p:"Build"},
  {t:"Labs",n:"QC Microbiology Program Buildout",d:"From-scratch microbial QC program — panels, sampling plans, acceptance criteria, and the SOPs to run it.",c:"Contract manufacturers",p:"Build"},
  {t:"Labs",n:"NGS / Amplicon Bioinformatics Pipeline",d:"Reproducible, containerized pipeline for 16S, ITS or whole-genome microbial data with reporting.",c:"Mycology · Biotech labs",p:"Build"},
  {t:"Labs",n:"Cannabis/Hemp Testing SOP Validation",d:"Validate microbial methods to state rules and produce the audit-ready validation dossier.",c:"Cannabis testing labs",p:"Build"},
  {t:"Nonprofit",n:"Grant-Finder Agent",d:"AI agent scans federal, state and foundation databases nightly and emails a ranked, deadline-sorted shortlist.",c:"Nonprofits · Arts orgs",p:"Build"},
  {t:"Nonprofit",n:"iGEM-Style Youth STEM Program",d:"Turnkey synthetic-biology curriculum and mentorship modeled on real competition experience.",c:"Schools · Museums",p:"Build"},
  {t:"Nonprofit",n:"Fermentation Science Workshops",d:"Hands-on classes translating brewing microbiology for adult learners — backed by ASBC/White Labs cred.",c:"Maker spaces · Libraries",p:"Sprint"},
  {t:"National",n:"Yeast Management Masterclass",d:"Self-paced online course: pitch rates, propagation, harvesting, viability testing, with certification.",c:"Brewery staff (anywhere)",p:"Course"},
  {t:"National",n:"FermBot AI Troubleshooter",d:"Chatbot trained on fermentation science that diagnoses stuck ferments and off-flavors. Freemium + white-label.",c:"Brewers · Vendors",p:"Product"},
  {t:"National",n:"Bioinformatics-as-a-Product",d:"Send-in service: submit sequencing data, receive standardized strain ID and contamination report in 48h.",c:"Labs · Food producers",p:"Product"},
  {t:"Retail",n:"AI Product Description Engine",d:"Workflow that auto-generates on-brand, SEO-optimized descriptions at scale from a spec sheet.",c:"Large-catalog brands",p:"Build"},
  {t:"Retail",n:"Demand Forecasting & Inventory Model",d:"Predict SKU-level demand, flag reorder points, and prevent stockouts and overstock.",c:"Product brands",p:"Build"},
  {t:"Agriculture",n:"Mushroom Lab Buildout",d:"Turnkey cultivation lab — flow hood, agar workflow, grain spawn SOPs and contamination control.",c:"Mushroom farms",p:"Build"},
  {t:"Agriculture",n:"AI Yield & Crop Tracker",d:"Agentic tool that logs plantings, predicts harvest windows, and flags yield anomalies from a farm's own data.",c:"Diversified farms",p:"Build"},
  {t:"Agriculture",n:"Spent-Mash & Byproduct Upcycling",d:"Audit a waste stream and design an upcycling route — feed, compost, mushroom substrate or new product.",c:"Distilleries · Dairies",p:"Sprint"},
];
const cats = ["All","Brewing","AI","Web","Hospitality","Labs","Nonprofit","National","Retail","Agriculture"];
let active="All", shown=9;
const grid=document.getElementById('grid'), filtersEl=document.getElementById('filters');
cats.forEach(c=>{const b=document.createElement('button');b.className='filt'+(c==='All'?' active':'');b.textContent=c;b.setAttribute('aria-pressed',c==='All');b.onclick=()=>{active=c;shown=9;document.querySelectorAll('.filt').forEach(x=>{x.classList.remove('active');x.setAttribute('aria-pressed','false');});b.classList.add('active');b.setAttribute('aria-pressed','true');render();};filtersEl.appendChild(b);});
function render(){
  const list = active==='All'?projects:projects.filter(p=>p.t===active);
  grid.innerHTML='';
  list.slice(0,shown).forEach((p,i)=>{
    const el=document.createElement('div');el.className='card';
    el.innerHTML=`<div class="idx">${String(i+1).padStart(3,'0')} /</div><div class="tag">${p.t}</div><h3>${p.n}</h3><p>${p.d}</p><div class="meta"><span class="client">${p.c}</span><span class="price">${p.p}</span></div>`;
    grid.appendChild(el);
  });
  document.getElementById('moreBtn').style.display = shown>=list.length?'none':'inline-flex';
}
document.getElementById('moreBtn').onclick=()=>{shown+=9;render();};
render();

/* ---- reduced motion ---- */
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---- scroll reveal ---- */
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));

/* ---- header + scroll progress + nav active ---- */
const hdr=document.getElementById('hdr'), prog=document.getElementById('prog');
const secs=[...document.querySelectorAll('section[id]')];
const navmap={}; document.querySelectorAll('.navlinks a').forEach(a=>navmap[a.getAttribute('href').slice(1)]=a);
let ticking=false;
addEventListener('scroll',()=>{ if(ticking)return; ticking=true; requestAnimationFrame(()=>{
  hdr.classList.toggle('scrolled',scrollY>30);
  const h=document.documentElement;
  prog.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';
  let cur=''; for(const s of secs){ if(scrollY>=s.offsetTop-120) cur=s.id; }
  Object.values(navmap).forEach(a=>a.classList.remove('cur'));
  if(navmap[cur]) navmap[cur].classList.add('cur');
  ticking=false;
}); },{passive:true});

/* ---- mobile drawer ---- */
const drawer=document.getElementById('drawer'), mbtn=document.getElementById('menubtn'), dclose=document.getElementById('dclose');
drawer.setAttribute('inert','');
function setDrawer(o){drawer.classList.toggle('open',o);mbtn.setAttribute('aria-expanded',o);drawer.setAttribute('aria-hidden',!o);drawer.toggleAttribute('inert',!o);document.body.style.overflow=o?'hidden':'';(o?dclose:mbtn).focus();}
mbtn.onclick=()=>setDrawer(true);
dclose.onclick=()=>setDrawer(false);
drawer.querySelectorAll('a').forEach(a=>a.onclick=()=>setDrawer(false));
addEventListener('keydown',e=>{if(e.key==='Escape'&&drawer.classList.contains('open'))setDrawer(false);});

/* ---- stats: show final values immediately (no count-up animation) ---- */
document.querySelectorAll('#stats .n[data-to]').forEach(n=>{ n.textContent=n.dataset.to; });

/* ---- card cursor spotlight ---- */
if(!RM && matchMedia('(pointer:fine)').matches){
  document.addEventListener('pointermove',e=>{
    const c=e.target.closest('.pillar'); if(!c)return;
    const r=c.getBoundingClientRect();
    c.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');
    c.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%');
  },{passive:true});
}

/* ---- terminal typewriter ---- */
(function(){
  const el=document.getElementById('termbody'); if(!el)return;
  const lines=[
    {c:'p',  t:'guy@asheville:~$ agent run qc-monitor'},
    {c:'ok', t:'✓ ingesting fermentation logs — gravity · pH · temp'},
    {c:'warn',t:'⚠ batch #214 — early attenuation stall detected'},
    {c:'ok', t:'✓ drafted corrective SOP + pitch-rate fix'},
    {c:'ai', t:'↳ notified brewer · updated dashboard'},
    {c:'ok', t:'✓ done in 4.2s — 1 issue resolved'},
    {c:'p',  t:'guy@asheville:~$ _'}
  ];
  if(RM){ el.innerHTML=lines.map(l=>`<span class="ln ${l.c}">${l.t}</span>`).join(''); return; }
  let li=0;
  function typeLine(){
    if(li>=lines.length){ setTimeout(()=>{el.innerHTML='';li=0;typeLine();},4200); return; }
    const l=lines[li], span=document.createElement('span'); span.className='ln '+l.c; el.appendChild(span);
    let ci=0;
    (function ch(){
      span.textContent=l.t.slice(0,ci++);
      if(ci<=l.t.length){ setTimeout(ch, 16+Math.random()*26); }
      else { li++; setTimeout(typeLine, 360); }
    })();
  }
  typeLine();
})();

/* ---- border beam on terminal (30fps, skip touch) ---- */
if(!RM && innerWidth>680 && !matchMedia('(pointer:coarse)').matches){
  let beam=0,braf=null,bvis=true,blast=0; const term=document.querySelector('.term');
  function spin(now){ braf=requestAnimationFrame(spin); if(now-blast<33)return; blast=now; beam=(beam+1.2)%360; term&&term.style.setProperty('--beam',beam+'deg'); }
  function bStart(){ if(!braf&&bvis) braf=requestAnimationFrame(spin); }
  function bStop(){ if(braf){cancelAnimationFrame(braf);braf=null;} }
  if(term) new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting?bStart():bStop()),{threshold:0}).observe(term);
  document.addEventListener('visibilitychange',()=>{bvis=!document.hidden; bvis?bStart():bStop();});
}


/* yeast -> network canvas animation lives in the shared /yeast-bg.js (loaded via <script src> before app.js) — identical background on every page */
