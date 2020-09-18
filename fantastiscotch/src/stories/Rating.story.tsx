import React from "react";
import Rating from "../components/Rating";

export default {
  title: "Rating"
};

export const noneSelected = () => <Rating />;

export const selected = () => <Rating selected={3} />;
