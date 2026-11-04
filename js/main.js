(() => {
  const root = document.documentElement;
  const button = document.querySelector('[data-theme-toggle]');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function setTheme(theme) {
    root.dataset.theme = theme;

    if (button) {
      button.textContent = theme === 'dark' ? '☀ Light' : '☾ Dark';
    }
  }

  // 初期表示はシステム設定に合わせる
  setTheme(prefersDark.matches ? 'dark' : 'light');

  // ボタンで手動切り替え
  if (button) {
    button.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  }

  // システム設定が変更されたら自動追従
  prefersDark.addEventListener('change', (event) => {
    setTheme(event.matches ? 'dark' : 'light');
  });
})();
// Works category filter
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const works = document.querySelectorAll('.work-card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.filter;

            // ボタンの選択状態
            buttons.forEach(btn => {
                btn.classList.toggle('active', btn === button);
            });

            // 作品の表示・非表示
            works.forEach(work => {
                const show =
                    category === 'all' ||
                    work.dataset.category === category;

                work.classList.toggle('hidden', !show);
            });
        });
    });
});