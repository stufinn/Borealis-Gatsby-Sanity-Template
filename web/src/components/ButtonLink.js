import React from "react"

import { Link } from "gatsby"

export default ({ url = "/#", text = "", classNames = "" }) => {
  // combine classes before inserting
  // let classes = `buttonLink ${classNames}`

  return (
    <Link className={`buttonLink ${classNames}`} to={url}>
      {text}
    </Link>
  )
}
