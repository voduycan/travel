//img
var img_top = $('#sec4-img').offset().top - $('#sec4-img').height();
if ($(document).scrollTop() >= img_top) {
    $('#sec4-img').addClass('ani-class');
}
 
//chart
var chart_top = $('#chart').offset().top - $('#chart').height()-650;
if ($(document).scrollTop() >= chart_top) {
    $('#chart').addClass('ani-chart-in');
}

//chart sec6
var sec6_right = $('#sec6-img').offset().top -600;
if ($(document).scrollTop() >= sec6_right) {
    $('#sec6-img').addClass('ani-sec6');
}


window.onscroll = function() {
    //img 
    if ($(document).scrollTop() >= img_top) {
        $('#sec4-img').addClass('ani-class');
    }
    else
    {
        $('#sec4-img').removeClass('ani-class');
    }
        
    //chart
    if ($(document).scrollTop() >= chart_top) {
        $('#chart').addClass('ani-chart-in');
    }
    else
    {
        $('#chart').removeClass('ani-chart-in');
    }

    //sec6

    if ($(document).scrollTop() >= sec6_right) {
        $('#sec6-img').addClass('ani-sec6');
    }
    else
    {
        $('#sec6-img').removeClass('ani-sec6');
    }
}
