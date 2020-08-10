import React from "react";
import loading from "../assets/images/Rolling-1.9s-197px.svg";
import banner from "../assets/images/image3.jpg";
const Contact = () => {
  const [track, setTrack] = React.useState(1);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [response, setResponse] = React.useState("");
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const handleSubmit = () => {
    if (!name || !email || !subject || !message) {
      alert("Field Cannot be empty");
      setResponse("");
    } else {
      setTrack(0);
      setResponse("");
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://company-details.herokuapp.com/api/contact", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          setTrack(1);
          setResponse("We will Contant You Soon");
        })
        .catch((error) => setTrack(1));
    }
  };
  return (
    <React.Fragment>
      <section className='banner full-width center inner-banner'>
        <figure>
          <img src={banner} alt='banner' title='banner' />
        </figure>
        <div className='container'>
          <div className='row'>
            <div className='banner-content'>
              <h1 className='text-uppercase text-shadow'>Contact Us. . . .</h1>
            </div>
          </div>
        </div>
      </section>
      <section className='full-width contact-area section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='row'>
              <form
                className='full-width'
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}>
                <div className='col-xs-12 col-sm-6 col-md-6'>
                  <div className='full-width input-field'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        id='Name'
                        placeholder='Enter Your Name'
                        name='Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='email'
                        className='form-control'
                        id='Email'
                        placeholder='Enter Your Email'
                        name='Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        id='Subject'
                        placeholder='Enter Subject'
                        name='Subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
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
                      onChange={(e) => setMessage(e.target.value)}></textarea>
                  </div>
                </div>
                <div className='full-width submit-btn contact-submit-btn'>
                  <button type='submit' className='btn'>
                    Submit
                  </button>
                  {track ? (
                    ""
                  ) : (
                    <div>
                      <img
                        src={loading}
                        alt='loading'
                        style={{ width: "100px", height: "70px", marginTop: "50px" }}
                      />
                    </div>
                  )}
                  <h4>{response}</h4>
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
