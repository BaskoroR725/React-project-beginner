import { useState } from "react"

import Header from "./Header/Header"
import InputData from "./components/InputData"
import Results from "./components/Results"

function App() {
  const [ userInput , setUserInput ] = useState({
    initialInvestment: 10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
})

const isInputValid = userInput.duration >=1;

function handleChange(inputIdentifier, newValue ){
    setUserInput((prevInput) => {
        return {
            ...prevInput,
            [inputIdentifier] : +newValue
        }
    })
}
  return (
    <>
      <Header/>
      <InputData 
      userInputData={userInput}
      onChangeInput={handleChange} />
      { !isInputValid && <p className="center"> Please enter a duration greater than zero.</p>}
      { isInputValid && <Results input={userInput}/>}
    </>
  )
}

export default App
