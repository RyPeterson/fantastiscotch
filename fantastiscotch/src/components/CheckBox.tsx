import styled from "styled-components/macro";
import Button from "./Button";
import React, { FC } from "react";
import { checkmark } from "../icons";

interface CheckBoxProps {
  checked?: boolean;
  onClick?(): void;
}

const CheckBox: FC<CheckBoxProps> = ({ checked, ...rest }) => (
  <Root {...rest}>{checked && <CheckedIcon />}</Root>
);

export default CheckBox;

const Root = styled(Button)`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid black;
`;

const CheckedIcon = styled.img.attrs({ src: checkmark, alt: "Checked" })``;
