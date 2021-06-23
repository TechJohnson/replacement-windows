import React from "react"
import Button from "./button"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WindowTier = () => {
    const data = useStaticQuery(graphql`
        query {
            window1: file(relativePath: { eq: "window-1.jpg" }) {
                childImageSharp {
                    fixed(width: 350) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            window2: file(relativePath: { eq: "window-2.jpg" }) {
                childImageSharp {
                    fixed(width: 350) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            window3: file(relativePath: { eq: "window-3.jpg" }) {
                childImageSharp {
                    fixed(width: 350) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            window4: file(relativePath: { eq: "window-4.jpg" }) {
                childImageSharp {
                    fixed(width: 350) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            window5: file(relativePath: { eq: "window-5.jpg"}) {
                childImageSharp {
                    fixed(width: 350) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)


    return (
        <div style={{
            padding: '100px 0',
            margin: '0'
        }}>
            <div className="container">
                <div style={{
                    textAlign: 'center',
                    paddingBottom: '50px'
                }}>
                    <h2>Windows for every budget</h2>
                    <p>No matter your budget, we have an option for your beautiful home.</p>
                </div>

                <div className="window-box">
                    <div style={{marginRight: '25px'}}>
                        <Img fixed={data.window1.childImageSharp.fixed} />
                    </div>
                    <div>
                        <h3>Bronze</h3>
                        <h2>Perfect for a quick replacement window!</h2>
                        <p>Quick Features:</p>
                        <ul>
                            <li>Vinyl double pane</li>
                            <li>Argon gas</li>
                            <li>Weatherstripping</li>
                            <li>Both sash tilt-in for easy cleaning</li>
                            <li>Half-screen</li>
                            <li>Twist lock</li>
                        </ul>
                        <Link to={'/#contact'}>
                            <Button buttonText="Get Started" />
                        </Link>
                    </div>
                </div>
                <div className="window-box">
                    <div style={{marginRight: '25px'}}>
                        <Img fixed={data.window2.childImageSharp.fixed} />
                    </div>
                    <div>
                        <h3>Silver</h3>
                        <h2>Affordable replacement with great strength</h2>
                        <p>Quick Features:</p>
                        <ul>
                            <li>Vinyl double pane</li>
                            <li>Fusion welded frame/sash</li>
                            <li>Double strength glass</li>
                            <li>Dual bulb seals</li>
                        </ul>
                        <p>Special Features:</p>
                        <ol>
                            <li>Sash lock to sill for added strength against harsh winds</li>
                            <li>Composite reinforcement</li>
                            <li>Extra secure locking hardware</li>
                        </ol>
                        <Link to={'/#contact'}>
                            <Button buttonText="Get Started" />
                        </Link>
                    </div>
                    <div style={{width: '34%'}}>
                        <div className="performance">
                            <p style={{fontWeight: '700', color: '#091841', padding: '0 0 10px 0'}}>Performance</p>
                            <table>
                                <tr>
                                    <th></th>
                                    <th>V-Factor</th>
                                    <th>SHGC</th>
                                </tr>
                                <tr>
                                    <td>Climatech</td>
                                    <td>.29</td>
                                    <td>.30</td>
                                </tr>
                                <tr>
                                    <td>Climatech Elite</td>
                                    <td>.29</td>
                                    <td>.21</td>
                                </tr>
                                <tr>
                                    <td>Climatech Thermo</td>
                                    <td>.28</td>
                                    <td>.30</td>
                                </tr>
                            </table>
                        </div>
                        <div className="limitedWarranty">
                            <h4>LIMITED LIFETIME WARRANTY</h4>
                        </div>
                    </div>
                </div>
                <div className="window-box">
                    <div style={{marginRight: '25px'}}>
                        <Img fixed={data.window3.childImageSharp.fixed} />
                    </div>
                    <div>
                        <h3>Gold</h3>
                        <h2>Strength and Security</h2>
                        <p>Quick Features:</p>
                        <ul>
                            <li>Vinyl double pane with optional triple pane</li>
                        </ul>
                        <p>Special Features:</p>
                        <ol>
                            <li>Steel reinforced</li>
                            <li>Triton locking system for extra security</li>
                            <li>Constant force balance for easy to use</li>
                            <li>Intercept spacer system to increase warms and less seal failure</li>
                        </ol>
                        <Link to={'/#contact'}>
                            <Button buttonText="Get Started" />
                        </Link>
                    </div>
                    <div style={{width: '40%', marginLeft: '10px'}}>
                        <div className="performance">
                            <p style={{fontWeight: '700', color: '#091841', padding: '0 0 10px 0'}}>Performance</p>
                            <table>
                                <tr>
                                    <th></th>
                                    <th>V-Factor</th>
                                    <th>SHGC</th>
                                </tr>
                                <tr>
                                    <td>Climatech Elite</td>
                                    <td>.28</td>
                                    <td>.20</td>
                                </tr>
                                <tr>
                                    <td>Climatech GZ</td>
                                    <td>.23</td>
                                    <td>.25</td>
                                </tr>
                                <tr>
                                    <td>Climatech GZ Thermo</td>
                                    <td>.22</td>
                                    <td>.25</td>
                                </tr>
                            </table>
                        </div>
                        <div className="limitedWarranty">
                            <h4>LIMITED LIFETIME WARRANTY</h4>
                        </div>
                    </div>
                </div>
                <div className="window-box">
                    <div style={{marginRight: '25px'}}>
                        <Img fixed={data.window4.childImageSharp.fixed} />
                    </div>
                    <div>
                        <h3>Platinum</h3>
                        <h2>Ease-of-mind</h2>
                        <p>Quick Features:</p>
                        <ul>
                            <li>Vinyl double pane</li>
                            <li>Half-screen</li>
                            <li>Tilt-in for easy cleaning</li>
                            <li>Reinforced to prevent bowing</li>
                        </ul>
                        <p>Special Features:</p>
                        <ol>
                            <li>Full sash interlock</li>
                            <li>Special spacer to reduce seal failures</li>
                            <li>Deep header pocket to lock out air learks</li>
                            <li>Special expander to ensure proper installation</li>
                        </ol>
                        <Link to={'/#contact'}>
                            <Button buttonText="Get Started" />
                        </Link>
                    </div>
                </div>
                <div className="window-box">
                    <div style={{marginRight: '25px'}}>
                        <Img fixed={data.window5.childImageSharp.fixed} />
                    </div>
                    <div>
                        <h3>Diamond</h3>
                        <h2>Full-featured, high security!</h2>
                        <p>Quick Features:</p>
                        <ul>
                            <li>Increased energy efficiency from 7 special features</li>
                            <li>Easiest to clean from 4 special features</li>
                            <li>Security from an exclusive locking system</li>
                        </ul>
                        <p style={{fontStyle: 'italic', marginBottom: '10px'}}>"You must see the sample to truly appreciate the difference this window offers for now much more!!!"</p>
                        <Link to={'/#contact'}>
                            <Button buttonText="Get Started" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default WindowTier