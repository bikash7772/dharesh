import React from "react";
import banner from "../assets/images/image3.jpg";
import img2 from "../assets/images/image2.jpg";

import img1 from "../assets/images/image1.jpg";

const About = () => {
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
            <div className='banner-content'>
              <h1 className='text-uppercase text-shadow'>About Us</h1>
              <p>
                Purchasing locally produced goods is benefecial to the economy as long as
                we also export what we produce apart from the domestic consumption.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='full-width section-padding our-mission'>
        <div className='container'>
          <div className='row'>
            <div className='row'>
              <div className='col-xs-12 col-sm-6 col-md-6 our-mission-section'>
                <div className='full-width our-mission-figure'>
                  <figure className='box-shadow1'>
                    <img src={img1} align='Our Mission' title='Our Mission' />
                  </figure>
                </div>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-6 our-mission'>
                <div className='full-width our-mission-content'>
                  <h3>Our Mission</h3>
                  <p>
                    We vouch for “one for all and all for one” providing people with the
                    best of Indian products, thereby being a helping hand to the
                    government in achieving the “Make in India” goals. We provide homage
                    to the Indian companies and name their products and make them easily
                    available for the consumption of people. We aim to be the roots of
                    businesses where they can grow, bear and bloom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='full-width our-vission section-padding-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='row'>
              <div className='col-xs-12 col-sm-6 col-md-6 our-vission'>
                <div className='full-width our-vission-content'>
                  <h3>Our vission</h3>
                  <p>
                    The money you pay for buying the product goes to the producers.If this
                    producer happens to be indian, the more he earns the more he pays
                    taxes to the government.So Government would have more money to spend
                    on the country's development.
                  </p>
                </div>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-6 our-vission-section'>
                <div className='full-width our-vission-figure'>
                  <figure className='box-shadow1'>
                    <img src={img2} align='Our vission' title='Our vission' />
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
export default About;
