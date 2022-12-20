// ============ Functions ============ //

const rotate180deg = (element) => {
    element.className = element.className === 'rotate-180deg' ? 'rotate-180deg-hover' : 'rotate-180deg';
}

const animateHeaderLangArrow = () => {
    let langButton = document.getElementById('lang-btn');
    let langMenu = document.getElementById('lang-menu');
    langButton.addEventListener('click', () => {
        let arrow = document.getElementById('lang-btn-arrow');
        rotate180deg(arrow);
        langMenu.className = langMenu.className === 'lang-menu-hidden' ? 'lang-menu' : 'lang-menu-hidden';
    });
    
}

// ============ Main ============ //

animateHeaderLangArrow();