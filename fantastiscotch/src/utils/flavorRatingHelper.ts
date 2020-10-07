import { FlavorRating } from "../types/FlavorRating";
import JournalEntry from "../types/JournalEntry";
import FlavorNames from "../types/FlavorNames";

type EntryValues = Pick<
  JournalEntry,
  | "finishRating"
  | "acidicRating"
  | "smokeRating"
  | "maltyRating"
  | "floralRating"
  | "balanceRating"
  | "saltyRating"
  | "peatRating"
  | "herbalRating"
  | "citrusRating"
  | "bodyRating"
  | "sweetRating"
  | "toffeeRating"
  | "spicyRating"
  | "darkFruitRating"
>;

const valueMapper: Record<string, FlavorNames> = {
  acidicRating: FlavorNames.acidic,
  balanceRating: FlavorNames.balance,
  bodyRating: FlavorNames.body,
  citrusRating: FlavorNames.citrus,
  darkFruitRating: FlavorNames.darkFruit,
  finishRating: FlavorNames.finish,
  floralRating: FlavorNames.floral,
  herbalRating: FlavorNames.herbal,
  maltyRating: FlavorNames.malty,
  peatRating: FlavorNames.peat,
  saltyRating: FlavorNames.salty,
  smokeRating: FlavorNames.smoke,
  spicyRating: FlavorNames.spicy,
  sweetRating: FlavorNames.sweet,
  toffeeRating: FlavorNames.toffee
};

export function getFlavorRatings(
  values: EntryValues
): ReadonlyArray<FlavorRating> {
  return Object.entries(values)
    .map(([key, value]): FlavorRating | null => {
      const mapped = valueMapper[key];
      if (mapped && value !== null) {
        return {
          id: mapped,
          value
        };
      }
      return null;
    })
    .filter((value): value is FlavorRating => value !== null);
}

export function nameToField(name: FlavorNames): string | null {
  const entry = Object.entries(valueMapper).find(
    ([_, value]) => value === name
  );
  if (entry) {
    return entry[0];
  }
  return null;
}
