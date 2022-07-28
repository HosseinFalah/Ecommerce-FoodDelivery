import { Link } from "react-router-dom";
import logo from "../../Asset/images/res-logo.png";
import { AiOutlineSend } from "react-icons/ai";
import { BsFacebook, BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div>
                        <div className="footer__logo">
                            <img src={logo} className="logo" alt="logo" />
                            <h5 className="footer__title">Tasty Treat</h5>
                            <p className="footer__description">is an international, peer-reviewed scientific open access journal that provides an advanced forum for studies related to all aspects of food research</p>
                        </div>
                    </div>
                    <div>
                        <h5 className="list__name">Delivery Time</h5>
                        <div className="list__group">
                            <div className="list__group-item">
                                <span className="list_group-link">Sunday - Trursday</span>
                                <span>10:00am - 11:00pm</span>
                            </div>
                            <div className="list__group-item">
                                <span className="list_group-link">Friday - Saturday</span>
                                <span>Off - Saturday</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 className="footer__title">Contact</h5>
                        <div className="list__group-item">
                            <span className="list__group-title">location: ZindaBazar, sylhet-3100, Bangladesh</span>
                        </div>
                        <div className="list__group-item">
                            <span className="list_group-link">Phone: 09122435876</span>
                        </div>
                        <div className="list__group-item">
                            <span className="list_group-link">Email: example@gmail.com</span>
                        </div>
                    </div>
                    <div>
                        <h5 className="footer__title">NewsLetter</h5>
                        <p className="footer__link">Subscribe Our NewsLetter</p>
                        <div className="footer__news">
                            <input type="email" className="footer__news-send" placeholder="Enter Your Email ..." />
                            <span className="icon__send">
                                <AiOutlineSend size={25} color={"#fff"}/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="main__row mt-2">
                    <div>
                        <p className="copyright__text">CopyRight - 2022, wesite made by Mohammad Mousavi. All Rights Reserved.</p>
                    </div>
                    <div>
                        <div className="social__links">
                            <p>Follow: </p>
                            <span className="social__icon">
                                <Link to="https://fa-ir.facebook.com/"><BsFacebook size={15} color={"#fff"}/></Link>
                            </span>
                            <span className="social__icon">
                                <Link to="https://github.com/"><BsGithub size={15} color={"#fff"}/></Link>
                            </span>
                            <span className="social__icon">
                                <Link to="https://www.youtube.com/?hl=fa"><BsYoutube size={15} color={"#fff"}/></Link>
                            </span>
                            <span className="social__icon">
                                <Link to="https://www.linkedin.com/"><BsLinkedin size={15} color={"#fff"}/></Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer