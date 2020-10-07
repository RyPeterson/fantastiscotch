import JournalEntry, { defaultEntry } from "../types/JournalEntry";
import JournalFormProps from "../types/JournalFormProps";
import { useState } from "react";
import FlavorNames from "../types/FlavorNames";

export default function useJournalEntryForm(
  editing?: JournalEntry | null
): JournalFormProps {
  const [entry, setEntry] = useState<JournalEntry>(
    editing ? { ...editing } : { ...defaultEntry }
  );

  const handleFlavorRatingChanged = (option: FlavorNames, value: number) => {
    setEntry(prev => {
      // Forgiveth my sins.
      switch (option) {
        case FlavorNames.finish:
          return { ...prev, finishRating: value };
        case FlavorNames.acidic:
          return { ...prev, acidicRating: value };
        case FlavorNames.smoke:
          return { ...prev, smokeRating: value };
        case FlavorNames.malty:
          return { ...prev, maltyRating: value };
        case FlavorNames.floral:
          return { ...prev, floralRating: value };
        case FlavorNames.balance:
          return { ...prev, balanceRating: value };
        case FlavorNames.salty:
          return { ...prev, saltyRating: value };
        case FlavorNames.peat:
          return { ...prev, peatRating: value };
        case FlavorNames.herbal:
          return { ...prev, herbalRating: value };
        case FlavorNames.citrus:
          return { ...prev, citrusRating: value };
        case FlavorNames.body:
          return { ...prev, bodyRating: value };
        case FlavorNames.sweet:
          return { ...prev, sweetRating: value };
        case FlavorNames.toffee:
          return { ...prev, toffeeRating: value };
        case FlavorNames.spicy:
          return { ...prev, spicyRating: value };
        case FlavorNames.darkFruit:
          return { ...prev, darkFruitRating: value };
        default:
          return prev;
      }
    });
  };

  return {
    ...entry,
    onDistillerChanged: distiller => {
      setEntry(prev => ({ ...prev, distiller }));
    },
    onOriginChanged: origin => setEntry(prev => ({ ...prev, origin })),
    onAgeChanged: age => setEntry(prev => ({ ...prev, age })),
    onDateChanged: date => setEntry(prev => ({ ...prev, date })),
    onRatingChanged: rating => setEntry(prev => ({ ...prev, rating })),
    onNotesChanged: notes => setEntry(prev => ({ ...prev, notes })),
    onColorChanged: color => setEntry(prev => ({ ...prev, color })),
    onSampleFromChanged: sampledFrom =>
      setEntry(prev => ({ ...prev, sampledFrom: sampledFrom.id })),
    onFlavorRatingChanged: handleFlavorRatingChanged,
    onProofChanged: proof => setEntry(prev => ({ ...prev, proof })),
    onTryAgainChanged: tryAgain =>
      setEntry(prev => ({
        ...prev,
        tryAgain,
        reasonToNot: tryAgain ? "" : prev.reasonToNot
      })),
    onReasonToNotChanged: reasonToNot =>
      setEntry(prev => ({ ...prev, reasonToNot })),
    onPriceChanged: price => setEntry(prev => ({ ...prev, price }))
  };
}
