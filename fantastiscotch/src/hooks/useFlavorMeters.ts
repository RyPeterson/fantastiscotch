import { useState, useCallback, useEffect } from "react";
import { SelectedFlavorAndNumber } from "../components/FlavorMeters";
import FlavorNames from "../types/FlavorNames";

export default function useFlavorMeters(
  existing?: SelectedFlavorAndNumber[] | null
) {
  const [selected, setSelected] = useState<SelectedFlavorAndNumber[]>([]);

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
