// ============ Functions ============ //

function rotate180deg(element) {
    element.className = element.className === 'rotate-180deg' ? 'rotate-180deg-hover' : 'rotate-180deg';
}

function rotate180degHeaderLangArrow() {
    let button = document.getElementById('header-lang-btn');
    button.addEventListener('click',event => {
        let arrow = document.getElementById('header-lang-arrow');
        rotate180deg(arrow);
    });
}

// ============ Main ============ //

rotate180degHeaderLangArrow();