const diary = [
  "cheese",
  "sour cream",
  "milk",
  "yoghurt",
  "icecream",
  "milkshake",
];

function logDairy() {
  for (const product of diary) {
    console.log(product);
  }
}

logDairy();

const animal = {
  canJump: true,
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

// function to console log the bird properties
function birdCan() {
  // using the for of on bird object
  for (const props of Object.keys(bird)) {
    console.log(props, ":", bird[props]);
  }
}

birdCan();

function animalCan() {
  for (const props in bird) {
    console.log(props, ":", bird[props]);
  }
}

animalCan();
