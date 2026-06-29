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

/* ---- count-up stats ---- */
if(!RM){
  const sObs=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.n[data-to]').forEach(n=>{
        const to=+n.dataset.to; let t0=null; const dur=1100;
        function tick(ts){t0=t0||ts;const k=Math.min(1,(ts-t0)/dur);n.textContent=Math.round((1-(1-k)**3)*to);if(k<1)requestAnimationFrame(tick);}
        requestAnimationFrame(tick);
      });
      sObs.unobserve(e.target);
    }
  }),{threshold:.6});
  document.querySelectorAll('#stats .stat').forEach(s=>sObs.observe(s));
} else {
  // reduced-motion / no-animation fallback: show real values, never leave them at 0
  document.querySelectorAll('#stats .n[data-to]').forEach(n=>{ n.textContent=n.dataset.to; });
}

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

/* ---- border beam on terminal ---- */
if(!RM && innerWidth>680){
  let beam=0,braf=null,bvis=true; const term=document.querySelector('.term');
  function spin(){ beam=(beam+0.6)%360; term&&term.style.setProperty('--beam',beam+'deg'); braf=requestAnimationFrame(spin); }
  function bStart(){ if(!braf&&bvis) braf=requestAnimationFrame(spin); }
  function bStop(){ if(braf){cancelAnimationFrame(braf);braf=null;} }
  if(term) new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting?bStart():bStop()),{threshold:0}).observe(term);
  document.addEventListener('visibilitychange',()=>{bvis=!document.hidden; bvis?bStart():bStop();});
}

