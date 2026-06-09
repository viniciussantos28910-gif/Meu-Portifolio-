// CURSOR
const cur = document.getElementById('cur');
const ring = document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{
  mx=e.clientX; my=e.clientY;
  cur.style.left=mx+'px'; cur.style.top=my+'px';
});
(function animRing(){
  rx+=(mx-rx)*0.1; ry+=(my-ry)*0.1;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(animRing);
})();
document.querySelectorAll('a,button,.skill-card,.proj-card,.contact-item,.stat-box').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.transform='translate(-50%,-50%) scale(1.8)';ring.style.width='56px';ring.style.height='56px';ring.style.borderColor='rgba(230,57,70,0.9)'});
  el.addEventListener('mouseleave',()=>{cur.style.transform='translate(-50%,-50%) scale(1)';ring.style.width='36px';ring.style.height='36px';ring.style.borderColor='rgba(230,57,70,0.6)'});
});
 
// NAV SCROLL
const nav = document.getElementById('nav');
window.addEventListener('scroll',()=>{
  nav.classList.toggle('scrolled', window.scrollY > 40);
  // active link
  const secs = ['hero','sobre','habilidades','projetos','jornada','contato'];
  let cur2 = secs[0];
  secs.forEach(id=>{
    const el = document.getElementById(id);
    if(el && window.scrollY >= el.offsetTop - 200) cur2 = id;
  });
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.classList.toggle('active', a.getAttribute('href')==='#'+cur2);
  });
});
 
// HERO CANVAS — partículas vermelhas
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');
let W,H,pts=[];
function resize(){W=canvas.width=canvas.offsetWidth;H=canvas.height=canvas.offsetHeight}
resize(); window.addEventListener('resize',resize);
class Pt{
  constructor(){this.reset()}
  reset(){this.x=Math.random()*W;this.y=Math.random()*H;this.vx=(Math.random()-.5)*.35;this.vy=(Math.random()-.5)*.35;this.r=Math.random()*1.8+.4}
  tick(){this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>W)this.vx*=-1;if(this.y<0||this.y>H)this.vy*=-1}
  draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);ctx.fillStyle='rgba(230,57,70,0.7)';ctx.fill()}
}
for(let i=0;i<55;i++) pts.push(new Pt());
(function loop(){
  ctx.clearRect(0,0,W,H);
  for(let i=0;i<pts.length;i++){
    pts[i].tick(); pts[i].draw();
    for(let j=i+1;j<pts.length;j++){
      const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<130){
        ctx.beginPath();
        ctx.strokeStyle=`rgba(230,57,70,${.12*(1-d/130)})`;
        ctx.lineWidth=.5;
        ctx.moveTo(pts[i].x,pts[i].y);
        ctx.lineTo(pts[j].x,pts[j].y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(loop);
})();
 
// REVEAL
const obs = new IntersectionObserver(es=>{
  es.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      if(e.target.id==='skillsGrid'||e.target.closest('#habilidades')) animSkills();
    }
  });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
 
// SKILL BARS
let skDone=false;
function animSkills(){
  if(skDone)return; skDone=true;
  document.querySelectorAll('.skill-bar-fill').forEach((b,i)=>setTimeout(()=>b.classList.add('on'),i*180));
}
// trigger if already visible on load
setTimeout(()=>{
  document.querySelectorAll('.skill-bar-fill').forEach(b=>{
    const rect=b.closest('section').getBoundingClientRect();
    if(rect.top<window.innerHeight) b.classList.add('on');
  });
},600);
 
// TILT 3D
document.querySelectorAll('.tiltable').forEach(el=>{
  el.addEventListener('mousemove',e=>{
    const r=el.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    el.style.transform=`perspective(500px) rotateX(${-y*10}deg) rotateY(${x*10}deg) translateY(-6px)`;
    el.style.transition='transform .05s';
  });
  el.addEventListener('mouseleave',()=>{
    el.style.transform='';
    el.style.transition='transform .4s ease';
  });
});
 
// FORMULÁRIO
function enviar(){
  const n=document.getElementById('fnome').value.trim();
  const e=document.getElementById('femail').value.trim();
  const m=document.getElementById('fmsg').value.trim();
  const s=document.getElementById('fstatus');
  if(!n||!e||!m){s.textContent='⚠️ Preencha nome, e-mail e mensagem.';s.style.color='#f97316';return}
  s.textContent='✅ Mensagem enviada! Retorno em breve.';
  s.style.color='var(--red)';
  setTimeout(()=>{
    ['fnome','femail','fassunto','fmsg'].forEach(id=>document.getElementById(id).value='');
    s.textContent='';
  },4000);
}
 
// TYPING EFFECT no hero role
const roles=['Estudante de C.C. — 2º Período','Futuro Front-End Developer','Futuro Full-Stack Developer'];
let ri=0,ci=0,del=false,roleEl=document.querySelector('.hero-role');
function type(){
  if(!del){
    roleEl.textContent=roles[ri].slice(0,++ci);
    if(ci===roles[ri].length){del=true;setTimeout(type,2200);return}
  } else {
    roleEl.textContent=roles[ri].slice(0,--ci);
    if(ci===0){del=false;ri=(ri+1)%roles.length}
  }
  setTimeout(type,del?40:75);
}
setTimeout(type,1800);
