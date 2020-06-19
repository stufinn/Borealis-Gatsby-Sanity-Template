import React, { useState } from "react"

import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { MdMenu, MdClose } from "react-icons/md"
import NavbarItem from "./NavbarItem"

const NavBar = () => {
  const navbarData = useStaticQuery(graphql`
    query {
      navLogoQuery: allFile(filter: { relativePath: { eq: "Logo-bkgd.png" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 200) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
        }
      }

      defaultLogoQuery: sanitySettings {
        logoImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)

  console.log(navbarData)

  const logo = navbarData.defaultLogoQuery.logoImage
    ? navbarData.defaultLogoQuery.logoImage.asset.fluid
    : navbarData.navLogoQuery.edges[0].node.childImageSharp.fluid

  const mobileLogo = navbarData.defaultLogoQuery
    ? navbarData.defaultLogoQuery.logoImage.asset.fluid
    : navbarData.navLogoQuery.edges[0].node.childImageSharp.fluid

  const navLinks = [
    {
      name: "Home",
      handle: "",
      key: "home",
    },
    {
      name: "Updates",
      handle: "updates",
      key: "updates",
    },
    {
      name: "Contact Us",
      handle: "contact",
      key: "contact",
    },
  ]

  // state for the hamburger menu
  // use let because it needs to be able to be changed?
  let [activeBurger, setActiveBurger] = useState(false)

  // Toggles the hamburger menu on or off
  const toggleBurger = () => {
    //auto-close submenus when toggling the hamburger menu
    return setActiveBurger(!activeBurger)
  }

  const navbarItems = navLinks.map(link => (
    <div className="navbar__ItemContainer" key={link.key}>
      <NavbarItem
        handle={link.handle}
        className="navbar__link"
        name={link.name}
        url={link.iconURL}
      />
      <div className="navbar__dividerContainer">
        <div className="navbar__divider" />
      </div>
    </div>
  ))

  // const navbarStyle = {
  //   position: "-webkit-sticky",
  //   position: "sticky",
  //   top: "0",
  // }

  return (
    <nav className="navbar">
      {/* contain burger in div to maintain in grid position */}
      <div className="navbar__burgerContainer">
        <MdMenu
          className={`navbar__burger ${
            !activeBurger ? "is-active" : "is-hidden"
          }`}
          onClick={toggleBurger}
        />
        <MdClose
          className={`navbar__close ${
            activeBurger ? "is-active" : "is-hidden"
          }`}
          onClick={toggleBurger}
        />
      </div>
      {/* navbar logo */}
      <div className="navbar__logoContainer">
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className="navbar__logo"
        >
          <Img fluid={logo} style={{ width: "150px" }} alt="ABP Logo" />
        </Link>
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className="navbar__mobileLogo"
        >
          <Img fluid={mobileLogo} style={{ width: "150px" }} alt="ABP Logo" />
        </Link>
      </div>
      <div
        className={`navbar__itemsContainer ${
          activeBurger ? "is-active" : "is-hidden"
        }`}
      >
        {navbarItems}
      </div>
    </nav>
  )
}

export default NavBar
