(function(){
  /* ====== CONFETE ====== */
  function confetti(){
    if(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var c=document.createElement('canvas'); c.className='confetti'; document.body.appendChild(c);
    var x=c.getContext('2d'), dpr=Math.max(1,window.devicePixelRatio||1), W=innerWidth, H=innerHeight;
    c.width=W*dpr; c.height=H*dpr; x.scale(dpr,dpr);
    var COLORS=['#D62828','#FFC933','#1C9E48','#2E7DD7','#FF7AB6','#FF8A00'], P=[];
    for(var i=0;i<160;i++){
      var fromLeft=i%2===0;
      P.push({x:fromLeft?-10:W+10, y:H*0.55+Math.random()*H*0.2,
        vx:(fromLeft?1:-1)*(4+Math.random()*7), vy:-(9+Math.random()*9),
        w:6+Math.random()*6, h:9+Math.random()*8, r:Math.random()*6.28, vr:(Math.random()-.5)*.35,
        c:COLORS[i%COLORS.length], round:Math.random()<.25});
    }
    var t0=performance.now();
    (function frame(t){
      var el=t-t0; x.clearRect(0,0,W,H);
      var alpha=el>2600?Math.max(0,1-(el-2600)/700):1;
      x.globalAlpha=alpha;
      P.forEach(function(p){
        p.vy+=.28; p.vx*=.985; p.vy*=.985; p.x+=p.vx; p.y+=p.vy; p.r+=p.vr;
        x.save(); x.translate(p.x,p.y); x.rotate(p.r); x.fillStyle=p.c;
        if(p.round){x.beginPath();x.arc(0,0,p.w/2,0,6.28);x.fill();}
        else{x.fillRect(-p.w/2,-p.h/2,p.w,p.h*Math.abs(Math.cos(p.r*2)));}
        x.restore();
      });
      if(alpha>0) requestAnimationFrame(frame); else c.remove();
    })(t0);
  }

  var MINUTOS = 10;
  var tkt=document.getElementById('tkt'), canvas=document.getElementById('foil'), box=document.getElementById('scr');
  var btn=document.getElementById('scratchBtn'), msg=document.getElementById('msg');
  var ctx=canvas.getContext('2d'), W=0, H=0, dpr=Math.max(1,window.devicePixelRatio||1);
  var done=false, moves=0, reduce=window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function paintFoil(){
    var r=box.getBoundingClientRect(); W=r.width; H=r.height;
    canvas.width=W*dpr; canvas.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
    var g=ctx.createLinearGradient(0,0,W,H);
    g.addColorStop(0,'#E9EDF2'); g.addColorStop(.4,'#AEB7C2'); g.addColorStop(.52,'#F7F9FB'); g.addColorStop(1,'#8C96A3');
    ctx.globalCompositeOperation='source-over'; ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='rgba(40,55,75,.10)';
    for(var y=-H;y<H*2;y+=18){ctx.save();ctx.translate(0,y);ctx.rotate(-.35);ctx.fillRect(-W,0,W*3,6);ctx.restore();}
    ctx.fillStyle='#2C3A48'; ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.font='800 '+Math.round(H*.2)+'px "Barlow Condensed", Arial, sans-serif';
    ctx.fillText('RASPE AQUI', W/2, H/2-H*.06);
    ctx.font='700 '+Math.round(H*.085)+'px Barlow, Arial, sans-serif';
    ctx.fillText('e veja o seu desconto', W/2, H/2+H*.14);
  }
  function scratchAt(x,y,rad){ ctx.globalCompositeOperation='destination-out'; ctx.beginPath(); ctx.arc(x,y,rad,0,Math.PI*2); ctx.fill(); }
  function cleared(){ var d=ctx.getImageData(0,0,canvas.width,canvas.height).data,n=0,t=0; for(var i=3;i<d.length;i+=64){t++; if(d[i]===0)n++;} return n/t; }
  function goOffers(){ document.getElementById('offers').scrollIntoView({behavior:'smooth',block:'start'}); }

  function reveal(){
    if(done) return; done=true;
    canvas.classList.add('gone'); tkt.classList.add('won');
    btn.classList.remove('nudge'); btn.disabled=false;
    confetti();
    msg.className='status win'; msg.textContent='Você ganhou 70% OFF!';
    btn.textContent='Ver meu desconto ↓';
    document.getElementById('locked').classList.add('on');
    startTimer();
    setTimeout(goOffers, 1800);
  }

  var down=false;
  function pos(e){var r=canvas.getBoundingClientRect();return [e.clientX-r.left,e.clientY-r.top];}
  canvas.addEventListener('pointerdown',function(e){ if(done)return; down=true; canvas.setPointerCapture(e.pointerId); var p=pos(e); scratchAt(p[0],p[1],26); });
  canvas.addEventListener('pointermove',function(e){ if(!down||done)return; var p=pos(e); scratchAt(p[0],p[1],26); if(++moves%12===0 && cleared()>.45) reveal(); });
  canvas.addEventListener('pointerup',function(){ down=false; if(!done && cleared()>.45) reveal(); });

  btn.addEventListener('click',function(){
    if(done){ goOffers(); return; }
    if(reduce){ reveal(); return; }
    btn.disabled=true; btn.textContent='Raspando...';
    setTimeout(reveal, 1800);   /* garante que termina mesmo se a animação travar */
    var rows=5, steps=rows*14, i=0;
    (function tick(){
      for(var k=0;k<2 && i<steps;k++,i++){
        var row=Math.floor(i/14), t=(i%14)/13, dir=row%2?1-t:t;
        scratchAt(W*.06+dir*W*.88, H*(row+.5)/rows, H*.17);
      }
      if(i<steps) requestAnimationFrame(tick); else reveal();
    })();
  });

  /* timer persistente — não reinicia se a pessoa recarregar */
  function startTimer(){
    var KEY='gift_deadline', end;
    try{ end=parseInt(localStorage.getItem(KEY),10)||0; }catch(e){ end=0; }
    if(!end || end<Date.now()){ end=Date.now()+MINUTOS*60*1000; try{ localStorage.setItem(KEY,String(end)); }catch(e){} }
    var el=document.getElementById('clock');
    (function tick(){
      var left=Math.max(0,end-Date.now()), m=Math.floor(left/60000), s=Math.floor(left%60000/1000);
      el.textContent=(m<10?'0':'')+m+':'+(s<10?'0':'')+s;
      if(left>0) setTimeout(tick,1000);
    })();
  }

  paintFoil();
  document.getElementById('tktNo').textContent='Nº '+String(Math.floor(100000+Math.random()*899999));
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(function(){ if(!done && moves===0) paintFoil(); });
  window.addEventListener('resize',function(){ if(!done && moves===0) paintFoil(); });

  Array.prototype.forEach.call(document.querySelectorAll('[data-op]'),function(b){
    b.addEventListener('click',function(){
      /* window.location.href = '{{URL_ONE_CLICK_' + b.dataset.op + '}}'; */
      alert('Protótipo: one-click do kit de '+b.dataset.op+' frascos.');
    });
  });
  document.getElementById('decline').addEventListener('click',function(e){
    e.preventDefault(); alert('Protótipo: vai para o downsell.');
  });
})();
