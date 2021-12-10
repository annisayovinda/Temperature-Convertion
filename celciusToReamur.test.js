const Convert = require("./Convert");

test("convert temp from celcius to reamur", () => {
  const konv = new Convert();
  expect(konv.fromCelcius("rea", 10)).toBe(8);
});
