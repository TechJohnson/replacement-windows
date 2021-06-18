import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Button from "./button"
import Img from "gatsby-image"


const Navigation = () => {
    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fixed(width: 175) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
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
            <Link to={'/'} style={{
                color: 'black',
                margin: '0',
                padding: '0',
                cursor: 'pointer'
            }}>
                <Img style={{marginRight: '25px'}} fixed={data.logo.childImageSharp.fixed} />
            </Link>
            <Link to={'/our-procedure'}>Our Procedure</Link>
            <Link to={'/affordability'}>Affordability</Link>
            <Link to={'#contact'}>Contact Us</Link>
            <Link to={'#'}>FAQs</Link>
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
                    <p className="phoneNumber">1-855-794-4663</p>
                    <p className="operation">Mon-Fri 9am-5pm EST</p>
                </div>
            </div>
            <Link to={'/windows'} style={{padding: '0', margin: '0'}}>
                <Button buttonText="Our Windows" />
            </Link>
        </div>
    </nav>
    )
}

export default Navigation