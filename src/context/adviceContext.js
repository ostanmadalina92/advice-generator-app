import { createContext } from "react";
import { useState } from "react";

const AdviceContext = createContext();

const AdviceState = (props) => {

    const [advice, setAdvice] = useState(" ");
    const [id, setId] = useState(" ")

    const fetchAdvice = async () => {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data.slip.advice);
      setId(data.slip.id);
    };

    return (
        <AdviceContext.Provider 
        value={{advice, setAdvice, id, setId, fetchAdvice}}>
            {props.children}
        </AdviceContext.Provider>
    )
}

export {AdviceContext, AdviceState};