import React, { FC, useState } from "react";
import styled from "styled-components/macro";
import Column from "./Column";
import ColorMeter from "./ColorMeter";
import ScotchColor from "../types/ScotchColor";

const JournalForm: FC = props => {
  const [selectedColor, setSelectedColor] = useState<ScotchColor | undefined>();
  return (
    <Root {...props}>
      <ColorMeter
        selected={selectedColor}
        onClick={color => setSelectedColor(color)}
      />
    </Root>
  );
};

export default styled(JournalForm)``;

const Root = styled(Column)`
  flex: 1 1 auto;
  max-width: 50%;
`;
