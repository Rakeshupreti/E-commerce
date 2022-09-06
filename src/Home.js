import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const data =  [
  {url :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTiv4B-1T3IG7iG3F_GSrOxDPBeERGU4EMTQ&usqp=CAU'},
  {url :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrLMM7Kb3vhAdrhL8Emm-xl55_JvMYXbNC9n_dNifMliQOo9DNipRqc_HqfTY56fG5t0&usqp=CAU'},
  {url :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToRpaJh2tvfCda_Ak9FGRg2nWKllCw03dOmNlnmf9EcY7DRFdMQ1O-EalQZekbsUHqL64&usqp=CAU'},
  {url :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZvTs061bmGGAOEtSMyWf9oBEpQh7YfdMNxw&usqp=CAU'},
  {url :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGLW7SLxqQL_v8S7KY6bq52nCzNimv0zbzvw&usqp=CAU'}
];

function Home() {
  const home =() => {

  }
  return (
    <div className="Home">
      {/* <div className="d-flex justify-content-between p-3 text-decoration-none"></div> */}
      <div className="homefull">
        <div className="d-flex flex-column justify-content-center p-5">
          <div>
            <h1>
              Welcome to <br /> your dream furniture
            </h1>
            <br />
          </div>
          <div className="d-flex justify-content-start">
            <button type="button" class="btn btn-outline-dark">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="p-5">
        <SimpleImageSlider
        width={500}
        height={400}
        images={data}
        showBullets={true}
        showNavs={true}/>
        </div>
      </div>
      <div className="homedown">
        <h4>2022 NEW DELHI NCR</h4>
      </div>
    </div>
  );
}

export default Home;
