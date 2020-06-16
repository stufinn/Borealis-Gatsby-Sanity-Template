import React from "react"

import { Link } from "gatsby"

export default ({ url = "/#", text = "", classNames = "" }) => {
  // combine classes before inserting

  return (
    <Link className={`buttonLink ${classNames}`} to={url}>
      {text}
    </Link>
  )
}
