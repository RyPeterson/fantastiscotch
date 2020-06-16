import React, { FC } from "react";
import FlavorMeters from "../components/FlavorMeters";
import useFlavorMeters from "../hooks/useFlavorMeters";

export default { title: "FlavorMeters" };

export const minimalProps = () => <FlavorMeters selected={[]} />;

export const ActiveProps: FC = () => {
  const { selected, onSelected } = useFlavorMeters();
  return <FlavorMeters selected={selected} onSelected={onSelected} />;
};
