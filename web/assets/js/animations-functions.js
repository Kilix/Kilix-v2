// Move a group on an isometric axis
function move(element, xAxis, yAxis, px, duration, delay, callback) {

  var x = px,
      y = px/2;

  (yAxis == 'top') ? y = -y : y = y;
  (xAxis == 'right') ? x = x : x = -x;

  element.animate({transform: "t"+[x, y]}, duration);

  if (delay != 'undefined' && typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
}

// Move element with a boune
function moveWithBounce(element, xAxis, yAxis, px, duration, delay, callback) {

  var px2 = 40,
      px3 = 20;

  move(element, xAxis, yAxis, px+15, duration - 120, duration - 120, function(){
    move(element, xAxis, yAxis, px-15, 60, 60, function(){
      move(element, xAxis, yAxis, px, 60);
    });
  });

  if (delay != 'undefined' && typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
}

// Trigger bounce effect on svg element
function bounce(element, duration, delay, callback) {
    var x = element.getBBox().x;
    offset = x/2 + 25;

    element.attr({
      transform: "t"+offset+"s0.4, 0.4"
    });

    element.animate({'fill-opacity':1,transform:"t0s1,1,0,0"}, duration, mina.elastic);

  if (typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
}

// Trigger bounce effect on svg element
function removeWithBounce(element, duration, delay, callback) {
    var x = element.getBBox().x;
    offset = x/2 + 25;


    element.animate({'fill-opacity':0}, duration, mina.elastic);

  if (typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
}

// Trigger bounce effect on each svg element
function bounceAllElements(collection, duration) {
    j = 0;
    function cycle() {
        bounce(collection[j], duration);
        j++;
        if (j < collection.length) setTimeout(cycle, 10);
    }
    cycle();
}