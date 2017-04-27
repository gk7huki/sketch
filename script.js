var n = 16;

$(document).ready(function() {
  init();
  $reset = $('#reset');
  $reset.click(function() {
    var size = prompt("Enter the grid size (1-100)", "16");
    if (size != null && size >= 1 && size <= 100) {
      n = size;
      init();
    }
  });
});

function init() {
  $container = $('#container');
  $container.empty();
  var size = 100 / n;
  for (var i = 0; i < n*n; i++) {
    $container.append('<div class="box"></div>');
  }
  $div = $('.box');
  $div.css('width', size+'%');
  $div.css('height', size+'%');
  $div.data('change-color', 'yes');
  $div.hover(mouseIn, mouseOut);
}

function mouseIn() {
  $this = $(this);
  if ($this.data('change-color') == 'yes') {
    var r = Math.floor((Math.random()*256));
    var g = Math.floor((Math.random()*256));
    var b = Math.floor((Math.random()*256));
    $this.css('background-color', 'rgb('+r+','+g+','+b+')');
    $this.data('change-color', 'no');
  }
  //$this.css('background-color', '#000');
  //$this.css('transition', 'none');
}

function mouseOut() {
  //$this = $(this);
  //$this.css('background-color', '#ddd');
  //$this.css('transition', 'background-color 1s');
}
