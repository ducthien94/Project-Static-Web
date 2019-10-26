 $(document).ready(function() {

     //Gọi menu và footer
     $("#menu").load("menu.html");
     $("#footer").load("footer.html");


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


    //Validate form

    $("form").submit(function(event) {

      if(!$("#name").val()) {
        event.preventDefault();
        alert("Bạn cần nhập họ tên");
    }

    if(!$("#email").val()) {
        event.preventDefault();
        alert("Bạn cần nhập email");
    }

    if(!$("#note").val()) {
        event.preventDefault();
        alert("Bạn cần nội dung");
    }

    if ($("#name").val() && $("#email").val() && $("#note").val()) {
        alert("Gửi tin nhắn thành công");
    }     

});





});