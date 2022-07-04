import dice from "../images/icon-dice.svg";
import React from "react";
import { useContext } from "react";
import { AdviceContext } from "../context/adviceContext";

function Dice() {

  const {fetchAdvice} = useContext(AdviceContext);

  return (
    <>
      <button className="dice-icon" onClick={()=>fetchAdvice()}>
        <img src={dice} />
      </button>
    </>
  );
}
export default Dice;
