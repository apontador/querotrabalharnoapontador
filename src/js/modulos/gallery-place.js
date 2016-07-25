
$(document).ready(function(){

    $('#nav-gallery-thumb img').mouseover(function(){
        var image = $(this).attr('src');
        $("#img-gallery-zoom").attr('src', image);
    });


});