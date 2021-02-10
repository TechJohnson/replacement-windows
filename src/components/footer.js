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

                <div className="formBackground">
      <div className="container">
        <div style={{
        paddingBottom: '100px',
        }}>
          <h2 style={{textAlign: 'center'}}>Let's get in touch</h2>
          <p style={{textAlign: 'center'}}>Shoot us a quick email to gather some more information</p>

          <form name="Homepage" id="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="Homepage" value="Homepage" />
            <div className="inputArea">
              <div className="inputs">
                <input type="text" name="name" id="name" placeholder="name"/>
              </div>
              <div className="inputs">
                <input type="email" name="email" id="email" placeholder="email"/>
              </div>
              <div className="inputs">
                <input type="tel" name="number" id="number" placeholder="phone"/>
              </div>
            </div>
            <div className="messsage">
              <textarea name="message" placeholder="Which window would you like more information about?"></textarea>
            </div>
              <button className="submit-btn" type="submit">Send Message</button>
          </form>
        </div>
      </div>
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
                        {/* <ContactForm /> */}
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