/* ---- yeast -> network canvas: sprite-cached, 30fps, static on low-end (paused when hidden) ---- */
(function(){
  var canvas=document.getElementById('cells'); if(!canvas) return;
  var ctx=canvas.getContext('2d'); if(!ctx) return;
  var mq=function(q){try{return matchMedia(q).matches;}catch(e){return false;}};
  var conn=navigator.connection||{};
  var lowMem=(navigator.deviceMemory||8)<=4, lowCPU=(navigator.hardwareConcurrency||8)<=4;
  var saveData=conn.saveData===true, slowNet=/(^|-)2g$/.test(conn.effectiveType||'');
  var coarse=mq('(pointer: coarse)'), small=mq('(max-width: 820px)'), reduce=mq('(prefers-reduced-motion: reduce)');
  var STATIC = reduce || saveData || slowNet || (coarse && small) || (lowMem && lowCPU);
  var TEAL=[55,214,176],TEALD=[29,141,119],GOLD=[224,164,74],INK=[120,140,165];
  var rgba=function(c,a){return 'rgba('+c[0]+','+c[1]+','+c[2]+','+a+')';};
  var mix=function(a,b,k){return [a[0]+(b[0]-a[0])*k,a[1]+(b[1]-a[1])*k,a[2]+(b[2]-a[2])*k];};
  var W,H,DPR,cells=[],edges=[],pulses=[],drifters=[],t=0,running=true,lastW=-1,raf=0,lastFrame=0;
  var SPR=64, PAD=Math.ceil(SPR*2.4), spriteCache={};
  function makeSprite(tint,live,blurLvl,scars){
    var size=PAD*2, oc=document.createElement('canvas'); oc.width=size*DPR; oc.height=size*DPR;
    var o=oc.getContext('2d'); o.setTransform(DPR,0,0,DPR,0,0); o.translate(PAD,PAD);
    var wall=mix(tint,[255,255,255],0.35), r=SPR;
    var halo=o.createRadialGradient(0,0,r*0.4,0,0,r*2.1); halo.addColorStop(0,rgba(tint,0.16)); halo.addColorStop(1,rgba(tint,0));
    o.fillStyle=halo; o.beginPath(); o.arc(0,0,r*2.1,0,6.2832); o.fill();
    var body=o.createRadialGradient(-r*0.28,-r*0.3,r*0.1,0,0,r);
    body.addColorStop(0,rgba(mix(tint,[255,255,255],0.45),0.34)); body.addColorStop(0.6,rgba(tint,0.20)); body.addColorStop(1,rgba(mix(tint,[7,11,20],0.35),0.12));
    o.fillStyle=body; o.beginPath(); o.arc(0,0,r,0,6.2832); o.fill();
    o.fillStyle=rgba(mix(tint,[7,11,20],0.55),0.22); o.beginPath(); o.arc(-r*0.05,r*0.05,r*0.3,0,6.2832); o.fill();
    o.lineWidth=Math.max(1,r*0.07); o.strokeStyle=rgba(wall,live?0.85:0.6); o.beginPath(); o.arc(0,0,r*0.98,0,6.2832); o.stroke();
    o.strokeStyle=rgba([255,255,255],0.5); o.lineWidth=Math.max(1,r*0.05); o.beginPath(); o.arc(-r*0.22,-r*0.25,r*0.6,Math.PI*1.05,Math.PI*1.6); o.stroke();
    for(var s=0;s<scars;s++){ var a=s*2.1, sx=Math.cos(a)*r*0.9, sy=Math.sin(a)*r*0.9; o.strokeStyle=rgba(wall,0.35); o.lineWidth=Math.max(1,r*0.04); o.beginPath(); o.arc(sx,sy,r*0.16,0,6.2832); o.stroke(); }
    if(blurLvl>0){ var bc=document.createElement('canvas'); bc.width=oc.width; bc.height=oc.height; var b=bc.getContext('2d'); try{b.filter='blur('+blurLvl+'px)';}catch(e){} b.drawImage(oc,0,0); return bc; }
    return oc;
  }
  function getSprite(tint,live,blurLvl,scars){ var key=tint[0]+'_'+(live?1:0)+'_'+blurLvl+'_'+scars; var s=spriteCache[key]; if(s)return s; s=makeSprite(tint,live,blurLvl,scars); spriteCache[key]=s; return s; }
  function blitCell(c,x,y,r,aM,blurLvl){ var s=getSprite(c.tint,c.live,blurLvl||0,c.scars||0); var k=r/SPR; ctx.save(); ctx.globalAlpha=Math.max(0,Math.min(1,aM)); ctx.translate(x,y); ctx.rotate(c.rot+Math.sin(t*0.003+c.ph)*0.05); ctx.scale(c.aspect*k,k); ctx.drawImage(s,-PAD,-PAD,PAD*2,PAD*2); ctx.restore(); }
  function build(){
    var base=Math.min(W,H);
    var count = STATIC ? Math.max(10,Math.min(16,Math.round((W*H)/90000))) : Math.max(22,Math.min(48,Math.round((W*H)/44000)));
    cells=[];
    for(var i=0;i<count;i++){
      var focus=Math.random(), live=Math.random()<0.46, gold=!live&&Math.random()<0.14;
      var r=(base*0.012)*(0.7+focus*1.6)*(0.8+Math.random()*0.7), x=Math.random()*W, y=Math.random()*H;
      cells.push({x:x,y:y,bx:x,by:y,ph:Math.random()*6.2832,amp:5+Math.random()*12,drift:0.004+Math.random()*0.004,r:r,aspect:1.08+Math.random()*0.5,rot:Math.random()*Math.PI,focus:focus,tint:gold?GOLD:live?TEAL:INK,live:live,bud:Math.random(),budT:5+Math.random()*7,budAng:Math.random()*6.2832,scars:(Math.random()*3)|0,released:false});
    }
    cells.sort(function(p,q){return q.focus-p.focus;});
    edges=[]; var maxD=base*0.2;
    for(var i2=0;i2<cells.length;i2++){ if(cells[i2].focus>0.55)continue; var near=[]; for(var j=0;j<cells.length;j++){ if(i2!==j&&cells[j].focus<=0.6){ var d=Math.hypot(cells[i2].bx-cells[j].bx,cells[i2].by-cells[j].by); if(d<maxD)near.push([d,j]); } } near.sort(function(a,b){return a[0]-b[0];}); for(var k2=0;k2<Math.min(2,near.length);k2++){ var jj=near[k2][1],dup=false; for(var e2=0;e2<edges.length;e2++){ if(edges[e2].a===jj&&edges[e2].b===i2){dup=true;break;} } if(!dup)edges.push({a:i2,b:jj,d:near[k2][0]}); } }
    pulses=[]; drifters=[];
  }
  function blurFor(c){ return (!STATIC && c.focus>0.5) ? Math.min(4,Math.round((c.focus-0.5)*7)) : 0; }
  function spawnPulse(){ if(edges.length)pulses.push({e:edges[(Math.random()*edges.length)|0],p:0,sp:0.004+Math.random()*0.005,col:Math.random()<0.85?TEAL:GOLD}); }
  function renderFrame(){
    ctx.clearRect(0,0,W,H); var i,c;
    for(i=0;i<cells.length;i++){ c=cells[i]; c.x=c.bx+Math.cos(t*c.drift+c.ph)*c.amp; c.y=c.by+Math.sin(t*c.drift+c.ph*1.3)*c.amp*0.7; }
    ctx.lineWidth=1.1;
    for(i=0;i<edges.length;i++){ var e=edges[i],a=cells[e.a],b=cells[e.b]; var fade=0.09+0.05*Math.sin(t*0.01+e.d); ctx.strokeStyle=rgba(TEAL,fade); ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); }
    for(i=pulses.length-1;i>=0;i--){ var pu=pulses[i]; pu.p+=pu.sp; if(pu.p>=1){pulses.splice(i,1);continue;} var pa=cells[pu.e.a],pb=cells[pu.e.b],px=pa.x+(pb.x-pa.x)*pu.p,py=pa.y+(pb.y-pa.y)*pu.p; ctx.fillStyle=rgba(pu.col,0.8); ctx.beginPath(); ctx.arc(px,py,1.6,0,6.2832); ctx.fill(); }
    for(i=0;i<cells.length;i++){ c=cells[i]; var aM=1-c.focus*0.45, bl=blurFor(c); blitCell(c,c.x,c.y,c.r,aM,bl);
      if(STATIC) continue;
      c.bud+=(0.032/c.budT); var grow=Math.min(1,c.bud);
      if(c.bud<=1.0&&grow>0.05){ var dr=c.r*(0.32+grow*0.40), dist=c.r*0.85+dr*0.55, dx=c.x+Math.cos(c.budAng)*dist*c.aspect, dy=c.y+Math.sin(c.budAng)*dist; ctx.strokeStyle=rgba(mix(c.tint,[255,255,255],0.35),0.5*aM*(1-grow*0.6)); ctx.lineWidth=Math.max(1.2,dr*0.5*(1-grow*0.5)); ctx.beginPath(); ctx.moveTo(c.x+Math.cos(c.budAng)*c.r*0.8*c.aspect,c.y+Math.sin(c.budAng)*c.r*0.8); ctx.lineTo(dx,dy); ctx.stroke(); blitCell({tint:c.tint,live:c.live,ph:c.ph,rot:c.rot,aspect:1.05,scars:0},dx,dy,dr,aM*0.95,0); }
      else if(c.bud>1.0&&!c.released){ var dr2=c.r*0.72, dist2=c.r*0.85+dr2*0.55, dx2=c.x+Math.cos(c.budAng)*dist2*c.aspect, dy2=c.y+Math.sin(c.budAng)*dist2; if(drifters.length<(small?16:48)) drifters.push({tint:c.tint,live:c.live,scars:0,x:dx2,y:dy2,r:dr2,vx:Math.cos(c.budAng)*0.25+(Math.random()-.5)*0.15,vy:Math.sin(c.budAng)*0.25-0.12-Math.random()*0.1,rot:Math.random()*6.2832,vrot:(Math.random()-.5)*0.012,aspect:1.06+Math.random()*0.3,ph:Math.random()*6.2832,life:0,max:520+Math.random()*360}); c.released=true; c.scars=Math.min(4,(c.scars||0)+1); }
      if(c.bud>1.12){ c.bud=0; c.released=false; c.budAng=Math.random()*6.2832; }
    }
    if(!STATIC){ for(i=drifters.length-1;i>=0;i--){ var d=drifters[i]; d.life+=2; d.x+=d.vx*2; d.y+=d.vy*2; d.vy-=0.0012; d.vx*=0.998; d.rot+=d.vrot*2; d.x+=Math.sin((t+d.ph)*0.02)*0.15; if(d.life>=d.max||d.y<-d.r*3){drifters.splice(i,1);continue;} var fin=Math.min(1,d.life/40), fout=Math.min(1,(d.max-d.life)/120); blitCell(d,d.x,d.y,d.r,Math.min(fin,fout)*0.92,0); } if(t%20<2) spawnPulse(); }
  }
  var FRAME_MS=1000/30;
  function loop(now){ if(!running)return; raf=requestAnimationFrame(loop); if(now-lastFrame<FRAME_MS)return; lastFrame=now; t+=2; renderFrame(); }
  function resize(){ var iw=window.innerWidth, ih=window.innerHeight; if(iw===lastW && canvas.width)return; lastW=iw; DPR=Math.min(window.devicePixelRatio||1, 1); W=iw; H=ih; canvas.width=W*DPR; canvas.height=H*DPR; ctx.setTransform(DPR,0,0,DPR,0,0); spriteCache={}; build(); if(STATIC){ t+=20; renderFrame(); } }
  var rT; window.addEventListener('resize',function(){ clearTimeout(rT); rT=setTimeout(resize,180); });
  document.addEventListener('visibilitychange',function(){ if(document.hidden){ running=false; if(raf)cancelAnimationFrame(raf); } else if(!STATIC&&!running){ running=true; lastFrame=0; raf=requestAnimationFrame(loop); } });
  resize();
  if(!STATIC){ for(var z=0;z<6;z++)spawnPulse(); running=true; raf=requestAnimationFrame(loop); }
})();
