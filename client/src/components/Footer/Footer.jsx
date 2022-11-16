import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg'
import fb from '../../assets/images/fb.svg'
import twitter from '../../assets/images/twitter.svg'
import youtube from '../../assets/images/youtube.svg'
import linkedin from '../../assets/images/linkedin.svg'
import rss from '../../assets/images/rss.svg'
import { Container } from 'react-bootstrap'
import "./style.css";

const FooterComponent = (props) => {
    return (
        <>
            <footer>
                <Container className="p-0">
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <div className="footer-logo">
                                <img src={logo} alt="" />
                            </div>
                            <p className="footer-main-para">
                                Stocks: 15 minute delay (Cboe BZX is real-time), ET. Volume reflects consolidated markets. Futures and Forex: 10 or 15 minute delay, CT. Market Data powered by Barchart Solutions. Fundamental data provided by Zacks and Morningstar.
                            </p>
                        </div>

                        <div className="col-md-2 mb-3">
                            <h2 className="footer-heading">MEMBERSHIP</h2>
                            <Link to="" className="footer-link">Barchart Premier</Link>
                            <Link to="" className="footer-link">Barchart Premier</Link>
                            <Link to="" className="footer-link">Barchart Premier</Link>
                            <Link to="" className="footer-link">Barchart Premier</Link>
                        </div>

                        <div className="col-md-2 mb-3">
                            <h2 className="footer-heading">RESOURCES</h2>
                            <Link to="" className="footer-link">Barchart Premier</Link>
                            <Link to="" className="footer-link">Barchart Premier</Link>
                            <Link to="" className="footer-link">Barchart Premier</Link>
                            <Link to="" className="footer-link">Barchart Premier</Link>
                        </div>

                        <div className="col-md-2 mb-3">
                            <h2 className="footer-heading"></h2>
                            <Link to="" className="footer-link">Barchart Premier</Link>
                            <Link to="" className="footer-link">Barchart Premier</Link>
                            <Link to="" className="footer-link">Barchart Premier</Link>
                            <Link to="" className="footer-link">Barchart Premier</Link>
                        </div>

                        <div className="col-md-2  mb-3 footer-d-right-section">
                            <h2 className="footer-heading">BACK TO TOP <span className="back-to-top-img"></span> </h2>
                            <button className="btn btn-contact">Contact Barchart</button>
                            <div className="social-links">
                                <a href=""><img src={fb} alt="" /></a>
                                <a href=""><img src={twitter} alt="" /></a>
                                <a href=""><img src={linkedin} alt="" /></a>
                                <a href=""><img src={youtube} alt="" /></a>
                                <a href=""><img src={rss} alt="" /></a>
                            </div>
                        </div>

                    </div>
                    <div className="bc-footer__accessibility">
                        Barchart is committed to ensuring digital accessibility for individuals with disabilities. We are continuously working to improve our web experience, and encourage users to Contact Us for feedback and accommodation requests.
                    </div>
                </Container>
            </footer>
            <div className="sec-row">
                <div className="bc-footer__terms text-center">
                    <p className="copyright">© 2022 Barchart.com, Inc. All Rights Reserved.</p>
                    <a target="_self" href="/about"> About Barchart  <span> | </span> </a>
                    <a target="_self" href="/terms"> Terms of Service  <span> | </span> </a>
                    <a target="_self" href="/terms#privacy-policy"> Privacy Policy  <span> | </span> </a>
                    <a target="_self" href="/terms#do-not-sell"> Do Not Sell My Personal Information  </a>  </div>
            </div>
        </>
    )

}

export default FooterComponent;