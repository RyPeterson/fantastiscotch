import React, { FC } from "react";
import styled from "styled-components";
import Row from "./Row";
import CheckBox from "./CheckBox";
import noop from "../utils/noop";

export interface CheckBoxItem {
  id: number;
  label: string;
}

export interface CheckBoxGroupProps {
  items: ReadonlyArray<CheckBoxItem>;
  selected?: CheckBoxItem | null;
  onClick?(item: CheckBoxItem): void;
}

const CheckBoxGroup: FC<CheckBoxGroupProps> = ({
  items,
  selected,
  onClick = noop,
  ...rest
}) => (
  <Root {...rest}>
    {items.map(item => (
      <CheckboxAndLabel key={item.id}>
        <CheckBox
          checked={item.id === selected?.id}
          onClick={() => onClick(item)}
        />
        <label>{item.label}</label>
      </CheckboxAndLabel>
    ))}
  </Root>
);

export default styled(CheckBoxGroup)``;

const Root = styled(Row)`
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CheckboxAndLabel = styled(Row)`
  label {
    font-size: 1rem;
    font-weight: bold;
    margin-left: 0.5rem;
  }
  align-items: center;
`;
