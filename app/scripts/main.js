console.log('\'Allo \'Allo!');

$('.thumbnail').hover(function() {
  $(this).children('.thumbcontent').toggleClass('hidden')
  $(this).css('cursor', 'pointer')
})