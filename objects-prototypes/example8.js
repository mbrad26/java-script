var Cat = function (legs) {
  this.legs = legs;
};

Cat.prototype.speak = function () {
  return 'I have ' + this.legs + ' legs! Meow!';
};

var cat = new Cat(4);
console.log(cat.speak()); // I have 4 legs! Meow!

var otherCat = new Cat(5);
console.log(otherCat.speak()); // I have 5 legs! Meow!

otherCat.legs = 6;
console.log(otherCat.speak()); // I have 6 legs! Meow!
