import React from "react";
const Getlogo = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <React.Fragment>
      <section className='full-width section-padding get-logo center'>
        <div className='auto-width2'>
          <form className='full-width get-logo-form'>
            <div className='form-group'>
              <input
                type='text'
                className='form-control box-shadow1'
                id='exampleInputName'
                placeholder='Name'
              />
            </div>
            <div className='form-group'>
              <input
                type='number'
                className='form-control box-shadow1'
                id='exampleInputNumber'
                placeholder='Contact Number'
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control box-shadow1'
                id='exampleInputbrandname'
                placeholder='Company / Brand Name'
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control box-shadow1'
                id='exampleInputlocation'
                placeholder='Company Head Office Location'
              />
            </div>
            <div className='form-group'>
              <input type='file' id='exampleInputFile' className='input-file' />
            </div>
            <div className='full-width proceed-here'>
              <button type='submit' className='btn btn-default form-submit-btn'>
                Get a call back
              </button>
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Getlogo;
