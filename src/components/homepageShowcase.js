import React from "react"
import Button from "./button"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Responsive from "react-responsive"

const HomepageShowcase = () => {
const Desktop = props => <Responsive {...props} minWidth={900} />;
const Mobile = props => <Responsive {...props} maxWidth={899} />;
    const data = useStaticQuery(graphql`
        query {
            outWindow: file(relativePath: { eq: "looking-out-window.png" }) {
                childImageSharp {
                    fluid(maxWidth: 587) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '100px 0',
            margin: '0'
        }}>

            <Desktop>
                <div style={{
                    width: '50%'
                }}>
                    <h1 style={{
                        fontSize: '53px',
                        color: '#091841'
                    }}>Finally, online shopping without all the hassle!</h1>
                    <p style={{
                        fontSize: '18px',
                        lineHeight: '2',
                        color: '#71808E',
                        padding: '30px 0'
                    }}>Affordable windows and doors. No long demo, no pushy salesman, no huge markup. Affordable windows with the smallest payment!</p>
                    <div>
                        <Button buttonText="Our Windows" />
                        <Link to={'/'} style={{
                            marginLeft: '50px',
                            fontSize: '18px',
                            fontWeight: '600',
                            color: '#1E40C8',
                            textDecoration: 'none'
                        }}>Let us discuss your options</Link>
                    </div>
                </div>
                <div style={{
                    width: '50%'
                }}>
                    <Img fluid={data.outWindow.childImageSharp.fluid} />
                </div>
            </Desktop>

            <Mobile>
                <div>
                    <h1 style={{
                        fontSize: '53px',
                        color: '#091841'
                    }}>Finally, online shopping without all the hassle!</h1>
                    <p style={{
                        fontSize: '18px',
                        lineHeight: '2',
                        color: '#71808E',
                        padding: '30px 0'
                    }}>Affordable windows and doors. No long demo, no pushy salesman, no huge markup. Affordable windows with the smallest payment!</p>
                    <div>
                        <Button buttonText="Our Windows" />
                        <Link to={'/'} style={{
                            marginLeft: '50px',
                            fontSize: '18px',
                            fontWeight: '600',
                            color: '#1E40C8',
                            textDecoration: 'none'
                        }}>Let us discuss your options</Link>
                    </div>
                    <Img fluid={data.outWindow.childImageSharp.fluid} />
                </div>
            </Mobile>
        </div>
    )
}

export default HomepageShowcase