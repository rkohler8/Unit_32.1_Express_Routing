const { getMean, getMedian, getMode, stringToNumArray } = require('./helpers');

describe("getMean", function() {
  it("gets the mean of a comma-separated list of numbers", function() {
      expect(getMean([1, 2, 3, 4, 5])).toBe(3);
  })
})

describe("getMedian", function() {
  it("gets the median of a comma-separated list of numbers", function() {
      expect(getMedian([1, 2, 4, 5, 6])).toBe(4);
  })
})

describe("getMode", function() {
  it("gets the mode of a comma-separated list of numbers", function() {
      expect(getMode([1, 2, 2, 3, 5])).toBe(2);
  })
})

describe("stringToNumArray", function() {
  it("converts a string to equivalent numbers if all are valid numbers", function() {
      expect(stringToNumArray(['1', '2', '3', '4'])).toStrictEqual([1, 2, 3, 4]);
  })
})