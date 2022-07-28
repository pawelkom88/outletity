import "@testing-library/jest-dom";
import {sortByPrice, sortByTitle, sortByCategory} from "utilities/helpers";

describe("sortByPrice function should", () => {
  const originalArray = [
    {name: "b", price: 13},
    {name: "d", price: 15},
    {name: "a", price: 12},
    {name: "c", price: 14},
  ];

  const expectedAscendingArray = [
    {name: "a", price: 12},
    {name: "b", price: 13},
    {name: "c", price: 14},
    {name: "d", price: 15},
  ];

  const expectedDescendingArray = [
    {name: "d", price: 15},
    {name: "c", price: 14},
    {name: "b", price: 13},
    {name: "a", price: 12},
  ];

  test("sort items in ascending order", () => {
    const actualValueAsc = sortByPrice(originalArray);
    expect(actualValueAsc).toEqual(expectedAscendingArray);
  });

  test("sort items in descending order", () => {
    const actualValueDesc = sortByPrice(originalArray, "desc");
    expect(actualValueDesc).toEqual(expectedDescendingArray);
  });

  test("expect last number to be 15", () => {
    const actualValueAsc = sortByPrice(originalArray);
    const {price} = actualValueAsc[actualValueAsc.length - 1];
    expect(price).toBe(15);
  });

  test("expect first number to be 12", () => {
    const actualValueAsc = sortByPrice(originalArray);
    const {price} = actualValueAsc[0];
    expect(price).toBe(12);
  });
});

describe("sortByTitle should", () => {
  test("sort array elements alphabetically", () => {
    const originalArray = [{title: "hi"}, {title: "bye"}, {title: "hello"}];
    const expectedArray = [{title: "bye"}, {title: "hello"}, {title: "hi"}];

    const actualValue = sortByTitle(originalArray);
    expect(actualValue).toEqual(expectedArray);
  });
});

describe("sortByCategory should filter", () => {
  test("given category", () => {
    const originalArray = [{category: "books"}, {category: "cosmetics"}, {category: "food"}];
    const filteredArray = [{category: "books"}];
    const filteredArray1 = [{category: "cosmetics"}];
    const filteredArray2 = [{category: "food"}];

    const actualValue = sortByCategory(originalArray, "books");
    const actualValue1 = sortByCategory(originalArray, "cosmetics");
    const actualValue2 = sortByCategory(originalArray, "food");

    expect(actualValue).toEqual(filteredArray);
    expect(actualValue1).toEqual(filteredArray1);
    expect(actualValue2).toEqual(filteredArray2);
  });
});
