import React, { ComponentPropsWithoutRef, FC } from "react";
import styled from "styled-components/macro";
import Row from "./Row";
import Input from "./Input";
import Label from "./Label";
import NumberInput from "./NumberInput";

interface InputWithLabelProps extends ComponentPropsWithoutRef<"input"> {
  id: string;
  label: string;
}

const InputWithLabel: FC<InputWithLabelProps> = ({
  id,
  label,
  className,
  type,
  ...rest
}) => (
  <Root className={className}>
    <Label htmlFor={id}>{label}:</Label>
    {type === "number" ? (
      <NumberInput id={id} {...rest} />
    ) : (
      <Input id={id} {...rest} />
    )}
  </Root>
);

export default styled(InputWithLabel)``;

const Root = styled(Row)`
  align-items: center;
  ${Label} {
    margin-right: 0.5rem;
  }
`;
