import React from "react"
import { Link } from "gatsby"

import { MdPhone } from "react-icons/md"

const ContactBar = () => {
  return (
    <div className="contactBar">
      <div className="contactBar__phone">
        <MdPhone style={{ marginRight: 10, fontSize: "1.25rem" }} />
        <span className="contactBar--bold">
          Sioux Lookout:
        </span>&nbsp;&nbsp; <a href="tel:+5555555555">(555) 555-5555</a>
      </div>
      <Link to="/contact" className="contactBar__quote contactBar--bold">
        GET A QUOTE
      </Link>
    </div>
  )
}

export default ContactBar
