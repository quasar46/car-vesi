import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import Aos from 'aos';

document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const headerContent = document.querySelector('.header__content');
    const body = document.querySelector('body');
    burger.addEventListener('click', function () {
        this.classList.toggle('active');
        headerContent.classList.toggle('active');
        body.classList.toggle('hidden');
    });

    function showPopup1() {
        const btns = document.querySelectorAll('.showPopup');
        const popup = document.querySelector('.popup1');
        const wrapper = document.querySelector('.wrapper');
        btns.forEach(btn => {
            btn.addEventListener('click', function () {
                popup.classList.add('show');
                wrapper.classList.add('blur');
                disablePageScroll();
            });
        });
    }
    showPopup1();

    function showPopup2() {
        const btns = document.querySelectorAll('.showPopup2');
        const popup = document.querySelector('.popup2');
        const wrapper = document.querySelector('.wrapper');
        btns.forEach(btn => {
            btn.addEventListener('click', function () {
                popup.classList.add('show');
                wrapper.classList.add('blur');
                disablePageScroll();
            });
        });
    }
    showPopup2();

    function showPopup3() {
        const btns = document.querySelectorAll('.showPopup3');
        const popup = document.querySelector('.popup3');
        const wrapper = document.querySelector('.wrapper');
        btns.forEach(btn => {
            btn.addEventListener('click', function () {
                popup.classList.add('show');
                wrapper.classList.add('blur');
                disablePageScroll();
            });
        });
    }
    showPopup3();

    function closePopup() {
        const btns = document.querySelectorAll('.popup__close');
        const popup = document.querySelector('.popup');
        const wrapper = document.querySelector('.wrapper');
        btns.forEach(btn => {
            btn.addEventListener('click', function () {
                btn.closest('.popup').classList.remove('show');
                wrapper.classList.remove('blur');
                enablePageScroll();
            });
        });
    }
    closePopup();

    if (window.innerWidth < 768) {
        const swiper2 = new Swiper('.steps-slider', {
            modules: [Autoplay],
            direction: 'horizontal',
            slidesPerView: "auto",
            spaceBetween: 0,
            spaceBetween: 16,
            autoplay: {
                delay: 3000,
            }
        });
    }

    const swiper3 = new Swiper('.locations-slider', {
        modules: [Navigation],
        navigation: {
            nextEl: '.locations__wrap .swiper-button-next',
            prevEl: '.locations__wrap .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            0: {
                slidesPerView: "auto",
            }
        }
    });

    if (window.innerWidth < 768) {
        const swiper4 = new Swiper('.option-slider', {
            modules: [Pagination],
            slidesPerView: 4,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            breakpoints: {
                768: {
                    slidesPerView: 4,
                },
                0: {
                    spaceBetween: 4,
                    slidesPerView: "auto",
                }
            }
        });
    }

    const swiper5 = new Swiper('.products__slider', {
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 24,
        navigation: {
            nextEl: '.products__head .swiper-button-next',
            prevEl: '.products__head .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            0: {
                slidesPerView: "auto",
                spaceBetween: 24,
            }
        }
    });

    if (innerWidth < 768) {
        const swiper6 = new Swiper('.about__slider', {
            slidesPerView: "auto",
            spaceBetween: 16,
        });
    }



    function moveEl() {
        const el = document.querySelector('.footer__bottom-right-aside .btn--black');
        const newWrap = document.querySelector('.footer__block');
        newWrap.append(el);
    }
    if (window.innerWidth < 768) {
        moveEl();
    }

    function quiz() {
        let count = 0;
        const wrap = document.querySelector('.quiz__wrap');
        const items = wrap.querySelectorAll('.quiz__item');
        const total = wrap.querySelector('.quiz__total');
        const finishPic = wrap.querySelector('.quiz__finish-pic img');
        items.forEach((item, index) => {
            const form = item.querySelector('.quiz-v');
            // активируем кнопку Далее если выбран один из вариантов
            if (item.querySelectorAll('input').length > 0) {
                const formInputs = item.querySelectorAll('input');
                formInputs.forEach(input => {
                    input.addEventListener('change', function (e) {
                        if (e.currentTarget.checked) {
                            item.querySelector('.btn.next').removeAttribute('disabled');
                        } else {
                        }
                    });
                });
            }
            // выключаем кнопка Далее на всех шагах
            if (index > 0) {
                item.classList.add('hidden');
            }
            // делаем шаг назад по клику на кнопку Далее
            // и отнимаем от счетчика прайс
            if (item.querySelector('.prev')) {
                const btnPrev = item.querySelector('.prev');
                btnPrev.addEventListener('click', function () {
                    // если мы в одном из блоков где выбираем длину
                    if (!(wrap.querySelector('#quiz__100').classList.contains('hidden')) || !(wrap.querySelector('#quiz__80').classList.contains('hidden')) || !(wrap.querySelector('#quiz__60').classList.contains('hidden')) || !(wrap.querySelector('#quiz__40').classList.contains('hidden'))) {
                        wrap.querySelector('.quiz__item--first ').classList.remove('hidden');
                        item.classList.add('hidden');
                        // let prevCount = wrap.querySelector('.quiz__item--first').querySelector('input:checked').value
                        // count = count - +(prevCount)
                        // total.innerHTML = count
                    } else {
                        item.classList.add('hidden');
                        item.previousElementSibling.classList.remove('hidden');
                        // let prevCount = item.previousElementSibling.querySelector('input:checked').value
                        // count = count - +(prevCount)
                        // total.innerHTML = count
                    }
                });
            }

            // шаг вперед по клику
            if (item.querySelector('.next')) {
                const btnNext = item.querySelector('.next');
                btnNext.addEventListener('click', function () {
                    // if ((wrap.querySelector('#quiz__100').classList.contains('hidden') !== null) || (wrap.querySelector('#quiz__80').classList.contains('hidden') !== null) || (wrap.querySelector('#quiz__60').classList.contains('hidden') !== null) || (wrap.querySelector('#quiz__40').classList.contains('hidden') !== null)) {
                    // 	console.log('1')
                    // 	item.classList.add('hidden')
                    // 	wrap.querySelector('#quiz__next').classList.remove('hidden')
                    // } else {
                    // 	console.log('2')
                    // 	item.classList.add('hidden')
                    // 	// item.nextElementSibling.classList.remove('hidden')
                    // }
                    if (this.closest('.quiz__tons')) {
                        item.classList.add('hidden');
                        wrap.querySelector('.quiz__next').classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                        item.querySelectorAll('input').forEach(input => {
                            if (input.checked == true) {
                                if (input.classList.contains('t100')) {
                                    wrap.querySelector('#quiz__100').classList.remove('hidden');
                                }
                                if (input.classList.contains('t80')) {
                                    wrap.querySelector('#quiz__80').classList.remove('hidden');
                                }
                                if (input.classList.contains('t60')) {
                                    wrap.querySelector('#quiz__60').classList.remove('hidden');
                                }
                                if (input.classList.contains('t40')) {
                                    wrap.querySelector('#quiz__40').classList.remove('hidden');
                                }
                            }
                        });
                        item.nextElementSibling.classList.remove('hidden');
                    }



                    // if (item.querySelector('.quiz-v')) {
                    // 	const form = item.querySelector('.quiz-v')
                    // 	const formInputs = form.querySelectorAll('input')
                    // 	formInputs.forEach(input => {
                    // 		if (input.checked) {
                    // 			// count = count + +(input.value)
                    // 			// total.innerHTML = count
                    // 		}
                    // 	})
                    // }
                    // меняем картинку на последнем шаге на картинку из первого выбранного
                    if (index === 0) {
                        item.querySelectorAll('.quiz-v input').forEach(input => {
                            if (input.checked) {
                                const currentPicUrl = input.nextElementSibling.querySelector('img').getAttribute('src');
                                finishPic.setAttribute('src', currentPicUrl);
                            }
                        });
                    }
                });
            }
        });




    }
    if (document.querySelectorAll('.quiz').length > 0) {
        quiz();
    }

    // if (document.querySelector('.tab-container')) {
    // 	var container = document.querySelector('.tab-container')
    // 	tabs(container);
    // }
    require("fslightbox");

    function showMore() {
        if (document.querySelectorAll('.section-block').length > 0) {
            const btns = document.querySelectorAll('.showMore');
            btns.forEach(btn => {
                btn.addEventListener('click', function () {
                    this.closest('.section-block').style.height = "auto";
                    this.remove();
                });
            });
        }
    }
    showMore();

    function hideTeam() {
        const els = document.querySelectorAll('.team__wrap .team__item');
        const btn = document.querySelector('.team__btn');
        if (window.innerWidth < 768) {
            els.forEach((el, index) => {
                if (index > 3) {
                    el.classList.add('hidden');
                }
            });
            btn.addEventListener('click', function () {
                els.forEach((el) => {
                    el.classList.remove('hidden');
                });
                this.remove();
            });
        }
    }
    if (document.querySelectorAll('.team__item').length > 0) {
        hideTeam();
    }

    function validatePopup() {
        const wraps = document.querySelectorAll('.form');
        wraps.forEach(wrap => {
            const phone = wrap.querySelector('.tel');
            const btn = wrap.querySelector('.form__submit');



            phone.addEventListener('input', () => {
                validate();
                console.log('2');
            });

            const validate = () => {
                if (phone.value.length > 16) {
                    btn.classList.add('valid');
                } else {
                    btn.classList.remove('valid');
                }
            };

            // wrap.addEventListener('submit', function (e) {
            // 	e.preventDefault()
            // 	window.location.href = 'calc.html';
            // })
        });
    }
    validatePopup();

    function changeOptions() {
        const wrap = document.querySelector('.card__options-block');
        const items = wrap.querySelectorAll('.card__options-item input');
        const countOptions = document.querySelector('#countOptions');
        const descr = document.querySelector('.card__descr');
        const name = document.querySelector('.card__descr-name');
        const text = document.querySelector('.card__descr-text');
        items.forEach(item => {
            let count = 0;
            item.addEventListener('change', function () {
                count = wrap.querySelectorAll('.card__options-item input:checked').length;
                if (item.checked) {
                    name.innerHTML = `${item.nextElementSibling.getAttribute('data-name')}`;
                    text.innerHTML = `${item.nextElementSibling.getAttribute('data-descr')}`;
                }
                if (count == 0) {
                    descr.classList.add('hidden');
                } else {
                    descr.classList.remove('hidden');
                }
                countOptions.innerHTML = count;

            });
        });
    }
    if (window.innerWidth > 767 && document.querySelectorAll('.card__options').length > 0) {
        changeOptions();
    }

    Aos.init();

});
