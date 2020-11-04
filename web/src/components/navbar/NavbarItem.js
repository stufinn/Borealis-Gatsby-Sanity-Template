import React from "react"
import { Link } from "gatsby"
import DropdownMenu from "./dropDownMenu"

// default to empty strings because I may use it for other purposes (that don't use these props)
const NavbarItem = ({
  handle = null,
  itemKey = "",
  name = "",
  dropdown = null,
  dropdownWrap = false,
  className = "",
}) => {
  const navLinkClass = `text-black text-center group-hover:bg-blue-light group-hover:text-green-300 text-xl h-full grid items-center py-2 ${className}`
  // console.log(handle)
  return (
    // "group" allows for child elements to be affected by hover over a parent element
    // https://tailwindcss.com/docs/pseudo-class-variants#group-hover
    // https://tailwindcss.com/docs/configuring-variants
    <div className=" group relative inline-block h-full">
      {/* If no handle is provided, render a visually identical non-link item. Empty string is OK (i.e. Index Page) */}
      {handle != null ? (
        <Link
          to={`/${handle}`}
          key={itemKey}
          className={navLinkClass}
          activeClassName="text-blue-dark"
        >
          <div className="">{name}</div>
        </Link>
      ) : (
        <div className={` cursor-pointer ${navLinkClass}`}>{name}</div>
      )}
      {dropdown && (
        <DropdownMenu dropdown={dropdown} dropdownWrap={dropdownWrap} />
      )}
    </div>
  )
}

export default NavbarItem
