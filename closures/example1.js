function makeCounter() {
  var n = 0;
  return function () {
    n = n + 1;
    return n;
  };
}

var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
