import React from "react";
import { useContext } from "react";
import { AdviceContext } from "../context/adviceContext";

function Advice() {

  const {advice} = useContext(AdviceContext);
  return (
      <p>{advice}</p>
  );
}

export default Advice;
