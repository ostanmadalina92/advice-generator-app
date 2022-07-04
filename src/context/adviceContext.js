import { createContext } from "react";
import { useState } from "react";

const AdviceContext = createContext();

const AdviceState = (props) => {

    const [advice, setAdvice] = useState(" ");

    const fetchAdvice = async () => {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data.slip.advice);
    };

    return (
        <AdviceContext.Provider 
        value={{advice, setAdvice, fetchAdvice}}>
            {props.children}
        </AdviceContext.Provider>
    )
}

export {AdviceContext, AdviceState};