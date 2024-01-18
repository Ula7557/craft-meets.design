import { Link } from "react-router-dom"
import './footer.scss'
import Logo from '../../assets/icons/logo.png'
const Footer = ()=>{
    return (
        <div className="footer-wrapper">
            <div className="container">
                <div className="inner">
                    <div className="block-one block-one1">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/search/top?q=eurosoft" className="footer-link">Facebook</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/eurosoftuz/?hl=en" className="footer-link">Instagram</a>
                    </div>
                    <div className="block-one has-before block-one2">
                        <Link to={'/termsandcondition'} className="footer-link">FAQS</Link>
                        <Link to={'/country/profile'} className="footer-link">Subscribe</Link>
                    </div>
                    <div className="block-one block-one3 active">
                        <Link to={'/contact'} className="footer-link">Contact</Link>
                    </div>
                    <div className="block-one footer_logo_block">
                        <Link to={'/'} className="footer_logo">
                            <img src={Logo} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer