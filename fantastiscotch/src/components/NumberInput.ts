import Input from "./Input";
import styled from "styled-components/macro";

const NumberInput = styled(Input).attrs({ type: "number" })`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;

    margin: 0;
  }
  -moz-appearance: textfield;
`;

export default NumberInput;
