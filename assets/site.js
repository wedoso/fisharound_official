(() => {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-language-toggle]");
  const savedLanguage = localStorage.getItem("fish-around-language");
  const preferredLanguage = navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";

  function applyLanguage(language) {
    const isChinese = language === "zh";
    root.lang = isChinese ? "zh-Hans" : "en";
    document.querySelectorAll("[data-en][data-zh]").forEach((element) => {
      element.textContent = element.dataset[language];
    });
    if (toggle) {
      toggle.textContent = isChinese ? "EN" : "中文";
      toggle.setAttribute("aria-label", isChinese ? "Switch to English" : "切换到中文");
    }
    localStorage.setItem("fish-around-language", language);
  }

  applyLanguage(savedLanguage || preferredLanguage);

  toggle?.addEventListener("click", () => {
    applyLanguage(root.lang.startsWith("zh") ? "en" : "zh");
  });

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
