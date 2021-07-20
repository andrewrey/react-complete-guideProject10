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

  const onSubmitHandler = (event) => {
    event.preventDefault();

    fNameResetInput();
  };

  const firstNameClasses = inValidFName
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = inValidLName
    ? "form-control invalid"
    : "form-control";

  const emailClasses = inValidEmail ? "form-control invalid" : "form-control";

  console.log(firstNameClasses);

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
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input type="text" id="email" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
