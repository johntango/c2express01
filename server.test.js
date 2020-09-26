it("Gets the test endpoint", async (done) => {
  // Sends GET Request to /test endpoint
  const response = await request.get("/contacts");
  expect(response.status).toBe(200);
  expect(response.body.message).toBe("pass!");
  done();
});
