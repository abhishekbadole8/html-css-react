import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import image from './humanImg.svg'

ReactDOM.render(
  <div>
    <header id="first-box">

      <div className="left-box">
        <h1 className="first-heading">
          An inspiring design delivered to your inbox every morning
        </h1>
        <p className="second-heading">
          Our team scouts the internet for the best designs,<br></br>illustrations and
          art and delivers a truly inspiring<br></br>one every day to your inbox
        </p>
        <h3>Show me how it looks</h3>

        <div className="input-btn">
          <input type="email" placeholder="Your e-mail address" />
          <button>Register Now</button>
        </div>
        <p className="second-para">Free - No Spam - No Data Sharing</p>
      </div>

      <div className="right-box">
        <img src={image} alt="Person" />
      </div>
    </header>

    <div className="footer">
      <ul className="left-footer-list">
        <li>Prompt Generator</li>
        <li>Dweep Daily</li>
        <li>All Contributors</li>
        <li>Your data on Dweep.io</li>
        <li>Contribute to Dweep</li>
      </ul>

      <div className="lol">
        <ul className="right-footer-list">
          <li>Dweep.io</li>
          <li>Made with love in India</li>
          <li className="social-icon-all">
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-instagram social-icon"></i>
          </li>
        </ul>

        <ul className="sec-lis">
          <li>hello@dweep.io</li>
        </ul>
      </div>
    </div>
  </div>,
  document.getElementById("root")
);
