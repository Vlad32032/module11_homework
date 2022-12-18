import { getMonth } from "../index.js";

describe("test getMonth", () => {
  it("test getMonth 1", () => {
    expect(getMonth(1)).toBe('январь');
  }),
  it("test getMonth 2", () => {
    expect(getMonth(2)).toBe('февраль');
  }),
  it("test getMonth 3", () => {
    expect(getMonth(3)).toBe('март');
  }),
  it("test getMonth 4", () => {
    expect(getMonth(4)).toBe('апрель');
  }),
  it("test getMonth 5", () => {
    expect(getMonth(5)).toBe('май');
  }),
  it("test getMonth 6", () => {
    expect(getMonth(6)).toBe('июнь');
  }),
  it("test getMonth 7", () => {
    expect(getMonth(7)).toBe('июль');
  }),
  it("test getMonth 8", () => {
    expect(getMonth(8)).toBe('август');
  }),
  it("test getMonth 9", () => {
    expect(getMonth(9)).toBe('сентябрь');
  }),
  it("test getMonth 10", () => {
    expect(getMonth(10)).toBe('октябрь');
  }),
  it("test getMonth 11", () => {
    expect(getMonth(11)).toBe('ноябрь');
  }),
  it("test getMonth 12", () => {
    expect(getMonth(12)).toBe('декабрь');
  }),
  it("test getMonth 13", () => {
    expect(getMonth(13)).toBe('неизвестно');
  }),
  it("test getMonth str", () => {
    expect(getMonth("13")).toBe('неизвестно');
  }),
  it("test getMonth undefined", () => {
    expect(getMonth(undefined)).toBe('неизвестно');
  });
});
