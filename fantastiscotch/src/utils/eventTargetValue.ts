import { ChangeEvent } from "react";

/**
 * Returns a callback to an onChange that calls the passed function with event.target.value
 */
export default function eventTargetValue(cb: (value: string) => void) {
  return (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    cb(event.target.value);
  };
}
