import eventTargetValue from "./eventTargetValue";
import { ChangeEvent } from "react";

export default function onNumberChanged(
  event: ChangeEvent<HTMLInputElement>,
  cb: (value?: number) => void
) {
  const value = event.target.value;
  if (!value) {
    cb();
    return;
  }
  const asNumber = parseFloat(value);
  console.log(asNumber);
  if (!Number.isNaN(asNumber)) {
  }
}
