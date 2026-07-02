(() => {
  const toggle = document.getElementById('langToggle');
  let language = 'ja';
  const applyLanguage = () => {
    document.documentElement.lang = language;
    document.querySelectorAll('[data-ja]').forEach((el) => {
      const text = language === 'ja' ? el.dataset.ja : el.dataset.en;
      if (text) el.innerHTML = text;
    });
    toggle.innerHTML = language === 'ja' ? '<strong>JP</strong><span>/</span><b>EN</b>' : '<b>JP</b><span>/</span><strong>EN</strong>';
    toggle.setAttribute('aria-label', language === 'ja' ? 'Switch to English' : '日本語に切り替え');
  };
  toggle.addEventListener('click', () => { language = language === 'ja' ? 'en' : 'ja'; applyLanguage(); });
  applyLanguage();
})();
