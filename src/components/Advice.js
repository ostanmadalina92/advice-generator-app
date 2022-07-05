import React from "react";
import { useContext } from "react";
import { AdviceContext } from "../context/adviceContext";

function Advice() {
  const { advice, id } = useContext(AdviceContext);
  return (
    <>
      <h1>Advice #{id}</h1>
      <p>{advice}</p>
    </>
  );
}

export default Advice;
