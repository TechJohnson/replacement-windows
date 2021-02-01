import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Responsive from "react-responsive"
import Img from "gatsby-image"



const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        logo: file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
                fixed(width: 175) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
  `)

    const Mobile = props => <Responsive {...props} maxWidth={899} />;
    const Desktop = props => <Responsive {...props} minWidth={900} />;

    
    return (
        <footer>
            <div className="container">

                <Desktop>
                    {/* Contact Form */}
                    <div id="contact" style={{padding: '0 0 100px 0', textAlign: 'center'}}>
                        <p>contact form here</p>
                    </div>

                    {/* Footer Information */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        paddingBottom: '75px'
                    }}>
                        <div style={{
                            width: '50%'
                        }}>
                            <Img style={{marginBottom: '25px'}} fixed={data.logo.childImageSharp.fixed} />
                            <p style={{lineHeight: '1.8'}}>Affordable windows and doors. No long demo, no pushy salesman, no huge markup. Affordable windows with the smallest payment!</p>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '25%'
                        }}>
                            <Link to={'/#procedure'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Our Procedure</Link>
                            <Link to={'affordability'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Affordability</Link>
                            <Link to={'#contact'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Contact Us</Link>
                            <Link to={'/'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Terms of Use</Link>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '25%'
                        }}>
                            <Link to={'/'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>email@email.com</Link>
                            <Link to={'/'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>123-456-7890</Link>
                            <Link to={'/'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>123 Road Name</Link>
                            <Link to={'/'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Altoona, PA 16601</Link>
                        </div>
                    </div>
                </Desktop>

                <Mobile>
                    {/* Contact Form */}
                    <div id="contact" style={{padding: '0 0 100px 0', textAlign: 'center'}}>
                        <p>contact form here</p>
                    </div>

                    {/* Footer Information */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingBottom: '75px'
                    }}>
                        <div style={{
                            width: '100%'
                        }}>
                            <Img style={{marginBottom: '25px'}} fixed={data.logo.childImageSharp.fixed} />
                            <p style={{lineHeight: '1.8'}}>Affordable windows and doors. No long demo, no pushy salesman, no huge markup. Affordable windows with the smallest payment!</p>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '50px 0px',
                            width: '100%'
                        }}>
                            <Link to={'/#procedure'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Our Procedure</Link>
                            <Link to={'affordability'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Affordability</Link>
                            <Link to={'#contact'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Contact Us</Link>
                            <Link to={'/'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Terms of Use</Link>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%'
                        }}>
                            <Link to={'/'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>email@email.com</Link>
                            <Link to={'/'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>123-456-7890</Link>
                            <Link to={'/'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>123 Road Name</Link>
                            <Link to={'/'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Altoona, PA 16601</Link>
                        </div>
                    </div>
                </Mobile>



                {/* Copyright */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <p style={{
                        fontSize: '14px',
                        color: '#71808E',
                        opacity: '.5'
                    }}>Copyright © {new Date().getFullYear()} DBA Integrity Construction & Windows, Inc</p>
                </div>

            </div>
        </footer>
    )

}

export default Footer