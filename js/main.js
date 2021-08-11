
$(document).ready(function() {
    $(document).on('click', '.uk-hamburger', function () {
        $('.uk-hamburger').toggleClass('open')
        $('body').toggleClass('scroll-lock')
        $('.uk-menu').toggleClass('active');
    });
})