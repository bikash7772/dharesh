import React from "react";
import banner from "../assets/images/image3.jpg";
const Contact = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <React.Fragment>
      <section className='banner full-width center inner-banner'>
        <figure>
          <img src={banner} alt='banner' title='banner' />
        </figure>
        <div className='container'>
          <div className='row'>
            <div className='banner-content'></div>
          </div>
        </div>
      </section>
      <section className='full-width contact-area section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='row'>
              <form className='full-width'>
                <div className='col-xs-12 col-sm-6 col-md-6'>
                  <div className='full-width input-field'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        id='Name'
                        placeholder='Enter Your Name'
                        name='Your Name'
                        required=''
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='email'
                        className='form-control'
                        id='Email'
                        placeholder='Enter Your Email'
                        name='Your Email'
                        required=''
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        id='Subject'
                        placeholder='Enter Subject'
                        name='Subject'
                        required=''
                      />
                    </div>
                  </div>
                </div>
                <div className='col-xs-12 col-sm-6 col-md-6'>
                  <div className='full-width'>
                    <textarea
                      className='form-control'
                      rows='3'
                      id='Textarea'
                      required=''></textarea>
                  </div>
                </div>
                <div className='full-width submit-btn contact-submit-btn'>
                  <button type='submit' className='btn'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Contact;
