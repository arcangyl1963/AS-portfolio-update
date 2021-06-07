
$(document).ready (function () {
    // sticky navbar function
    var stickyNavTop = $('.topnav').offset().top;
    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {
            $('.topnav').addClass('sticky');
        } else {
            $('.topnav').removeClass('sticky');
        }
    };
    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
    // toggle and show/hide functions for the work projects section button behavior
    $('#btnJS').click(function(event){
        $('#jscript').toggle();
        $('#jsName1').toggle();
    });
    $('#btnHC').click(function(event){
        $('#htmlCSS1').toggle();
        $('#htmlCSS2').toggle();
        $('#htmName1').toggle();
        $('#htmName2').toggle();
    });
    $('#btnProj').click(function(event){
        $('#projects').toggle();
        $('.projTitle').toggle();
    });
    // functions for the active navbar button behavior
    $('#aboutBtn').click(function () {
        $('#bio').show();
        $('#work').hide();
        $(this).css('background-color', '#101d94');
        $('#workBtn').css('background-color', '');
        $('#contactBtn').css('background-color', '');
        $('#resumeBtn').css('background-color', '');
        $('#inBtn').css('background-color', '');
    });
    $('#workBtn').click(function () {
        $('#bio').hide();
        $('#work').show();
       $(this).css('background-color', '#101d94');
        $('#aboutBtn').css('background-color', '');
        $('#contactBtn').css('background-color', '');
        $('#resumeBtn').css('background-color', '');
        $('#inBtn').css('background-color', '');
    });
    $('#contactBtn').click(function () {
        $('#bio').hide();
        $('#work').show();
        $(this).css('background-color', '#101d94');
        $('#aboutBtn').css('background-color', '');
        $('#workBtn').css('background-color', '');
        $('#resumeBtn').css('background-color', '');
        $('#inBtn').css('background-color', '');
    });
    $('#resumeBtn').click(function () {
        $('#bio').hide();
        $('#work').show();
        $(this).css('background-color', '#101d94');
        $('#inBtn').css('background-color', '');
        $('#aboutBtn').css('background-color', '');
        $('#workBtn').css('background-color', '');
        $('#contactBtn').css('background-color', '');
    });
    $('#inBtn').click(function () {
        $('#bio').hide();
        $('#work').show();
        $(this).css('background-color', '#101d94');
        $('#resumeBtn').css('background-color', '');
        $('#aboutBtn').css('background-color', '');
        $('#workBtn').css('background-color', '');
        $('#contactBtn').css('background-color', '');
    });
})

   