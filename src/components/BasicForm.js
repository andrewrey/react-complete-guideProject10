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

  const onSubmitHandler = (event) => {
    event.preventDefault();

    fNameResetInput();
  };

  const firstNameClasses = inValidFName
    ? "form-control invalid"
    : "form-control";

  console.log(firstNameClasses);

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onBlur={fNameOnBlurHandler}
            value={fName}
            onChange={fNameValueHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
