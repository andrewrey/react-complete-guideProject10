// import { useState } from "react";
import useValidateInput from "../hooks/validateInput";

const SimpleInput = (props) => {
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // let formIsValid = false;

  // if (enteredNameIsValid) {
  //   formIsValid = true;
  // }

  // useEffect(()=>{
  //   if(enteredNameIsValid){
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid])

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const nameInputBlurHandler = (event) => {
  //   setEnteredNameTouched(true);
  // };

  // const formSubmissionHandler = (event) => {
  //   event.preventDefault();
  //   setEnteredNameTouched(true);

  //   if (!enteredNameIsValid) {
  //     return;
  //   }
  //   setEnteredName("");
  //   setEnteredNameTouched(false);
  // };

  const {
    nameInputIsInvalid,
    emailInputIsInvalid,
    formSubmissionHandler,
    enteredName,
    enteredEmail,
    inputChangeHandler,
    inputBlurHandler,
    formIsValid,
  } = useValidateInput();

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          value={enteredEmail}
          type="email"
          id="email"
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
