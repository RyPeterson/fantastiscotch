import React, { FC } from "react";
import ColorMeter from "../components/ColorMeter";
import scotchColors from "../constants/scotchColors";
import useColorMeter from "../hooks/useColorMeter";

export default { title: "ColorMeter" };

export const withProps = () => <ColorMeter selected={scotchColors[3]} />;

export const ActiveProps: FC = () => {
  const { selected, onClick } = useColorMeter();
  return <ColorMeter selected={selected} onClick={onClick} />;
};
