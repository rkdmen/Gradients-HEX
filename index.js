window.log = console.log;
$(document).ready(() => {
  /*https://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value*/
  var hexDigits = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
  //Function to convert rgb color to hex format
  function rgb2hex(rgb) {
    if (rgb === 'rgba(0, 0, 0, 0)') return '#fff'
    if (rgb) {
      log(rgb)
      rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }
  }

  function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
  }


  log('Colors by john kmj √');
  $('._color').hover(function(e) {
    let bgColor = $(this).css('background-color');
    let hex = rgb2hex(bgColor)
    $(this).html(hex)
  })

});