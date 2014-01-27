// Move a group on an isometric axis
function move(element, xAxis, yAxis, px, duration, delay, callback, anim) {

  var x = px,
      y = px/2;

  (yAxis == 'top') ? y = -y : y = y;
  (xAxis == 'right') ? x = x : x = -x;

  if (element.matrix != undefined) {
    var matrix = element.matrix.add(element.matrix.a, 0, 0, element.matrix.d, x, y);
    element.animate({transform: matrix.toTransformString()}, duration, anim);
  }
  else {
    element.animate({transform: "t"+[x, y]}, duration, anim);
  }

  if (delay != 'undefined' && typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
}

function moveWithoutMatrix(element, xAxis, yAxis, px, duration, delay, callback) {

  var x = px,
      y = px/2;

  (yAxis == 'top') ? y = -y : y = y;
  (xAxis == 'right') ? x = x : x = -x;

  element.animate({transform: "t"+[x, y]}, duration);

  if (delay != 'undefined' && typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
}


function moveTop(element, px, duration, delay, callback) {

  var x = px,
      y = px/2;

  if (element.matrix != undefined) {
    var matrix = element.matrix.add(element.matrix.a, 0, 0, element.matrix.d, 0, y-px);
    element.animate({transform: matrix.toTransformString()}, duration);
  }
  else {
    element.animate({transform: "t"+[0, y-px]}, duration);
  }
}

// Move element with a bounce
function moveWithBounce(element, xAxis, yAxis, px, duration, delay, callback) {

  var px2 = 40,
      px3 = 20;

  moveWithoutMatrix(element, xAxis, yAxis, px+15, duration - 120, duration - 120, function(){
    moveWithoutMatrix(element, xAxis, yAxis, px-15, 60, 60, function(){
      moveWithoutMatrix(element, xAxis, yAxis, px, 60);
    });
  });

  if (delay != 'undefined' && typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
}

// Trigger bounce effect on svg element (fill-opacity)
function bounce(element, duration, delay, callback) {

    element.attr({transform: "s0.4,0.4"});
    element.animate({'fill-opacity':1,transform:"s1,1,0,0"}, duration, mina.elastic);

  if (typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
}

// Trigger bounce effect on svg element (opacity)
function alterBounce(element, duration, delay, callback) {

    element.attr({transform: "s0.4, 0.4"});
    element.animate({'opacity':1,transform:"s1,1"}, duration, mina.elastic);

  if (typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
}

// Trigger pulse effect on the scale
function scalePulse(element, scale, duration, delay, callback) {
  var pulseDuration = duration*2;

    element.animate({transform:"t0s"+scale}, duration, function() {
      element.animate({transform:"t0s1"}, duration);
    });

  var interval = setInterval(function() {
    element.animate({transform:"t0s"+scale}, duration, function() {
      element.animate({transform:"t0s1"}, duration);
    });
  }, pulseDuration);

  if (typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }

  return interval;
}

// Trigger pulse effect on the scale
function scale(element, scale, duration, delay, callback) {

  element.animate({'opacity':1, transform:"t0s"+scale}, duration);

  if (typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
}

// Trigger pulse effect on the color
function colorPulse(element, newColor, duration, delay, callback) {
  var pulseDuration = duration*2,
      color = element.attr('fill');

  element.animate({fill: newColor}, duration, function() {
    element.animate({fill: color}, duration);
  });

  var interval = setInterval(function() {
    element.animate({fill: newColor}, duration, function() {
      element.animate({fill: color}, duration);
    });
  }, pulseDuration);

  if (typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
  return interval;
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
function bounceAllElements(collection, duration, delay, callback) {
    j = 0;
    function cycle() {
        bounce(collection[j], duration);
        j++;
        if (j < collection.length) {
          setTimeout(cycle, 10);
        }
    }
    cycle();

  if (typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
}

function roll(element, duration, amp) {
  element.animate({transform:"t0, "+-amp}, duration, mina.elastic);
}

function drawPath(s, el, duration, delay, anim, callback) {

    var path = s.path(el.attr('d'));
    var l = path.getTotalLength();

    path.attr({"stroke-dasharray": l+" "+l,
      'stroke-dashoffset': l, 
      fill: 'none', 
      strokeWidth: el.attr('stroke-width'),
      stroke: el.attr('stroke') });

    path.animate({'stroke-dashoffset': 0}, duration, anim);

    if (typeof callback !== 'undefined') {
     window.setTimeout(callback, delay);
    }

    return path;
}

function drawLine(s, el, duration, delay, anim, callback) {

    var line = s.line(el.attr('x2'), el.attr('y2'), el.attr('x2'), el.attr('y2'));

    line.attr({"stroke-dasharray": el.attr('stroke-dasharray'),
      fill: 'none', 
      strokeWidth: el.attr('stroke-width'),
      stroke: el.attr('stroke') });

    line.animate({'x1': el.attr('x1'), 'y1': el.attr('y1')}, duration, anim);

    if (typeof callback !== 'undefined') {
     window.setTimeout(callback, delay);
    }

    return line;
}

function lineDistance( x1, y1, x2, y2 ) {

  var xs = 0;
  var ys = 0;
 
  xs = x2 - x1;
  xs = xs * xs;
 
  ys = y2 - y1;
  ys = ys * ys;
 
  return Math.sqrt( xs + ys );
}


function showCheckmark(el) {

  $('li path', el).each(function(i){
      $(this).css('-webkit-transition-delay', i*0.3+'s');
  });
  el.addClass('checked');
}
