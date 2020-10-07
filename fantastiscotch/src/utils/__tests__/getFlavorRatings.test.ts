import flavorRatingHelper from "../flavorRatingHelper";
import FlavorNames from "../../types/FlavorNames";

describe("flavorRatingHelper tests", () => {
  test("All values mapped", () => {
    expect(
      flavorRatingHelper({
        saltyRating: 1,
        smokeRating: 1,
        spicyRating: 1,
        sweetRating: 1,
        toffeeRating: 1,
        peatRating: 1,
        finishRating: 1,
        floralRating: 1,
        herbalRating: 1,
        maltyRating: 1,
        darkFruitRating: 1,
        balanceRating: 1,
        bodyRating: 1,
        citrusRating: 1,
        acidicRating: 1
      })
    ).toHaveLength(Object.values(FlavorNames).length);
  });

  test("Only returns values that are non-null", () => {
    expect(
      flavorRatingHelper({
        saltyRating: null,
        smokeRating: 1,
        spicyRating: null,
        sweetRating: 1,
        toffeeRating: null,
        peatRating: null,
        finishRating: 1,
        floralRating: null,
        herbalRating: 1,
        maltyRating: null,
        darkFruitRating: 1,
        balanceRating: 1,
        bodyRating: null,
        citrusRating: 1,
        acidicRating: 1
      })
    ).toHaveLength(8);
  });
});
