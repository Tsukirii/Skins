$(function () {
  var colorDefaultNick = '#ccc';
  $('.almond-title').each(function () {
    var $nick = $(this).find('span[style*="color:#"]:first');
    if($nick) {
      $(this).css('border-color', $nick.css('color'));
      $nick.css('color', colorDefaultNick);
    }
  });
});

$(function(){   
  setTimeout(function(){
        $('.post').each(function(){
        $(this).find('.postprofile-field-icon').appendTo($(this).find('.almond-img'));
        $(this).find('.postprofile-field-medallas').appendTo($(this).find('.almond-medals'));
    });  }, 1000);
});
