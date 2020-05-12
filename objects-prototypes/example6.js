var cat = {
  speak: function () {
    return 'I have ' + this.legs + ' legs! Meow!';
  },

  legs: 4,
};

console.log(cat.speak);
cat.legs = 5;
console.log(cat.speak());
