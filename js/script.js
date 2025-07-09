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
