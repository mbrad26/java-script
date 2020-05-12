var myCatSpeak = function () {
  return 'I have ' + this.legs + ' legs! Meow!';
};

var cat = { legs: 4 };

cat.speak = myCatSpeak;

console.log(cat.speak()); // I have 4 legs! Meow!
