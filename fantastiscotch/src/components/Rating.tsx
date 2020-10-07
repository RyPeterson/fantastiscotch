import React, { FC, FormEvent, useCallback } from "react";
import styled from "styled-components/macro";
import Row from "./Row";
import Button from "./Button";
import { star, starFilled } from "../icons";
import noop from "../utils/noop";
import { RatingValue } from "../types/RatingValue";
import Label from "./Label";

const values: ReadonlyArray<RatingValue> = [1, 2, 3, 4, 5];

interface RatingProps {
  selected?: RatingValue;
  onClick?(value: RatingValue): void;
  label?: string;
}

const Rating: FC<RatingProps> = ({
  label = "Rating",
  selected = 0,
  onClick = noop,
  ...rest
}) => {
  const handleClick = useCallback(
    (event: FormEvent, value: RatingValue) => {
      event.preventDefault();
      if (onClick) {
        onClick(value);
      }
    },
    [onClick]
  );
  return (
    <Root {...rest}>
      <Label>{label}:</Label>
      <StarContainer>
        {values.map(value => (
          <RatingButton key={value} onClick={e => handleClick(e, value)}>
            {value === selected ? <StarSelected /> : <StarUnselected />}
            <StarHover />
          </RatingButton>
        ))}
      </StarContainer>
    </Root>
  );
};

export default styled(Rating)``;

const Root = styled(Row)`
  width: 100%;
  align-items: center;
`;

const StarContainer = styled(Row)`
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
