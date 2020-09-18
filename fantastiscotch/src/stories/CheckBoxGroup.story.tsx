import CheckBoxGroup, { CheckBoxItem } from "../components/CheckBoxGroup";
import React from "react";

export default {
  title: "CheckBoxGroup"
};

const items: ReadonlyArray<CheckBoxItem> = [
  {
    id: 1,
    label: "Foo"
  },
  {
    id: 2,
    label: "Bar"
  },
  {
    id: 3,
    label: "Baz"
  }
];

export const noneSelected = () => <CheckBoxGroup items={items} />;

export const selected = () => (
  <CheckBoxGroup items={items} selected={items[0]} />
);
