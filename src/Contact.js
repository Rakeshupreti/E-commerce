import React from "react";

function Contact() {
  return (
    <div className="Contact">
      <div className=" contactfull">
        <div className="contactheading">
          <div>
            <h1>CONTACT US ME</h1>
          </div>
          <div className="d-flex justify-content-center m-5">
            <button type="button" class="btn btn-outline-dark">
              LETS TALK :)
            </button>
          </div>
        </div>
        <div>
          <div className="d-flex gap-4 m-5">
            <div>
              <h3>Phone</h3>
            </div>
            <div>
              <p>
                <a href="tel:+919871417708" className="text-decoration-none link-dark">+91 9871417708</a>
              </p>
            </div>
          </div>
          <div className="d-flex gap-4 m-5">
            <div>
              <h3>Email</h3>
            </div>
            <div>
              <p>
                <a href="email:uptirakesh73@gmail.com" className="text-decoration-none link-dark" >
                  upretirakesh73@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
