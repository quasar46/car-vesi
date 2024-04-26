import './fonts/fonts.scss';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import Accordion from 'accordion-js';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'accordion-js/dist/accordion.min.css';
import './scss/styles.scss';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
// import tabs from 'tabs';
import fslightbox from 'fslightbox';
import StickyHeader from "@oveleon/sticky-header"
import '../node_modules/aos/dist/aos.css';
import Aos from 'aos';
import $ from 'jquery';




document.addEventListener('DOMContentLoaded', function () {
	const burger = document.querySelector('.burger')
	const headerContent = document.querySelector('.header__content')
	const body = document.querySelector('body')
	burger.addEventListener('click', function () {
		this.classList.toggle('active')
		headerContent.classList.toggle('active')
		body.classList.toggle('hidden')
	})

	function showPopup1() {
		const btns = document.querySelectorAll('.showPopup')
		const popup = document.querySelector('.popup1')
		const wrapper = document.querySelector('.wrapper')
		btns.forEach(btn => {
			btn.addEventListener('click', function () {
				popup.classList.add('show')
				wrapper.classList.add('blur')
				disablePageScroll()
			})
		})
	}
	showPopup1()

	function showPopup2() {
		const btns = document.querySelectorAll('.showPopup2')
		const popup = document.querySelector('.popup2')
		const wrapper = document.querySelector('.wrapper')
		btns.forEach(btn => {
			btn.addEventListener('click', function () {
				popup.classList.add('show')
				wrapper.classList.add('blur')
				disablePageScroll()
			})
		})
	}
	showPopup2()

	function showPopup3() {
		const btns = document.querySelectorAll('.showPopup3')
		const popup = document.querySelector('.popup3')
		const wrapper = document.querySelector('.wrapper')
		btns.forEach(btn => {
			btn.addEventListener('click', function () {
				popup.classList.add('show')
				wrapper.classList.add('blur')
				disablePageScroll()
			})
		})
	}
	showPopup3()

	function closePopup() {
		const btns = document.querySelectorAll('.popup__close')
		const popup = document.querySelector('.popup')
		const wrapper = document.querySelector('.wrapper')
		btns.forEach(btn => {
			btn.addEventListener('click', function () {
				btn.closest('.popup').classList.remove('show')
				wrapper.classList.remove('blur')
				enablePageScroll();
			})
		})
	}
	closePopup()

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
		})
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
	})

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
		})
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
	})

	if (innerWidth < 768) {
		const swiper6 = new Swiper('.about__slider', {
			slidesPerView: "auto",
			spaceBetween: 16,
		})
	}



	function moveEl() {
		const el = document.querySelector('.footer__bottom-right-aside .btn--black')
		const newWrap = document.querySelector('.footer__block')
		newWrap.append(el)
	}
	if (window.innerWidth < 768) {
		moveEl()
	}
	function quiz() {
		const wrap = document.querySelector('.quiz')
		const items = wrap.querySelectorAll('.item')
		const firstlistCheckboxes = wrap.querySelectorAll('.quiz__first-step input')
		let price = 0

		firstlistCheckboxes.forEach(checkbox => {
			checkbox.addEventListener('change', function () {
				const allChecks = wrap.querySelectorAll('.input')
				allChecks.forEach(input => {
					if (input.checked) {
						input.checked = false
					}
				})
			})
		})

		items.forEach(item => {
			const btnNext = item.querySelector('.nextBtn')
			const btnPrev = item.querySelector('.prevBtn')
			const inputs = item.querySelectorAll('input')
			const items = wrap.querySelectorAll('item')
			// шаг назад
			if (btnPrev) {
				btnPrev.addEventListener('click', function () {
					wrap.querySelectorAll('.price__total').forEach(total => {
						total.innerHTML = price
					})
					if (item.getAttribute('id') == 'q100' || item.getAttribute('id') == 'q80' || item.getAttribute('id') == 'q60' || item.getAttribute('id') == 'q40' || item.getAttribute('id') == 'q30') {
						wrap.querySelector('#start').classList.remove('hidden')
					}
					if (item.getAttribute('id') == 'q100-options') {
						wrap.querySelector('#q100').classList.remove('hidden')
					}
					if (item.getAttribute('id') == 'q80-options') {
						wrap.querySelector('#q80').classList.remove('hidden')
					}
					if (item.getAttribute('id') == 'q60-18-options') {
						wrap.querySelector('#q60').classList.remove('hidden')
					}
					if (item.getAttribute('id') == 'q60-16-options') {
						wrap.querySelector('#q60').classList.remove('hidden')
					}
					if (item.getAttribute('id') == 'q60-12-options') {
						wrap.querySelector('#q60').classList.remove('hidden')
					}
					if (item.getAttribute('id') == 'q60-8-options') {
						wrap.querySelector('#q60').classList.remove('hidden')
					}
					if (item.getAttribute('id') == 'q40-options') {
						wrap.querySelector('#q40').classList.remove('hidden')
					}
					if (item.getAttribute('id') == 'q30-options') {
						wrap.querySelector('#q30').classList.remove('hidden')
					}
					item.classList.add('hidden')
				})
			}
			if (btnNext) {
				// шаг вперед
				inputs.forEach(input => {
					if (input.checked) {
						btnNext.classList.add('valide')
					} else {
						btnNext.classList.remove('valide')
					}
					input.addEventListener('change', function () {
						btnNext.classList.add('valide')
					})
				})
				btnNext.addEventListener('click', function () {
					// let currentPrice = this.closest('.item').querySelector('.price').innerHTML
					// console.log(this.closest('.item').nextElementSibling.nextElementSibling)
					wrap.querySelectorAll('.price__total').forEach(total => {
						total.innerHTML = price
					})
					inputs.forEach(input => {
						if (input.checked == true) {
							inputs.forEach(inp => {
								if (inp.checked == true) {
									// console.log(inp.value)
								}
							})
							const inputId = input.getAttribute('id')
							if (inputId === 'q1') {
								wrap.querySelector('#q100').classList.remove('hidden')
							}
							if (inputId === 'q2') {
								wrap.querySelector('#q80').classList.remove('hidden')
							}
							if (inputId === 'q3') {
								wrap.querySelector('#q60').classList.remove('hidden')
							}
							if (inputId === 'q4') {
								wrap.querySelector('#q40').classList.remove('hidden')
							}
							if (inputId === 'q5') {
								wrap.querySelector('#q30').classList.remove('hidden')
							}
							if (inputId === 'q6') {
								wrap.querySelector('#q100-options').classList.remove('hidden')
							}
							if (inputId === 'q7' || inputId === 'q8') {
								wrap.querySelector('#q80-options').classList.remove('hidden')
							}
							// 60 метров
							if (inputId === 'q9') {
								wrap.querySelector('#q60-18-options').classList.remove('hidden')
							}
							if (inputId === 'q10') {
								wrap.querySelector('#q60-16-options').classList.remove('hidden')
							}
							if (inputId === 'q11') {
								wrap.querySelector('#q60-12-options').classList.remove('hidden')
							}
							if (inputId === 'q12') {
								wrap.querySelector('#q60-8-options').classList.remove('hidden')
							}
							// 40 метров
							if (inputId === 'q13' || inputId === 'q14') {
								wrap.querySelector('#q40-options').classList.remove('hidden')
							}
							if (inputId === 'q15') {
								wrap.querySelector('#q30-options').classList.remove('hidden')
							}
						}
					})
					item.classList.add('hidden')
				})
			}
		})
		const inputs = wrap.querySelectorAll('input')

		inputs.forEach(input => {
			input.addEventListener('change', function () {
				const checkboxes = wrap.querySelectorAll('input')
				const checkboxesChecked = []
				checkboxes.forEach(checkbox => {
					if (checkbox.checked) {
						checkboxesChecked.push(+(checkbox.value))
					}
				})
				price = checkboxesChecked.reduce((partialSum, a) => partialSum + a, 0);
				this.closest('.item').querySelector('.price__total').innerHTML = price
			})
		})
	}
	if (document.querySelectorAll('.quiz').length > 0) {
		quiz()
	}

	require("fslightbox")

	function showMore() {
		if (document.querySelectorAll('.section-block').length > 0) {
			const btns = document.querySelectorAll('.showMore')
			btns.forEach(btn => {
				btn.addEventListener('click', function () {
					this.closest('.section-block').style.height = "auto"
					this.remove()
				})
			})
		}
	}
	showMore()

	function hideTeam() {
		const els = document.querySelectorAll('.team__wrap .team__item')
		const btn = document.querySelector('.team__btn')
		if (window.innerWidth < 768) {
			els.forEach((el, index) => {
				if (index > 3) {
					el.classList.add('hidden')
				}
			})
			btn.addEventListener('click', function () {
				els.forEach((el) => {
					el.classList.remove('hidden')
				})
				this.remove()
			})
		}
	}
	if (document.querySelectorAll('.team__item').length > 0) {
		hideTeam()
	}

	function validatePopup() {
		const wraps = document.querySelectorAll('.form')
		wraps.forEach(wrap => {
			const phone = wrap.querySelector('.tel')
			const btn = wrap.querySelector('.form__submit')



			phone.addEventListener('input', () => {
				validate()
			})

			const validate = () => {
				if (phone.value.length > 16) {
					btn.classList.add('valid')
				} else {
					btn.classList.remove('valid')
				}
			}

			// wrap.addEventListener('submit', function (e) {
			// 	e.preventDefault()
			// 	window.location.href = 'calc.html';
			// })
		})
	}
	validatePopup()

	function changeOptions() {
		const wrap = document.querySelector('.card__options-block')
		const items = wrap.querySelectorAll('.card__options-item input')
		const countOptions = document.querySelector('#countOptions')
		const descr = document.querySelector('.card__descr')
		const name = document.querySelector('.card__descr-name')
		const text = document.querySelector('.card__descr-text')
		items.forEach(item => {
			let count = 0;
			item.addEventListener('change', function () {
				count = wrap.querySelectorAll('.card__options-item input:checked').length
				if (item.checked) {
					name.innerHTML = `${item.nextElementSibling.getAttribute('data-name')}`
					text.innerHTML = `${item.nextElementSibling.getAttribute('data-descr')}`
				}
				if (count == 0) {
					descr.classList.add('hidden')
				} else {
					descr.classList.remove('hidden')
				}
				countOptions.innerHTML = count

			})
		})
	}
	if (window.innerWidth > 767 && document.querySelectorAll('.card__options').length > 0) {
		changeOptions()
	}

	Aos.init()

})

