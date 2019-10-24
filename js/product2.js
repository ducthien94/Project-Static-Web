 $(document).ready(function() {

  //Gọi menu.html, footer.html
  $("#menu").load("menu.html");
  $("#footer").load("footer.html");

   $.getJSON('products.json',  function(data) {

      //Đổ dữ liệu vào trang sản phẩm (Mục chính)
    let allProducts = data[2].allProducts;
    allProducts.forEach(function(element, index) {
      $("#products").append(`
        <div data-id="${element.id}" class="card col-md-4 col-sm-6 col-12 card-${index} ${element.class}">
        <a href="product-details.html#${element.id}" target="_blank" class=""><img src="${element.img}" class="card-img-top" alt="${element.name}" title="${element.name}"></a>
        <div class="card-body pt-2">
        <h6 class="card-title text-center products__title">${element.name}</h6>
        <hr>
        <p class="card-text text-center products__price">${element.price} <sup>đ</sup></p>
        <div class="products__btn text-center">
        <a href="product-details.html#${element.id}" target="_blank" class="btn btn__buy-now link-to-product">Mua ngay</a>
        <span class="add-to-cart2" title="Thêm vào giỏ hàng"><i class="fas fa-cart-plus"></i></span>
        </div>
        </div>
        </div>
        `)
    });


    // Đổ dữ liệu vào sản phẩm khuyến mãi (bên tay trái)
    let promotionalProducts = data[1].promotionalProducts;
    promotionalProducts.forEach( function(element, index) {
      $(".promotional-products-item").append(`
       <div class="card col-md-12 col-sm-6 col-12">
       <div class="row no-gutters">
       <div class="col-4">
       <a href="product-details.html#${element.id}" target="_blank"><img src="images/anh-chi-tiet-sp/${element.img}" class="card-img" alt="${element.name}" title="${element.name}"></a>
       </div>
       <div class="col-8">
       <div class="card-body">
       <p class="cart-title name"><a href="product-details.html#${element.id}" target="_blank">${element.name}</a></p>
       <span class="card-text new-price">${element.newPrice} <sup>đ</sup></span>
       <span class="card-text old-price"><small class="text-muted">${element.oldPrice} <sup>đ</sup></small></span>
       </div>
       </div>
       </div>
       </div>
       `)
    });




    


     //========== Thêm vào giỏ hàng =============//


    //Click icon thêm vào giỏ hàng của sản phẩm nào thì thêm sản phẩm đó vào giỏ hàng 
    $(".add-to-cart2").click(function(event) {
      let productName = $(this).parent().parent().children('h6').text();
      let productPrice = $(this).parent().parent().children('p').text();
      addItemToCart(productName, productPrice);
      updateCartTotal();
    });


    // Function thêm sản phẩm vào giỏ hàng
    function addItemToCart(productName, productPrice) {

      let cartItemTitle = $(".cart-items:first .cart-row > .cart-item > .cart-item__title");
      for (let i = 0; i < cartItemTitle.length; i++) {
        if (cartItemTitle[i].innerText == productName) {
          alert("Sản phẩm đã có trong giỏ hàng");
          return
        }
      }


      $(".cart-items").append(` 

        <div class="cart-row row">
        <div class="cart-item col-4">
        <span class="cart-item__title">${productName}</span>
        </div>
        <span class="cart-price col-2">${productPrice}</span>
        <div class="cart-quantity col-2">
        <input type="number" class="cart-quantity__input w-50" value="1">
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
        });

        //Nếu số lượng <= 0 thì quay lại số lượng mặc định là 1.
        $(".cart-quantity__input").change(function quantityChanged(event) {
          if ((this.value) <= 0) {
            this.value = 1;
            alert("Số lượng tối thiểu là 1");
          }
          updateCartTotal();
        });

    } //end addItemToCart()





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

    } // end updateCartTotal()

   });


    // Lọc sản phẩm theo danh mục
      $(".button-group").on( 'click', '.button1', function() {
        let filterValue = $(this).attr('data-filter');
        $("#products").isotope({ filter: filterValue });
      })


      //Sắp xếp sản phẩm theo tên/giá
      $('#sorts').on( 'click', '.button2', function() {
        let sortValue = $(this).attr('data-sort-by');
        $('#products').isotope({
          getSortData: {
            products__title: '.products__title',
            products__price: '.products__price parseInt',
          }
        }).isotope({ sortBy: sortValue });
      })


    


 // Gán sự kiện click các button có class = "button1"
 $(".button1").click(function() {
  $(this).css({
    color: '#00ab39',
    fontWeight: '500',
    outline: 'none'
  });

  $(this).prev().css({
    height: '20px',
    top: '10px'
  });
})


 $(".button1").blur(function() {
  $(this).css({
    color: '#000',
    fontWeight: 'unset'
  });

  $(this).prev().css({
    height: '5px',
    top: '20px'
  });
})


 // Gán sự kiện click các button có class = "button2"
 $(".button2").click(function() {
  $(this).css({
    border: '1px solid #00ab39',
    color: '#00ab39',
    outline: 'none'
  });
})

 $(".button2").blur(function() {
  $(this).css({
    border: '1px solid #c4c4c4',
    color: '#000',
    outline: 'none'
  });
})


// Click icon Lọc thì hiện danh mục lọc ra.
$(".open-filter").click(function() {
  $(".filter-box").show(800);
  $(".close-filter").show(800);
})

//Click icon x thì ẩn ô lọc
$(".close-filter").click(function() {
  $(".filter-box").hide(800);
  $(this).hide(800);
})


// Click icon sắp xếp thì hiện danh mục sắp xếp ra.
$(".open-sort").click(function() {
  $(".sort-list").slideToggle();
})



   // Back to top
   $(window).scroll(function(){ 
    if ($(this).scrollTop() > 100) { 
      $('.back-to-top').fadeIn(); 
    } 
    else { 
      $('.back-to-top').fadeOut(); 
    } 
  });

   $('.back-to-top').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
  }); 




 });

    


    

