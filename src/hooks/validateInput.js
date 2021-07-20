import { useState } from "react";

const useValidateInput = (validation) => {
  const [inputValue, setInputValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const isValid = validation(inputValue);
  const invalidValue = !isValid && inputTouched;

  const inputValueHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onBlurHandler = (event) => {
    setInputTouched(true);
  };

  const resetInput = () => {
    setInputValue("");
    setInputTouched(false);
  };

  return {
    inputValue,
    isValid,
    invalidValue,
    inputValueHandler,
    onBlurHandler,
    resetInput,
  };
};

export default useValidateInput;
