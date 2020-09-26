import React, { FC, FormEvent, useCallback } from "react";
import styled, { css } from "styled-components/macro";
import JournalFormProps from "../types/JournalFormProps";
import Column from "./Column";
import Row from "./Row";
import InputWithLabel from "./InputWithLabel";
import Rating from "./Rating";
import TextAreaWithLabel from "./TextAreaWithLabel";
import CheckBoxGroup from "./CheckBoxGroup";
import sampledFromItems from "../types/sampledFromItems";
import ColorMeter from "./ColorMeter";
import FlavorMeters from "./FlavorMeters";
import YesNoCheckboxes from "./YesNoCheckboxes";
import Label from "./Label";
import getFlavorRatings from "../utils/getFlavorRatings";

const JournalForm: FC<JournalFormProps> = ({
  distiller,
  origin,
  age,
  price,
  date,
  rating,
  notes,
  color,
  finishRating,
  acidicRating,
  smokeRating,
  maltyRating,
  floralRating,
  balanceRating,
  saltyRating,
  peatRating,
  herbalRating,
  citrusRating,
  bodyRating,
  sweetRating,
  toffeeRating,
  spicyRating,
  darkFruitRating,
  proof,
  tryAgain,
  reasonToNot,
  sampledFrom,
  ...rest
}) => {
  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
  }, []);

  return (
    <FormRoot onSubmit={handleSubmit} {...rest}>
      <FormRow>
        <InputWithLabel id="distiller" label="Distiller" value={distiller} />
        <InputWithLabel id="origin" label="Origin" value={origin} />
        <InputWithLabel
          type="number"
          id="age"
          label="Age"
          value={age === null ? "" : age}
        />
      </FormRow>

      <FormRow>
        <FormColumn>
          <FormRow>
            <InputWithLabel id="date" label="Date" value={date} />
            <Rating selected={rating} />
          </FormRow>
          <SampleFromRow>
            <Label>Sampled From:</Label>
            <SampledFromCheckboxes
              selected={sampledFromItems.find(item => item.id === sampledFrom)}
            />
          </SampleFromRow>
        </FormColumn>
        <FormColumn>
          <Notes id="notes" label="Notes" value={notes} />
        </FormColumn>
      </FormRow>
      <ColorMeterContainer>
        <StyledColorMeter selected={color} />
      </ColorMeterContainer>
      <FlavorMeters
        selected={getFlavorRatings({
          finishRating,
          acidicRating,
          smokeRating,
          maltyRating,
          floralRating,
          balanceRating,
          saltyRating,
          peatRating,
          herbalRating,
          citrusRating,
          bodyRating,
          sweetRating,
          toffeeRating,
          spicyRating,
          darkFruitRating
        })}
      />
      <FinalThoughtRow>
        <InputWithLabel
          type="number"
          id="proof"
          label="Heat/Proof"
          value={proof === null ? "" : proof}
        />
        <YesNoContainer>
          <Label>Would Try Again?</Label>
          <YesNoCheckboxes value={tryAgain} />
          <NoReason hide={tryAgain !== false}>
            <InputWithLabel id="why" label="Why?" value={reasonToNot} />
          </NoReason>
        </YesNoContainer>
      </FinalThoughtRow>
    </FormRoot>
  );
};

export default styled(JournalForm)``;

const FormRoot = styled(Column).attrs({ as: "form" })`
  flex: 1 0 auto;
  height: 100%;
  padding: 0 1rem;
`;

const FormRow = styled(Row)`
  justify-content: space-between;
  width: 100%;
`;

const SampleFromRow = styled(FormRow)`
  ${Label} {
    flex: 1 0 auto;
    margin-right: 1rem;
  }
`;

const FormColumn = styled(Column)`
  flex: 1 0 auto;
  justify-content: space-between;
`;

const Notes = styled(TextAreaWithLabel).attrs({ id: "notes", label: "Notes" })`
  width: 100%;
  textarea {
    flex: 1 0 auto;
  }
`;

const SampledFromCheckboxes = styled(CheckBoxGroup).attrs({
  items: sampledFromItems
})``;

const ColorMeterContainer = styled(FormRow)`
  justify-content: center;
  padding: 2rem 0;
`;

const StyledColorMeter = styled(ColorMeter)`
  align-self: center;
`;

const FinalThoughtRow = styled(FormRow)`
  justify-content: flex-start;
  margin-top: 1rem;
`;

const YesNoContainer = styled(Row)`
  flex: 1 0 auto;
  align-items: center;
  ${Label} {
    margin-right: 1rem;
  }
  ${YesNoCheckboxes} {
    max-width: 120px;
    margin-right: 2rem;
  }
`;

const NoReason = styled(Row)<{ hide: boolean }>`
  ${props =>
    props.hide &&
    css`
      opacity: 0;
    `}
`;
