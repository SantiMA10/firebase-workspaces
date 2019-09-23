import { sayMyName } from "../src/sayMyName";

describe("index", () => {
  describe("#sayMyName", () => {
    it("should return my name ('Santi')", () => {
      expect(sayMyName()).toEqual("Santi");
    });
  });
});
