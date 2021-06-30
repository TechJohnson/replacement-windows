import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Button from "./button"
import Img from "gatsby-image"
import Responsive from "react-responsive"


const Navigation = () => {
const Desktop = props => <Responsive {...props} minWidth={900} />;
const Mobile = props => <Responsive {...props} maxWidth={899} />;
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
        <div>

<nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '0px'
    }}>

        <Mobile>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                textAlign: 'center',
                fontSize: '18px',
                margin: '0 auto',
                padding: '0'
            }}>
                <Link to={'/our-procedure'} style={{padding: '10px 0'}}>Our Procedure</Link>
                <Link to={'/affordability'} style={{padding: '10px 0'}}>Affordability</Link>
                <Link to={'/#contact'} style={{padding: '10px 0'}}>Contact Us</Link>
                <Link to={'/faq'} style={{padding: '10px 0'}}>FAQs</Link>
                <div className="callUs" style={{
                    display: 'flex',
                    padding: '15px 0 25px 0'
                }}>
                    <div className="meta">
                        <p>1-855-794-4663</p>
                        <p>Mon-Fri 9am-5pm EST</p>
                    </div>
                </div>
                <Link to={'/windows'} style={{padding: '0', margin: '0'}}>
                    <Button buttonText="Our Windows" />
                </Link>
            </div>
        </Mobile>
    </nav>


    <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '50px'
    }}>
        <Desktop>
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
                <Link to={'/#contact'}>Contact Us</Link>
                <Link to={'/faq'}>FAQs</Link>
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
        </Desktop>
    </nav>

    </div>
    )
}

export default Navigation