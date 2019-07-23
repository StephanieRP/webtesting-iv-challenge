const request = require("supertest");
const server = require("./server.js");

describe("server", () => {
  describe("GET /", () => {
    it("should return 200 OK that able to get data", () => {
      return request(server)
        .get("/")
        .expect(200);
    });

    it("using the async and await", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it("should return JSON using done callback", done => {
      request(server)
        .get("/")
        .then(res => {
          expect(res.type).toBe("application/json");
          done();
        });
    });

    it('should return { api: "running" }', () => {
      const expected = { api: "running" };
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body).toEqual(expected);
        });
    });
  });

  describe("POST /", () => {
    it("should return status code 201 when new animal added", async () => {
      let res = await request(server)
        .post("/animals")
        .send({ name: "dog", type: "mammal" });
      expect(res.status).toBe(201);
    });
  });

  describe("Delete /", () => {
    it("should return 204 No Content, when deleting data", async () => {
      let res = await request(server).delete("/animals/1");
      expect(res.status).toBe(204);
    });
  });
});
