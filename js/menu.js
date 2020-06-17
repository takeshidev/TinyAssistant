(function ($) {
    // Initialize Slidebars
    var controller = new slidebars();
    controller.init();

    // Toggle Slidebars
    $('.toggle-id-1').on('click', function (event) {
        // Stop default action and bubbling
        event.stopPropagation();
        event.preventDefault();
    });
    // Toggle the Slidebar with id 'id-1'
    $('.js-toggle-left-slidebar').on('click', function (event) {
        event.stopPropagation();
        controller.toggle('id-1');
    });

})(jQuery);