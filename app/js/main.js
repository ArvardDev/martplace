$(function () {

	$('#create__search-list').styler();
	$('#product__filter').styler();
	$('#products-page__sort-list').styler();
	$('#products-page__per-page').styler();

	$('#category-aside__title').on('click', function(){
			$('.category__list').slideToggle();
	});
	$('#filter-aside__title').on('click', function(){
			$('.filter__list').slideToggle();
	});
	$('#pricing-aside__title').on('click', function(){
			$('#pricing-aside__range').slideToggle();
	});

	$('.js-range-slider').ionRangeSlider({
        type: "double",
        min: 0,
        max: 400,
        from: 30,
        to: 300,
    });

	$('.products-page__view-list').on('click', function(){
		$('.products-page__items').removeClass('grid');
		$('.products-page__items').addClass('list');
		$('.products-page__view-list').addClass('active');
		$('.products-page__view-grid').removeClass('active');

	});
	$('.products-page__view-grid').on('click', function(){
		$('.products-page__items').removeClass('list');
		$('.products-page__items').addClass('grid');
		$('.products-page__view-list').removeClass('active');
		$('.products-page__view-grid').addClass('active');

	});

	$('.products__filter-btn').on('click', function () {
		$('.products__filter-list').slideToggle();
	});

	$('.rate-stars').rateYo({
		rating: 3.5,
		maxValue: 5,
		numStars: 5,
		starWidth: "15px",
		readOnly: true,
		normalFill: 'transparent',
		ratedFill: '#ffc000',

		starSvg: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>'
	});

	$('.featured__slider').slick({
		prevArrow: '<button type="button" class="slick-prev slick-btn"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><path fill="#000000" d="M14 20c0.128 0 0.256-0.049 0.354-0.146 0.195-0.195 0.195-0.512 0-0.707l-8.646-8.646 8.646-8.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-9 9c-0.195 0.195-0.195 0.512 0 0.707l9 9c0.098 0.098 0.226 0.146 0.354 0.146z"></path></svg></button>',
		nextArrow: '<button type="button" class="slick-next slick-btn"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">\
		<path fill="#000000" d="M5 20c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l8.646-8.646-8.646-8.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l9 9c0.195 0.195 0.195 0.512 0 0.707l-9 9c-0.098 0.098-0.226 0.146-0.354 0.146z"></path>\
		</svg></button>'
	});

	$('.followers__slider').slick({
		variableWidth: true,
		prevArrow: '<button type="button" class="slick-prev slick-btn"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><path fill="#000000" d="M14 20c0.128 0 0.256-0.049 0.354-0.146 0.195-0.195 0.195-0.512 0-0.707l-8.646-8.646 8.646-8.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-9 9c-0.195 0.195-0.195 0.512 0 0.707l9 9c0.098 0.098 0.226 0.146 0.354 0.146z"></path></svg></button>',
		nextArrow: '<button type="button" class="slick-next slick-btn"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">\
		<path fill="#000000" d="M5 20c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l8.646-8.646-8.646-8.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l9 9c0.195 0.195 0.195 0.512 0 0.707l-9 9c-0.098 0.098-0.226 0.146-0.354 0.146z"></path>\
		</svg></button>'
	});
	
	$('.reviews__slider').slick({
		arrows: false,
		slidesToShow: 2,
		autoplay: true,
	});

	if($('div').is('mix')){
		var mixer = mixitup('.products__items');
	};

	// Кнопка Наверх
	function backToTop() {
		let button = $('.back-to-top__link');

		$(window).on('scroll', () => {
			if ($(this).scrollTop() >= 500) {
				button.fadeIn();
			} else {
				button.fadeOut();
			}
		});

		button.on('click', (e) => {
			e.preventDefault();
			$('html').animate({
				scrollTop: 0
			}, 1000)
		})
	};
	backToTop();


})