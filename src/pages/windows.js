import React from "react"
import Footer from "../components/footer"
import Navigation from "../components/navigation"
import WindowTier from "../components/windowTier"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../style/layout.css" // Default Gatsby styling
import "../style/style.css" // Custom styling


const AffordabilityPage = () => {
    const data = useStaticQuery(graphql`
        query {
            bay: file(relativePath: { eq: "bay-window.png" }) {
                childImageSharp {
                    fluid(maxWidth: 587) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            tilting: file(relativePath: { eq: "tilting.png" }) {
                childImageSharp {
                    fluid(maxWidth: 587) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            siding: file(relativePath: { eq: "siding.png" }) {
                childImageSharp {
                    fluid(maxWidth: 587) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            stone: file(relativePath: { eq: "stone.png" }) {
                childImageSharp {
                    fluid(maxWidth: 587) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
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

        <div>

            {/* Header */}
            <header>
                <div className="container">
                    <Navigation />
                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '100px 0', margin: '0'}}>
                        <h1 style={{textAlign: 'center', fontSize: '53px', color: '#091841'}}>Windows for every budget</h1>
                        <p style={{textAlign: 'center', fontSize: '18px', lineHeight: '2', color: '#71808E', padding: '30px 0'}}>Affordable windows and doors. No long demo, no pushy salesman, no huge markup. Affordable windows with the smallest payment!</p>
                    </div>
                </div>
            </header>


            {/* Options */}
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto auto',
                }}>
                    <div>
                        <Img fluid={data.tilting.childImageSharp.fluid} />
                    </div>
                    <div>
                        <Img fluid={data.bay.childImageSharp.fluid} />
                    </div>
                    <div>
                        <Img fluid={data.siding.childImageSharp.fluid} />
                    </div>
                    <div>
                        <Img fluid={data.stone.childImageSharp.fluid} />
                    </div>
                </div>
            </div>

            {/* <div className="optionSection">
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
                        </div>

                    </div>
                </div>
            </div> */}

            <WindowTier />


            <Footer />
            
        </div>

    )


}


export default AffordabilityPage