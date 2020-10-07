import NumberInput from "../components/NumberInput";
import React, { FC, useState } from "react";

export default {
  title: "NumberInput"
};

export const basic = () => <NumberInput />;

export const withValue = () => <NumberInput value={42} />;

export const withFloatingValue = () => <NumberInput value={42.42} />;

export const RealValues: FC = () => {
  const [value, setValue] = useState<number | undefined>();
  return <NumberInput value={value} onChange={setValue} />;
};
