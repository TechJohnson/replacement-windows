import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
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
                    {/* Footer Information */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        paddingBottom: '50px'
                    }}>
                        <div style={{
                            width: '50%'
                        }}>
                            <Link to={'/'}>
                                <Img style={{marginBottom: '25px'}} fixed={data.logo.childImageSharp.fixed} />
                            </Link>
                            <p style={{lineHeight: '1.8'}}>Affordable windows and doors. No long demo, no pushy salesman, no huge markup. Affordable windows with the smallest payment!</p>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '25%'
                        }}>
                            <Link to={'/#procedure'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Our Procedure</Link>
                            <Link to={'/affordability'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Affordability</Link>
                            <Link to={'#contact'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Contact Us</Link>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '25%'
                        }}>
                            <Link style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>replacementwindowsonline@mail.com</Link>
                            <Link style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>1-855-794-4663</Link>
                        </div>
                    </div>
                </Desktop>

                <Mobile>
                    {/* Contact Form */}
                    <div id="contact" style={{padding: '0 0 100px 0', textAlign: 'center'}}>
                        {/* <ContactForm /> */}
                    </div>

                    {/* Footer Information */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingBottom: '50px'
                    }}>
                        <div style={{
                            width: '100%'
                        }}>
                            <Link to={'/'}>
                                <Img style={{marginBottom: '25px'}} fixed={data.logo.childImageSharp.fixed} />
                            </Link>                            
                            <p style={{lineHeight: '1.8'}}>Affordable windows and doors. No long demo, no pushy salesman, no huge markup. Affordable windows with the smallest payment!</p>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '50px 0px',
                            width: '100%'
                        }}>
                            <Link to={'/#procedure'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Our Procedure</Link>
                            <Link to={'/affordability'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Affordability</Link>
                            <Link to={'#contact'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Contact Us</Link>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%'
                        }}>
                            <Link style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>replacementwindowsonline@mail.com</Link>
                            <Link style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>1-855-794-4663</Link>
                        </div>
                    </div>
                </Mobile>


                {/* Legal */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    maxWidth: '580px',
                    margin: '0 auto'
                }}>
                    <Link to={'/legal-agreement'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', margin: '10px 30px 20px 30px'}}>Legal Agreement</Link>
                    <Link to={'/privacy-policy'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', margin: '10px 30px 20px 30px'}}>Privacy Policy</Link>
                    <Link to={'/terms-conditions'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', margin: '10px 30px 20px 30px'}}>Terms & Conditions</Link>
                </div>



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