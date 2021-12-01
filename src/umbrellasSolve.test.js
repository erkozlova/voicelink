const { umbrellasSolve } = require("./umbrellasSolve");

describe("Umbrellas <= People", () => {
  it("Umbrellas = 1 && People = 5", () => {
    const received = umbrellasSolve(1, 5);
    expect(received).toStrictEqual([0, 0]);
  });
});

describe("Umbrellas > People && umbrellas count is even", () => {
  it("Umbrellas = 2 && People = 1", () => {
    const received = umbrellasSolve(2, 1);
    expect(received).toStrictEqual([0, 1]);
  });

  it("Umbrellas = 6 && People = 4", () => {
    const received = umbrellasSolve(6, 4);
    expect(received).toStrictEqual([0, 0]);
  });

  it("Umbrellas = 20 && People = 2", () => {
    const received = umbrellasSolve(20, 2);
    expect(received).toStrictEqual([4, 5]);
  });

  it("Umbrellas = 20 && People = 3", () => {
    const received = umbrellasSolve(20, 3);
    expect(received).toStrictEqual([4, 4]);
  });
});

describe("Umbrellas > People && umbrellas count is odd", () => {
  it("Umbrellas = 1 && People = 1", () => {
    const received = umbrellasSolve(1, 1);
    expect(received).toStrictEqual([0, 0]);
  });

  it("Umbrellas = 7 && People = 3", () => {
    const received = umbrellasSolve(7, 1);
    expect(received).toStrictEqual([3, 3]);
  });

  it("Umbrellas = 7 && People = 3", () => {
    const received = umbrellasSolve(7, 3);
    expect(received).toStrictEqual([1, 1]);
  });

  it("Umbrellas = 9 && People = 1", () => {
    const received = umbrellasSolve(9, 1);
    expect(received).toStrictEqual([4, 4]);
  });

  it("Umbrellas = 9 && People = 2", () => {
    const received = umbrellasSolve(9, 2);
    expect(received).toStrictEqual([1, 2]);
  });


  it("Umbrellas = 21 && People = 4", () => {
    const received = umbrellasSolve(21, 4);
    expect(received).toStrictEqual([2, 2]);
  });

  it("Umbrellas = 21 && People = 5", () => {
    const received = umbrellasSolve(21, 5);
    expect(received).toStrictEqual([2, 2]);
  });

  it("Umbrellas = 21 && People = 6", () => {
    const received = umbrellasSolve(21, 6);
    expect(received).toStrictEqual([1, 2]);
  });
});

