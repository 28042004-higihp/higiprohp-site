  const card = document.getElementById('baCard');
  const before = document.getElementById('baBefore');
  const handle = document.getElementById('baHandle');
  let dragging = false;

  function setPosition(clientX){
    const rect = card.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(4, Math.min(96, pct));
    before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    handle.style.left = pct + '%';
  }

  handle.addEventListener('mousedown', () => dragging = true);
  window.addEventListener('mouseup', () => dragging = false);
  window.addEventListener('mousemove', (e) => { if(dragging) setPosition(e.clientX); });

  handle.addEventListener('touchstart', () => dragging = true, {passive:true});
  window.addEventListener('touchend', () => dragging = false);
  window.addEventListener('touchmove', (e) => { if(dragging) setPosition(e.touches[0].clientX); }, {passive:true});

  card.addEventListener('click', (e) => setPosition(e.clientX));
