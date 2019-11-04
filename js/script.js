$(function() {

	//Gọi Wow js
	new WOW().init();
	
	// Gọi header.html, footer.html, menu.html
	$("#header").load("header.html");
	$("#menu").load("menu.html");
	$("#footer").load("footer.html");

	// Đổ dữ liệu vào Sản phẩm nổi bật
	$.getJSON('products.json', function(data) {
		let hotProducts = data[0].hotProducts;	
		hotProducts.forEach( function(element, index) {
			$("#hot-products").append(`
				<div class="col-md-4 col-sm-6 col-12 wrap-card wrap-card-${index}">
				<div class="card">
				<img src="images/sp-noi-bat/${element.img}" class="card-img-top" alt="${element.name}" title="${element.name}">
				<div class="card-body">
				<div>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>         
				</div>
				<hr>
				<p class="card-title">${element.name}</p>
				<p class="card-text">${element.price} <sup>đ</sup></p>
				</div>
				</div>
				<div class="overlay1">
				<a href="product-details.html#${element.id}"><div class="btn-detail">Xem chi tiết</div></a>
				<div class="btn-addToCart">Thêm vào giỏ</div>
				</div>
				</div>  
				`)
		});

		// Đổ dữ liệu vào Sản phẩm khuyến mãi
		let promotionalProducts = data[1].promotionalProducts;
		promotionalProducts.forEach(function(element,index) {
			$(".promotional-products__content").append(`
				<div class="wrap-card2 wrap-card2-${index} col-sm-6 col-12">
				<div data-id="${element.id}" class="card">
                  <div class="row no-gutters">
                    <div class="col-md-5 col-12 promotional-products__img">
                      <a href="product-details.html#${element.id}" target="_blank" class="link-to-product"><img src="images/sp-khuyen-mai/${element.img}" class="card-img" alt="${element.name}" title="${element.name}"></a>
                    </div>
                    <div class="col-md-7 col-12">
                      <div class="card-body">
                        <h6 class="card-title product-title promotional-products__title">${element.name}</h6>
                        <p class="card-text promotional-products__new-price">${element.newPrice} <sup>đ</sup></p>
                        <p class="card-text promotional-products__old-price">${element.oldPrice} <sup>đ</sup></p>
                      </div>
                    </div>
                  </div>
                  <div class="overlay2">
                    <a href="product-details.html#${element.id}"><div class="btn-detail2">Xem chi tiết</div></a>
                    <div class="btn-addToCart2">Thêm vào giỏ</div>
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


	// Back to top
	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 100) { 
			$('.back-to-top').fadeIn(); 
		} else { 
			$('.back-to-top').fadeOut(); 
		} 
	}); 
	$('.back-to-top').click(function(){ 
		$("html, body").animate({ scrollTop: 0 }, 600); 
		return false; 
	});

	
});