import { useState } from "react";

import Header from "./Components/Header/Header";
import UserInput from "./Components/UserInput/UserInput";
import Results from "./Components/Results/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />;
      <UserInput userinput={userInput} inputChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please Enter a Duration Greater than Zero. </p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
