const SimpleInput = (props) => {
  return (
    <form>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' />
      </div>
      <div className="form-actions">
        <button>Submit</button>
        <h1>test</h1>
      </div>
    </form>
  );
};

export default SimpleInput;
