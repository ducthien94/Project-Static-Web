$(function() {

	//Đổ dữ liệu vào Chai thủy tinh
	$.getJSON('products.json', function(data) {
		let glassBottles = data[2].glassBottles;
		glassBottles.forEach(function(element, index) {
			$(".glass-bottles").append(`
				<div data-id="${element.id}" data-category="${element.category}" class="card col-md-4 col-sm-6 col-12 card-${index} ${element.class}">
				<a href="product-details.html#${element.id}" target="_blank" class="link-to-product"><img src="images/chai-thuy-tinh/${element.img}" class="card-img-top" alt="${element.name}" title="${element.name}"></a>
				<div class="card-body pt-2">
				<img src="images/chai-thuy-tinh/${element.star}" class="star">
				<h6 class="card-title text-center products__title">${element.name}</h6>
				<hr>
				<p class="card-text text-center products__price">${element.price} <sup>đ<sup></p>
				<div class="products__btn text-center">
				<a href="product-details.html#${element.id}" target="_blank" class="btn btn__buy-now link-to-product">Mua ngay</a>
				<a href="" class="add-to-cart" title="Thêm vào giỏ hàng"><i class="fas fa-cart-plus"></i></a>
				</div>
				</div>
				</div>

			`)
		});

		

		//var $grid = $('.glass-bottles').isotope({
		//});
		// filter items on button click
		//$('.filter-icon').on( 'click', 'button', function() {
	//		var filterValue = $(this).attr('data-filter');
	//		$grid.isotope({ filter: filterValue });
	//	});




		// Đổ dữ liệu vào Hũ thủy tinh
		let glassJars = data[3].glassJars;
		glassJars.forEach(function(element, index) {
			$(".glass-jars").append(`
				<div data-id="${element.id}" class="card col-md-4 col-sm-6 col-12 card-${index}">
				<a href="product-details.html#${element.id}" target="_blank" class="link-to-product"><img src="images/hu-thuy-tinh/${element.img}" class="card-img-top" alt="${element.name}" title="${element.name}"></a>
				<div class="card-body pt-2">
				<img src="images/hu-thuy-tinh/${element.star}" class="star">
				<h6 class="card-title text-center products__title">${element.name}</h6>
				<hr>
				<p class="card-text text-center products__price">${element.price} <sup>đ<sup></p>
				<div class="products__btn text-center">
				<a href="product-details.html#${element.id}" target="_blank" class="btn btn__buy-now link-to-product">Mua ngay</a>
				<a href="#" class="add-to-cart" title="Thêm vào giỏ hàng"><i class="fas fa-cart-plus"></i></a>
				</div>
				</div>
				</div>

			`)
		});


		// Đổ dữ liệu vào Cốc thủy tinh
		let glassCups = data[4].glassCups;
		glassCups.forEach(function(element, index) {
			$(".glass-cups").append(`
				<div data-id="${element.id}" class="card col-md-4 col-sm-6 col-12 card-${index}">
				<a href="product-details.html#${element.id}" target="_blank" class="link-to-product"><img src="images/coc-thuy-tinh/${element.img}" class="card-img-top" alt="${element.name}" title="${element.name}"></a>
				<div class="card-body pt-2">
				<img src="images/coc-thuy-tinh/${element.star}" class="star">
				<h6 class="card-title text-center products__title">${element.name}</h6>
				<hr>
				<p class="card-text text-center products__price">${element.price} <sup>đ<sup></p>
				<div class="products__btn text-center">
				<a href="product-details.html#${element.id}" target="_blank" class="btn btn__buy-now link-to-product">Mua ngay</a>
				<a href="#" title="Thêm vào giỏ hàng"><i class="fas fa-cart-plus"></i></a>
				</div>
				</div>
				</div>

			`)
		});


		// Đổ dữ liệu vào Lọ tinh dầu, mỹ phẩm
		let cosmeticBottles = data[5].cosmeticBottles;
		cosmeticBottles.forEach(function(element, index) {
			$(".cosmetic-bottles").append(`
				<div data-id="${element.id}" class="card col-md-4 col-sm-6 col-12 card-${index}">
				<a href="product-details.html#${element.id}" target="_blank" class="link-to-product"><img src="images/lo-tinhdau-mypham/${element.img}" class="card-img-top" alt="${element.name}" title="${element.name}"></a>
				<div class="card-body pt-2">
				<img src="images/lo-tinhdau-mypham/${element.star}" class="star">
				<h6 class="card-title text-center products__title">${element.name}</h6>
				<hr>
				<p class="card-text text-center products__price">${element.price} <sup>đ<sup></p>
				<div class="products__btn text-center">
				<a href="product-details.html#${element.id}" target="_blank" class="btn btn__buy-now link-to-product">Mua ngay</a>
				<a href="#" title="Thêm vào giỏ hàng"><i class="fas fa-cart-plus"></i></a>
				</div>
				</div>
				</div>
			`)
		});


		// Đổ dữ liệu vào Sản phẩm khuyến mãi
		let promotionalProducts = data[1].promotionalProducts;
		promotionalProducts.forEach(function(element,index) {
			$("#promotional-products").append(`
				<div data-id="${element.id}" class="card col-12 card-${index}">
				<div class="row no-gutters">
				<div class="col-xl-6 col-12">
				<a href="product-details.html#${element.id}" target="_blank" class="link-to-product"><img src="images/sp-khuyen-mai/${element.img}" class="card-img" alt="${element.name}" title="${element.name}"></a>
				</div>
				<div class="col-xl-6 col-12">
				<div class="card-body">
				<h6 class="card-title">${element.name}</h6>
				<p class="card-text new-price">${element.newPrice} <sup>đ</sup></p>
				<p class="card-text old-price">${element.oldPrice} <sup>đ</sup></p>
				<div id="promotional-products__btn">
				<a href="product-details.html#${element.id}" target="_blank" class="btn-buy-now link-to-product">Mua ngay</a>
				<a href="#" title="Thêm vào giỏ hàng"><i class="fas fa-cart-plus"></i></a>
				</div>
				</div>
				</div>
				</div>
				</div>
			`)
		})
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