jQuery(document).ready(function($) {
	
	//Gọi menu.html, footer.html
	$("#menu").load("menu.html");
	$("#footer").load("footer.html")


	//Lấy ID từ URL
	let id = document.URL.slice(-2);

	// Render
	$.getJSON('products.json', function(data) {
		let product = data[2].allProducts;	

		$(".content").html(`
			<nav aria-label="breadcrumb">
			<ol class="breadcrumb">
			<li class="breadcrumb-item"><a href="index.html"><i class="fas fa-home text-success"></i>  Trang chủ</a></li>
			<li class="breadcrumb-item"><a href="product2.html">Sản phẩm</a></li>
			<li class="breadcrumb-item active" aria-current="page">${product[id-1].name}</li>
			</ol>
			</nav>

			<div class="row product-details">
			<div class="col-md-5 col-12">
			<img src="${product[id-1].img2}" class="w-100" />
			</div>
			<div class="col-md-4 col-12">
			<h4 class="product-details__name">${product[id-1].name}</h4>
			<p class="product-details__text"><span class="product-details__desc">Tình trạng:</span> <span class="text-success">còn hàng</span></p>
			<p class="product-details__text"><span class="product-details__desc">Chất liệu:</span> ${product[id-1].material}</p>
			<p class="product-details__text"><span class="product-details__desc">Mô tả:</span> ${product[id-1].desc}</p>
			<p class="product-details__text"><span class="product-details__desc">Giá sản phẩm: </span><span class="product-details__price">${product[id-1].price} <sup>đ</sup></span></p>
			<div>
			<span class="product-details__desc">Số lượng: </span><input class="product-details__amount" name="amount" type="number" value="1"> <br>
			<div class="product-details__addToCart add-to-cart">Thêm vào giỏ hàng</div>
			</div>
			</div>

			<div class="col-md-3 col-12">
			<div class="row mx-auto product-details__service">
			<div class="col-md-12 col-sm-4 col-12 product-details__service1">
			<div class="text-center"><i class="fas fa-microphone-alt fa-2x"></i></div>
			<p class="text-center">Tư vấn 24/7</p>
			</div>
			<div class="col-md-12 col-sm-4 col-12 product-details__service2">
			<div class="text-center"><i class="fas fa-check-circle fa-2x"></i></div>
			<p class="text-center">Đảm bảo chất lượng</p>
			</div>
			<div class="col-md-12 col-sm-4 col-12 product-details__service3">
			<div class="text-center"><i class="fas fa-shipping-fast fa-2x"></i></div>
			<p class="text-center">Giao hàng nhanh chóng</p>
			</div>
			</div>
			</div>
			</div>
			`)

		  //========== Thêm vào giỏ hàng =============


    //Click icon thêm vào giỏ hàng của sản phẩm nào thì thêm sản phẩm đó vào giỏ hàng 
    $(".add-to-cart").click(function(event) {
      let productName = $(this).parent().parent().children('h4').text();
      let productPrice = $(this).parent().parent().children('p:last').children('span:last').text();
      let productQuantity = $(this).parent().children('input').val();
      addItemToCart(productName, productPrice, productQuantity);
      updateCartTotal();
    });


    //Function thêm sản phẩm vào giỏ hàng
    function addItemToCart(productName, productPrice, productQuantity) {

      let cartItemTitle = $(".cart-items:first .cart-row > .cart-item > .cart-item__title");
      for (let i = 0; i < cartItemTitle.length; i++) {
        if (cartItemTitle[i].innerText == productName) {
          alert("Sản phẩm đã có trong giỏ hàng");
          return;
        }
      }


      $(".cart-items").append(` 

        <div class="cart-row row">
        <div class="cart-item col-4">
        <span class="cart-item__title">${productName}</span>
        </div>
        <span class="cart-price col-2">${productPrice}</span>
        <div class="cart-quantity col-2">
        <input type="number" class="cart-quantity__input w-50" value="${productQuantity}">
        </div>
        <div class="col-2 cart-subTotal">
        <span class="cart-subTotal__price">${productPrice}</span>
        </div>
        <div class="col-2"> <button class="cart-remove btn-danger">Xóa</button></div>
        </div>

        `)


        //Click nút Xóa sẽ xóa sản phẩm khỏi giỏ hàng
        $(".cart-remove").click(function removeCartItem(event) {
          $(this).parent().parent().remove();
          updateCartTotal();
        });;

        //Nếu số lượng <= 0 thì quay lại số lượng mặc định là 1.
        $(".cart-quantity__input").change(function quantityChanged(event) {
          if ((this.value) <= 0) {
            this.value = 1;
            alert("Số lượng tối thiểu là 1");
          }
          updateCartTotal();
        });

    }; //end addItemToCart()

     function updateCartTotal() {
      let total = 0;
      let subTotal = 0;
      let cartRows = $(".cart-items:first .cart-row");

      for (let i = 0; i < cartRows.length; i++) {
        let priceEl =  $(".cart-items:first .cart-row > span")[i];
        let price = parseFloat(priceEl.innerText.replace('đ', ''));
        let quantity =  $(".cart-items:first .cart-row > .cart-quantity > .cart-quantity__input")[i].value;

        subTotal = (price * quantity) + `.000 đ`;
        $(".cart-items:first .cart-row > .cart-subTotal .cart-subTotal__price")[i].innerText = subTotal;
        total = total + parseFloat(subTotal.replace("đ", ""));
      }

      $(".cart-total__price:first").html(total + `.000 đ`);

    }; // end updateCartTotal()

    // ====== Giỏ hàng ======



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