window.addEventListener("DOMContentLoaded", function () {
	[].forEach.call(document.querySelectorAll('.tel'), function (input) {
		var keyCode;
		function mask(event) {
			event.keyCode && (keyCode = event.keyCode);
			var pos = this.selectionStart;
			if (pos < 3) event.preventDefault();
			var matrix = "+7 (___) ___ ____",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, ""),
				new_value = matrix.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) : a
				});
			i = new_value.indexOf("_");
			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i)
			}
			var reg = matrix.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}"
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
				this.value = new_value;
			}
			if (event.type == "blur" && this.value.length < 5) {
				this.value = "";
			}
		}

		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		input.addEventListener("keydown", mask, false);

	});

	if (window.innerWidth > 767) {
		const heightHeight = document.querySelector('header').offsetHeight
		const main = document.querySelector('main')
		main.style.marginTop = `${heightHeight}px`
		new StickyHeader({
			selector: 'header',             // Header or container selector
			linkSelector: 'a, strong',
			scrollSettings: {
				startHeight: 100,           // Starting height for the container
				stopHeight: 100,             // StopHeight for the container after reaching the stopPosition
				stopPosition: 200,          // Container will shrink to stopHeight until reaching this position
				breakPosition: 600,         // Hide position
			},
			classes: {
				useClasses: true,          // Toggle classes on or off
				isOpen: 'sh-open',          // Visible and fully open
				onStop: 'sh-stop'           // stopHeight reached
			},

		});
	}

	if (document.querySelector('#options')) {
		const checkboxes = [...document.querySelectorAll('#options input')];
		// const items = [...document.querySelector('.card__pic').children];

		checkboxes.forEach(n => n.addEventListener('change', onChange));

		function onChange() {
			calculate()
			// items.forEach(({ classList: cl }) => {
			// 	cl.toggle('hidden', checkboxes.some(n => n.checked !== cl.contains(n.value)));
			// });
		}

		function calculate() {
			let result = 0
			const startPrice = document.querySelector('.start-price').textContent
			const pricesValue = document.querySelectorAll('input:checked[name="options"]')
			pricesValue.forEach(item => {
				const value = item.getAttribute('data-price')
				result = result + +(value)
			})
			document.querySelector('.total-price').innerHTML = result + +(startPrice)
		}
	}

	function hiddenCards() {
		const wrap = document.querySelector('.catalog-block__index')
		wrap.querySelectorAll('.card-item').forEach((card, i) => {
			if (i > 5) {
				card.classList.add('hidden')
			}
		})
	}
	if (document.querySelector('.catalog-block__index')) {
		hiddenCards()
	}
});

