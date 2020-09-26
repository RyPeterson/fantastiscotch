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

interface Props extends Omit<CheckBoxGroupProps, "items" | "selected"> {
  value?: boolean | null;
}

const YesNoCheckboxes: FC<Props> = ({ value, ...rest }) => (
  <CheckBoxGroup
    items={[Yes, No]}
    selected={getSelectedItem(value)}
    {...rest}
  />
);

export default styled(YesNoCheckboxes)``;
