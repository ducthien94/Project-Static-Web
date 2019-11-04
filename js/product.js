jQuery(document).ready(function($) {
	
	$("#menu").load("menu.html");
	$("#footer").load("footer.html");

	$.getJSON("products.json", function(data) {

		//Đổ dữ liệu vào mục sản phẩm
		let products = data[2].allProducts;

		for (let i = 0; i < products.length; i++) {
			$(".products").append(`
				<div class="col-lg-3 col-md-4 col-sm-4 col-6 wrap-card wrap-card-${i} ${products[i].class}" data-sort-default="${i}" data-sort-price="${products[i].price}" data-sort-name="${products[i].name}">
				<div class="card">
				<img src="${products[i].img}" class="card-img-top" alt="${products[i].name}" title="${products[i].name}">
				<div class="card-body">
				<p class="card-title">${products[i].name}</p>
				<hr>
				<p class="card-text">${products[i].price} <sup>đ</sup></p>
				</div>
				</div>
				<div class="overlay">
				<a href="product-details.html#${products[i].id}" target="_blank"><div class="btn-detail">Xem chi tiết</div></a>
				<div class="btn-addToCart">Thêm vào giỏ</div>
				</div>
				</div>  
				`)
		}


		//Đổ dữ liệu vào sp khuyến mãi
		let promotionalProducts = data[1].promotionalProducts;

		promotionalProducts.forEach(function(element, index) {
			$(".promotional-products__content1").append(`
				<div class="card mb-3 col-md-12 col-6">
				<div class="row no-gutters">
				<div class="col-5 col-md-4">
				<img src="images/anh-chi-tiet-sp/${element.img}" class="card-img" alt="${element.name}" title="${element.name}">
				</div>
				<div class="col-7 col-md-8">
				<div class="card-body">
				<p class="text product-name">${element.name}</p>
				<p class="text new-price">${element.newPrice} <sup>đ</sup></p>
				<p class="text old-price">${element.oldPrice} <sup>đ</sup></p>
				</div>
				</div>
				</div>
				<div class="overlay2">
				<a href="product-details.html#${element.id}" target="_blank"><div class="btn-detail">Xem chi tiết</div></a>
				</div>
				</div>
				`)
		})


		$(".sort-box select.sort").change(function() {
			let sortVal = $(this).val();
			tinysort('.wrap-card', {
				order: 'asc',
				data: 'sort-' + sortVal
			});
		});


		//Lọc sản phẩm
		$('.filter-list li').click(function(){
			let selector = $(this).attr('data-filter');

			$('.products').isotope({
				filter: selector,
			})
		});

		$('.filter-list li.active').removeClass('active');
		$(this).addClass('active');

		//Gán sự kiện click vào thẻ <li>
		$(".filter-list li").click(function() {
			//Click vào <li> thì <li> đó thêm class active-li, còn những <li> còn lại sẽ bị xóa class active-li   
			$(this).addClass('active-li');
			$(this).siblings().removeClass('active-li');
			//Click vào <li> thì thằng con trong <li> đó thêm class active-list-style, còn thằng con trong các <li> còn lại sẽ bị xóa class active-li
			$(this).children().addClass('active-list-style');
			$(this).siblings().children().removeClass('active-list-style');
		});



	}); //getJSON

});
