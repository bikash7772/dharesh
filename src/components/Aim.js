import React from "react";
import banner from "../assets/images/image3.jpg";
const Aim = () => {
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
              <h1 className='text-uppercase text-shadow'>Our Aim</h1>
              <p>
                {" "}
                Our sole aim for operation is to be an influencer, a supporter and a home
                that we would create for our budding “Entrepreneurs” to create, design,
                produce and market their products with equal confidence as the other big
                giants. We want to be the voice of few and call for many. Supporter and
                mediator of “be vocal for local”.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='full-width section-padding aim'>
        <div className='container'>
          <div className='row'>
            <div className='full-width sub-title center'>
              <h2>Join in to serve better and seek durable</h2>
            </div>
            <div className='full-width'>
              <p>
                We vouch for “one for all and all for one” providing people with the best
                of Indian products, thereby being a helping hand to the government in
                achieving the “Make in India” goals. We provide homage to the Indian
                companies and name their products and make them easily available for the
                consumption of people. We aim to be the roots of businesses where they can
                grow, bear and bloom.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='full-width section-padding-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='row'>
              <div className='col-xs-12 col-sm-4 col-md-4 indian-product-desc'>
                <div className='full-width indian-product gray-border center'>
                  <span className='full-width'>
                    <i className='fas fa-mobile'></i>
                  </span>
                  <h3>Indian Electronics</h3>
                  <p>
                    Dharesh request all to use products made in india. Let's live for
                    nation.
                  </p>
                  <div className='full-width get-info-btn'>
                    <a
                      className='btn btn-default indian-product-btn'
                      href='electronics.html'
                      role='button'>
                      Get Info More
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-4 indian-product-desc'>
                <div className='full-width indian-product gray-border center'>
                  <span className='full-width'>
                    <i className='fas fa-tshirt'></i>
                  </span>
                  <h3>Indian clothings and footwares</h3>
                  <p>
                    We Indian have the power of unity, Lets unite and support words of
                    Mahatma Gandhi to accept SWADESHI.
                  </p>
                  <div className='full-width get-info-btn'>
                    <a
                      className='btn btn-default indian-product-btn'
                      href='clothing.html'
                      role='button'>
                      Get Info More
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-4 indian-product-desc'>
                <div className='full-width indian-product gray-border center'>
                  <span className='full-width'>
                    <i className='fas fa-car'></i>
                  </span>
                  <h3>Indian Vehicles</h3>
                  <p>
                    The time has came when our country need its citizen. Our Soldiers need
                    our support, Lets unite together and tell China about the power of
                    Indians.
                  </p>
                  <div className='full-width get-info-btn'>
                    <a
                      className='btn btn-default indian-product-btn'
                      href='vehicle.html'
                      role='button'>
                      Get Info More
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

export default Aim;
