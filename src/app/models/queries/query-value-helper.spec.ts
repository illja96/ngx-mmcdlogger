import { QueryValueHelper } from "./query-value-helper";

describe("QueryValueHelper.uint16", () => {
  it("[0x00]", () => {
    expect(() => QueryValueHelper.uint16([0x00])).toThrowError();
  });

  it("[0x00, 0x00]", () => {
    const actual = QueryValueHelper.uint16([0x00, 0x00]);
    const expected = 0x0000;

    expect(actual).toEqual(expected);
  });

  it("[0x00, 0xFF]", () => {
    const actual = QueryValueHelper.uint16([0x00, 0xFF]);
    const expected = 0xFF00;

    expect(actual).toEqual(expected);
  });

  it("[0x0F, 0x0F]", () => {
    const actual = QueryValueHelper.uint16([0x0F, 0x0F]);
    const expected = 0x0F0F;

    expect(actual).toEqual(expected);
  });

  it("[0xF0, 0xF0]", () => {
    const actual = QueryValueHelper.uint16([0xF0, 0xF0]);
    const expected = 0xF0F0;

    expect(actual).toEqual(expected);
  });

  it("[0xFF, 0x00]", () => {
    const actual = QueryValueHelper.uint16([0xFF, 0x00]);
    const expected = 0x00FF;

    expect(actual).toEqual(expected);
  });

  it("[0xFF, 0xFF]", () => {
    const actual = QueryValueHelper.uint16([0xFF, 0xFF]);
    const expected = 0xFFFF;

    expect(actual).toEqual(expected);
  });

  it("[0x00, 0x00, 0x00]", () => {
    expect(() => QueryValueHelper.uint16([0x00, 0x00, 0x00])).toThrowError();
  });
});

describe("QueryValueHelper.uint24", () => {
  it("[0x00, 0x00]", () => {
    expect(() => QueryValueHelper.uint24([0x00, 0x00])).toThrowError();
  });

  it("[0x00, 0x00, 0x00]", () => {
    const actual = QueryValueHelper.uint24([0x00, 0x00, 0x00]);
    const expected = 0x000000;

    expect(actual).toEqual(expected);
  });

  it("[0xFF, 0xFF, 0xFF]", () => {
    const actual = QueryValueHelper.uint24([0xFF, 0xFF, 0xFF]);
    const expected = 0xFFFFFF;

    expect(actual).toEqual(expected);
  });

  it("[0x00, 0x00, 0x00, 0x00]", () => {
    expect(() => QueryValueHelper.uint24([0x00, 0x00, 0x00, 0x00])).toThrowError();
  });
});

describe("QueryValueHelper.uintToBitArray", () => {
  it("0x00 - 1, 8", () => {
    expect(() => QueryValueHelper.uintToBitArray(0x00 - 1, 8)).toThrowError();
  });

  it("0x00, 8", () => {
    const actual = QueryValueHelper.uintToBitArray(0x00, 8);
    const expected = [false, false, false, false, false, false, false, false];

    expect(actual).toEqual(expected);
  });

  it("0xFF, 8", () => {
    const actual = QueryValueHelper.uintToBitArray(0xFF, 8);
    const expected = [true, true, true, true, true, true, true, true];

    expect(actual).toEqual(expected);
  });

  it("0x00FF, 8", () => {
    const actual = QueryValueHelper.uintToBitArray(0x00FF, 8);
    const expected = [true, true, true, true, true, true, true, true];

    expect(actual).toEqual(expected);
  });

  it("0x00FF, 16", () => {
    const actual = QueryValueHelper.uintToBitArray(0x00FF, 16);
    const expected = [false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true];

    expect(actual).toEqual(expected);
  });

  it("0F0F, 16", () => {
    const actual = QueryValueHelper.uintToBitArray(0x0F0F, 16);
    const expected = [false, false, false, false, true, true, true, true, false, false, false, false, true, true, true, true];

    expect(actual).toEqual(expected);
  });

  it("0xF0F0, 16", () => {
    const actual = QueryValueHelper.uintToBitArray(0xF0F0, 16);
    const expected = [true, true, true, true, false, false, false, false, true, true, true, true, false, false, false, false];

    expect(actual).toEqual(expected);
  });

  it("0xFF00, 16", () => {
    const actual = QueryValueHelper.uintToBitArray(0xFF00, 16);
    const expected = [true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false];

    expect(actual).toEqual(expected);
  });

  it("0xFFFF, 16", () => {
    const actual = QueryValueHelper.uintToBitArray(0xFFFF, 16);
    const expected = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];

    expect(actual).toEqual(expected);
  });

  it("0xFFFFFF, 24", () => {
    const actual = QueryValueHelper.uintToBitArray(0xFFFFFF, 24);
    const expected = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];

    expect(actual).toEqual(expected);
  });
});
