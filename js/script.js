$(function() {
	// Gọi header.html, footer.html, menu.html
	$("#header").load("header.html");
	$("#menu").load("menu.html");
	$("#footer").load("footer.html");
	
	// Đổ dữ liệu vào Sản phẩm nổi bật
	$.getJSON('hot-products.json', function(products) {
		products.forEach( function(element, index) {
			$("#hot-products").append(`
				<div class="card col-12 col-md-4 card-${index}">
				<div class="hot-products__img">
				<a href="${element.link}"><img src="images/sp-noi-bat/${element.img}" class="card-img-top" alt="${element.name}" title="${element.name}"></a>
				</div>
				<div class="card-body text-center pt-2">
				<div>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>					
				</div>
				<p class="card-title hot-products__title">${element.name}</p>
				<hr>
				<div>				       
				<div class="card-text hot-products__price">${element.price} <sup>đ</sup></div>
				<div class="hot-products__btn">
				<a href="#" class="btn__buy-now">Mua ngay</a>
				<a href="#" title="Thêm vào giỏ hàng"><i class="fas fa-cart-plus"></i></a>
				</div>
				</div>    
				</div> 
				</div>
				`)
		});
	})

	// Đổ dữ liệu vào Sản phẩm khuyến mãi
	$.getJSON('promotional-products.json', function(data) {
		data.forEach(function(element,index) {
			$("#promotional-products").append(`
				<div class="card mb-2 col-md-6 card-${index}">
				<div class="row no-gutters">
				<div class="col-md-6 promotional-products__img">
				<a href="${element.link}"><img src="images/sp-khuyen-mai/${element.img}" class="card-img" alt="${element.name}" title="${element.name}"></a>
				</div>
				<div class="col-md-6">
				<div class="card-body">
				<h6 class="card-title promotional-products__title">${element.name}</h6>
				<p class="card-text promotional-products__new-price">${element.newPrice} <sup>đ</sup></p>
				<p class="card-text promotional-products__old-price">${element.oldPrice} <sup>đ</sup></p>
				<div class="promotional-products__btn">
				<a href="${element.link}" class="btn__buy-now">Mua ngay</a>
				<a href="#" title="Thêm vào giỏ hàng"><i class="fas fa-cart-plus"></i></a>
				</div>
				</div>
				</div>
				</div>
				</div>
				`)
		})
	})

	// Slide Tin tức
	$('.news__items').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplaySpeed :1500,
		arrows: false,
		autoplay: true,
		speed: 1000,
		swipe: true,
		dots: true,
	});

});