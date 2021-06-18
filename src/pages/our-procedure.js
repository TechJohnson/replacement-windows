import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Footer from "../components/footer"
import Navigation from "../components/navigation"
import Button from "../components/button"
import Img from "gatsby-image"

const OurProcedure = () => {
    const data = useStaticQuery(graphql`
    query {
        outWindow: file(relativePath: { eq: "affordability.png" }) {
            childImageSharp {
                fixed(width: 587) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        outWindowMobile: file(relativePath: { eq: "affordability.png" }) {
            childImageSharp {
                fixed(width: 300) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        purchase: file(relativePath: { eq: "installer.png"}) {
            childImageSharp {
                fixed(width: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        moneybag: file(relativePath: { eq: "purchase.png"}) {
            childImageSharp {
                fixed(width: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        markup: file(relativePath: { eq: "markup.png"}) {
            childImageSharp {
                fixed(width: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        question: file(relativePath: { eq: "salesman.png"}) {
            childImageSharp {
                fixed(width: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        options: file(relativePath: { eq: "overhead.png"}) {
            childImageSharp {
                fixed(width: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        phonechat: file(relativePath: { eq: "measurements.png" }) {
            childImageSharp {
                fixed(width: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`)

    return (

        <div>

            {/* Header */}
            <header>
                <div className="container">
                    <Navigation />
                    
                    <div className="showcase" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '100px 0',
                        margin: '0'
                    }}>
                        <h2 style={{
                            fontSize: '53px',
                            textAlign: 'center',
                            color: '#091841',
                            padding: '0',
                            margin: '0'
                        }}>We don't play the sales games!</h2>
                        <p style={{
                            fontSize: '18px',
                            color: '#71808E',
                            textAlign: 'center',
                            paddingTop: '24px',
                            paddingBottom: '24px'
                        }}>We will make your experience as positive as possible.</p>
                        <Link to={'#contact'}>
                            <Button buttonText="Let's get started"/>
                        </Link>
                    </div>
                </div>
            </header>

            {/* How can we make it so affordable? */}
            <div id="procedure" className="procedureSection">
                <div className="container">
                    <div style={{
                        padding: '100px 0',
                        margin: '0'
                    }}>
                        <div style={{
                            textAlign: 'center'
                        }}>
                            <h2>Our procedure</h2>
                            <p>We make it quick and easy to get a quote tailored to your individual needs and taste!</p>
                        </div>
                        <div className='procedureBoxSection'>
                            <div className='procedureBox'>
                                <Img style={{marginBottom: '20px'}} fixed={data.phonechat.childImageSharp.fixed} />
                                <h4>Contact Us</h4>
                                <p>Send us your measurements of any, and all, windows and doors.</p>
                            </div>
                            <div className='procedureBox'>
                                <Img style={{marginBottom: '20px'}} fixed={data.question.childImageSharp.fixed} />
                                <h4>Questions</h4>
                                <p>We will determine what you want to accomplish with your windows.</p>
                            </div>
                            <div className='procedureBox'>
                                <Img style={{marginBottom: '20px'}} fixed={data.options.childImageSharp.fixed} />
                                <h4>Options</h4>
                                <p>We have a variety of window styles to choose from.</p>
                            </div>
                            <div className='procedureBox'>
                                <Img style={{marginBottom: '20px'}} fixed={data.moneybag.childImageSharp.fixed} />
                                <h4>Custom Cost</h4>
                                <p>We provide the lowest cost in the industry, as well as finance options.</p>
                            </div>
                            <div className='procedureBox'>
                                <Img style={{marginBottom: '20px'}} fixed={data.purchase.childImageSharp.fixed} />
                                <h4>Purchase</h4>
                                <p>When you are ready to make a decisions, we have options for you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
            padding: '100px 0',
            backgroundColor: '#F7FAFD'
            }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}>
                        <div style={{
                            width: '49%'
                        }}>
                            <h3>Buying option 1</h3>
                            <h2>Virtual Consultation</h2>
                            <p style={{lineHeight: '1.8'}}>You can give us your measurements and we can give you an estimate. The only thing that could change the estimate is when we inspect your windows for order purposes, there could be additional labor costs if there is additional labor needed to install. Or if there is more than normal wood rot that would take wood repairs.</p>
                        </div>
                        <div style={{
                            width: '49%'
                        }}>
                            <h3>Buying option 2</h3>
                            <h2>In-Person Inspection</h2>
                            <p style={{lineHeight: '1.8'}}>Our pricing structure will make it affordable for everyone, no matter what their current financial situation is. With our multiple payment options, you have the flexibility to pick what works best for you.</p>
                            <ul style={{
                                display: 'grid',
                                gridTemplateColumns: 'auto auto',
                                fontSize: '1.125rem',
                            }}>
                                <li style={{margin: '5px 0'}}>Partial Programs</li>
                                <li style={{margin: '5px 0'}}>Cash Discounts</li>
                                <li style={{margin: '5px 0'}}>No Money Down</li>
                                <li style={{margin: '5px 0'}}>Deferred Payments</li>
                                <li style={{margin: '5px 0'}}>Limited Time Low Interest</li>
                                <li style={{margin: '5px 0'}}>Perfect Credit NOT Necessary</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '100px 0'}}>
                    <h2>No sales games</h2>
                    <p style={{paddingBottom: '50px'}}>We give you one price that is fair for everyone. No gimmicks, ever!</p>

                    <div style={{
                        display: 'grid',
                        gridGap: '20px',
                        textAlign: 'center',
                        gridTemplateColumns: 'auto',
                    }}>
                        <div style={{
                            padding: '30px',
                            margin: '0',
                            borderRadius: '10px',
                            boxShadow: '0 10px 25px -3px rgba(0,0,0,.10)'
                        }}>
                            <h4 style={{paddingBottom: '25px'}}>BUY 1 GET 1 FREE</h4>
                            <p style={{paddingBottom: '10px'}}>We all know how that works.</p>
                            <p style={{paddingBottom: '10px'}}>In a home one night, a customer asked if I could beat a buy 1 get 1 free?</p>
                            <p style={{paddingBottom: '10px'}}>I said, "sure, you buy 1 from me, I'll give you 8 free!"</p>
                            <p style={{paddingBottom: '10px'}}>She said, "how can you do that?"</p>
                            <p style={{paddingBottom: '10px'}}>I said, "same way they do buy 1 get 1. I'll charge $6,000 for the 1, then give you 8 free."</p>
                        </div>
                        <div style={{
                            padding: '30px',
                            margin: '0',
                            borderRadius: '10px',
                            boxShadow: '0 10px 25px -3px rgba(0,0,0,.10)'
                        }}>
                            <h4 style={{paddingBottom: '25px'}}>$250 ANY SIZE DOUBLE HUNG</h4>
                            <p style={{paddingBottom: '10px'}}>A lot of people have been burnt by this.</p>
                            <p style={{paddingBottom: '10px'}}>It is like the base price of a car or truck</p>
                            <p style={{paddingBottom: '10px'}}>Once you add all the extra's, it ends up costing you $540 and it is still a low quality window.</p>
                        </div>
                    </div>
                </div>
            </div>

    
            <Footer />
            
        </div>

    )


}


export default OurProcedure