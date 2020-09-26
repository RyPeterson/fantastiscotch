import JournalEntry, { defaultEntry } from "../types/JournalEntry";
import JournalFormProps from "../types/JournalFormProps";
import { useState } from "react";

export default function useJournalEntryForm(
  editing?: JournalEntry | null
): JournalFormProps {
  const [entry, setEntry] = useState<JournalEntry>(
    editing ? { ...editing } : { ...defaultEntry }
  );

  return {
    ...entry
  };
}
