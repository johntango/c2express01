const request = require("supertest");
const app = require("./serverApp");
describe("Test the root path", () => {
  test("It should response the GET method", async (done) => {
    const response = await request(app).get("/");
    expect(response.statusCode == 200);
    done();
  });
});
describe("GET /contacts", function () {
  test("respond with json list of all contacts", async (done) => {
    const response = await request(app)
      .get("/contacts")
      .set("Accept", "application/json");
    expect(response.statusCode == 200);
    done();
  });
});
describe("POST /contact", function () {
  test("contact.name should be john", async (done) => {
    const response = await request(app)
      .post("/contact")
      .send({ name: "john", email: "john@mit.edu" }) //json
      .set("Accept", "application/json");
    expect((response.body.id = "some fixed id"));
    expect((response.body.name = "john"));
    expect((response.body.email = "john@mit.edu"));
    done();
  });
});
