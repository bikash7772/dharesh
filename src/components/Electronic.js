import React from "react";
import banner from "../assets/images/image3.jpg";
import cs from "../assets/images/comingsoon.PNG";
const Electronic = () => {
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
      <section className='full-width section-padding electronics-section'>
        <div className='container'>
          <div className='row'>
            <div className='full-width sub-title center'>
              <h2>Top Indian Electronics Brand</h2>
            </div>
            <div className='row'>
              <div className='col-xs-12 col-sm-4 col-md-4 electronics'>
                <div className='full-width component'>
                  <figure className='box-shadow1'>
                    <img src={cs} align='allen solly' title='allen solly' />
                  </figure>
                </div>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-4 electronics'>
                <div className='full-width component'>
                  <figure className='box-shadow1'>
                    <img src={cs} align='allen solly' title='allen solly' />
                  </figure>
                </div>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-4 electronics'>
                <div className='full-width component'>
                  <figure className='box-shadow1'>
                    <img src={cs} align='allen solly' title='allen solly' />
                  </figure>
                </div>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-4 electronics'>
                <div className='full-width component'>
                  <figure className='box-shadow1'>
                    <img src={cs} align='allen solly' title='allen solly' />
                  </figure>
                </div>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-4 electronics'>
                <div className='full-width component'>
                  <figure className='box-shadow1'>
                    <img src={cs} align='allen solly' title='allen solly' />
                  </figure>
                </div>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-4 electronics'>
                <div className='full-width component'>
                  <figure className='box-shadow1'>
                    <img src={cs} align='allen solly' title='allen solly' />
                  </figure>
                </div>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-4 electronics'>
                <div className='full-width component'>
                  <figure className='box-shadow1'>
                    <img src={cs} align='allen solly' title='allen solly' />
                  </figure>
                </div>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-4 electronics'>
                <div className='full-width component'>
                  <figure className='box-shadow1'>
                    <img src={cs} align='allen solly' title='allen solly' />
                  </figure>
                </div>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-4 electronics'>
                <div className='full-width component'>
                  <figure className='box-shadow1'>
                    <img src={cs} align='allen solly' title='allen solly' />
                  </figure>
                </div>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-4 electronics'>
                <div className='full-width component'>
                  <figure className='box-shadow1'>
                    <img src={cs} align='allen solly' title='allen solly' />
                  </figure>
                </div>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-4 electronics'>
                <div className='full-width component'>
                  <figure className='box-shadow1'>
                    <img src={cs} align='allen solly' title='allen solly' />
                  </figure>
                </div>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-4 electronics'>
                <div className='full-width component'>
                  <figure className='box-shadow1'>
                    <img src={cs} align='allen solly' title='allen solly' />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Electronic;
