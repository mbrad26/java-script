var sayMeow = function () {
  return 'Meow!';
};

console.log(sayMeow());

var cat = { legs: 4 };

cat.speak = sayMeow;

console.log(cat.speak());
