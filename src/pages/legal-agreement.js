import React from "react"
import Footer from "../components/footer"
import Navigation from "../components/navigation"

const LegalAgreement = () => {

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
                        }}>Legal Agreement</h2>
                        <p style={{
                            fontSize: '18px',
                            color: '#71808E',
                            textAlign: 'center',
                            paddingTop: '24px',
                            paddingBottom: '24px'
                        }}>Last updated: March 5, 2021</p>
                    </div>
                </div>
            </header>

            <div className="container">

                <main className='legal' style={{
                    marginBottom: '100px'
                }}>
                    <p>Replacement Windows Online www.replacementwindowsonline.com is the owner of this web site and can be reached via the following methods with questions or concerns about our terms and conditions:</p>
                    <p>Phone (Toll Free): 1-855-794-HOME (4663)</p>
                    <p>Alternate Phone (Toll Free): 1-877-886-7329</p>
                    <p>Email: replacementwindowsonline@mail.com</p>
                    <p className='italic'>Intellectual Property, Software and Content</p>
                    <p>The intellectual property rights in all software and content (including photographic images) made available to you on or through this Website remains the property of Replacement Windows Online www.replacementwindowsonline.com or its licensors and are protected by copyright laws and treaties around the world. All such rights are reserved by and Replacement Windows Online www.replacementwindowsonline.com and its licensors. You may store, print and display the content supplied solely for your own personal use. You are not permitted to publish, manipulate, distribute or otherwise reproduce, in any format, any of the content or copies of the content supplied to you or which appears on this Website nor may you use any such content in connection with any business or commercial enterprise.</p>
                    <p className="italic">Disclaimer of Liability</p>
                    <p>The material displayed on this Website is provided without any guarantees, conditions or warranties as to its accuracy. Unless expressly stated to the contrary to the fullest extent permitted by law Replacement Windows Online www.replacementwindowsonline.com and its suppliers, content providers and advertisers hereby expressly exclude all conditions, warranties and other terms which might otherwise be implied by statute, common law or the law of equity and shall not be liable for any damages whatsoever, including but without limitation to any direct, indirect, special, consequential, punitive or incidental damages, or damages for loss of use, profits, data or other intangibles, damage to goodwill or reputation, or the cost of procurement of substitute goods and services, arising out of or related to the use, inability to use, performance or failures of this Website or the Linked Sites and any materials posted thereon, irrespective of whether such damages were foreseeable or arise in contract, tort, equity, restitution, by statute, at common law or otherwise. This does not affect Replacement Windows Online www.replacementwindowsonline.com liability for death or personal injury arising from its negligence, fraudulent misrepresentation, misrepresentation as to a fundamental matter or any other liability which cannot be excluded or limited under applicable law.</p>
                    <p className="italic">Linking to this Website</p>
                    <p>You may link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists. You must not establish a link from any website that is not owned by you. This Website must not be framed on any other site, nor may you create a link to any part of this Website other than the home page. We reserve the right to withdraw linking permission without notice.</p>
                    <p className="italic">Disclaimer as to ownership of trademarks, images of personalities and third party copyright</p>
                    <p>Except where expressly stated to the contrary all persons (including their names and images), third party trade marks and content, services and/or locations featured on this Website are in no way associated, linked or affiliated with Replacement Windows Online www.replacementwindowsonline.com and you should not rely on the existence of such a connection or affiliation. Any trade marks/names featured on this Website are owned by the respective trade mark owners. Where a trade mark or brand name is referred to it is used solely to describe or identify the products and services and is in no way an assertion that such products or services are endorsed by or connected to Replacement Windows Online www.replacementwindowsonline.com.</p>
                    <p className="italic">Indemnity</p>
                    <p>You agree to indemnify, defend and hold harmless Replacement Windows Online www.replacementwindowsonline.com its directors, officers, employees, consultants, agents, and affiliates, from any and all third party claims, liability, damages and/or costs (including, but not limited to, legal fees) arising from your use this Website or your breach of the Terms of Service.</p>\
                    <p className="italic">Variation</p>
                    <p>Replacement Windows Online www.replacementwindowsonline.com shall have the right in its absolute discretion at any time and without notice to amend, remove or vary the Services and/or any page of this Website.</p>
                    <p className="italic">Invalidity</p>
                    <p>If any part of the Terms of Service is unenforceable (including any provision in which we exclude our liability to you) the enforceability of any other part of the Terms of Service will not be affected by all other clauses remaining in full force and effect. So far as possible where any clause/sub-clause or part of a clause/sub-clause can be severed to render the remaining part valid, the clause shall be interpreted accordingly. Alternatively, you agree that the clause shall be rectified and interpreted in such a way that closely resembles the original meaning of the clause /sub-clause as is permitted by law.</p>
                    <p className="italic">Complaints</p>
                    <p>We operate a complaints handling procedure which we will use to try to resolve disputes when they first arise, please let us know if you have any complaints or comments.</p>
                    <p className="italic">Waiver</p>
                    <p>If you breach these conditions and we take no action, we will still be entitled to use our rights and remedies in any other situation where you breach these conditions.</p>
                    <p className="italic">Entire Agreement</p>
                    <p>The above Legal Agreement constitute the entire agreement of the parties and supersede any and all preceding and contemporaneous agreements between you and Replacement Windows Online www.replacementwindowsonline.com. Any waiver of any provision of the Terms of Service will be effective only if in writing and signed by a Director of Replacement Windows Online www.replacementwindowsonline.com.</p>
                </main>
            
            </div>



    
            <Footer />
            
        </div>

    )


}


export default LegalAgreement