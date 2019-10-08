 jQuery(document).ready(function($) {
  //Menu
  $(".menu-toggle").click(function() {
    $("nav").toggleClass('active');
  });

  //Ẩn hộp tìm kiếm
  $(".search-box").hide();
  
  //Gán sự kiện click icon Search hiện hộp tìm kiếm
  $("#icon-search").click(function() {
    $(".search-box").show();
  });

  //Click icon x ẩn hộp tìm kiếm
  $(".close-search-box").click(function() {
    $(".search-box").hide();
  });


  
  // Lấy dữ liệu tất cả sản phẩm
  $.getJSON('products.json', function(data) {
    let allProducts = data[6].allProducts;
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
});