import React, { FC, useCallback, useMemo } from "react";
import Row from "./Row";
import styled from "styled-components/macro";
import MeterLabel from "./MeterLabel";
import Meter, {
  ColorContainer,
  FillMode,
  MeterButton,
  MeterOption
} from "./Meter";

const options: MeterOption[] = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  }
].map(opt => ({ ...opt, fillColor: "#68cc83" }));

interface Props {
  title: string;
  selected?: number;
  onSelected?(value: number): void;
}

const NumberMeter: FC<Props> = ({ title, selected, onSelected, ...rest }) => {
  const handleSelected = useCallback(
    (option: MeterOption) => {
      if (onSelected) {
        onSelected(+option.id);
      }
    },
    [onSelected]
  );

  const selectedOption = useMemo(() => {
    if (selected) {
      return options.find(opt => opt.id === selected);
    }
  }, [selected]);

  return (
    <Root {...rest}>
      <MeterLabel>{title}</MeterLabel>
      <StyledMeter onClick={handleSelected} selected={selectedOption} />
    </Root>
  );
};

export default styled(NumberMeter)``;

const Root = styled(Row)`
  width: 100%;
  ${MeterLabel} {
    text-align: right;
    justify-content: flex-end;
  }
  justify-content: center;
`;

const StyledMeter = styled(Meter).attrs({
  fillMode: FillMode.fillPrevious,
  options
})`
  ${MeterButton} {
    flex-direction: row;
    ${ColorContainer} {
      flex-shrink: 0;
    }
  }
`;
