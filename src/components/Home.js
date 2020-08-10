import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/images/image5.jpg";
import commingsoon from "../assets/images/comingsoon.PNG";
import img02 from "../assets/images/img-02.jpg";
import loading from "../assets/images/Rolling-1.9s-197px.svg";
let arr = [];
const Home = () => {
  const [track, setTrack] = React.useState(1);
  const [suggestmore, setSuggestmore] = React.useState("");
  const [data, setData] = React.useState("");
  const [value, setValue] = React.useState("");
  const [searchvalue, setSearchvalue] = React.useState("");
  const [suggest, setSuggest] = React.useState("");
  const [name, setname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const url = "https://company-details.herokuapp.com";
  const submit = () => {
    if (!searchvalue) {
      alert("Filed Cannot be empty  ");
    } else {
      fetch(url + "/api/getData", {
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
    }
  };

  const search = () => {
    if (!searchvalue) {
      arr = [];
    } else {
      arr = [];
      // Get the modal
      var modal = document.getElementById("myModal");

      // Get the button that opens the modal
      var btn = document.getElementById("myBtn");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on the button, open the modal
      btn.onclick = function () {
        modal.style.display = "block";
      };

      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        modal.style.display = "none";
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };

      data.map((item) => {
        if (item.companyName.toLowerCase() == searchvalue.toLocaleLowerCase()) {
          setValue(item.companyName);
        }
        if (item.companyName.toLowerCase().startsWith(searchvalue.toLocaleLowerCase())) {
          arr.push(item.companyName);
        }
      });
      if (!value) {
        if (arr[0]) {
          document.getElementById("val").innerHTML = arr[0];

          if (arr[1]) {
            document.getElementById("val2").innerHTML = arr[1];
          } else {
            document.getElementById("val2").innerHTML = "";
          }
        } else {
          document.getElementById("val").innerHTML = "";
          document.getElementById("val2").innerHTML = "";
        }
        arr = [];
      } else {
        document.getElementById("val3").innerHTML = value;
        arr = [];
      }
    }
  };

  const suggestCompany = () => {
    if (!suggest || !name || !email) {
      setSuggestmore("");
      alert("Field Cannot be Empty");
    } else {
      setTrack(0);
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({ CompanyName: suggest, name: name, mail: email });

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(url + "/api/sendmail", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          setSuggestmore("Thank You , Suggest More...");
          setTrack(1);
          setSuggest("");
          setEmail("");
          setname("");
        })
        .catch((error) => setTrack(1));
    }
  };

  React.useEffect(() => {
    var modal2 = document.getElementById("myModal2");

    // Get the button that opens the modal
    var btn2 = document.getElementById("myBtn2");

    // Get the <span> element that closes the modal
    var span2 = document.getElementsByClassName("close2")[0];

    // When the user clicks on the button, open the modal
    btn2.onclick = function () {
      modal2.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span2.onclick = function () {
      modal2.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    };
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <React.Fragment>
      <div id='myModal' className='modal'>
        <div className='modal-content'>
          <span className='close'>&times;</span>
          <div>
            {!value ? (
              "Non Indian Company   "
            ) : (
              <div>
                <span id='val3'></span>
              </div>
            )}
            <br />
            <br />

            {!arr ? (
              "Loading"
            ) : (
              <div>
                Loking For{"       "}
                <span id='val'></span>
                <span id='val2'></span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div id='myModal2' className='modal'>
        <div className='modal-content'>
          <span className='close2'>&times;</span>
          <div className='suggestform'>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                suggestCompany();
              }}>
              <input
                className='inputfield'
                type='text'
                placeholder='Your Name'
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
              <input
                className='inputfield'
                type='text'
                placeholder='Company Name'
                value={suggest}
                onChange={(e) => setSuggest(e.target.value)}
              />
              <input
                className='inputfield'
                type='text'
                placeholder='Email Id'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type='submit' className='submit-btn'>
                Submit
              </button>
              {track ? (
                ""
              ) : (
                <div className='loading'>
                  <img
                    src={loading}
                    alt='loading'
                    style={{ width: "100px", height: "50px" }}
                  />
                </div>
              )}
            </form>
            <h5 id='suggestmore'>{suggestmore}</h5>
          </div>
        </div>
      </div>
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
                  <button type='submit' className='btn submit-btn' id='myBtn'>
                    submit
                  </button>
                </div>
              </form>
              <div className='modelbtn'>
                {" "}
                <h1 className='text-uppercase text-shadow'>
                  Let's support "MAKE IN INDIA"
                </h1>
                <button className='btn submit-btn' type='submit' id='myBtn2'>
                  Suggest
                </button>
              </div>
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
      <section className='full-width support-view'>
        <div className='owl-carousel owl-theme'>
          <div className='item'>
            <div className='full-width center'>
              <span className='full-width support-india-desc-figure center'>
                <i className='fas fa-tint'></i>
              </span>
              <div className='full-width support-india-desc'>
                <h4>Bleed for India</h4>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='full-width center'>
              <span className='full-width support-india-desc-figure center'>
                <i className='fas fa-mobile'></i>
              </span>
              <div className='full-width support-india-desc'>
                <h4>Bleed for India</h4>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='full-width center'>
              <span className='full-width support-india-desc-figure center'>
                <i className='fas fa-heart'></i>
              </span>
              <div className='full-width support-india-desc'>
                <h4>Bleed for India</h4>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='full-width center'>
              <span className='full-width support-india-desc-figure center'>
                <i className='far fa-chart-bar'></i>
              </span>
              <div className='full-width support-india-desc'>
                <h4>Bleed for India</h4>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='full-width center'>
              <span className='full-width support-india-desc-figure center'>
                <i className='fas fa-globe-africa'></i>
              </span>
              <div className='full-width support-india-desc'>
                <h4>Bleed for India</h4>
              </div>
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
                <Link className='btn btn-default' to='/getlogo'>
                  Contact us to get your logo here
                </Link>
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
