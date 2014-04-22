console.log('\'Allo \'Allo!');

$(".smooth").bind("click", function(e) {

  e.preventDefault();
  var location = $(this).attr("href")

  $('html, body').animate({
    scrollTop: $(location).offset().top - 68
  }, 1000);

});

$('.boom').click(function(e) {
  e.preventDefault();
  var location = $(this).attr("href")

  $('.personal-page').toggleClass("hidden");
  $('html, body').animate({
    scrollTop: $(location).offset().top - 70
  }, 1000);
});

$('.back').click(function() {
  $('.personal-page').toggleClass("hidden");
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
})