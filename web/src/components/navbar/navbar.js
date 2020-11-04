import React, { useState } from "react"

import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { MdMenu, MdClose } from "react-icons/md"
import NavbarItem from "./NavbarItem"

const NavGridContainer = ({ children }) => (
  <div className="grid grid-flow-col h-full items-center">{children}</div>
)

const NavBar = () => {
  const navbarData = useStaticQuery(graphql`
    query {
      navLogoQuery: allFile(
        filter: { relativePath: { eq: "defaultLogo.png" } }
      ) {
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

  // place custom page data into a variable in the correctstucture

  // ****** temporarily disable custom pages - removed query (See Shib site for example)

  // let customItems = customPages.edges.map(({ node: customPage }) => {
  //   return {
  //     name: customPage.title,
  //     handle: `/pages/${customPage.slug.current}`,
  //     key: `${customPage.id}-${customPage.slug.current}`,
  //   }
  // })

  // add custom pages to end of "more" menu
  const dropDownItems = [
    { name: "News", handle: "/news", key: "news" },

    { name: "Calendar", handle: "/calendar", key: "calendar" },
    {
      name: "Media",
      handle: "/media",
      key: "media",
    },
    {
      name: "Room Booking",
      handle: "/roombooking",
      key: "room-booking",
    },
    {
      name: "Outlook Login",
      url: "https://www.office.com/",
      key: "ms365-dropdown",
    },
    {
      name: "Shibogama Mail",
      url: "https://mail.shibogama.on.ca/",
      key: "shibmail-dropdown",
    },
  ]
  // ].concat(customItems)

  // console.log(navbarData)

  const logo = navbarData.defaultLogoQuery
    ? navbarData.defaultLogoQuery.logoImage.asset
    : navbarData.navLogoQuery.edges[0].node.childImageSharp
  // console.log("LOGO", logo)

  // Links for Mobile Menu
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
      name: "Jobs",
      handle: "jobs",
      key: "jobs",
    },
    {
      name: "News",
      handle: "news",
      key: "news",
    },
    {
      name: "Departments",
      handle: "departments",
      key: "departments",
    },
    {
      name: "Communities",
      handle: "communities",
      key: "communities",
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
  // ].concat(customItems)

  // console.log(communityLinks)

  // Mobile Menu Logic
  const [menuVisibility, setMenuVisibility] = useState("hidden")
  const [hamburgerVisible, setHamburgerVisible] = useState(true)
  const visualMenu = "flex flex-col bg-white text-black p-4 lg:hidden"
  const toggleMenu = () => {
    if (menuVisibility === "hidden") {
      setHamburgerVisible(false)
      setMenuVisibility(visualMenu)
    }
    if (menuVisibility === visualMenu) {
      setMenuVisibility("hidden")
      setHamburgerVisible(true)
    }
  }

  const mobileNavBarItem = "text-black hover:bg-blue-light hover:text-white p-2"
  return (
    <nav>
      {/* Mobile Nav */}
      <div className="flex lg:hidden bg-white text-black">
        <div className="flex w-full mx-4 items-center justify-between">
          <Link className="py-1" to="/">
            <Img className="w-20 " fluid={logo.fluid} />
          </Link>

          <button onClick={toggleMenu}>
            {hamburgerVisible ? (
              <MdMenu size="3rem" />
            ) : (
              <MdClose size="3rem" />
            )}
          </button>
        </div>
      </div>
      <div id="mobileMenu" className={menuVisibility}>
        {navLinks.map(navLink => {
          const { name, handle, key } = navLink
          return (
            <NavbarItem
              className="text-black hover:bg-blue-light hover:text-white py-4 text-3xl"
              name={name}
              handle={handle}
              key={key}
            />
          )
        })}
      </div>
      {/* Desktop Nav */}
      <div className="hidden lg:grid lg:grid-flow-col grid-cols-navLarge col-gap-2 bg-white overflow-visible text-black justify-stretch items-center mt-0 px-4 text-xs lg:text-sm">
        <NavGridContainer>
          <NavbarItem name="Home" handle="" key="home" />
          <NavbarItem name="About Us" handle="about" key="about" />
          {/* <NavbarItem name="Contact Us" handle="contact" key="contact" /> */}
          {/* <NavbarItem name="Jobs" handle="jobs" key="jobs" /> */}
          {/* <NavbarItem name="News" handle="news" key="news" /> */}
          <NavbarItem
            name="Our Communities"
            handle="communities"
            key="communities"
          />
        </NavGridContainer>

        <Link className="mx-auto pt-1" to="/">
          <Img className="w-48 -mb-20 z-10" fluid={logo.fluid} />
        </Link>
        <NavGridContainer>
          {/* <NavbarItem
            name="Departments"
            handle="departments"
            key="departments"
            dropdown={departmentLinks}
          /> */}

          <NavbarItem
            name="Contact Us"
            handle="contact"
            key="contact"
            dropdown={[
              {
                name: "Staff",
                handle: "/contact/#staff",
                key: "staff",
              },
              {
                name: "Current Opportunities",
                handle: "/jobs",
                key: "jobs",
              },
            ]}
            dropdownWrap={true}
          />

          <NavbarItem
            name="More"
            key="more"
            dropdown={dropDownItems}
            dropdownWrap={true}
          />
        </NavGridContainer>
      </div>
    </nav>
  )
}

export default NavBar
