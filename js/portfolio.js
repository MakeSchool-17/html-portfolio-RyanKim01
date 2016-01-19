$( document ).ready(function() {
  $("#gallery").justifiedGallery({
    rowHeight : 300,
    // lastRow : 'justify',
    margins : 10,
    randomize: true
  }).on('jg.complete', function () {
      $('#gallery a').swipebox({
        hideBarsDelay : false,
        hideCloseButtonOnMobile : false
      });
  });

  $("#gallery2").justifiedGallery({
    rowHeight : 300,
    margins : 10,
    randomize: true
  }).on('jg.complete', function () {
      $('#gallery2 a').swipebox({
        hideBarsDelay : false,
        hideCloseButtonOnMobile : false
      });
  });
});
