function counter(firstN) {
  var n = firstN;
  return function () {
    n = n + 1;
    return n;
  };
}

var counter = counter(5);
console.log(counter());
console.log(counter());
console.log(counter());
