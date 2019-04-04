/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/global-styles.css"

const Layout = ({ children, header }) => (
  <div className="container">
    <Header />
    <main>
      <h1>{header}</h1>
      <div className="questions-wrapper">{children}</div>
    </main>
  </div>
)
export default Layout
