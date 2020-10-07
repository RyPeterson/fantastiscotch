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
import { getFlavorRatings } from "../utils/flavorRatingHelper";
import eventTargetValue from "../utils/eventTargetValue";
import NumberInputWithLabel from "./NumberInputWithLabel";

const JournalForm: FC<JournalFormProps> = ({
  distiller,
  onDistillerChanged,
  origin,
  onOriginChanged,
  age,
  onAgeChanged,
  price,
  onPriceChanged,
  date,
  onDateChanged,
  rating,
  onRatingChanged,
  notes,
  onNotesChanged,
  color,
  onColorChanged,
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
  onFlavorRatingChanged,
  proof,
  onProofChanged,
  tryAgain,
  onTryAgainChanged,
  reasonToNot,
  onReasonToNotChanged,
  sampledFrom,
  onSampleFromChanged,
  ...rest
}) => {
  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
  }, []);

  return (
    <FormRoot onSubmit={handleSubmit} {...rest}>
      <FormRow>
        <InputWithLabel
          id="distiller"
          label="Distiller"
          value={distiller}
          onChange={eventTargetValue(onDistillerChanged)}
        />
        <InputWithLabel
          id="origin"
          label="Origin"
          value={origin}
          onChange={eventTargetValue(onOriginChanged)}
        />
        <NumberInputWithLabel
          id="age"
          label="Age"
          value={age}
          onChange={onAgeChanged}
        />
        <NumberInputWithLabel
          id="price"
          label="Price"
          value={price}
          onChange={onPriceChanged}
        />
      </FormRow>

      <FormRow>
        <FormColumn>
          <FormRow>
            <InputWithLabel
              id="date"
              label="Date"
              value={date}
              onChange={eventTargetValue(onDateChanged)}
              type="date"
            />
            <Rating selected={rating} onClick={onRatingChanged} />
          </FormRow>
          <SampleFromRow>
            <Label>Sampled From:</Label>
            <SampledFromCheckboxes
              selected={sampledFromItems.find(item => item.id === sampledFrom)}
              onClick={onSampleFromChanged}
            />
          </SampleFromRow>
        </FormColumn>
        <FormColumn>
          <Notes
            id="notes"
            label="Notes"
            value={notes}
            onChange={eventTargetValue(onNotesChanged)}
          />
        </FormColumn>
      </FormRow>
      <ColorMeterContainer>
        <StyledColorMeter selected={color} onClick={onColorChanged} />
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
        onSelected={onFlavorRatingChanged}
      />
      <FinalThoughtRow>
        <NumberInputWithLabel
          id="proof"
          label="Heat/Proof"
          value={proof}
          onChange={onProofChanged}
        />
        <YesNoContainer>
          <Label>Would Try Again?</Label>
          <YesNoCheckboxes value={tryAgain} onClick={onTryAgainChanged} />
          <NoReason hide={tryAgain !== false}>
            <InputWithLabel
              id="why"
              label="Why?"
              value={reasonToNot}
              onChange={eventTargetValue(onReasonToNotChanged)}
            />
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
