function Cat(legs) {
  this.legs = legs;
}

Cat.prototype.speak = function () {
  return 'I have ' + this.legs + ' legs! Meow!';
};

var cat = new Cat(4);
console.log(cat.speak()); // I have 4 legs! Meow!
