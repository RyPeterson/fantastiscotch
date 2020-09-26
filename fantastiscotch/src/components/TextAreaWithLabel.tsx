import React, { ComponentPropsWithoutRef, FC } from "react";
import styled from "styled-components";
import Label from "./Label";
import Row from "./Row";
import TextArea from "./TextArea";

interface TextAreaWithLabelProps extends ComponentPropsWithoutRef<"textarea"> {
  id: string;
  label: string;
}

const TextAreaWithLabel: FC<TextAreaWithLabelProps> = ({
  id,
  label,
  className,
  ...rest
}) => (
  <Root className={className}>
    <Label htmlFor={id}>{label}:</Label>
    <TextArea id={id} {...rest} />
  </Root>
);

export default styled(TextAreaWithLabel)``;

const Root = styled(Row)`
  ${Label} {
    margin: 2px 0.5rem 0 0;
  }
`;
