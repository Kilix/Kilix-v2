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
    element.animate({transform: "t"+[x, y]}, duration);
  }

  if (delay != 'undefined' && typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
}

// Move a group on an isometric axis
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


  if (delay != 'undefined' && typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
  

}

// Trigger bounce effect on svg element
function bounce(element, duration, delay, callback) {
    var x = element.getBBox().x;
    offset = x/2 + 25;

    element.attr({
      transform: "t"+offset+"s0.8, 0.8"
    });

    element.animate({'fill-opacity':1,transform:"t0s1,1,0,0"}, duration, mina.elastic);

  if (typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }
}



// Trigger unBounce effect on svg element
function unBounce(element, duration, delay, callback) {

  if (element.matrix != undefined) {
    var matrix = element.matrix.scale(0, 0, element.matrix.a, element.matrix.d);
    element.animate({transform: matrix.toTransformString()}, duration, mina.elastic);
  }
  else {
    element.animate({transform: "t"+[0, 0]}, duration);
  }

  if (delay != 'undefined' && typeof callback !== 'undefined') {
    window.setTimeout(callback, delay);
  }

}

function giantify(element, factor, duration, delay, callback) {

    var elemMatrix = element.matrix.toTransformString();

    element.animate({'fill-opacity':1,transform: elemMatrix+"s"+factor+","+factor}, duration, mina.elastic);

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
    }1
    cycle();
}