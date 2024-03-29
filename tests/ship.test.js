import Ship from "../src/ship";

describe("Test whether number of Hits increase correctly after each hits", () => {
  const myShip = new Ship();
  beforeEach(() => {
    myShip.hit();
  });

  it("returns 1", () => {
    expect(myShip.numberOfHits).toEqual(1);
  });

  it("returns 2", () => {
    expect(myShip.numberOfHits).toEqual(2);
  });

  it("returns 3", () => {
    expect(myShip.numberOfHits).toEqual(3);
  });
});

describe("Test the isSunk method", () => {
  const myShip = new Ship(2);
  const yourShip = new Ship(2);

  beforeEach(() => {
    myShip.hit(yourShip);
  });

  it("Should return false", () => {
    expect(myShip.isSunk()).toBe(false);
  });

  it("Should return true, because the length of yourShip is 0, therefore it sinks", () => {
    expect(myShip.isSunk()).toBe(true);
  });
});