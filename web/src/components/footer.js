import React from "react"
import { Link } from "gatsby"
import { FaFacebook } from "react-icons/fa"

export default () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__facebook"
        >
          <FaFacebook />
        </a>
        <div className="footer__address">
          <div style={{ marginBottom: 15 }}>
            76 Lake Street
            <br />
            Sioux Lookout, Ontario
            <br /> P8T 1E5
          </div>{" "}
          <div>
            <span className="footer__phoneNumberCity">Sioux Lookout:</span>
            <span className="settings__touchOnly">
              <br />
            </span>
            <span className="settings__lgOnly">&nbsp;</span>
            <a href="tel:#" className="footer__phoneLink">
              (555) 555-5555
            </a>
          </div>
        </div>
        <div className="footer__linksContainer">
          <Link to="/">Home</Link>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__copyrightInfo">
          © {new Date().getFullYear()}, Borealis Web Development
          <br />
          All Rights Reserved
        </div>
        <a
          href="#"
          className="footer__CMS settings__link"
          target="__blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
      </div>
    </footer>
  )
}
