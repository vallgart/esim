document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const isActive = item.classList.contains('active');

    // Закрываем все
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

    // Если он был закрыт — открываем, иначе оставляем закрытым
    if (!isActive) {
      item.classList.add('active');
    }
  });
});



  document.addEventListener('DOMContentLoaded', () => {
    // Для каждого блока с табами
    document.querySelectorAll('.tablist').forEach(tablist => {
      const tabs = tablist.querySelectorAll('.tablist-item');
      
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          // Снимаем активный класс только в рамках этого tablist
          tabs.forEach(t => t.classList.remove('tablist-item--active'));
          // Добавляем активный класс к кликнутому табу
          tab.classList.add('tablist-item--active');
        });
      });
    });
  });



    document.addEventListener('DOMContentLoaded', () => {
    // для каждой группы табов-контента
    document.querySelectorAll('.tabs-container').forEach(container => {
      const tabs     = container.querySelectorAll('.tablist-item');
      const panels   = container.querySelectorAll('.tab-content');

      tabs.forEach((tab, idx) => {
        tab.addEventListener('click', () => {
          // 1) отключаем все табы и панели
          tabs.forEach(t => t.classList.remove('tablist-item--active'));
          panels.forEach(p => p.classList.remove('active'));

          // 2) активируем кликнутый таб и соответствующую панель
          tab.classList.add('tablist-item--active');
          panels[idx].classList.add('active');
        });
      });
    });
  });




const popupOverlay  = document.getElementById('esim-popup-overlay');
const popup         = document.getElementById('esim-popup');
const popupClose    = document.getElementById('esim-popup-close');
const openPopupBtns = document.querySelectorAll('.btn-esim');
const checkbox1     = document.getElementById('checkbox1');
const checkbox2     = document.getElementById('checkbox2');
const btn           = document.getElementById('esim-popup-btn');


document.addEventListener('DOMContentLoaded', () => {
  // здесь все const … = document.getElementById…
  if (popupOverlay && popup && popupClose) {
    // …привязка событий и initial close…
    closeEsimPopup();
  }
  // …остальные обработчики…
});






// Попап
document.addEventListener('DOMContentLoaded', () => {
  // Элементы поп-апа
  const overlay    = document.getElementById('esim-popup-overlay');
  const popup      = document.getElementById('esim-popup');
  const closeBtn   = document.getElementById('esim-popup-close');
  const openBtns   = document.querySelectorAll('.btn-esim');
  const checkbox1  = document.getElementById('checkbox1');
  const checkbox2  = document.getElementById('checkbox2');
  const submitBtn  = document.getElementById('esim-popup-btn');

  if (!overlay || !popup || !closeBtn || !submitBtn) {
    console.warn('Esim popup: необходимые элементы не найдены.');
    return;
  }

  // Открыть поп-ап
  function openPopup() {
    overlay.style.display = 'flex';
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
    popup.setAttribute('aria-hidden', 'false');
  }

  // Закрыть поп-ап
  function closePopup() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
    document.body.style.overflow = '';
    popup.setAttribute('aria-hidden', 'true');
  }

  // Обновить состояние кнопки отправки в зависимости от чекбоксов
  function updateSubmitState() {
    const canSubmit = checkbox1.checked && checkbox2.checked;
    if (submitBtn.tagName === 'BUTTON') {
      submitBtn.disabled = !canSubmit;
    } else {
      submitBtn.classList.toggle('disabled', !canSubmit);
      submitBtn.setAttribute('aria-disabled', String(!canSubmit));
      submitBtn.tabIndex = canSubmit ? 0 : -1;
    }
  }

  // === Привязка событий ===

  // Закрыть по клику на крестик
  closeBtn.addEventListener('click', closePopup);

  // Закрыть по клику на оверлей вне окна
  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      closePopup();
    }
  });

  // Закрыть по нажатию Esc
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.style.display === 'flex') {
      closePopup();
    }
  });

  // Открыть поп-ап при клике на любую кнопку подключения
  openBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openPopup();
    });
  });

  // слушатели изменения чекбоксов
  if (checkbox1 && checkbox2) {
    checkbox1.addEventListener('change', updateSubmitState);
    checkbox2.addEventListener('change', updateSubmitState);
  }

  // Инициализация: скрыть поп-ап и выставить состояние кнопки
  closePopup();
  updateSubmitState();
});
