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
        <MeterButton key={option.id} onClick={e => handleClick(e, option)}>
          <ColorContainer
            selected={isSelected(option)}
            color={option.fillColor}
          >
            &nbsp;
          </ColorContainer>
          {option.name && <MeterValueName>{option.name}</MeterValueName>}
        </MeterButton>
      ))}
    </Root>
  );
};

export default Meter;

const Root = styled(Row)`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 1rem;
`;

export const ColorContainer = styled(Row)<{ color: string; selected: boolean }>`
  height: 100%;
  width: 100%;
  max-width: 100%;
  border: 1px solid black;
  ${props =>
    props.selected &&
    css`
      background-color: ${props.color};
      box-shadow: 0 0 10px #9ecaed;
    `}

  &:hover {
    opacity: 0.7;
    box-shadow: 0 0 10px #9ecaed;
    ${props => css`
      background-color: ${props.color};
    `}
  }
`;

export const MeterValueName = styled(Row)`
  ${fgDarkest}
  font-size: 1.125rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
`;

export const MeterButton = styled(Button)`
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
