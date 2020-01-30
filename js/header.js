jQuery(document).ready(function($) {
  //Menu
  $(".menu-toggle").click(function() {
    $("nav").toggleClass('active');
  });

  
  //Gán sự kiện click icon Search hiện hộp tìm kiếm
  $("#icon-search").click(function() {
    $(".search-box").show(600);
  });

  //Click icon x ẩn hộp tìm kiếm
  $(".close-search-box").click(function() {
    $(".search-box").hide(600);
  });


  
  // Lấy dữ liệu tất cả sản phẩm
  $.getJSON('products.json', function(data) {
    let allProducts = data[2].allProducts;
    $('#search').keyup(function(){
      let keyWord = $(this).val();
      if(keyWord === '')  {
        $('#results').html('');
        return;
      }

      let regex = new RegExp(keyWord, "i");
      let resultContent = '<div class="row no-gutters">'

      $.each(allProducts, function(key, val){
        if ((val.price.search(regex) != -1) || (val.name.search(regex) != -1)) {
          resultContent += `
          <div class="col-md-4 col-6 pt-sm-3 pl-sm-3 pr-sm-2 pb-sm-3 pt-2 pl-2 pb-1">
          <a href="product-details.html#${val.id}" target="_blank"><img src="${val.img}" class="card-img" alt="${val.name}" title="${val.name}"></a>
          </div>
          <div class="col-md-8 col-6 p-3">
          <div class="">
          <a class="link-to-product" href="product-details.html#${val.id}" target="_blank"><h6>${val.name}</h6></a>
          <p class="price">${val.price} <sup>đ</sup></p>
          </div>
          </div>
          `
        }
      });
      resultContent += '</div>'
      $('#results').html(resultContent);
    });
  })



  //=============== Giỏ hàng ===================

  //Click icon Giỏ hàng hiện Giỏ hàng
  $(".cart-icon").click(function(){
    $(".cart-overlay").show(1000);
  });

  //Click x đóng Giỏ hàng
  $(".close-cart").click(function(){
    $(".cart-overlay").hide(1000);
  });


  //Gán sự kiện click vào icon thêm vào giỏ hàng của sp nào thì thêm sản phẩm đó vào giỏ hàng mục SẢN PHẨM NỔI BẬT. 
  $(".btn-addToCart").click(function() {
    let productTitle = $(this).parent().parent().children('.card').children('.card-body').children('.card-title').text();
    let productPrice = $(this).parent().parent().children('.card').children('.card-body').children('.card-text').text();
    addItemToCart(productTitle, productPrice);
    updateCartTotal();
  });

  function addItemToCart(productTitle, productPrice) {

    let cartItemTitle = $(".cart-items:first .cart-row > .cart-item > .cart-item__title");
    for (let i = 0; i < cartItemTitle.length; i++) {
      if (cartItemTitle[i].innerText == productTitle) {
        alert("Sản phẩm đã có trong giỏ hàng");
        return
      }
    }


    $(".cart-items").append(` 
      <div class="cart-row row">
      <div class="cart-item col-4">
      <span class="cart-item__title">${productTitle}</span>
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
   });;

    //Nếu số lượng <= 0 thì quay lại số lượng mặc định là 1.
    $(".cart-quantity__input").change(function quantityChanged(event) {
      if ((this.value) <= 0) {
        this.value = 1;
        alert("Số lượng tối thiểu là 1");
      }
      updateCartTotal();
    });

  };


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

  };

  // Thêm vào giỏ hàng mục Sản phẩm khuyến mãi
  $(".btn-addToCart2").click(function() {
    let productTitle1 = $(this).parent().parent().children('div').children('div:last-child').children('.card-body').children('h6').text();
    let productPrice1 = $(this).parent().parent().children('div').children('div:last-child').children('.card-body').children('p:first').text();
    console.log(productTitle1,productPrice1);
    addItemToCart(productTitle1, productPrice1);
    updateCartTotal();
  });


  $(".btn-pay").click(function(event) {
    let cartRow = $(".cart-row");
    if (cartRow.length == 0) {
      event.preventDefault();
      alert("Hãy thêm sản phẩm vào giỏ hàng để tiếp tục");
    }
  });


});