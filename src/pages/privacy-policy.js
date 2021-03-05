import React from "react"
import Footer from "../components/footer"
import Navigation from "../components/navigation"

const PrivacyPolicy = () => {

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
                        }}>Privacy Policy</h2>
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
                    <p>Replacement Windows Online www.replacementwindows.com can be reached via the following methods with questions or concerns about our privacy policy:</p>
                    <p>Phone (Toll Free): 1-855-794-HOME (4663)</p>
                    <p>Alternate Phone (Toll Free): 1-877-886-7329</p>
                    <p>Email: replacementwindowsonline@mail.com</p>
                    <p>Replacement Windows Online www.replacementwindows.com collects only the names and email addresses of those who communicate with us via email, website analytics through Google Analytics, and information submitted to us on website forms by the consumer, such as name, email address, physical address, and phone number.  All information is stored securely on premises and not sold to or shared with any third party organizations or parties for commercial purposes.  The information we collect is used to improve the content and quality of our web page, to customize the content and/or layout of our page for each individual visitor, to contact consumers for marketing purposes or to provide the information or literature requested.</p>
                    <p>The Company cooperates with government and law enforcement officials to enforce and comply with the law. We may therefore disclose personal information, usage data, message data, and any other information about you, if we deem that it is reasonably necessary to: (a) satisfy any applicable law, regulation, legal process (such as a subpoena or court order), or enforceable governmental request; (b) enforce the Terms of Use, including investigation of potential violations thereof; (c) detect, prevent, or otherwise address fraud, security or technical issues; or (d) protect against harm to the rights, property or safety of the Company, its users or the public, as required or permitted by law.</p>
                    <p>Most web browsers are initially set up to accept cookies. You can reset your web browser to refuse all cookies or to indicate when a cookie is being sent. Please note, however, that certain features of the site might not function if you delete or disable cookies. THE SITE’S COOKIES DO NOT AND CANNOT INFILTRATE A USER’S HARD DRIVE TO COLLECT ANY INFORMATION STORED ON THE HARD DRIVE.</p>
                    <p>We recognize our visitor’s rights to privacy.  If you wish to opt out of any communications via email, phone, or mail, please contact us via one of the methods listed at the beginning of this privacy policy.  If our privacy policy is updated or changes in the future, we will post the changes on our website.  If in the future we change the way we are storing or using visitor’s information, we will only use for these new purposes only data collected from the time of the policy change forward.  If you are concerned about how your information is used, feel free to check back at our web page periodically or contact us via one of the methods listed above.</p>
                    <p>We have appropriate security measures in place in our physical office facilities to protect against the loss, misuse or alteration of information that we have collected from our web page.  Replacement Windows Online www.replacementwindows.com wants to inform all site visitors that it is impossible for the company to completely guarantee that user data will be immune from malicious attack or compromise and transmission of personal data is done at the site visitor’s own risk.  Any concerns or questions about our security measures can be directed to us via one of the contact methods listed above.</p>
                </main>
            
            </div>



    
            <Footer />
            
        </div>

    )


}


export default PrivacyPolicy