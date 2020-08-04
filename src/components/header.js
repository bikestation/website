
import { Link, useStaticQuery, graphql } from "gatsby"

import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

import './header.scss'

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img
    className="logo-image"
    fluid={data.placeholderImage.childImageSharp.fluid}
  />
}

const Header = ({ siteTitle }) => (
  <header className="header">
      <h1 className="logo">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
          title={siteTitle}
        >
          <Logo />
        </Link>
      </h1>
      <ul className="links">
        <li>links</li>
      </ul>
      <p className="contact">
        phone
      </p>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
