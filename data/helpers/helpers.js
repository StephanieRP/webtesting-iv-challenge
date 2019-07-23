const db = require("../dbConfig.js");

module.exports = {
  addAnimal,
  getAnimals,
  removeAnimal
};

////********//////
// Post Request
////********//////

function addAnimal(animal) {
  return db("animals").insert(animal);
}

////********//////
// Get Request
////********//////

function getAnimals(animal) {
  return db("animals");
}

////********//////
// Delete Request
////********//////

function removeAnimal(id) {
  return db("animals")
    .where({ id })
    .del();
}
