import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <Navigation />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header



// <header
// style={{
//   background: `rebeccapurple`,
//   marginBottom: `1.45rem`,
// }}
// >
// <div
//   style={{
//     margin: `0 auto`,
//     maxWidth: 960,
//     padding: `1.45rem 1.0875rem`,
//   }}
// >
//   <h1 style={{ margin: 0 }}>
//     <Link
//       to="/"
//       style={{
//         color: `white`,
//         textDecoration: `none`,
//         fontSize: '1rem'
//       }}
//     >
//       {siteTitle}
//     </Link>
//   </h1>
// </div>
// </header>