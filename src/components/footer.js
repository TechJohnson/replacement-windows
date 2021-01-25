import React from "react"
import { Link } from "gatsby"
import Responsive from "react-responsive"


const Footer = () => {

    const Mobile = props => <Responsive {...props} maxWidth={899} />;
    const Desktop = props => <Responsive {...props} minWidth={900} />;

    
    return (
        <footer style={{marginTop: `2rem`,}}>
            <div className="container">

                <Desktop>
                    {/* Contact Form */}


                    {/* Footer Information */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        paddingBottom: '75px'
                    }}>
                        <div style={{
                            width: '50%'
                        }}>
                            <h1 style={{fontSize: '26px', paddingBottom: '25px'}}>LOGO</h1>
                            <p style={{lineHeight: '1.8'}}>Affordable windows and doors. No long demo, no pushy salesman, no huge markup. Affordable windows with the smallest payment!</p>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '25%'
                        }}>
                            <Link to={'/'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Our Procedure</Link>
                            <Link to={'/'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Affordability</Link>
                            <Link to={'/'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Contact Us</Link>
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


                    {/* Footer Information */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingBottom: '75px'
                    }}>
                        <div style={{
                            width: '100%'
                        }}>
                            <h1 style={{fontSize: '26px', paddingBottom: '25px'}}>LOGO</h1>
                            <p style={{lineHeight: '1.8'}}>Affordable windows and doors. No long demo, no pushy salesman, no huge markup. Affordable windows with the smallest payment!</p>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '50px 0px',
                            width: '100%'
                        }}>
                            <Link to={'/'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Our Procedure</Link>
                            <Link to={'/'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Affordability</Link>
                            <Link to={'/'} style={{fontSize: '1.125rem', color: '#71808E', textDecoration: 'none', marginBottom: '20px'}}>Contact Us</Link>
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