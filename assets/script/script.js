// ============ Functions ============ //

const animateHeaderLangArrow = () => {
    let langButton = document.getElementById('lang-btn');
    let langMenu = document.getElementById('lang-menu');
    langButton.addEventListener('click', () => {
        let arrow = document.getElementById('lang-btn-arrow');
        if (arrow.classList.contains('rotate-180deg')) {
            arrow.classList.remove('rotate-180deg');
            arrow.classList.add('rotate-180deg-hover');
        } else {
            arrow.classList.add('rotate-180deg');
            arrow.classList.remove('rotate-180deg-hover');
        }
        langMenu.className = langMenu.className === 'lang-menu-hidden' ? 'lang-menu' : 'lang-menu-hidden';
    });   
}

const manageHeaderMenu = () => {
    let menuIcon = document.getElementById('header-menu-icon');
    let header = document.getElementById('header');
    let headerContent = document.getElementById('header-content');
    let headerLogo = document.getElementById('header-logo');
    let headerMenuImg = document.getElementById('header-menu-img');
    let headerNav = document.getElementById('header-nav');
    let headerButtons = document.getElementById('header-buttons');
    let headerBtnSub = document.getElementById('header-btn-subscribe');
    menuIcon.addEventListener('click', () => {
        if (header.classList.contains('flow-p')) {
            header.classList.remove('flow-p');
            header.classList.add('header-active');
        } else {
            header.classList.add('flow-p');
            header.classList.remove('header-active');
        }
        headerContent.className = headerContent.className === 'header-content-active' ? 'header-content' : 'header-content-active';
        headerLogo.className = headerLogo.className === 'header-logo-active' ? 'header-logo' : 'header-logo-active';
        headerMenuImg.classList.contains('header-menu-img-active') ? headerMenuImg.classList.remove('header-menu-img-active') : headerMenuImg.classList.add('header-menu-img-active');
        headerNav.className = headerNav.className === 'header-nav-active' ? 'header-nav' : 'header-nav-active';
        headerButtons.className = headerButtons.className === 'header-buttons-active' ? 'header-buttons' : 'header-buttons-active';
        if (headerBtnSub.classList.contains('button-black')) {
            headerBtnSub.classList.remove('button-black');
            headerBtnSub.classList.add('button-white');
        } else {
            headerBtnSub.classList.remove('button-black');
            headerBtnSub.classList.add('button-white');
        }
    });
    window.addEventListener('resize', () => {
        let width = this.innerWidth;
        if (width >= 1024) {
            if (header.classList.contains('header-active')) {
                header.classList.add('flow-p');
                header.classList.remove('header-active');
            }
            if (headerContent.className === 'header-content-active') { headerContent.className = 'header-content'; }
            if (headerLogo.className === 'header-logo-active') { headerLogo.className = 'header-logo'; }
            if (headerMenuImg.classList.contains('header-menu-img-active')) {
                headerMenuImg.classList.remove('header-menu-img-active');
            }
            if (headerNav.className === 'header-nav-active') { headerNav.className ='header-nav'; }
            if (headerButtons.className === 'header-buttons-active') { headerButtons.className = 'header-buttons'; }
            if (headerBtnSub.classList.contains('button-white')) {
                headerBtnSub.classList.add('button-black');
                headerBtnSub.classList.remove('button-white');
            }
        }
    });
    
}


// ============ Main ============ //

animateHeaderLangArrow();
manageHeaderMenu();

