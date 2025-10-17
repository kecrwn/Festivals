// Toast
const toast = document.getElementById('toast');
function showToast(msg, t=2000){
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(()=> toast.classList.remove('show'), t);
}

// Wish buttons
document.querySelectorAll('.eventBtn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    showToast(`Happy ${btn.dataset.name} Adelia and Krish!`);
  });
});

// Quick fill buttons
document.querySelectorAll('[data-date-for]').forEach(b=>{
  b.addEventListener('click', ()=>{
    document.getElementById('recordEvent').value = b.dataset.dateFor;
    showToast('Ready to add note for '+b.dataset.dateFor);
  });
});
document.querySelectorAll('[data-record-for]').forEach(b=>{
  b.addEventListener('click', ()=>{
    document.getElementById('recordEvent').value = b.dataset.recordFor;
    document.getElementById('recordText').focus();
    showToast('Add memory for '+b.dataset.recordFor);
  });
});

// Records (localStorage)
const KEY='diwali_records_v1';
const list=document.getElementById('notesList');
function getNotes(){return JSON.parse(localStorage.getItem(KEY)||'[]');}
function saveNotes(n){localStorage.setItem(KEY,JSON.stringify(n));}
function renderNotes(){
  list.innerHTML='';
  const notes=getNotes();
  if(!notes.length){list.innerHTML='<div class="small">No records yet.</div>';return;}
  notes.slice().reverse().forEach(n=>{
    const div=document.createElement('div');
    div.className='note';
    div.innerHTML=`<strong>${n.event}</strong> <span class="small">${n.date}</span><br>${n.text}`;
    list.appendChild(div);
  });
}
renderNotes();

document.getElementById('saveRecord').onclick=()=>{
  const ev=document.getElementById('recordEvent').value.trim()||'General';
  const txt=document.getElementById('recordText').value.trim();
  if(!txt)return showToast('Write something first!');
  const notes=getNotes();
  notes.push({event:ev,text:txt,date:new Date().toLocaleString()});
  saveNotes(notes);renderNotes();
  document.getElementById('recordText').value='';
  showToast('Saved ❤️');
};
document.getElementById('clearRecords').onclick=()=>{
  if(confirm('Clear all notes?')){localStorage.removeItem(KEY);renderNotes();showToast('Cleared');}
};

// Boom effect
document.getElementById('allBoom').onclick=()=>{
  document.querySelectorAll('.card,.thumb img,h1').forEach(el=>{
    el.classList.add('boom');
    setTimeout(()=>el.classList.remove('boom'),900);
  });
  showToast('Happy Diwali! ✨');
};

// Fireworks animation
const canvas=document.getElementById('fireworksCanvas');
const ctx=canvas.getContext('2d');
let W=canvas.width=innerWidth,H=canvas.height=innerHeight;
addEventListener('resize',()=>{W=canvas.width=innerWidth;H=canvas.height=innerHeight;});
const particles=[];
function rand(a,b){return Math.random()*(b-a)+a;}
class Spark{
  constructor(x,y,dx,dy,life,color){this.x=x;this.y=y;this.dx=dx;this.dy=dy;this.life=life;this.age=0;this.color=color;}
  update(dt){this.age+=dt;this.x+=this.dx;this.y+=this.dy;this.dy+=0.05;}
  draw(){ctx.globalAlpha=1-this.age/this.life;ctx.fillStyle=this.color;ctx.beginPath();ctx.arc(this.x,this.y,2,0,2*Math.PI);ctx.fill();}
}
function explode(x,y,color){
  for(let i=0;i<80;i++){
    const ang=Math.random()*2*Math.PI;
    const spd=rand(1,5);
    particles.push(new Spark(x,y,Math.cos(ang)*spd,Math.sin(ang)*spd,rand(30,80),color));
  }
}
function loop(){
  ctx.clearRect(0,0,W,H);
  for(let i=particles.length-1;i>=0;i--){
    const p=particles[i];
    p.update(1);
    p.draw();
    if(p.age>p.life)particles.splice(i,1);
  }
  requestAnimationFrame(loop);
}
loop();

document.getElementById('fireBtn').onclick=()=>{
  const colors=['#ffdb7d','#ff7a7a','#ffd1f0','#7de5ff','#ffb86b'];
  for(let i=0;i<6;i++){
    explode(rand(100,W-100),rand(100,H/2),colors[Math.floor(rand(0,colors.length))]);
  }
  document.querySelectorAll('.thumb img,h1').forEach(el=>{
    el.classList.add('boom');
    setTimeout(()=>el.classList.remove('boom'),900);
  });
  showToast('Sparkles for Adelia ✨');
};