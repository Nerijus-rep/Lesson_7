var Animal = function (species) {
  this.species = species;
};

Animal.prototype.walk = function () {
  console.log("Labai daug bėgioja!");
};

Animal.prototype.eat = function () {
  console.log("Visada alkanas!");
};

Animal.prototype.barks = function () {
  console.log("Garsiai loja!");
};



function cat(species, name, subject) {
  Animal.call(this, species);
  this.name = name;
  this.subject = subject;
};

function dog(species, name, subject) {
  Animal.call(this, species);
  this.name = name;
  this.subject = subject;
};

cat.prototype = Object.create(Animal.prototype);
cat.prototype.constructor = cat;

dog.prototype = Object.create(Animal.prototype);
dog.prototype.constructor = dog;


Animal.prototype.do = function () {
  console.log("Šio gyvūno rūšis yra " + this.species + ". Jo vardas yra "
    + this.name + ". Jis visada " + this.subject + ".");
};

// Example usage:
var cat1 = new cat("Katinas", "Micius", "knarkia");
cat1.do();
cat1.walk();

var cat2 = new cat("Katinas", "Garfildas", "burzgia");
cat2.do();
cat2.eat();

var dog1 = new dog("Šuo", "Reksas", "loja");
dog1.do();
dog1.barks();
dog1.eat();

// Check that instanceof works correctly
console.log(cat1 instanceof Animal); // true
console.log(cat1 instanceof cat); // true

console.log(cat2 instanceof Animal); // true
console.log(cat2 instanceof cat); // true

console.log(dog1 instanceof Animal); // true
console.log(dog1 instanceof dog); // true