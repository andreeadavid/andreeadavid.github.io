$(document).ready(function() {

    $(function() {
        $(window).scroll(function(){
            if ($(window).scrollTop() > 200){
                $('#nav').addClass( 'transform-nav');
                $('#arrow').addClass('grey');

            }
            else {
                $('#nav').removeClass("transform-nav");
                $('#arrow').removeClass('grey');   
            }
        });
    });

        $('.navbar-toggler').click(function() {
          if($('#arrow').hasClass('fa-arrow-down')){
          $('#arrow').removeClass('fa-arrow-down');
          $('#arrow').addClass('fa-close') 
          }else {
            $('#arrow').addClass('fa-arrow-down');
            $('#arrow').removeClass('fa-close');
          }
        });
        
});
