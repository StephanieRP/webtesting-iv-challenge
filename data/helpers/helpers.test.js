const db = require("../dbConfig.js");
const animals = require("../helpers/helpers.js");

describe("animals database", () => {
  afterEach(async () => {
    await db("animals").truncate();
  });

  describe("confirming getAnimals() works", () => {
    it("should show all the current animals in database", async () => {
      await animals.getAnimals();

      const animal = await db("animals");

      expect(animal).toHaveLength(1);
    });
  });

  describe("confirming addAnimals() works", () => {
    it("should add new animal to database", async () => {
      await animals.addAnimal({ name: "cat", type: "mammal" });

      const animal = await db("animals");

      expect(animal).toHaveLength(1);
    });
  });

  describe("confirming removeAnimal() works", () => {
    it("should remove an animal based on id from database", async () => {
      let id = 1;
      await animals.removeAnimal(id);
      const animal = await db("animals");
      expect(animal).toHaveLength(0);
    });
  });
});
