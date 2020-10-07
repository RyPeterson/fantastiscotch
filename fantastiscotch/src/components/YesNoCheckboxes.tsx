import React, { FC } from "react";
import styled from "styled-components/macro";
import CheckBoxGroup, {
  CheckBoxGroupProps,
  CheckBoxItem
} from "./CheckBoxGroup";

const Yes: CheckBoxItem = {
  id: 1,
  label: "Yes"
};

const No: CheckBoxItem = {
  id: 0,
  label: "No"
};

function getSelectedItem(value?: boolean | null): CheckBoxItem | null {
  if (value === null || typeof value === "undefined") {
    return null;
  }
  return value ? Yes : No;
}

interface Props
  extends Omit<CheckBoxGroupProps, "items" | "selected" | "onClick"> {
  value?: boolean | null;
  onClick?(value: boolean): void;
}

const YesNoCheckboxes: FC<Props> = ({ value, onClick, ...rest }) => (
  <CheckBoxGroup
    items={[Yes, No]}
    selected={getSelectedItem(value)}
    onClick={option => onClick && onClick(option === Yes)}
    {...rest}
  />
);

export default styled(YesNoCheckboxes)``;
