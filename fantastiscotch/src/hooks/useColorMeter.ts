import ScotchColor from "../types/ScotchColor";
import { useState, useEffect, useCallback } from "react";

export default function useColorMeter(color?: ScotchColor | null) {
  const [selected, setSelected] = useState<ScotchColor | null>(null);

  useEffect(() => {
    setSelected(color || null);
  }, [color]);

  const onClick = useCallback((color: ScotchColor) => {
    setSelected(color);
  }, []);

  return { selected, onClick };
}
