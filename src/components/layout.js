/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"
import "../pages/bike.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, The Bike Station Budapest. | Image credit: 
          {` `}
          <a href="https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.specialized.com%2FUS%2Fen%2Fstories%2Fmixtape&h=AT2YicNEeduc3OG9QYOsk9Xv4eOB-n6zRAJDLSDHKFmvCAvR1s51mMKogwfLYsy9l6JVj3tIxHeKappuymQl3WPpQ6peOIMCKqMBmJyRBH3u4vSwYjOqzGesKUnfLzdbbESHpxul22I" class="a" target="_blank">Specialized</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
