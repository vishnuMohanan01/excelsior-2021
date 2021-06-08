/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import "aos/dist/aos.css";

const Layout = ({ children }) => {

  return (
    <div style={{
      maxWidth: "100vw",
    }} className={"layoutClass"}>

      <div
        style={{
        }}
      >
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
