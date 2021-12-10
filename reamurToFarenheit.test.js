const Convert = require("./Convert");

test("convert temp from reamur to farenheit", () => {
  const konv = new Convert();
  expect(konv.fromReamur("far", 100)).toBe(257);
});
