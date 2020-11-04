import React, { useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"

import NavbarItem from "./NavbarItem"

const NavGridContainer = ({ children }) => (
  <div className="grid grid-flow-col h-full items-center">{children}</div>
)

const NavBar = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityLogo: sanitySettings {
        logoImage {
          asset {
            fluid(maxHeight: 200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }

      defaultNavLogo: file(relativePath: { eq: "defaultLogo.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { defaultNavLogo, sanityLogo } = data

  console.log(sanityLogo)

  // modify this to accept logo from sanity
  const navLogo = sanityLogo
    ? sanityLogo.logoImage.asset
    : defaultNavLogo.childImageSharp

  const navLinks = [
    {
      name: "Home",
      handle: "",
      key: "home",
    },
    {
      name: "About Us",
      handle: "about",
      key: "about",
    },
    {
      name: "Contact Us",
      handle: "contact",
      key: "contact",
    },

    {
      name: "News",
      handle: "news",
      key: "news",
    },
    {
      name: "Calendar",
      handle: "calendar",
      key: "calendar",
    },
    {
      name: "Media",
      handle: "media",
      key: "media",
    },
  ]

  return (
    <nav>
      {/* navbar logo */}
      {/* desktop nav */}
      <NavGridContainer>
        <Img className="w-20" fluid={navLogo.fluid} />
        <NavbarItem handle="" name="Home" />
        <NavbarItem handle="about" name="About" />
        <NavbarItem handle="contact" name="Contact" />
        <NavbarItem name="More" dropdown={[{ name: "One", handle: "#" }]} />
      </NavGridContainer>
    </nav>
  )
}

export default NavBar
