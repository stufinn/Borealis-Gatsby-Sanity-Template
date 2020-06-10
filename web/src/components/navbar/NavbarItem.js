import React from "react"
import { Link } from "gatsby"

// default to empty strings because I may use it for other purposes (that don't use these props)
const NavbarItem = ({
  handle = "",
  itemKey = "",
  className = "",
  name = "",
  url = "",
}) => (
  <Link
    to={`/${handle}`}
    key={itemKey}
    className={className}
    activeClassName="navbar--active"
  >
    <div className="navbar__linkText">{name}</div>
  </Link>
)

export default NavbarItem
