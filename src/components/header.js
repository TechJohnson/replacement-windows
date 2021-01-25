import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"
import Showcase from "./showcase"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <Navigation />
      <Showcase showcaseTitle="Finally, online shopping without all the hassle!" showcaseInfo="Affordable windows and doors. No long demo, no pushy salesman, no huge markup. Affordable windows with the smallest payment!" smallLinkText="Let us discuss your options" />
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