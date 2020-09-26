import NumberInput from "../components/NumberInput";
import React from "react";

export default {
  title: "NumberInput"
};

export const basic = () => <NumberInput />;

export const withValue = () => <NumberInput value={42} />;

export const withFloatingValue = () => <NumberInput value={42.42} />;
