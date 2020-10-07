import Input from "./Input";
import styled from "styled-components/macro";
import React, {
  ChangeEvent,
  ComponentPropsWithoutRef,
  FC,
  useCallback,
  KeyboardEvent
} from "react";

export interface NumberInputProps
  extends Omit<
    ComponentPropsWithoutRef<"input">,
    "onChange" | "value" | "type"
  > {
  value?: number | null;
  onChange?(value?: number): void;
}

const charCodeDecimal = 46;

const handleKeyPress = (
  event: KeyboardEvent<HTMLInputElement>,
  currentValue?: number | null
) => {
  const code = event.charCode;
  // If the current character is a period and there is already a decimal, prevent the second period.
  if (code === charCodeDecimal && currentValue && currentValue % 1 !== 0) {
    event.preventDefault();
    return;
  }
  // If the char is not a decimal or number, reject
  if (code !== charCodeDecimal && (code < 48 || code > 57)) {
    event.preventDefault();
  }
};

const NumberInput: FC<NumberInputProps> = ({ value, onChange, ...rest }) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        const updated = event.target.value;
        if (!updated) {
          onChange();
          return;
        }
        const asNumber = parseFloat(updated);
        if (!Number.isNaN(asNumber)) {
          onChange(asNumber);
        }
      }
    },
    [onChange]
  );

  return (
    <NumberInputRoot
      value={value ?? ""}
      onChange={handleChange}
      onKeyPress={e => handleKeyPress(e, value)}
      {...rest}
    />
  );
};

const NumberInputRoot = styled(Input).attrs({ type: "number" })`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;

    margin: 0;
  }
  -moz-appearance: textfield;
`;

export default NumberInput;
