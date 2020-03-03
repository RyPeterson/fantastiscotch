import React, { FC, useState, useCallback } from "react";
import styled from "styled-components/macro";
import Column from "./Column";
import ColorMeter from "./ColorMeter";
import ScotchColor from "../types/ScotchColor";
import FlavorMeters, { SelectedFlavorAndNumber } from "./FlavorMeters";
import FlavorNames from "../types/FlavorNames";

const JournalForm: FC = props => {
  const [selectedColor, setSelectedColor] = useState<ScotchColor | undefined>();
  const [flavorRatings, setFlavorRatings] = useState<SelectedFlavorAndNumber[]>(
    []
  );

  const handleFlavorRatingSelected = useCallback(
    (option: FlavorNames, value: number) => {
      setFlavorRatings(prev => [
        ...prev.filter(rating => rating.id !== option),
        { id: option, value }
      ]);
    },
    []
  );

  return (
    <Root {...props}>
      <ColorMeter
        selected={selectedColor}
        onClick={color => setSelectedColor(color)}
      />
      <FlavorMeters
        selected={flavorRatings}
        onSelected={handleFlavorRatingSelected}
      />
    </Root>
  );
};

export default styled(JournalForm)``;

const Root = styled(Column)`
  flex: 1 1 auto;
  max-width: 50%;
`;
