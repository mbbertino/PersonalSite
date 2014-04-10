console.log('\'Allo \'Allo!');

$(".smooth").bind("click", function(e) {

  e.preventDefault();
  var location = $(this).attr("href")

  $('html, body').animate({
    scrollTop: $(location).offset().top - 68
  }, 1000);

});

$('.boom').click(function() {
  $('.wrapper').toggleClass("hidden");
  $('.personal-page').toggleClass("hidden");
});

$('.back').click(function() {
  $('.wrapper').toggleClass("hidden");
  $('.personal-page').toggleClass("hidden");
})