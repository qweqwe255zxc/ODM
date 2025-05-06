//Исчезающий хедер

let lastScroll = 0;
const defOffset = 200
const nav_local = document.querySelector('.nav-local');
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => nav_local.classList.contains('hide');

window.addEventListener('scroll', () => {

    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defOffset) {
        nav_local.classList.add('hide');
        header.classList.add('shrink-header');
    }
    else if (scrollPosition() < lastScroll && containHide()) {
        nav_local.classList.remove('hide');
        header.classList.remove('shrink-header');
    }

    lastScroll = scrollPosition();
});

//Плавный скрол

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

//увеличение картинки при наведении на блок

const prodImgBlocks = document.querySelectorAll('.catalog-products-item');

prodImgBlocks.forEach(prodImgBlock => {
    const prodImg = prodImgBlock.querySelector('.product-image');
    const prodTexts = prodImgBlock.querySelectorAll('.product-text');

    prodImgBlock.addEventListener('mouseover', () => {
        prodImg.style.transition = 'transform 0.5s ease';
        prodImg.style.transform = 'scale(1.06)';
        prodTexts.forEach(el => el.style.color = '#6D7064');
    });

    prodImgBlock.addEventListener('mouseout', () => {
        prodImg.style.transition = 'transform 0.5s ease';
        prodImg.style.transform = 'scale(1.0)';
        prodTexts.forEach(el => el.style.color = '#000');
    });
});

