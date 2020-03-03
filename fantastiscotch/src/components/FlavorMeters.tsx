import React, { FC, useCallback } from "react";
import styled from "styled-components/macro";
import Column from "./Column";
import MeterLabel from "./MeterLabel";
import Row from "./Row";
import FlavorNames from "../types/FlavorNames";
import NumberMeter from "./NumberMeter";

const leftColumn = [
  FlavorNames.finish,
  FlavorNames.acidic,
  FlavorNames.smoke,
  FlavorNames.malty,
  FlavorNames.floral
];
const middleColumn = [
  FlavorNames.balance,
  FlavorNames.salty,
  FlavorNames.peat,
  FlavorNames.herbal,
  FlavorNames.citrus
];
const rightColumn = [
  FlavorNames.body,
  FlavorNames.sweet,
  FlavorNames.toffee,
  FlavorNames.spicy,
  FlavorNames.darkFruit
];

export interface SelectedFlavorAndNumber {
  id: FlavorNames;
  value: number;
}

interface Props {
  selected: ReadonlyArray<SelectedFlavorAndNumber>;
  onSelected?(option: FlavorNames, value: number): void;
}

const FlavorMeters: FC<Props> = ({ onSelected, selected, ...rest }) => {
  return (
    <Root {...rest}>
      <MeterLabel>Flavor Meters:</MeterLabel>
      <Meters>
        <MeterGroup
          options={leftColumn}
          onSelected={onSelected}
          selected={selected}
        />
        <MeterGroup
          options={rightColumn}
          onSelected={onSelected}
          selected={selected}
        />
        <MeterGroup
          options={middleColumn}
          onSelected={onSelected}
          selected={selected}
        />
      </Meters>
    </Root>
  );
};

export default styled(FlavorMeters)``;

const Root = styled(Column)`
  width: 100%;
  height: 100%;
  ${MeterLabel} {
    width: 140px;
  }
`;

const Meters = styled(Row)`
  width: 100%;
  height: 100%;
`;

const MeterColumn = styled(Column)`
  flex: 1 1 0;
`;

const MeterHeadingRoot = styled(Row)`
  width: 100%;
  justify-content: space-between;
  padding: 0 1rem;
  font-size: 1.125rem;
  font-weight: bold;

  > :first-child {
    width: 135px;
    text-align: right;
  }
`;

const MeterHeading: FC = props => (
  <MeterHeadingRoot>
    <div>Little</div>
    <div>Alot</div>
  </MeterHeadingRoot>
);

interface MeterGroupProps {
  options: ReadonlyArray<FlavorNames>;
  selected?: ReadonlyArray<SelectedFlavorAndNumber>;
  onSelected?(option: FlavorNames, value: number): void;
}

function getSelectedOption(
  option: FlavorNames,
  selected?: ReadonlyArray<SelectedFlavorAndNumber>
) {
  if (selected) {
    const selectedById = selected.find(opt => opt.id === option);
    if (selectedById) {
      return selectedById.value;
    }
  }

  return undefined;
}

const MeterGroup: FC<MeterGroupProps> = ({ options, selected, onSelected }) => {
  const handleSelected = useCallback(
    (option: FlavorNames, value: number) => {
      if (onSelected) {
        onSelected(option, value);
      }
    },
    [onSelected]
  );

  return (
    <MeterColumn>
      <MeterHeading />
      {options.map(option => (
        <NumberMeter
          key={option}
          title={option}
          selected={getSelectedOption(option, selected)}
          onSelected={value => handleSelected(option, value)}
        />
      ))}
    </MeterColumn>
  );
};
