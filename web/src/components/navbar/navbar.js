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

      customPages: allSanityCustomPage(
        filter: { includeInMenu: { eq: true } }
      ) {
        edges {
          node {
            id
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const { defaultNavLogo, sanityLogo, customPages } = data

  const customPageArray = customPages.edges

  const customPageLinks = customPageArray.map(({ node: customPage }) => {
    return {
      name: customPage.title,
      handle: `/page/${customPage.slug.current}`,
      key: `${customPage.id}-${customPage.slug.current}`,
    }
  })

  console.log(customPageLinks)

  // modify this to accept logo from sanity
  const navLogo = sanityLogo
    ? sanityLogo.logoImage.asset
    : defaultNavLogo.childImageSharp

  // These are links for the mobile menu
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
      name: "Updates",
      handle: "updates",
      key: "updates",
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
  ].concat(customPageLinks)

  // Links for the "More" menu
  const moreLinks = [
    { name: "Updates", handle: "/updates", key: "updates" },

    { name: "Calendar", handle: "/calendar", key: "calendar" },
    {
      name: "Media",
      handle: "/media",
      key: "media",
    },
    { name: "About Page", handle: "/about", key: "aboutPageLink" },
    { name: "Google", url: "https://www.google.ca", key: "googlePageLink" },
  ].concat(customPageLinks)

  return (
    <nav>
      {/* navbar logo */}
      {/* desktop nav */}
      <NavGridContainer>
        <Img className="w-20" fluid={navLogo.fluid} />
        <NavbarItem handle="" name="Home" />
        <NavbarItem handle="about" name="About" />
        <NavbarItem handle="contact" name="Contact" />
        <NavbarItem name="More" dropdown={moreLinks} />
      </NavGridContainer>
    </nav>
  )
}

export default NavBar
