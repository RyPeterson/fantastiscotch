import React, { FC } from "react";
import styled from "styled-components/macro";
import Row from "./Row";
import Button from "./Button";
import { star, starFilled } from "../icons";
import noop from "../utils/noop";
import { RatingValue } from "../types/RatingValue";

const values = [1, 2, 3, 4, 5];

interface RatingProps {
  selected?: RatingValue;
  onClick?(value: RatingValue): void;
}

const Rating: FC<RatingProps> = ({ selected = 0, onClick = noop, ...rest }) => (
  <Root {...rest}>
    {values.map(value => (
      <RatingButton key={value}>
        {value === selected ? <StarSelected /> : <StarUnselected />}
        <StarHover />
      </RatingButton>
    ))}
  </Root>
);

export default styled(Rating)``;

const Root = styled(Row)`
  width: 100%;
  justify-content: space-between;
`;

const StarUnselected = styled.img.attrs({ src: star, alt: "Unselected" })``;

const StarSelected = styled.img.attrs({ src: starFilled, alt: "Selected" })``;

const StarHover = styled.img.attrs({ src: starFilled, alt: "Click to Select" })`
  opacity: 0.5;
  display: none;
  position: absolute;
`;

const RatingButton = styled(Button)`
  height: 25px;
  width: 25px;
  img {
    height: 20px;
    width: 20px;
  }
  &:hover {
    ${StarUnselected} {
      display: none;
    }
    ${StarHover} {
      display: block;
    }
  }
`;
