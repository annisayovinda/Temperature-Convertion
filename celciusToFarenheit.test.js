const Convert = require("./Convert");

test("convert temp from celcius to farenheit", () => {
  const konv = new Convert();
  expect(konv.fromCelcius("far", 50)).toBe(122);
});
