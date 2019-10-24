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

});