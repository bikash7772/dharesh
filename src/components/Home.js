import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/images/image5.jpg";
import commingsoon from "../assets/images/comingsoon.PNG";
import img02 from "../assets/images/img-02.jpg";
let arr = [];
const Home = () => {
  const [data, setData] = React.useState("");
  const [value, setValue] = React.useState("");
  const [searchvalue, setSearchvalue] = React.useState("");
  const url = "https://company-details.herokuapp.com/api/getData";
  const submit = () => {
    fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((companyData) => {
        if (companyData) {
          setData(companyData.data);
          search();
        }
      })
      .catch((err) => {});
  };

  const search = () => {
    if (!searchvalue) {
      alert("empty");
      arr = [];
    } else {
      data.map((item) => {
        if (item.companyName.toLowerCase() == searchvalue.toLocaleLowerCase()) {
          setValue(item.companyName);
        }
        if (item.companyName.toLowerCase().startsWith(searchvalue.toLocaleLowerCase())) {
          arr.push(item.companyName);
        }
      });
      if (!value) {
        alert("non-indian company  /n" + "looking for" + arr);
      } else {
        alert(value);
        arr = [];
      }
    }
  };
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <React.Fragment>
      <section className='banner full-width center'>
        <figure>
          <img src={banner} alt='banner' title='banner' />
        </figure>
        <div className='container'>
          <div className='row'>
            <div className='banner-content'>
              <form
                className='float-left banner-form'
                onSubmit={(e) => {
                  e.preventDefault();
                  submit();
                }}>
                <div className='form-group'>
                  <i className='fas fa-search'></i>
                  <input
                    type='search'
                    className='form-control'
                    id='exampleInputSearch'
                    placeholder='Verify Company '
                    value={searchvalue}
                    onChange={(e) => setSearchvalue(e.target.value)}
                  />
                </div>
              </form>
              <h1 className='text-uppercase text-shadow'>
                Let's support "MAKE IN INDIA"
              </h1>
              <form className='float-left banner-form add-company'>
                <div className='form-group'>
                  <input
                    type='search'
                    className='form-control add'
                    id='exampleInputSearch'
                    placeholder='Suggest Company'
                  />
                </div>
                <button className='btn btn-default' type='submit'>
                  Suggest
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className='support-india full-width'>
        <div className='auto-width1'>
          <div className='full-width center'>
            <span className='full-width support-india-desc-figure center'>
              <i className='fas fa-tint'></i>
            </span>
            <div className='full-width support-india-desc'>
              <h4>Bleed for India</h4>
            </div>
          </div>
        </div>
        <div className='auto-width1'>
          <div className='full-width center'>
            <span className='full-width support-india-desc-figure center'>
              <i className='fas fa-mobile'></i>
            </span>
            <div className='full-width support-india-desc'>
              <h4>Mobile App. Coming soon</h4>
            </div>
          </div>
        </div>
        <div className='auto-width1'>
          <div className='full-width center'>
            <span className='full-width support-india-desc-figure center'>
              <i className='fas fa-heart'></i>
            </span>
            <div className='full-width support-india-desc'>
              <h4>For India by heart</h4>
            </div>
          </div>
        </div>
        <div className='auto-width1'>
          <div className='full-width center'>
            <span className='full-width support-india-desc-figure center'>
              <i className='far fa-chart-bar'></i>
            </span>
            <div className='full-width support-india-desc'>
              <h4>Guaranteed growth</h4>
            </div>
          </div>
        </div>
        <div className='auto-width1'>
          <div className='full-width center'>
            <span className='full-width support-india-desc-figure center'>
              <i className='fas fa-globe-africa'></i>
            </span>
            <div className='full-width support-india-desc'>
              <h4>Best around the globe</h4>
            </div>
          </div>
        </div>
      </section>
      <section className='full-width section-padding brand-section'>
        <div className='container'>
          <div className='row'>
            <div className='full-width sub-title center'>
              <h2>Our Top Indian Brands</h2>
            </div>
            <div className='row'>
              <div className='col-xs-12 col-sm-6 col-md-3 indian-brand-desc'>
                <div className='full-width indian-brand'>
                  <figure className='box-shadow1'>
                    <img src={commingsoon} alt='brand-name' title='brand-name' />
                  </figure>
                  <div className='service-image-content full-width'>
                    <h3>DUMMY DATA</h3>
                    <p>ABOUT THE BRAND</p>
                    <span>Contact details</span>
                  </div>
                </div>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-3 indian-brand-desc'>
                <div className='full-width indian-brand'>
                  <figure className='box-shadow1'>
                    <img src={commingsoon} alt='brand-name' title='brand-name' />
                  </figure>
                  <div className='service-image-content full-width'>
                    <h3>DUMMY DATA</h3>
                    <p>About the brand</p>
                    <span>Contact details</span>
                  </div>
                </div>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-3 indian-brand-desc'>
                <div className='full-width indian-brand'>
                  <figure className='box-shadow1'>
                    <img src={commingsoon} alt='brand-name' title='brand-name' />
                  </figure>
                  <div className='service-image-content full-width'>
                    <h3>DUMMY DATA</h3>
                    <p>about the brand</p>
                    <span>Contact details</span>
                  </div>
                </div>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-3 indian-brand-desc'>
                <div className='full-width indian-brand'>
                  <figure className='box-shadow1'>
                    <img src={commingsoon} alt='brand-name' title='brand-name' />
                  </figure>
                  <div className='service-image-content full-width'>
                    <h3>DUMMY DATA</h3>
                    <p>about the brand</p>
                    <span>Contact details</span>
                  </div>
                </div>
              </div>
              <div className='full-width brand-btn center'>
                <a className='btn btn-default' href='get-logo.html'>
                  Contact us to get your logo here
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='full-width section-padding'>
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
                    <Link
                      className='btn btn-default indian-product-btn'
                      to='/electronic'
                      role='button'>
                      Get Info More
                    </Link>
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
                    <Link
                      className='btn btn-default indian-product-btn'
                      to='/clothing'
                      role='button'>
                      Get Info More
                    </Link>
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
                    <Link
                      className='btn btn-default indian-product-btn'
                      to='/vehicle'
                      role='button'>
                      Get Info More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='full-width who-are-we'>
        <div className='container'>
          <div className='row'>
            <div className='row'>
              <div className='col-xs-12 col-sm-12 col-md-6 who-are-we-section'>
                <div className='full-width who-are-we-figure'>
                  <figure className='box-shadow1'>
                    <img src={img02} alt='Who are we' title='Who we are' />
                  </figure>
                </div>
              </div>
              <div className='col-xs-12 col-sm-12 col-md-6 who-are-we-section'>
                <div className='full-width who-are-we-content'>
                  <h3>Who Are We</h3>
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
    </React.Fragment>
  );
};

export default Home;
