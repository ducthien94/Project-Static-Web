jQuery(document).ready(function($) {
	
	//Lấy ID từ URL
	let id = document.URL.slice(-2);

	// Render
	$.getJSON('products.json', function(data) {
		let product = data[6].allProducts;
		$(".content").html(`
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="index.html"><i class="fas fa-home text-success"></i>  Trang chủ</a></li>
					<li class="breadcrumb-item"><a href="product.html">Sản phẩm</a></li>
					<li class="breadcrumb-item active" aria-current="page">${product[id-1].name}</li>
				</ol>
			</nav>

			<div class="row product-details">
				<div class="col-sm-5 col-12">
					<img src="${product[id-1].img2}" class="w-100" />
				</div>
				<div class="col-sm-4 col-12">
					<h4 class="product-details__name">${product[id-1].name}</h4>
					<p>Tình trạng: <span class="text-success">còn hàng</span></p>
					<p>Chất liệu: ${product[id-1].material}</p>
					<p><span>Giá sản phẩm: </span><span class="product-details__price">${product[id-1].price} <sup>đ</sup></span></p>
					<form>
					Số lượng: <input class="product-details__amount" name="amount" type="number" value="1"> <br>
					<input class="product-details__submit" name="submit" type="submit" value="Mua ngay"> <br>
					<input class="product-details__addToCart" name="add-to-cart" type="submit" value="Thêm vào giỏ hàng">
					</form>
					</div>
				<div class="col-sm-3 col-12">
					<div class="col-12 service">
						<div class="text-center"><i class="fas fa-microphone-alt fa-2x"></i></div>
						<p class="text-center">Tư vấn 24/7</p>
					</div>
					<div class="col-12 service">
						<div class="text-center"><i class="fas fa-check-circle fa-2x"></i></div>
						<p class="text-center">Đảm bảo chất lượng</p>
					</div>
					<div class="col-12 service">
						<div class="text-center"><i class="fas fa-shipping-fast fa-2x"></i></div>
						<p class="text-center">Giao hàng nhanh chóng</p>
					</div>
				</div>
			</div>
		`)
	});

});