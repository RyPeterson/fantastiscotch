import { ChangeEvent, useCallback, useState } from "react";

export default function useInputState() {
  const [value, setValue] = useState<string>("");
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
    []
  );
  return [value, handleChange, setValue];
}
