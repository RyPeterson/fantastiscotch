import { useState, useCallback, useEffect } from "react";
import FlavorNames from "../types/FlavorNames";
import { FlavorRating } from "../types/FlavorRating";

export default function useFlavorMeters(existing?: FlavorRating[] | null) {
  const [selected, setSelected] = useState<FlavorRating[]>([]);

  useEffect(() => {
    setSelected(existing || []);
  }, [existing]);

  const onSelected = useCallback((option: FlavorNames, value: number) => {
    setSelected(prev => [
      ...prev.filter(rating => rating.id !== option),
      { id: option, value }
    ]);
  }, []);

  return { selected, onSelected };
}
