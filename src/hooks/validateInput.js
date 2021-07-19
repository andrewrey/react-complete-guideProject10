import { useState } from "react";

const useValidateInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const inputChangeHandler = (event) => {
    switch (event.target.id) {
      case "name":
        setEnteredName(event.target.value);
        break;
      case "email":
        setEnteredEmail(event.target.value);
        break;
      default:
        return;
    }
  };

  const inputBlurHandler = (event) => {
    if (event.target.id === "name") {
      setEnteredNameTouched(true);
    } else if (event.target.id === "email") {
      setEnteredEmailTouched(true);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  return {
    nameInputIsInvalid,
    emailInputIsInvalid,
    formSubmissionHandler,
    enteredName,
    enteredEmail,
    inputChangeHandler,
    inputBlurHandler,
    formIsValid,
  };
};

export default useValidateInput;
