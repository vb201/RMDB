import React from "react";
import { PrimaryButtonWrapper } from "./styles";

const PrimaryButton = ({ title, callback }) => {
  return (
    <PrimaryButtonWrapper onClick={callback}>{title}</PrimaryButtonWrapper>
  );
};

export default PrimaryButton;
