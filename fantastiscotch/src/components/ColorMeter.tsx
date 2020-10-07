import React, { FC, useCallback, useMemo } from "react";
import styled from "styled-components/macro";
import scotchColors from "../constants/scotchColors";
import ScotchColor from "../types/ScotchColor";
import Meter, {
  ColorContainer,
  FillMode,
  MeterButton,
  MeterOption,
  MeterValueName
} from "./Meter";
import MeterLabel from "./MeterLabel";
import Row from "./Row";

const colorOptions: MeterOption[] = scotchColors.map(color => ({
  id: color.name,
  fillColor: color.color,
  ...color
}));

interface Props {
  selected?: ScotchColor | null;
  onClick?(color: ScotchColor): void;
}

const ColorMeter: FC<Props> = ({ selected, onClick, ...rest }) => {
  const handleClick = useCallback(
    (option: MeterOption) => {
      if (onClick) {
        const color = scotchColors.find(c => c.name === option.id);
        if (color) {
          onClick(color);
        }
      }
    },
    [onClick]
  );

  const selectedOption = useMemo(() => {
    if (selected) {
      return colorOptions.find(opt => opt.id === selected.name);
    }
  }, [selected]);
  return (
    <Root {...rest}>
      <MeterLabel>Color Meter</MeterLabel>
      <StyledMeter
        options={colorOptions}
        selected={selectedOption}
        onClick={handleClick}
      />
    </Root>
  );
};

export default styled(ColorMeter)``;

const Root = styled(Row)`
  height: 100%;
  justify-content: center;
  padding-left: 1rem;
  ${MeterLabel} {
    width: 130px;
  }

  @media screen and (max-width: 940px) {
    flex-direction: column;
    justify-content: flex-start;
    max-width: 140px;
    padding-left: 0;
  }
`;

const StyledMeter = styled(Meter).attrs({ fillMode: FillMode.fillSelected })`
  ${MeterValueName} {
    width: 80px;
    font-size: 0.875rem;
    transform: rotate(45deg) translate(20px, 20px);
  }

  ${MeterButton}, ${ColorContainer} {
    max-width: 40px;
  }
  // TODO: this is ugly. Fix "later"
  @media screen and (max-width: 940px) {
    flex-direction: column;
    align-self: center;
    justify-content: center;
    align-items: center;
    padding: 0;
    ${MeterValueName} {
      font-size: 0.875rem;
      transform: none;
    }
  }
`;
