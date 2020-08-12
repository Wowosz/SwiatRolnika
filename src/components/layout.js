/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import "./layout.css"
import Header from "./header"

const Layout = ({ children, highlight }) => {
  console.log(highlight);
  return (
    <div>
      <Header highlight={highlight}/>
      {children}
    </div>
  )
}


export default Layout
