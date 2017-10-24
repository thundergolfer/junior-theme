/* utility function for returning a promise that resolves after a delay */
function delay(t) {
    return new Promise(function (resolve) {
        setTimeout(resolve, t);
    });
}

Promise.delay = function (fn, t) {
    /* fn is an optional argument */
    if (!t) {
        t = fn;
        fn = function () {};
    }
    return delay(t).then(fn);
}

Promise.prototype.delay = function (fn, t) {
    /* return chained promise */
    return this.then(function () {
        return Promise.delay(fn, t);
    });

}

function black() {
  $(".site, .post, body").css({
  '-webkit-filter': 'invert(1)',
  'filter': 'invert(1)'
  });

  return this;
}

function white() {
  $(".site, .post, body").css({
  '-webkit-filter': 'invert(0)',
  'filter': 'invert(0)'
  });

  return this;
}

function flicker() {
  console.log("flicker")
  Promise.delay(black, 1000).delay(white, 70).delay(black, 70).delay(white, 70).delay(black, 100).delay(white, 30000);
  console.log("finished");
}

(function(){
  /* The screen stays white for (Interval - (how long flicker() takes)). Here that's about 40 seconds. */
  myInterval = setInterval( "flicker()", 70400 );
})();

console.log("Hay");
