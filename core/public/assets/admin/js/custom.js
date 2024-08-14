'use strict';

$('.table-responsive').on('click', 'button[data-bs-toggle="dropdown"]', function (e) {
  const { top, left } = $(this).next(".dropdown-menu")[0].getBoundingClientRect();
  $(this).next(".dropdown-menu").css({
    position: "fixed",
    inset: "unset",
    transform: "unset",
    top: top + "px",
    left: left + "px",
  });
});

if ($('.table-responsive').length) {
  $(window).on('scroll', function (e) {
    $('.table-responsive .dropdown-menu').removeClass('show');
    $('.table-responsive button[data-bs-toggle="dropdown"]').removeClass('show');
  });
}
