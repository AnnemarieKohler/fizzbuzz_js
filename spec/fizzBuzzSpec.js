describe("FizzBuzz", function() {
  it("should return fizz for all multiples of 3", function() {
    expect(FizzBuzz(3)).toEqual("Fizz");
  });

  it("should return buzz for all multiples of 5", function() {
    expect(FizzBuzz(5)).toEqual("Buzz");
  });

  it("should return FizzBuzz for all multiples of 15", function() {
    expect(FizzBuzz(15)).toEqual("FizzBuzz");
  });

  it("should return number for anything else", function() {
    expect(FizzBuzz(1)).toEqual(1);
  });
});
