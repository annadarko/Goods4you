import React from "react";
import { useSmoothScroll } from "hooks/useSmoothScroll";

export const SmoothScroll: React.FC<{ offset?: number }> = ({ offset = 0 }) => {
  useSmoothScroll(offset);
  return null;
};