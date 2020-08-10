import React from "react";
import loading from "../assets/images/Rolling-1.9s-197px.svg";
const Getlogo = () => {
  const [track, setTrack] = React.useState(1);
  const [image, setImage] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [name, setName] = React.useState("");
  const [contactNo, setContactno] = React.useState("");
  const [companyLoc, setCompanyloc] = React.useState("");
  const [companyName, setCompanyname] = React.useState("");
  const [response, setResponse] = React.useState("");
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const postDetails = () => {
    if (!url || !name || !contactNo || !companyLoc || !companyName) {
      alert("filed cannot be empty");
      setResponse("");
    } else {
      setTrack(0);
      setResponse("");
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "blog-post");
      data.append("cloud_name", "bikashcloud");
      fetch("https://api.cloudinary.com/v1_1/bikashcloud/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setUrl(data.url);
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({
            name: name,
            companyLoc: companyLoc,
            companyName: companyName,
            contactNo: contactNo,
            url: url,
          });

          var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };

          fetch("https://company-details.herokuapp.com/api/getlogo", requestOptions)
            .then((response) => response.text())
            .then((result) => {
              setTrack(1);
              setResponse("Thank You For Joining With Us....");
            })
            .catch((error) => setTrack(1));
        })
        .catch((err) => {
          setTrack(0);
        });
    }
  };
  return (
    <React.Fragment>
      <section className='full-width section-padding get-logo center'>
        <div className='auto-width2'>
          <form
            className='full-width get-logo-form'
            onSubmit={(e) => {
              e.preventDefault();
              postDetails();
            }}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control box-shadow1'
                id='exampleInputName'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='number'
                className='form-control box-shadow1'
                id='exampleInputNumber'
                placeholder='Contact Number'
                value={contactNo}
                onChange={(e) => setContactno(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control box-shadow1'
                id='exampleInputbrandname'
                placeholder='Company / Brand Name'
                value={companyName}
                onChange={(e) => setCompanyname(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control box-shadow1'
                id='exampleInputlocation'
                placeholder='Company Head Office Location'
                value={companyLoc}
                onChange={(e) => setCompanyloc(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='file'
                id='exampleInputFile'
                className='input-file'
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className='full-width proceed-here'>
              <button type='submit' className='btn btn-default form-submit-btn'>
                Get a call back
              </button>
              {track ? (
                ""
              ) : (
                <div>
                  <img
                    src={loading}
                    alt='loading'
                    style={{ width: "120px", height: "70px" }}
                  />
                </div>
              )}
            </div>
            <h4>{response}</h4>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Getlogo;
