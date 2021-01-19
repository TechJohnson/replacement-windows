import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Button from "./button"
import Img from "gatsby-image"


const Navigation = () => {
    const data = useStaticQuery(graphql`
        query {
          placeholderImage: file(relativePath: { eq: "phone.png" }) {
            childImageSharp {
              fixed(width: 15) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `)
    return (

    <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '50px'
    }}>
        <div className="links" style={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <h1 style={{
                marginRight: '50px'
            }}>LOGO</h1>
            <Link to={'/'}>Our Procedure</Link>
            <Link to={'/'}>Affordability</Link>
            <Link to={'/'}>Contact Us</Link>
        </div>
        <div className="actions" style={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <div className="callUs" style={{
                marginRight: '50px',
                display: 'flex'
            }}>
                <Img style={{marginTop: '7px', marginRight: '10px'}} fixed={data.placeholderImage.childImageSharp.fixed} />
                <div className="meta">
                    <p className="phoneNumber">768-234-4687</p>
                    <p className="operation">Mon-Fri 9am-5pm EST</p>
                </div>
            </div>
            <Button buttonText="Our Windows" />
        </div>
    </nav>
    )
}

export default Navigation