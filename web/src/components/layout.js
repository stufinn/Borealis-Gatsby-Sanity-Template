/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import "../styles/components/_layout.scss"

import NavBar from "./navbar/navbar"
import Footer from "./footer"

const Layout = ({ children, className }) => {
  return (
    <>
      <NavBar />
      <main className={` ${className}`}>
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
