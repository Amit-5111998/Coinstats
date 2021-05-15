import React from "react";
import { Link } from "react-router-dom";
import "./Footer.module.css";
import apple from "../images/apple.png";
import webapple from '../images/macstoreweb.svg';
import googleplay  from '../images/googleplay.svg';
const Footer = (props) => {
  return (
    <footer style={{ backgroundColor: props.thema==="light"? "rgba(28,27,27,0.07)":"#2c2b2b" }}>
      <div className="guide">
        <span className="table-column-title">STAY IN TOUCH</span>
        <div className="social-touch">
          <div>
            <Link rel="noopener" aria-label="telegram">
              <i class="fab fa-telegram-plane"></i>
            </Link>
            <Link
              rel="noopener"
              aria-label="facebook"
              className="icon-facebook"
            ><i class="fab fa-facebook-f"></i></Link>
            <Link
              rel="noopener"
              aria-label="twitter"
              className="icon-twitter"
            ><i class="fab fa-twitter"></i></Link>
            <Link
              rel="noopener"
              aria-label="steemit"
              className="icon-steemit"
            ><i class="fas fa-heart"></i></Link>
            <Link
              rel="noopener"
              aria-label="medium"
              className="icon-medium"
            ><i class="fab fa-medium"></i></Link>
            <Link
              arial="email"
              className="icon-email"
              rel="noopener"
              aria-label="mail-to-coinstats"
            ><i class="fas fa-envelope-square"></i></Link>
          </div>
        </div>
        <div className="explore-text">
          <span className="table-column-title">EXPLORE OUR PRODUCT</span>
        </div>
        <div className="download-icons">
          <Link aria-label="mac app store" rel="noopener">
            <img src={webapple} alt="Mac App Store" />
          </Link>
          <Link aria-label="App store" rel="noopener">
            <img src={apple} alt="App Store" />
          </Link>
          <Link aria-label="Google Play" rel="noopener">
            <img src={googleplay} alt="Google Play" />
          </Link>
        </div>
        <div className="footer-nav">
          <div className="footer-group">
            <h3 className="group-title">PLATFORM</h3>
            <Link className="primary-nav    ">8000+ Coin Live Prices</Link>
            <Link className="primary-nav    " href="/en/market-report/">
              24h Cryptocurrency Market Report
            </Link>
            <Link className="primary-nav    ">Crypto News</Link>
            <Link className="primary-nav    " rel="noopener">
              Crypto Portfolio Tracker
            </Link>
          </div>
          <div className="footer-group">
            <h3 className="group-title">LEARN</h3>
            <Link className="primary-nav    " rel="noopener">
              Connect Exchange Account
            </Link>
            <Link className="primary-nav    " rel="noopener">
              Connect Wallet Account
            </Link>
            <Link className="primary-nav    " rel="noopener">
              Trade on Your Exchanges
            </Link>
            <Link className="primary-nav    " rel="noopener">
              Add Transactions
            </Link>
            <Link className="primary-nav    " rel="noopener">
              Profit/Loss Calculation
            </Link>
          </div>
          <div className="footer-group">
            <h3 className="group-title">RESOURCES</h3>
            <Link className="primary-nav    ">Press Kit</Link>
            <Link className="primary-nav    " rel="noopener">
              API Docs
            </Link>
            <Link className="primary-nav    " rel="noopener">
              Blog
            </Link>
          </div>
          <div className="footer-group">
            <h3 className="group-title">OTHER PRODUCTS</h3>
            <Link className="primary-nav    " rel="noopener">
              MacOS Widget
            </Link>
            <Link className="primary-nav    " rel="noopener">
              Mozilla Extension
            </Link>
            <Link className="primary-nav    " rel="noopener">
              Chrome Extension
            </Link>
            <Link className="primary-nav    " rel="noopener">
              Apple TV
            </Link>
          </div>
          <div className="footer-group">
            <h3 className="group-title">COMPANY</h3>
            <Link className="primary-nav    ">Pricing</Link>
            <Link className="primary-nav    " rel="noopener">
              Privacy Policy
            </Link>
            <Link className="primary-nav    " rel="noopener">
              Terms of Use
            </Link>
            <Link className="primary-nav    " rel="noopener">
              Refund Policy
            </Link>
          </div>
          <div className="footer-group">
            <h3 className="group-title">CONTACT US</h3>
            <Link className="primary-nav    " rel="noopener">
              Help Center
            </Link>
            <Link className="primary-nav    " rel="noopener">
              Feature Request
            </Link>
            <Link className="primary-nav    " rel="noopener">
              Advertise at CoinStats
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
