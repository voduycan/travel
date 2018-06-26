$(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      controlNav: "thumbnails"
    });

  });
 
  $(document).ready(function(){
    $('#str-5').click(function(){
      console.log('da hover');
      $('#str-5').addClass('str-gold');
      $('#str-4').addClass('str-gold');
      $('#str-3').addClass('str-gold');
      $('#str-2').addClass('str-gold');
    });
  });
