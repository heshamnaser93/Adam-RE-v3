// Main/Product image slider for product page
$('#gallery .main-img-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	arrows: true,
	fade:true,
	autoplay: false,
	autoplaySpeed: 4000,
	speed: 300,
	lazyLoad: 'ondemand',
	asNavFor: '.thumb-nav',
	prevArrow: '<div class="slick-prev"><i class="fas fa-arrow-left"></i></div>',
	nextArrow: '<div class="slick-next"><i class="fas fa-arrow-right"></i></div>'
});


// Thumbnail/alternates slider for product page
$('.thumb-nav').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	infinite: true,
	arrows: false,
	centerPadding: '0px',
	asNavFor: '.main-img-slider',
	dots: false,
	centerMode: false,
	draggable: true,
	speed:200,
	focusOnSelect: true
});