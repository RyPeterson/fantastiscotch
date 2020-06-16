import React from "react";
import Meter, { FillMode, MeterOption } from "../components/Meter";

export default { title: "Meter" };

const options: MeterOption[] = [
  { id: 42, fillColor: "red" },
  { id: 42, fillColor: "blue" }
];

export const minimalProps = () => (
  <Meter options={options} fillMode={FillMode.fillPrevious} />
);
