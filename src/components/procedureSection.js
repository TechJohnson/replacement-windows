import React from "react"
import Button from "./button"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"


const ProcedureSection = () => {
    const data = useStaticQuery(graphql`
        query {
            purchase: file(relativePath: { eq: "purchase.png"}) {
                childImageSharp {
                    fixed(width: 50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            moneybag: file(relativePath: { eq: "money-bag.png"}) {
                childImageSharp {
                    fixed(width: 50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            question: file(relativePath: { eq: "question.png"}) {
                childImageSharp {
                    fixed(width: 50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            options: file(relativePath: { eq: "options.png"}) {
                childImageSharp {
                    fixed(width: 50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            phonechat: file(relativePath: { eq: "phone-chat.png" }) {
                childImageSharp {
                    fixed(width: 50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)
    return (
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
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <Link to={'/our-procedure'}>                            
                                <Button buttonText='Learn More' style={{
                                    justifyContent: 'center'
                                }} />
                            </Link>
                        </div>

                </div>
            </div>
        </div>
    )
}

export default ProcedureSection