// function collectAnswers() {
// 	let answers = []
// 	const inputsCurrent = document.querySelectorAll('.quiz input:checked')
// 	inputsCurrent.forEach(input => {
// 		answers.push(input.dataset.question, input.value)
// 	})
// 	let strAnswers = JSON.stringify(answers)
// 	// console.log(strAnswers)
// 	return strAnswers
// }


$('.form').submit(function (e) {
	e.preventDefault();
	let answers = []
	const inputsCurrent = document.querySelectorAll('.quiz input:checked')
	inputsCurrent.forEach(input => {
		answers.push(input.dataset.question, input.dataset.value)
	})
	let strAnswers = JSON.stringify(answers);
	let user_name = $(this).find('[name="name"]').val();
	let user_tel = $(this).find('[name="phone"]').val();
	let user_email = $(this).find('[name="email"]').val();
	let items = document.querySelectorAll('.item');
	let user_price;
	items.forEach(item => {
		if (!item.classList.contains('hidden')) {
			user_price = item.querySelector('.price__total').innerHTML;
			return user_price
		}
	})
	var connect_url = "sendmail.php";
	$.ajax({
		url: connect_url,
		type: "post",
		data: {
			"name": user_name,
			"tel": user_tel,
			"email": user_email,
			"price": user_price,
			"answers": strAnswers,
		},
		error: function () {
			console.log('Произошла ошибка')
		},
		success: function () {
			window.location.href = "index.html"
		}
	})
})

