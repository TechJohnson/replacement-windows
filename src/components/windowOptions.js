import React from "react"
import Button from "./button"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"


const WindowOptions = () => {
    const data = useStaticQuery(graphql`
        query {
            best: file(relativePath: { eq: "best.png"}) {
                childImageSharp {
                    fixed(width: 160) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            better: file(relativePath: { eq: "better.png"}) {
                childImageSharp {
                    fixed(width: 160) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            good: file(relativePath: { eq: "good.png"}) {
                childImageSharp {
                    fixed(width: 160) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            economy: file(relativePath: { eq: "economy.png"}) {
                childImageSharp {
                    fixed(width: 160) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)
    return (
        <div className="optionSection">
            <div className="container">
                <div style={{
                    padding: '100px 0',
                    margin: '0'
                }}>

                        <div style={{
                            textAlign: 'center'
                        }}>
                            <h2>Windows for every budget</h2>
                            <p>No matter your budget, we have an option for your beautiful home.</p>
                        </div>
                        <div className='optionBoxSection'>
                            <div className='optionBox'>
                                <div>
                                    <h4>Economy</h4>
                                    <p>These windows are for the homeowner basing their decision on price. A no-frill window that will help your home for resale!</p>
                                </div>
                                <div>
                                    <Img fixed={data.economy.childImageSharp.fixed} />
                                </div>
                            </div>
                            <div className='optionBox'>
                                <div>
                                    <h4>Good</h4>
                                    <p>These windows are for homeowners who plan to live in their home for several years after upgrading.</p>
                                </div>
                                <div>
                                    <Img fixed={data.good.childImageSharp.fixed} />
                                </div>
                            </div>
                            <div className='optionBox'>
                                <div>
                                    <h4>Better</h4>
                                    <p>These windows are for homeowners who understand you get what you pay for and offer better insulation.</p>
                                </div>
                                <div>
                                    <Img fixed={data.better.childImageSharp.fixed} />
                                </div>
                            </div>
                            <div className='optionBox'>
                                <div>
                                    <h4>Best</h4>
                                    <p>These windows are for homeowners who want the best windows possible. Great insulation, sturdy deadlocks, and more.</p>
                                </div>
                                <div>
                                    <Img fixed={data.best.childImageSharp.fixed} />
                                </div>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <Link to={'/windows'}>
                                <Button buttonText='Dive Deeper' style={{
                                    justifyContent: 'center'
                                }} />
                            </Link>
                        </div>

                </div>
            </div>
        </div>
    )
}

export default WindowOptions