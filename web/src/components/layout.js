/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import "../styles/components/_layout.scss"

import ContactBar from "./contactBar"
import NavBar from "./navbar/navbar"
import Footer from "./footer"

const Layout = ({ children, headerImage = null }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <ContactBar />
      {/* Header is given class because index uses custom a header */}
      {/* <Header
        className="layout__header"
        siteTitle={data.site.siteMetadata.title}
        headerImage={headerImage}
      /> */}
      <NavBar />
      {/* <div className="layout__main__wrapper"> */}
      <main className="layout__main">{children}</main>
      <Footer />
      {/* </div> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
