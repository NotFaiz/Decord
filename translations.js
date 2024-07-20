function loadTranslations(lang) {
    return fetch(`translations_${lang}.json`)
        .then(response => response.json())
        .catch(() => fetch('translations_en.json').then(response => response.json()));
}

function applyTranslations(translations) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            if (element.tagName === 'TEXTAREA') {
                element.placeholder = translations[key];
            } else {
                element.textContent = translations[key];
            }
        }
    });
}

function initializePage() {
    const userLang = navigator.language || navigator.userLanguage;
    const lang = userLang.split('-')[0]; // e.g., 'en' from 'en-US'
    
    loadTranslations(lang).then(translations => {
        applyTranslations(translations);
        brython(); // Initialize Brython after translations are applied
    });
}
