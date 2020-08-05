import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <section className='full-width footer'>
        <div className='top-footer full-width'>
          <div className='container'>
            <div className='row'>
              <div className='full-width center'>
                <h2>Contact Us: 6202824886</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom-footer full-width'>
          <div className='container'>
            <div className='row'>
              <div className='row'>
                <div className='col-xs-12 col-sm-4 col-md-4'>
                  <div className='full-width footer-info'>
                    <h4>Contact Address</h4>
                    <div className='reach-us full-width'>
                      <i className='far fa-envelope'></i>
                      <a
                        href='mailto:support@webizysolutions.com'
                        className='contact email'>
                        {" "}
                        support@webizysolutions.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-xs-12 col-sm-4 col-md-4'>
                  <div className='full-width footer-info'>
                    <h4>Email</h4>
                    <div className='reach-us full-width'>
                      <i className='far fa-envelope'></i>
                      <a
                        href='mailto:support@webizysolutions.com'
                        className='contact email'>
                        {" "}
                        support@webizysolutions.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-xs-12 col-sm-4 col-md-4'>
                  <div className='full-width footer-info'>
                    <h4>Phone Number</h4>
                    <div className='reach-us full-width'>
                      <i className='fas fa-phone-alt'></i>
                      <a href='tel:6202824886' className='contact'>
                        +91-6202824886
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='copy-right full-width'>
          <div className='container'>
            <div className='row'>
              <div className='row'>
                <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4 copy-right-wrapper'>
                  <div className='full-width copy-right-info'>
                    <p>Copyright © 2020</p>
                  </div>
                </div>
                <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4 copy-right-wrapper'>
                  <div className='full-width copy-right-info'>
                    <p>All Rights Reserved</p>
                  </div>
                </div>
                <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4 copy-right-wrapper'>
                  <div className='full-width copy-right-info'>
                    <a
                      href='https://webizysolutions.com/'
                      target='_blank'
                      rel='noopener noreferrer'>
                      {" "}
                      Made By WEBIZY IT SOLUTIONS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Footer;
