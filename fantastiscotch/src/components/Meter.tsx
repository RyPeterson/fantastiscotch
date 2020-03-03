import React, { FC, MouseEvent, useCallback } from "react";
import Row from "./Row";
import styled, { css } from "styled-components/macro";
import { fgDarkest } from "../constants/colorTheme";
import Button from "./Button";

export interface MeterOption {
  id: string | number;
  fillColor: string;
  name?: string;
}

export enum FillMode {
  fillPrevious,
  fillSelected
}

interface Props {
  selected?: MeterOption;
  options: ReadonlyArray<MeterOption>;
  fillMode: FillMode;
  onClick?(option: MeterOption): void;
}

const Meter: FC<Props> = ({
  options,
  fillMode,
  onClick,
  selected,
  ...rest
}) => {
  const handleClick = useCallback(
    (evt: MouseEvent, option: MeterOption) => {
      evt.preventDefault();
      if (onClick) {
        onClick(option);
      }
    },
    [onClick]
  );

  const isSelected = useCallback(
    (option: MeterOption) => {
      if (selected) {
        if (fillMode === FillMode.fillSelected) {
          return option.id === selected.id;
        }
        const selectedIndex = options.findIndex(opt => opt.id === selected.id);
        if (selectedIndex > -1) {
          const previous = options.filter(
            (opt, optionIndex: number) => optionIndex <= selectedIndex
          );
          return !!previous.find(o => o.id === option.id);
        }
      }
      return false;
    },
    [selected, fillMode, options]
  );

  return (
    <Root {...rest}>
      {options.map(option => (
        <ColorButton key={option.id} onClick={e => handleClick(e, option)}>
          <ColorContainer
            selected={isSelected(option)}
            color={option.fillColor}
          />
          {option.name && <ColorName>{option.name}</ColorName>}
        </ColorButton>
      ))}
    </Root>
  );
};

export default Meter;

const Root = styled(Row)`
  width: 100%;
  justify-content: space-between;
  padding: 0 1rem;
`;

const ColorContainer = styled(Row)<{ color: string; selected: boolean }>`
  width: 100%;
  height: 20px;
  border: 1px solid black;
  ${props =>
    props.selected &&
    css`
      background-color: ${props.color};
    `}

  &:hover {
    opacity: 0.7;
    ${props => css`
      background-color: ${props.color};
    `}
  }
`;

const ColorName = styled(Row)`
  ${fgDarkest}
  font-size: 1.125rem;
`;

const ColorButton = styled(Button)`
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
