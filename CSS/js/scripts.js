$(document).ready(function(){
    $("#myCarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
            if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                $("#myCarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
            }
            else if ($("#carouselButton").children("span").hasClass('fa-play')){
                $("#myCarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');                    
            }
        });
});

$('#mymodal').click(function(){
 $('#loginModal').modal('hide');

});
$('#mmodal').click(function(){
 $('#loginModal').modal('hide');

});
$('#onmodal').click(function(){
 $('#loginModal').modal('toggle');

});
$('#2modal').click(function(){
 $('#ReserveModal').modal('hide');

});
$('#m2modal').click(function(){
 $('#ReserveModal').modal('hide');

});
$('#on2modal').click(function(){
 $('#ReserveModal').modal('toggle');

});