import React, { FC, useCallback, useMemo } from "react";
import styled from "styled-components/macro";
import { bgLighest } from "../constants/colorTheme";
import scotchColors from "../constants/scotchColors";
import ScotchColor from "../types/ScotchColor";
import Meter, { FillMode, MeterOption } from "./Meter";
import MeterLabel from "./MeterLabel";
import Row from "./Row";

const colorOptions: MeterOption[] = scotchColors.map(color => ({
  id: color.name,
  fillColor: color.color,
  ...color
}));

interface Props {
  selected?: ScotchColor;
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
  ${bgLighest}
  justify-content: center;
  padding-left: 1rem;
  ${MeterLabel} {
    width: 130px;
  }
`;

const StyledMeter = styled(Meter).attrs({ fillMode: FillMode.fillSelected })``;
