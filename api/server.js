const express = require("express");

const db = require("../data/helpers/helpers.js");

const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json({ api: "running" });
});

server.get("/animals", async (req, res) => {
  const animals = await db.getAnimals();

  res.status(200).json(animals);
});

//Post request to add new animal --> /animals
server.post("/animals", async (req, res) => {
  const { body } = req;
  try {
    const animal = await db.addAnimal(body);
    res.status(201).json(animal);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete request to delete animal --> /:id
server.delete("/animals/:id", async (req, res) => {
  try {
    const animal = await db.removeAnimal(req.params.id);
    animal > 0
      ? res.status(204).end()
      : res.status(404).json({
          message: "The animal with the specified ID does not exist."
        });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "The animal could not be removed"
    });
  }
});

module.exports = server;
