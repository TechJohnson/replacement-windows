import React from "react"
import Button from "./button"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import Responsive from "react-responsive"



const ProcedureSection = () => {
    const Desktop = props => <Responsive {...props} minWidth={1231} />;
    const Mobile = props => <Responsive {...props} maxWidth={1230} />;
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
            }
        `)
    return (
        <div style={{
            padding: '100px 0',
            backgroundImage: 'linear-gradient(#F7FAFD, #ffffff)'
        }}>
            <Desktop>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}>
                        <div style={{
                            width: '50%'
                        }}>
                            <h3>Affordability</h3>
                            <h2>Prices that work for you!</h2>
                            <p style={{lineHeight: '1.8'}}>Our pricing structure will make it affordable for everyone, no matter what their current financial situation is. With our multiple payment options, you have the flexibility to pick what works best for you.</p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                paddingTop: '50px'
                            }}>
                                <Link to={'affordability'}>
                                    <Button buttonText='Learn More' />
                                </Link>
                                <p style={{
                                fontSize: '14px',
                                color:  '#B5BEC5',
                                marginLeft: '50px'
                                }}>* Must quality for third party financing</p>
                            </div>
                        </div>
                        <div>
                            <Img fixed={data.outWindow.childImageSharp.fixed} />
                        </div>
                    </div>
                </div>
            </Desktop>

            <Mobile>
                <div style={{
                    padding: '0 20px'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingBottom: '25px'
                    }}>
                        <Img fixed={data.outWindowMobile.childImageSharp.fixed} />
                    </div>
                    <h3 style={{textAlign: 'center'}}>Affordability</h3>
                    <h2 style={{textAlign: 'center'}}>Prices that work for you!</h2>
                    <p style={{textAlign: 'center', lineHeight: '1.8'}}>Our pricing structure will make it affordable for everyone, no matter what their current financial situation is. With our multiple payment options, you have the flexibility to pick what works best for you.</p>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: '50px'
                    }}>
                        <Link to={'affordability'}>
                            <Button buttonText='Learn More' />
                        </Link>
                        <p style={{
                        fontSize: '14px',
                        color:  '#B5BEC5',
                        marginTop: '15px'
                        }}>* Must quality for third party financing</p>
                    </div>

                </div>
            </Mobile>
        </div>
)
}

export default ProcedureSection