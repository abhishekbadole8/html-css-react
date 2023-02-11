import React from "react";
import man from "../images/human.svg"

function Header() {
    return (
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
                <img src={man} alt="Person" />
            </div>
        </header>
    );
}

export default Header;