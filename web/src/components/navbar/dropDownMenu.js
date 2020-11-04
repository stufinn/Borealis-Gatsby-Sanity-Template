import { Link } from "gatsby"
import React from "react"

// Resource on dropdown menus:
// https://www.w3schools.com/css/css_dropdowns.asp

const DropDownLink = ({ children, handle, dropdownWrap = false }) => {
  return (
    // whitespace nowrap prevents text-wrapping

    <Link
      className={`hover:bg-blue-light hover:text-white text-black text-lg p-3 border-t first:border-t-0  border-gray-dark first:border-b-0 bg-white ${!dropdownWrap &&
        "whitespace-no-wrap"} `}
      to={handle}
      activeClassName="text-blue-dark"
    >
      {children}
    </Link>
  )
}

const DropDownExternalLink = ({ url = "#", name, dropdownWrap = false }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:bg-blue-light hover:text-white text-black text-lg p-3 border-t first:border-t-0  border-gray-dark first:border-b-0 bg-white ${!dropdownWrap &&
        "whitespace-no-wrap"} `}
    >
      {name}
    </a>
  )
}

// dropdown accepts an array of objects with the following properties: handle, name

const DropdownMenu = ({ dropdown, dropdownWrap = false }) => {
  return (
    // dropdown wrap list to the right if dropdownWrap is enabled for nav items near the edge of the screen
    // uses tailwind class group-hover. This variant must be enable in tailwind config, and the parent component must have class of group
    <div
      className={`hidden group-hover:grid nav__dropdownContent absolute  z-20 min-w-full border border-gray-dark ${dropdownWrap &&
        "right-0"}`}
    >
      {dropdown.map((item, index) => {
        {
          /* render as internal link if has handle */
        }
        if (item.handle) {
          return (
            <DropDownLink
              handle={item.handle}
              key={`dropdown-${item.name}-${index}`}
              dropdownWrap={dropdownWrap}
            >
              {item.name}
            </DropDownLink>
          )
        }
        if (item.url) {
          return (
            <DropDownExternalLink
              name={item.name}
              key={`dropdown-${item.name}-${index}`}
              url={item.url}
            />
          )
        }
      })}
    </div>
  )
}

export default DropdownMenu
