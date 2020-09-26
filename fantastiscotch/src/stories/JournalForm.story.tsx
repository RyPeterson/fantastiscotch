import React, { FC } from "react";
import JournalForm from "../components/JournalForm";
import useJournalEntryForm from "../hooks/useJournalEntryForm";

export default {
  title: "JournalForm"
};

export const Basic: FC = () => {
  const props = useJournalEntryForm();
  return <JournalForm {...props} />;
};
