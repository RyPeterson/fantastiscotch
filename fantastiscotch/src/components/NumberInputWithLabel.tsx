import styled from "styled-components/macro";
import Row from "./Row";
import Label from "./Label";
import React, { FC } from "react";
import NumberInput, { NumberInputProps } from "./NumberInput";

interface NumberInputWithLabelProps extends NumberInputProps {
  id: string;
  label: string;
}

const NumberInputWithLabel: FC<NumberInputWithLabelProps> = ({
  id,
  label,
  className,
  ...rest
}) => (
  <Root className={className}>
    <Label htmlFor={id}>{label}:</Label>
    <NumberInput id={id} {...rest} />
  </Root>
);

export default styled(NumberInputWithLabel)``;

const Root = styled(Row)`
  align-items: center;
  ${Label} {
    margin-right: 0.5rem;
  }
`;
