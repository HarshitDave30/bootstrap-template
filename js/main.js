$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $(".navigationbar").addClass("sticky");
  } else {
    $(".navigationbar").removeClass("sticky");
  }
});
