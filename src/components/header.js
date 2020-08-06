
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
        <li>
          <a className="facebook" href="https://www.facebook.com/thebikestationbudapest/" tagret="_blank" rel="noopener">
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="26px" height="26px">
              <title>Facebook</title>
              <path d="M13,0C5.82,0,0,5.82,0,13c0,6.518,4.801,11.899,11.057,12.839v-9.394H7.84v-3.417h3.217v-2.274 c0-3.765,1.834-5.417,4.963-5.417c1.498,0,2.291,0.111,2.666,0.162v2.983h-2.134c-1.328,0-1.792,1.259-1.792,2.679v1.868h3.893 l-0.528,3.417H14.76v9.422C21.105,25.006,26,19.581,26,13C26,5.82,20.18,0,13,0z"/>
            </svg>
          </a>
        </li>
        <li>
          <a className="messenger" href="https://www.messenger.com/t/thebikestationbudapest" tagret="_blank" rel="noopener">
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
              <title>Messenger</title>
              <path d="M12,2C6.486,2,2,6.262,2,11.5c0,2.545,1.088,4.988,3,6.772v2.724c0,0.745,0.784,1.23,1.45,0.897l2.629-1.314 C10.039,20.858,11.02,21,12,21c5.514,0,10-4.262,10-9.5S17.514,2,12,2z M12.468,13.858l-2.218-1.774L5,14.417l5.2-5.2 c0.36-0.36,0.934-0.392,1.332-0.074l2.218,1.774L19,8.583l-5.2,5.2C13.439,14.144,12.866,14.176,12.468,13.858z"/>
            </svg>
          </a>
        </li>
      </ul>
      <p className="contact">
      <a href="tel:+36 30 347 7766">+36 30 347 7766</a>
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
