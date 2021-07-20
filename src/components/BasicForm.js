import useValidateInput from "../hooks/validateInput";

const BasicForm = (props) => {
  const {
    inputValue: fName,
    isValid: fNameIsValid,
    invalidValue: inValidFName,
    inputValueHandler: fNameValueHandler,
    onBlurHandler: fNameOnBlurHandler,
    resetInput: fNameResetInput,
  } = useValidateInput((data) => data.trim().length > 0);

  const {
    inputValue: lName,
    isValid: lNameIsValid,
    invalidValue: inValidLName,
    inputValueHandler: lNameValueHandler,
    onBlurHandler: lNameOnBlurHandler,
    resetInput: lNameResetInput,
  } = useValidateInput((data) => data.trim().length > 0);

  const {
    inputValue: emailEntered,
    isValid: emailIsValid,
    invalidValue: inValidEmail,
    inputValueHandler: emailValueHandler,
    onBlurHandler: emailOnBlurHandler,
    resetInput: emailResetInput,
  } = useValidateInput((data) => data.includes("@"));

  let formIsValid = false;

  if (fNameIsValid && lNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    fNameResetInput();
    lNameResetInput();
    emailResetInput();
  };
  const firstNameClasses = inValidFName
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = inValidLName
    ? "form-control invalid"
    : "form-control";

  const emailClasses = inValidEmail ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onBlur={fNameOnBlurHandler}
            value={fName}
            onChange={fNameValueHandler}
          />
          {inValidFName && <p className="error-text">Must be not left blank</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onBlur={lNameOnBlurHandler}
            value={lName}
            onChange={lNameValueHandler}
          />
          {inValidLName && <p className="error-text">Must be not left blank</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onBlur={emailOnBlurHandler}
          value={emailEntered}
          onChange={emailValueHandler}
        />
        {inValidEmail && (
          <p className="error-text">Must be a valid email address.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
