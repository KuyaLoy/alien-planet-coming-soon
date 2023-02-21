$(function(){
    var overlay = $('<div id="overlay"></div>');
    overlay.show();
    overlay.appendTo(document.body);
    $('.popup').show();
    $('.cls').click(function(){
      $('.popup').hide();
      overlay.appendTo(document.body).remove();
      $('main h1').removeClass('stop-animation');
      return false;
    });
    $('.x').click(function(){
      $('.popup').hide();
      overlay.appendTo(document.body).remove();
      return false;
    });
  });