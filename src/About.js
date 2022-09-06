import React from "react";
import Socialize from "./components/Socialize";

function About() {
  return (
    <div className="About">
      <div className="aboutfull">
        <div className="d-flex flex-column justify-content-center p-5 w-100 ">
          <div>
            <h1>About Us Me</h1>
          </div>
          <div className="m-5">
          <button type="button" class="btn btn-outline-dark">
              Made By Rakesh
            </button>
          </div>
        </div>
        <div>
          <h2>
            <div>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore
            </div>
            <br />
            <br />
             Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. 
            <br /> 
            <br />
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. 
            <br /> 
            <br />
            sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
