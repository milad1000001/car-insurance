import { describe, expect, it } from "vitest";
import { calculateInsurancePrice } from "./insurance";

describe("calculatingInsurance", () => {
  it("calculated insurance for current year", () => {
    expect(calculateInsurancePrice(new Date().toISOString())).toBe(1_000_000);
  });

  it("calculated insurance for 3 years", () => {
    const expected = Math.round(1_000_000 * (1 + 0.12) ** 3);
    expect(
      calculateInsurancePrice(
        `${new Date().getFullYear() - 3}-01-01T00:00:00.000Z`
      )
    ).toBe(expected);
  });
});
