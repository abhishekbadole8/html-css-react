import React from "react";


function Footer() {
    return (
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
        </div>)
}

export default Footer;