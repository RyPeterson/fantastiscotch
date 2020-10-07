import JournalEntry from "./JournalEntry";
import { RatingValue } from "./RatingValue";
import ScotchColor from "./ScotchColor";
import { CheckBoxItem } from "../components/CheckBoxGroup";
import FlavorNames from "./FlavorNames";

export default interface JournalFormProps extends JournalEntry {
  onDistillerChanged(distiller: string): void;
  onOriginChanged(origin: string): void;
  onAgeChanged(age: number): void;
  onDateChanged(date: string): void;
  onRatingChanged(rating: RatingValue): void;
  onNotesChanged(notes: string): void;
  onColorChanged(color: ScotchColor): void;
  onSampleFromChanged(sampledFrom: CheckBoxItem): void;
  onFlavorRatingChanged(option: FlavorNames, value: number): void;
  onProofChanged(proof: number): void;
  onTryAgainChanged(tryAgain: boolean): void;
  onReasonToNotChanged(reasonToNot: string): void;
  onPriceChanged(price: number): void;
}
