import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, isTouched: state.isTouched };
    case "BLUR":
      return { value: state.value, isTouched: true };
    case "RESET":
      return { value: "", isTouched: false };
    default:
      return initialState;
  }
};

const useValidateInput = (validation) => {
  const [inputState, inputStateDispatch] = useReducer(
    inputReducer,
    initialState
  );

  const isValid = validation(inputState.value);
  const invalidValue = !isValid && inputState.isTouched;

  const inputValueHandler = (event) => {
    inputStateDispatch({ type: "INPUT", value: event.target.value });
  };

  const onBlurHandler = (event) => {
    inputStateDispatch({ type: "BLUR" });
  };

  const resetInput = () => {
    inputStateDispatch({ type: "RESET" });
  };

  return {
    inputValue: inputState.value,
    isValid,
    invalidValue,
    inputValueHandler,
    onBlurHandler,
    resetInput,
  };
};

export default useValidateInput;
