document.addEventListener('DOMContentLoaded', () => {
  // === COMPONENT: FAQ ===
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item   = q.closest('.faq-item');
      const active = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!active) item.classList.add('active');
    });
  });

  // === COMPONENT: TABS ===
  document.querySelectorAll('.tabs-container').forEach(container => {
    const tabs   = container.querySelectorAll('.tablist-item');
    const panels = container.querySelectorAll('.tab-content');
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('tablist-item--active'));
        panels.forEach(p => p.classList.remove('active'));
        tab.classList.add('tablist-item--active');
        panels[i].classList.add('active');
      });
    });
  });

  // === COMPONENT: POP-UP ===
  const overlay     = document.getElementById('esim-popup-overlay');
  const popup       = document.getElementById('esim-popup');
  const closeBtn    = document.getElementById('esim-popup-close');
  const openBtns    = document.querySelectorAll('.btn-esim');
  const checkboxes  = ['checkbox1','checkbox2'].map(id => document.getElementById(id));
  const submitBtn   = document.getElementById('esim-popup-btn');
  const anchorCloses= document.querySelectorAll('.close-popup-on-anchor');

  if (overlay && popup && closeBtn && submitBtn) {
    const openPopup = () => {
      overlay.style.display        = 'flex';
      popup.style.display          = 'block';
      document.body.style.overflow = 'hidden';
      popup.setAttribute('aria-hidden','false');
    };
    const closePopup = () => {
      overlay.style.display        = 'none';
      popup.style.display          = 'none';
      document.body.style.overflow = '';
      popup.setAttribute('aria-hidden','true');
    };
    const updateSubmit = () => {
      const ok = checkboxes.every(cb => cb?.checked);
      submitBtn.classList.toggle('disabled', !ok);
      submitBtn.disabled = !ok;
      submitBtn.tabIndex = ok ? 0 : -1;
    };

    openBtns.forEach(b => b.addEventListener('click', e => {
      e.preventDefault(); openPopup();
    }));
    closeBtn.addEventListener('click', closePopup);
    overlay.addEventListener('click', e => { if (e.target === overlay) closePopup(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay.style.display === 'flex') closePopup();
    });
    anchorCloses.forEach(a => a.addEventListener('click', closePopup));
    checkboxes.forEach(cb => cb?.addEventListener('change', updateSubmit));

    // Инициализация
    closePopup();
    updateSubmit();
  }
});
