 $(document).ready(function() {

  $("#menu").load("menu.html");
  $("#footer").load("footer.html");

    $("#transfer").click(function() {
      $(".transfer-info").fadeIn(1500);
    });

    $("#on-delivery").click(function() {
      $(".transfer-info").fadeOut(1000);
    });


    //Validate form thanh toán
    $("form").submit(function(event) {

      let onDelivery = $("#on-delivery").prop('checked');
      let transfer = $("#transfer").prop('checked');

      if(!$("#name").val()) {
        event.preventDefault();
        alert("Bạn cần nhập họ tên");
      }

      if(!$("#email").val()) {
        event.preventDefault();
        alert("Bạn cần nhập email");
      }

      if(!$("#phone").val()) {
        event.preventDefault();
        alert("Bạn cần số điện thoại");
      }

      if(!$("#address").val()) {
        event.preventDefault();
        alert("Bạn cần nhập địa chỉ");
      }

      if (onDelivery == false && transfer == false) {
        event.preventDefault();
        alert("Bạn cần chọn hình thức thanh toán");
      }

      if ($("#name").val() && $("#email").val() && $("#phone").val() && $("#address").val() && (onDelivery == true || transfer == true)) {
        alert('Đặt hàng thành công');
      }


    });

  });