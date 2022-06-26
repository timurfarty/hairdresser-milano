// Меню
const iconMenu = document.querySelector('.header_burger');
const menuBody = document.querySelector('.navigator');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
// Навигация
const menuLinks = document.querySelectorAll('.navigator-all-button[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}
// КАРТА
function init() {
    let map = new ymaps.Map('map-test', {
        center: [54.90378285613639,52.314231087901945],
        zoom: 17
    });
    let placemark = new ymaps.Placemark([54.90378285613639,52.314231087901945], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'https://cdn-icons-png.flaticon.com/512/7649/7649689.png',
        iconImageSize: [37, 39],
        iconImageOffset: [-10, -30]
    });
    map.geoObjects.add(placemark);
}

ymaps.ready(init);

// SWIPER
new Swiper('.image-slider',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    grabCursor: true,
});