$(function () {
	$.fn.scrollToTop = function () {
		$(this).hide().removeAttr("href");
		if ($(window).scrollTop() != "0") {
			$(this).fadeIn("slow")
		}
		var scrollDiv = $(this);
		$(window).scroll(function () {
			if ($(window).scrollTop() == "0") {
				$(scrollDiv).fadeOut("slow")
			} else {
				$(scrollDiv).fadeIn("slow")
			}
		});
		$(this).click(function () {
			$("html, body").animate({ scrollTop: 0 }, "slow")
		})
	}
});
$(function () { $("#btnUp").scrollToTop(); });

$(function () {
	$('a[href^="#"]').on('click', function (evt) {
		// отменяем стандартное действие
		evt.preventDefault();

		var sc = $(this).attr("href"),
			dn = $(sc).offset().top;
		/*
		* sc - в переменную заносим информацию о том, к какому блоку надо перейти
		* dn - определяем положение блока на странице
		*/

		$('html, body').animate({ scrollTop: dn }, 1000);

		/*
		* 1000 скорость перехода в миллисекундах
		*/
	});
});




/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-cssanimations-setclasses !*/
!function (e, n, t) { function r(e, n) { return typeof e === n } function o() { var e, n, t, o, s, i, a; for (var l in C) if (C.hasOwnProperty(l)) { if (e = [], n = C[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++)e.push(n.options.aliases[t].toLowerCase()); for (o = r(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++)i = e[s], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), g.push((o ? "" : "no-") + a.join("-")) } } function s(e) { var n = _.className, t = Modernizr._config.classPrefix || ""; if (S && (n = n.baseVal), Modernizr._config.enableJSClass) { var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)"); n = n.replace(r, "$1" + t + "js$2") } Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), S ? _.className.baseVal = n : _.className = n) } function i(e, n) { return !!~("" + e).indexOf(n) } function a() { return "function" != typeof n.createElement ? n.createElement(arguments[0]) : S ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments) } function l(e) { return e.replace(/([a-z])-([a-z])/g, function (e, n, t) { return n + t.toUpperCase() }).replace(/^-/, "") } function f(e, n) { return function () { return e.apply(n, arguments) } } function u(e, n, t) { var o; for (var s in e) if (e[s] in n) return t === !1 ? e[s] : (o = n[e[s]], r(o, "function") ? f(o, t || n) : o); return !1 } function d(e) { return e.replace(/([A-Z])/g, function (e, n) { return "-" + n.toLowerCase() }).replace(/^ms-/, "-ms-") } function c() { var e = n.body; return e || (e = a(S ? "svg" : "body"), e.fake = !0), e } function p(e, t, r, o) { var s, i, l, f, u = "modernizr", d = a("div"), p = c(); if (parseInt(r, 10)) for (; r--;)l = a("div"), l.id = o ? o[r] : u + (r + 1), d.appendChild(l); return s = a("style"), s.type = "text/css", s.id = "s" + u, (p.fake ? p : d).appendChild(s), p.appendChild(d), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(n.createTextNode(e)), d.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = _.style.overflow, _.style.overflow = "hidden", _.appendChild(p)), i = t(d, e), p.fake ? (p.parentNode.removeChild(p), _.style.overflow = f, _.offsetHeight) : d.parentNode.removeChild(d), !!i } function m(n, r) { var o = n.length; if ("CSS" in e && "supports" in e.CSS) { for (; o--;)if (e.CSS.supports(d(n[o]), r)) return !0; return !1 } if ("CSSSupportsRule" in e) { for (var s = []; o--;)s.push("(" + d(n[o]) + ":" + r + ")"); return s = s.join(" or "), p("@supports (" + s + ") { #modernizr { position: absolute; } }", function (e) { return "absolute" == getComputedStyle(e, null).position }) } return t } function h(e, n, o, s) { function f() { d && (delete P.style, delete P.modElem) } if (s = r(s, "undefined") ? !1 : s, !r(o, "undefined")) { var u = m(e, o); if (!r(u, "undefined")) return u } for (var d, c, p, h, v, y = ["modernizr", "tspan"]; !P.style;)d = !0, P.modElem = a(y.shift()), P.style = P.modElem.style; for (p = e.length, c = 0; p > c; c++)if (h = e[c], v = P.style[h], i(h, "-") && (h = l(h)), P.style[h] !== t) { if (s || r(o, "undefined")) return f(), "pfx" == n ? h : !0; try { P.style[h] = o } catch (g) { } if (P.style[h] != v) return f(), "pfx" == n ? h : !0 } return f(), !1 } function v(e, n, t, o, s) { var i = e.charAt(0).toUpperCase() + e.slice(1), a = (e + " " + b.join(i + " ") + i).split(" "); return r(n, "string") || r(n, "undefined") ? h(a, n, o, s) : (a = (e + " " + E.join(i + " ") + i).split(" "), u(a, n, t)) } function y(e, n, r) { return v(e, t, t, n, r) } var g = [], C = [], w = { _version: "3.2.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function (e, n) { var t = this; setTimeout(function () { n(t[e]) }, 0) }, addTest: function (e, n, t) { C.push({ name: e, fn: n, options: t }) }, addAsyncTest: function (e) { C.push({ name: null, fn: e }) } }, Modernizr = function () { }; Modernizr.prototype = w, Modernizr = new Modernizr; var _ = n.documentElement, S = "svg" === _.nodeName.toLowerCase(), x = "Moz O ms Webkit", b = w._config.usePrefixes ? x.split(" ") : []; w._cssomPrefixes = b; var E = w._config.usePrefixes ? x.toLowerCase().split(" ") : []; w._domPrefixes = E; var N = { elem: a("modernizr") }; Modernizr._q.push(function () { delete N.elem }); var P = { style: N.elem.style }; Modernizr._q.unshift(function () { delete P.style }), w.testAllProps = v, w.testAllProps = y, Modernizr.addTest("cssanimations", y("animationName", "a", !0)), o(), s(g), delete w.addTest, delete w.addAsyncTest; for (var z = 0; z < Modernizr._q.length; z++)Modernizr._q[z](); e.Modernizr = Modernizr }(window, document);