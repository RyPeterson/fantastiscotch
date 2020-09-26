import React, { FC, useCallback } from "react";
import styled, { css } from "styled-components/macro";
import Column from "./Column";
import MeterLabel from "./MeterLabel";
import Row from "./Row";
import FlavorNames from "../types/FlavorNames";
import NumberMeter from "./NumberMeter";
import { FlavorRating } from "../types/FlavorRating";

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

interface Props {
  selected: ReadonlyArray<FlavorRating>;
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
          order={1}
        />
        <MeterGroup
          options={rightColumn}
          onSelected={onSelected}
          selected={selected}
          order={2}
        />
        <MeterGroup
          options={middleColumn}
          onSelected={onSelected}
          selected={selected}
          order={3}
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
  @media screen and (max-width: 990px) {
    flex-direction: column;
  }
`;

const MeterColumn = styled(Column)`
  flex: 1 0 auto;
  @media screen and (max-width: 990px) {
      ${NumberMeter} + ${NumberMeter} {
        margin-top: 0.625rem;
      }
      margin-top: 0.625rem;
  }
`;

const MeterHeadingRoot = styled(Row)<{ order: number }>`
  width: 100%;
  justify-content: space-between;
  padding: 0 1rem;
  font-size: 1.125rem;
  font-weight: bold;
  > :first-child {
    width: 135px;
    text-align: right;
  }
  @media screen and (max-width: 990px) {
    ${props =>
      props.order > 1 &&
      css`
        display: none;
      `}
  }
`;

const MeterHeading: FC<{ order: number }> = props => (
  <MeterHeadingRoot {...props}>
    <div>Little</div>
    <div>A Lot</div>
  </MeterHeadingRoot>
);

interface MeterGroupProps {
  options: ReadonlyArray<FlavorNames>;
  selected?: ReadonlyArray<FlavorRating>;
  onSelected?(option: FlavorNames, value: number): void;
  order: number;
}

function getSelectedOption(
  option: FlavorNames,
  selected?: ReadonlyArray<FlavorRating>
) {
  if (selected) {
    const selectedById = selected.find(opt => opt.id === option);
    if (selectedById) {
      return selectedById.value;
    }
  }

  return undefined;
}

const MeterGroup: FC<MeterGroupProps> = ({
  options,
  selected,
  onSelected,
  order
}) => {
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
      <MeterHeading order={order} />
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
