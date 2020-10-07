import ScotchColor from "./ScotchColor";
import { RatingValue } from "./RatingValue";
type NullableNumber = number | null;

export default interface JournalEntry {
  distiller: string;
  origin: string;
  age: NullableNumber;
  price: NullableNumber;
  date: string;
  rating: RatingValue;
  notes: string;
  color: ScotchColor | null;
  sampledFrom: NullableNumber;

  finishRating: NullableNumber;
  acidicRating: NullableNumber;
  smokeRating: NullableNumber;
  maltyRating: NullableNumber;
  floralRating: NullableNumber;
  balanceRating: NullableNumber;
  saltyRating: NullableNumber;
  peatRating: NullableNumber;
  herbalRating: NullableNumber;
  citrusRating: NullableNumber;
  bodyRating: NullableNumber;
  sweetRating: NullableNumber;
  toffeeRating: NullableNumber;
  spicyRating: NullableNumber;
  darkFruitRating: NullableNumber;

  proof: NullableNumber;
  tryAgain: boolean | null;
  reasonToNot: string;
}

export const defaultEntry: JournalEntry = {
  acidicRating: null,
  age: null,
  balanceRating: null,
  bodyRating: null,
  citrusRating: null,
  color: null,
  darkFruitRating: null,
  date: "",
  distiller: "",
  finishRating: null,
  floralRating: null,
  herbalRating: null,
  maltyRating: null,
  notes: "",
  origin: "",
  peatRating: null,
  price: null,
  proof: null,
  rating: 0,
  reasonToNot: "",
  saltyRating: null,
  smokeRating: null,
  spicyRating: null,
  sweetRating: null,
  toffeeRating: null,
  tryAgain: null,
  sampledFrom: null
};
