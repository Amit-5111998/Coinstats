import React from "react";
import classes from "./mainsec.module.css";
import base from "../images/basere.svg";
import base1 from "../images/base.svg";
import dollar from "../images/dollar.svg";
import dimond1 from "../images/dimond1.svg";
import dimond2 from "../images/dimond2.svg";
import logo from "../images/icon.png";
import Tabledata from "./Tabledata";
import Shifting from "./Shifting";
import { Route, Switch } from "react-router";
import Header from "./Header";
import Footer from "./Footer";


// main page live tracking
const Mainsec = (props) => {
  return (
    <div className="container">
      <Header/>
      <br/>
      <br/>
      <Shifting thema={props}/>
      
      <br/>
        
       <Footer/>
       {/* <div style={{ marginLeft: "100px", marginRight: "100px" }}>
        <div className="common-table">
          <table className=" table universal-table custom-cols-table  ">
            <thead>
              <tr>
                <th className="left nowrap rank">
                  <span className="table-column-title with-iconArrange">
                    #<span className="icon-arrange " />
                  </span>
                </th>
                <th className="left">
                  <span className="table-column-title with-iconArrange">
                    Name
                  </span>
                </th>
                <th className="right">
                  <span className="table-column-title with-iconArrange">
                    24h Change
                  </span>
                </th>
                <th className="right">
                  <span className="table-column-title with-iconArrange">
                    Price
                  </span>
                </th>
                <th className="right show-desktop">
                  <span className="table-column-title with-iconArrange">
                    Price in BTC
                  </span>
                </th>
                <th className="right show-desktop">
                  <span className="table-column-title with-iconArrange">
                    Market Cap
                  </span>
                </th>
                <th className="right show-desktop">
                  <span className="table-column-title with-iconArrange">
                    Volume 24h
                  </span>
                </th>
                <th className="right show-desktop">
                  <span className="with-iconArrange">
                    <span className="table-column-title">PRICE GRAPH (7D)</span>
                  </span>
                </th>
                <th className="right">
                  <span className="with-iconArrange">
                    <div className="table-value">
                      <div className="jsx-2262109736 dropdown  show-desktop custom-cols-dropdown">
                        <div className="jsx-2262109736 dropdown-placeholder">
                          <span className="jsx-2095321675 icon-custom-column" />
                        </div>
                      </div>
                    </div>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" ">
                <td title className="border left rank line-link">
                  <a href="/en/coins/bitcoin/">
                    <span className>
                      <span className="table-row">1</span>
                    </span>
                  </a>
                </td>
                <td
                  
                >
                  <a href="/en/coins/bitcoin/">
                    <img
                      className="table-image "
                      src="https://static.coinstats.app/coins/Bitcoin6l39t.png"
                      alt="Bitcoin, BTC"
                    />
                    <span className>
                      <span className="table-row">Bitcoin</span>
                    </span>
                    <span className="show-desktop additional-label">
                      <span className="table-row"> • BTC</span>
                    </span>
                  </a>
                </td>
                <td
                  
                >
                  <a href="/en/coins/bitcoin/">
                    <span className="change-row">
                      <span className="icon-priceDown" />
                      <span className="table-row">-3.76%</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right regular-weight-not-mobile qa-coin-price line-link"
                >
                  <a href="/en/coins/bitcoin/">
                    <span className>
                      <span className="table-row">$58,324.97</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-price-btc line-link"
                >
                  <a href="/en/coins/bitcoin/">
                    <span className>
                      <span className="table-row">1.00000000</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-market-cap line-link"
                >
                  <a href="/en/coins/bitcoin/">
                    <span className>
                      <span className="table-row">$1.1T</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-volume-24h line-link"
                >
                  <a href="/en/coins/bitcoin/">
                    <span className>
                      <span className="table-row">$53.1B</span>
                    </span>
                  </a>
                </td>
                <td title className="border right show-desktop line-link">
                  <a href="/en/coins/bitcoin/">
                    <img
                      className="table-image big"
                      src="https://static.coinstats.app/sparks/bitcoin_1w.png"
                      alt="Bitcoin, BTC"
                    />
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                </td>
                <td title className="border left ">
                  <a href="/en/coins/bitcoin/">
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                  <div className="table-value">
                    <div className="jsx-3397508174 table-more-menu">
                      <div className="jsx-3397508174 more-icon-wrapper">
                        <span className="jsx-3397508174 icon-more_small " />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" ">
                <td title className="border left rank line-link">
                  <a href="/en/coins/ethereum/">
                    <span className>
                      <span className="table-row">2</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border left regular-weight-not-mobile coin-name-col qa-coin-name line-link"
                >
                  <a href="/en/coins/ethereum/">
                    <img
                      className="table-image "
                      src="https://static.coinstats.app/coins/EthereumOCjgD.png"
                      alt="Ethereum, ETH"
                    />
                    <span className>
                      <span className="table-row">Ethereum</span>
                    </span>
                    <span className="show-desktop additional-label">
                      <span className="table-row"> • ETH</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right text-down regular-weight-not-mobile qa-coin-24h line-link"
                >
                  <a href="/en/coins/ethereum/">
                    <span className="change-row">
                      <span className="icon-priceDown" />
                      <span className="table-row">-4.26%</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right regular-weight-not-mobile qa-coin-price line-link"
                >
                  <a href="/en/coins/ethereum/">
                    <span className>
                      <span className="table-row">$1,809.21</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-price-btc line-link"
                >
                  <a href="/en/coins/ethereum/">
                    <span className>
                      <span className="table-row">0.03102562</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-market-cap line-link"
                >
                  <a href="/en/coins/ethereum/">
                    <span className>
                      <span className="table-row">$208.2B</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-volume-24h line-link"
                >
                  <a href="/en/coins/ethereum/">
                    <span className>
                      <span className="table-row">$21.2B</span>
                    </span>
                  </a>
                </td>
                <td title className="border right show-desktop line-link">
                  <a href="/en/coins/ethereum/">
                    <img
                      className="table-image big"
                      src="https://static.coinstats.app/sparks/ethereum_1w.png"
                      alt="Ethereum, ETH"
                    />
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                </td>
                <td title className="border left ">
                  <a href="/en/coins/ethereum/">
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                  <div className="table-value">
                    <div className="jsx-3397508174 table-more-menu">
                      <div className="jsx-3397508174 more-icon-wrapper">
                        <span className="jsx-3397508174 icon-more_small " />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" ">
                <td title className="border left rank line-link">
                  <a href="/en/coins/binance-coin/">
                    <span className>
                      <span className="table-row">3</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border left regular-weight-not-mobile coin-name-col qa-coin-name line-link"
                >
                  <a href="/en/coins/binance-coin/">
                    <img
                      className="table-image "
                      src="https://static.coinstats.app/coins/binancecoinOxw.png"
                      alt="Binance Coin, BNB"
                    />
                    <span className>
                      <span className="table-row">Binance Coin</span>
                    </span>
                    <span className="show-desktop additional-label">
                      <span className="table-row"> • BNB</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right text-down regular-weight-not-mobile qa-coin-24h line-link"
                >
                  <a href="/en/coins/binance-coin/">
                    <span className="change-row">
                      <span className="icon-priceDown" />
                      <span className="table-row">-4.07%</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right regular-weight-not-mobile qa-coin-price line-link"
                >
                  <a href="/en/coins/binance-coin/">
                    <span className>
                      <span className="table-row">$259.22</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-price-btc line-link"
                >
                  <a href="/en/coins/binance-coin/">
                    <span className>
                      <span className="table-row">0.00444527</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-market-cap line-link"
                >
                  <a href="/en/coins/binance-coin/">
                    <span className>
                      <span className="table-row">$40.1B</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-volume-24h line-link"
                >
                  <a href="/en/coins/binance-coin/">
                    <span className>
                      <span className="table-row">$2.4B</span>
                    </span>
                  </a>
                </td>
                <td title className="border right show-desktop line-link">
                  <a href="/en/coins/binance-coin/">
                    <img
                      className="table-image big"
                      src="https://static.coinstats.app/sparks/binance-coin_1w.png"
                      alt="Binance Coin, BNB"
                    />
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                </td>
                <td title className="border left ">
                  <a href="/en/coins/binance-coin/">
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                  <div className="table-value">
                    <div className="jsx-3397508174 table-more-menu">
                      <div className="jsx-3397508174 more-icon-wrapper">
                        <span className="jsx-3397508174 icon-more_small " />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" ">
                <td title className="border left rank line-link">
                  <a href="/en/coins/tether/">
                    <span className>
                      <span className="table-row">4</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border left regular-weight-not-mobile coin-name-col qa-coin-name line-link"
                >
                  <a href="/en/coins/tether/">
                    <img
                      className="table-image "
                      src="https://static.coinstats.app/coins/TetherfopnG.png"
                      alt="Tether, USDT"
                    />
                    <span className>
                      <span className="table-row">Tether</span>
                    </span>
                    <span className="show-desktop additional-label">
                      <span className="table-row"> • USDT</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right text-up regular-weight-not-mobile qa-coin-24h line-link"
                >
                  <a href="/en/coins/tether/">
                    <span className="change-row">
                      <span className="icon-priceUp" />
                      <span className="table-row">0.08%</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right regular-weight-not-mobile qa-coin-price line-link"
                >
                  <a href="/en/coins/tether/">
                    <span className>
                      <span className="table-row">$1.00</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-price-btc line-link"
                >
                  <a href="/en/coins/tether/">
                    <span className>
                      <span className="table-row">0.00001715</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-market-cap line-link"
                >
                  <a href="/en/coins/tether/">
                    <span className>
                      <span className="table-row">$38.5B</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-volume-24h line-link"
                >
                  <a href="/en/coins/tether/">
                    <span className>
                      <span className="table-row">$115.0B</span>
                    </span>
                  </a>
                </td>
                <td title className="border right show-desktop line-link">
                  <a href="/en/coins/tether/">
                    <img
                      className="table-image big"
                      src="https://static.coinstats.app/sparks/tether_1w.png"
                      alt="Tether, USDT"
                    />
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                </td>
                <td title className="border left ">
                  <a href="/en/coins/tether/">
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                  <div className="table-value">
                    <div className="jsx-3397508174 table-more-menu">
                      <div className="jsx-3397508174 more-icon-wrapper">
                        <span className="jsx-3397508174 icon-more_small " />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" ">
                <td title className="border left rank line-link">
                  <a href="/en/coins/polkadot/">
                    <span className>
                      <span className="table-row">5</span>
                    </span>
                  </a>
                </td>

                <td
                  title
                  className="border right text-down regular-weight-not-mobile qa-coin-24h line-link"
                >
                  <a href="/en/coins/polkadot/">
                    <span className="change-row">
                      <span className="icon-priceDown" />
                      <span className="table-row">-3.47%</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right regular-weight-not-mobile qa-coin-price line-link"
                >
                  <a href="/en/coins/polkadot/">
                    <span className>
                      <span className="table-row">$36.12</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-price-btc line-link"
                >
                  <a href="/en/coins/polkadot/">
                    <span className>
                      <span className="table-row">0.00061941</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-market-cap line-link"
                >
                  <a href="/en/coins/polkadot/">
                    <span className>
                      <span className="table-row">$35.2B</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-volume-24h line-link"
                >
                  <a href="/en/coins/polkadot/">
                    <span className>
                      <span className="table-row">$1.0B</span>
                    </span>
                  </a>
                </td>
                <td title className="border right show-desktop line-link">
                  <a href="/en/coins/polkadot/">
                    <img
                      className="table-image big"
                      src="https://static.coinstats.app/sparks/polkadot_1w.png"
                      alt="Polkadot, DOT"
                    />
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                </td>
                <td title className="border left ">
                  <a href="/en/coins/polkadot/">
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                  <div className="table-value">
                    <div className="jsx-3397508174 table-more-menu">
                      <div className="jsx-3397508174 more-icon-wrapper">
                        <span className="jsx-3397508174 icon-more_small " />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" ">
                <td title className="border left rank line-link">
                  <a href="/en/coins/cardano/">
                    <span className>
                      <span className="table-row">6</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border left regular-weight-not-mobile coin-name-col qa-coin-name line-link"
                >
                  <a href="/en/coins/cardano/">
                    <img
                      className="table-image "
                      src="https://static.coinstats.app/coins/CardanojXddT.png"
                      alt="Cardano, ADA"
                    />
                    <span className>
                      <span className="table-row">Cardano</span>
                    </span>
                    <span className="show-desktop additional-label">
                      <span className="table-row"> • ADA</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right text-down regular-weight-not-mobile qa-coin-24h line-link"
                >
                  <a href="/en/coins/cardano/">
                    <span className="change-row">
                      <span className="icon-priceDown" />
                      <span className="table-row">-4.75%</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right regular-weight-not-mobile qa-coin-price line-link"
                >
                  <a href="/en/coins/cardano/">
                    <span className>
                      <span className="table-row">$1.04</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-price-btc line-link"
                >
                  <a href="/en/coins/cardano/">
                    <span className>
                      <span className="table-row">0.00001777</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-market-cap line-link"
                >
                  <a href="/en/coins/cardano/">
                    <span className>
                      <span className="table-row">$33.1B</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-volume-24h line-link"
                >
                  <a href="/en/coins/cardano/">
                    <span className>
                      <span className="table-row">$1.8B</span>
                    </span>
                  </a>
                </td>
                <td title className="border right show-desktop line-link">
                  <a href="/en/coins/cardano/">
                    <img
                      className="table-image big"
                      src="https://static.coinstats.app/sparks/cardano_1w.png"
                      alt="Cardano, ADA"
                    />
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                </td>
                <td title className="border left ">
                  <a href="/en/coins/cardano/">
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                  <div className="table-value">
                    <div className="jsx-3397508174 table-more-menu">
                      <div className="jsx-3397508174 more-icon-wrapper">
                        <span className="jsx-3397508174 icon-more_small " />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" ">
                <td title className="border left rank line-link">
                  <a href="/en/coins/ripple/">
                    <span className>
                      <span className="table-row">7</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border left regular-weight-not-mobile coin-name-col qa-coin-name line-link"
                >
                  <a href="/en/coins/ripple/">
                    <img
                      className="table-image "
                      src="https://static.coinstats.app/coins/XRPdnqGJ.png"
                      alt="XRP, XRP"
                    />
                    <span className>
                      <span className="table-row">XRP</span>
                    </span>
                    <span className="show-desktop additional-label">
                      <span className="table-row"> • XRP</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right text-down regular-weight-not-mobile qa-coin-24h line-link"
                >
                  <a href="/en/coins/ripple/">
                    <span className="change-row">
                      <span className="icon-priceDown" />
                      <span className="table-row">-3.73%</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right regular-weight-not-mobile qa-coin-price line-link"
                >
                  <a href="/en/coins/ripple/">
                    <span className>
                      <span className="table-row">$0.435048</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-price-btc line-link"
                >
                  <a href="/en/coins/ripple/">
                    <span className>
                      <span className="table-row">0.00000746</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-market-cap line-link"
                >
                  <a href="/en/coins/ripple/">
                    <span className>
                      <span className="table-row">$19.9B</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-volume-24h line-link"
                >
                  <a href="/en/coins/ripple/">
                    <span className>
                      <span className="table-row">$1.7B</span>
                    </span>
                  </a>
                </td>
                <td title className="border right show-desktop line-link">
                  <a href="/en/coins/ripple/">
                    <img
                      className="table-image big"
                      src="https://static.coinstats.app/sparks/ripple_1w.png"
                      alt="XRP, XRP"
                    />
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                </td>
                <td title className="border left ">
                  <a href="/en/coins/ripple/">
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                  <div className="table-value">
                    <div className="jsx-3397508174 table-more-menu">
                      <div className="jsx-3397508174 more-icon-wrapper">
                        <span className="jsx-3397508174 icon-more_small " />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" ">
                <td title className="border left rank line-link">
                  <a href="/en/coins/uniswap/">
                    <span className>
                      <span className="table-row">8</span>
                    </span>
                  </a>
                </td>

                <td
                  title
                  className="border right text-down regular-weight-not-mobile qa-coin-24h line-link"
                >
                  <a href="/en/coins/uniswap/">
                    <span className="change-row">
                      <span className="icon-priceDown" />
                      <span className="table-row">-8.03%</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right regular-weight-not-mobile qa-coin-price line-link"
                >
                  <a href="/en/coins/uniswap/">
                    <span className>
                      <span className="table-row">$30.33</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-price-btc line-link"
                >
                  <a href="/en/coins/uniswap/">
                    <span className>
                      <span className="table-row">0.00052008</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-market-cap line-link"
                >
                  <a href="/en/coins/uniswap/">
                    <span className>
                      <span className="table-row">$15.8B</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-volume-24h line-link"
                >
                  <a href="/en/coins/uniswap/">
                    <span className>
                      <span className="table-row">$850.8M</span>
                    </span>
                  </a>
                </td>
                <td title className="border right show-desktop line-link">
                  <a href="/en/coins/uniswap/">
                    <img
                      className="table-image big"
                      src="https://static.coinstats.app/sparks/uniswap_1w.png"
                      alt="Uniswap, UNI"
                    />
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                </td>
                <td title className="border left ">
                  <a href="/en/coins/uniswap/">
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                  <div className="table-value">
                    <div className="jsx-3397508174 table-more-menu">
                      <div className="jsx-3397508174 more-icon-wrapper">
                        <span className="jsx-3397508174 icon-more_small " />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" ">
                <td title className="border left rank line-link">
                  <a href="/en/coins/litecoin/">
                    <span className>
                      <span className="table-row">9</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border left regular-weight-not-mobile coin-name-col qa-coin-name line-link"
                >
                  <a href="/en/coins/litecoin/">
                    <img
                      className="table-image "
                      src="https://static.coinstats.app/coins/LitecoinGiD2Q.png"
                      alt="Litecoin, LTC"
                    />
                    <span className>
                      <span className="table-row">Litecoin</span>
                    </span>
                    <span className="show-desktop additional-label">
                      <span className="table-row"> • LTC</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right text-down regular-weight-not-mobile qa-coin-24h line-link"
                >
                  <a href="/en/coins/litecoin/">
                    <span className="change-row">
                      <span className="icon-priceDown" />
                      <span className="table-row">-4.28%</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right regular-weight-not-mobile qa-coin-price line-link"
                >
                  <a href="/en/coins/litecoin/">
                    <span className>
                      <span className="table-row">$211.19</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-price-btc line-link"
                >
                  <a href="/en/coins/litecoin/">
                    <span className>
                      <span className="table-row">0.00362164</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-market-cap line-link"
                >
                  <a href="/en/coins/litecoin/">
                    <span className>
                      <span className="table-row">$14.1B</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-volume-24h line-link"
                >
                  <a href="/en/coins/litecoin/">
                    <span className>
                      <span className="table-row">$3.2B</span>
                    </span>
                  </a>
                </td>
                <td title className="border right show-desktop line-link">
                  <a href="/en/coins/litecoin/">
                    <img
                      className="table-image big"
                      src="https://static.coinstats.app/sparks/litecoin_1w.png"
                      alt="Litecoin, LTC"
                    />
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                </td>
                <td title className="border left ">
                  <a href="/en/coins/litecoin/">
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                  <div className="table-value">
                    <div className="jsx-3397508174 table-more-menu">
                      <div className="jsx-3397508174 more-icon-wrapper">
                        <span className="jsx-3397508174 icon-more_small " />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" ">
                <td title className="border left rank line-link">
                  <a href="/en/coins/chainlink/">
                    <span className>
                      <span className="table-row">10</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border left regular-weight-not-mobile coin-name-col qa-coin-name line-link"
                >
                  <a href="/en/coins/chainlink/">
                    <img
                      className="table-image "
                      src="https://static.coinstats.app/coins/ChainLink0JkIR.png"
                      alt="Chainlink, LINK"
                    />
                    <span className>
                      <span className="table-row">Chainlink</span>
                    </span>
                    <span className="show-desktop additional-label">
                      <span className="table-row"> • LINK</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right text-down regular-weight-not-mobile qa-coin-24h line-link"
                >
                  <a href="/en/coins/chainlink/">
                    <span className="change-row">
                      <span className="icon-priceDown" />
                      <span className="table-row">-4.61%</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right regular-weight-not-mobile qa-coin-price line-link"
                >
                  <a href="/en/coins/chainlink/">
                    <span className>
                      <span className="table-row">$28.02</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-price-btc line-link"
                >
                  <a href="/en/coins/chainlink/">
                    <span className>
                      <span className="table-row">0.00048047</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-market-cap line-link"
                >
                  <a href="/en/coins/chainlink/">
                    <span className>
                      <span className="table-row">$11.5B</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-volume-24h line-link"
                >
                  <a href="/en/coins/chainlink/">
                    <span className>
                      <span className="table-row">$1.2B</span>
                    </span>
                  </a>
                </td>
                <td title className="border right show-desktop line-link">
                  <a href="/en/coins/chainlink/">
                    <img
                      className="table-image big"
                      src="https://static.coinstats.app/sparks/chainlink_1w.png"
                      alt="Chainlink, LINK"
                    />
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                </td>
                <td title className="border left ">
                  <a href="/en/coins/chainlink/">
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                  <div className="table-value">
                    <div className="jsx-3397508174 table-more-menu">
                      <div className="jsx-3397508174 more-icon-wrapper">
                        <span className="jsx-3397508174 icon-more_small " />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" ">
                <td title className="border left rank line-link">
                  <a href="/en/coins/bitcoin-cash/">
                    <span className>
                      <span className="table-row">11</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border left regular-weight-not-mobile coin-name-col qa-coin-name line-link"
                >
                  <a href="/en/coins/bitcoin-cash/">
                    <img
                      className="table-image "
                      src="https://static.coinstats.app/coins/bitcoin-cashY9y.png"
                      alt="Bitcoin Cash, BCH"
                    />
                    <span className>
                      <span className="table-row">Bitcoin Cash</span>
                    </span>
                    <span className="show-desktop additional-label">
                      <span className="table-row"> • BCH</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right text-down regular-weight-not-mobile qa-coin-24h line-link"
                >
                  <a href="/en/coins/bitcoin-cash/">
                    <span className="change-row">
                      <span className="icon-priceDown" />
                      <span className="table-row">-7.68%</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right regular-weight-not-mobile qa-coin-price line-link"
                >
                  <a href="/en/coins/bitcoin-cash/">
                    <span className>
                      <span className="table-row">$538.42</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-price-btc line-link"
                >
                  <a href="/en/coins/bitcoin-cash/">
                    <span className>
                      <span className="table-row">0.00923319</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-market-cap line-link"
                >
                  <a href="/en/coins/bitcoin-cash/">
                    <span className>
                      <span className="table-row">$10.1B</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-volume-24h line-link"
                >
                  <a href="/en/coins/bitcoin-cash/">
                    <span className>
                      <span className="table-row">$1.8B</span>
                    </span>
                  </a>
                </td>
                <td title className="border right show-desktop line-link">
                  <a href="/en/coins/bitcoin-cash/">
                    <img
                      className="table-image big"
                      src="https://static.coinstats.app/sparks/bitcoin-cash_1w.png"
                      alt="Bitcoin Cash, BCH"
                    />
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                </td>
                <td title className="border left ">
                  <a href="/en/coins/bitcoin-cash/">
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                  <div className="table-value">
                    <div className="jsx-3397508174 table-more-menu">
                      <div className="jsx-3397508174 more-icon-wrapper">
                        <span className="jsx-3397508174 icon-more_small " />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" ">
                <td title className="border left rank line-link">
                  <a href="/en/coins/usd-coin/">
                    <span className>
                      <span className="table-row">12</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border left regular-weight-not-mobile coin-name-col qa-coin-name line-link"
                >
                  <a href="/en/coins/usd-coin/">
                    <img
                      className="table-image "
                      src="https://static.coinstats.app/coins/usd-coiniGm.png"
                      alt="USD Coin, USDC"
                    />
                    <span className>
                      <span className="table-row">USD Coin</span>
                    </span>
                    <span className="show-desktop additional-label">
                      <span className="table-row"> • USDC</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right text-up regular-weight-not-mobile qa-coin-24h line-link"
                >
                  <a href="/en/coins/usd-coin/">
                    <span className="change-row">
                      <span className="icon-priceUp" />
                      <span className="table-row">0.09%</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right regular-weight-not-mobile qa-coin-price line-link"
                >
                  <a href="/en/coins/usd-coin/">
                    <span className>
                      <span className="table-row">$1</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-price-btc line-link"
                >
                  <a href="/en/coins/usd-coin/">
                    <span className>
                      <span className="table-row">0.00001717</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-market-cap line-link"
                >
                  <a href="/en/coins/usd-coin/">
                    <span className>
                      <span className="table-row">$9.6B</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-volume-24h line-link"
                >
                  <a href="/en/coins/usd-coin/">
                    <span className>
                      <span className="table-row">$1.7B</span>
                    </span>
                  </a>
                </td>
                <td title className="border right show-desktop line-link">
                  <a href="/en/coins/usd-coin/">
                    <img
                      className="table-image big"
                      src="https://static.coinstats.app/sparks/usd-coin_1w.png"
                      alt="USD Coin, USDC"
                    />
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                </td>
                <td title className="border left ">
                  <a href="/en/coins/usd-coin/">
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                  <div className="table-value">
                    <div className="jsx-3397508174 table-more-menu">
                      <div className="jsx-3397508174 more-icon-wrapper">
                        <span className="jsx-3397508174 icon-more_small " />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" ">
                <td title className="border left rank line-link">
                  <a href="/en/coins/stellar/">
                    <span className>
                      <span className="table-row">13</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border left regular-weight-not-mobile coin-name-col qa-coin-name line-link"
                >
                  <a href="/en/coins/stellar/">
                    <img
                      className="table-image "
                      src="https://static.coinstats.app/coins/1594216268358.png"
                      alt="Stellar, XLM"
                    />
                    <span className>
                      <span className="table-row">Stellar</span>
                    </span>
                    <span className="show-desktop additional-label">
                      <span className="table-row"> • XLM</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right text-down regular-weight-not-mobile qa-coin-24h line-link"
                >
                  <a href="/en/coins/stellar/">
                    <span className="change-row">
                      <span className="icon-priceDown" />
                      <span className="table-row">-3.65%</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right regular-weight-not-mobile qa-coin-price line-link"
                >
                  <a href="/en/coins/stellar/">
                    <span className>
                      <span className="table-row">$0.383638</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-price-btc line-link"
                >
                  <a href="/en/coins/stellar/">
                    <span className>
                      <span className="table-row">0.00000658</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-market-cap line-link"
                >
                  <a href="/en/coins/stellar/">
                    <span className>
                      <span className="table-row">$8.7B</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-volume-24h line-link"
                >
                  <a href="/en/coins/stellar/">
                    <span className>
                      <span className="table-row">$688.4M</span>
                    </span>
                  </a>
                </td>
                <td title className="border right show-desktop line-link">
                  <a href="/en/coins/stellar/">
                    <img
                      className="table-image big"
                      src="https://static.coinstats.app/sparks/stellar_1w.png"
                      alt="Stellar, XLM"
                    />
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                </td>
                <td title className="border left ">
                  <a href="/en/coins/stellar/">
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                  <div className="table-value">
                    <div className="jsx-3397508174 table-more-menu">
                      <div className="jsx-3397508174 more-icon-wrapper">
                        <span className="jsx-3397508174 icon-more_small " />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" ">
                <td title className="border left rank line-link">
                  <a href="/en/coins/wrapped-bitcoin/">
                    <span className>
                      <span className="table-row">14</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border left regular-weight-not-mobile coin-name-col qa-coin-name line-link"
                >
                  <a href="/en/coins/wrapped-bitcoin/">
                    <img
                      className="table-image "
                      src="https://static.coinstats.app/coins/wrapped-bitcoinoc1.png"
                      alt="Wrapped Bitcoin, WBTC"
                    />
                    <span className>
                      <span className="table-row">Wrapped Bitcoin</span>
                    </span>
                    <span className="show-desktop additional-label">
                      <span className="table-row"> • WBTC</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right text-down regular-weight-not-mobile qa-coin-24h line-link"
                >
                  <a href="/en/coins/wrapped-bitcoin/">
                    <span className="change-row">
                      <span className="icon-priceDown" />
                      <span className="table-row">-4.12%</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right regular-weight-not-mobile qa-coin-price line-link"
                >
                  <a href="/en/coins/wrapped-bitcoin/">
                    <span className>
                      <span className="table-row">$58,291</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-price-btc line-link"
                >
                  <a href="/en/coins/wrapped-bitcoin/">
                    <span className>
                      <span className="table-row">1.00099736</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-market-cap line-link"
                >
                  <a href="/en/coins/wrapped-bitcoin/">
                    <span className>
                      <span className="table-row">$7.8B</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-volume-24h line-link"
                >
                  <a href="/en/coins/wrapped-bitcoin/">
                    <span className>
                      <span className="table-row">$219.5M</span>
                    </span>
                  </a>
                </td>
                <td title className="border right show-desktop line-link">
                  <a href="/en/coins/wrapped-bitcoin/">
                    <img
                      className="table-image big"
                      src="https://static.coinstats.app/sparks/wrapped-bitcoin_1w.png"
                      alt="Wrapped Bitcoin, WBTC"
                    />
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                </td>
                <td title className="border left ">
                  <a href="/en/coins/wrapped-bitcoin/">
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                  <div className="table-value">
                    <div className="jsx-3397508174 table-more-menu">
                      <div className="jsx-3397508174 more-icon-wrapper">
                        <span className="jsx-3397508174 icon-more_small " />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" ">
                <td title className="border left rank line-link">
                  <a href="/en/coins/dogecoin/">
                    <span className>
                      <span className="table-row">15</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border left regular-weight-not-mobile coin-name-col qa-coin-name line-link"
                >
                  <a href="/en/coins/dogecoin/">
                    <img
                      className="table-image "
                      src="https://static.coinstats.app/coins/DogecoinIZai5.png"
                      alt="Dogecoin, DOGE"
                    />
                    <span className>
                      <span className="table-row">Dogecoin</span>
                    </span>
                    <span className="show-desktop additional-label">
                      <span className="table-row"> • DOGE</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right text-down regular-weight-not-mobile qa-coin-24h line-link"
                >
                  <a href="/en/coins/dogecoin/">
                    <span className="change-row">
                      <span className="icon-priceDown" />
                      <span className="table-row">-6.81%</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right regular-weight-not-mobile qa-coin-price line-link"
                >
                  <a href="/en/coins/dogecoin/">
                    <span className>
                      <span className="table-row">$0.056927</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-price-btc line-link"
                >
                  <a href="/en/coins/dogecoin/">
                    <span className>
                      <span className="table-row">0.00000098</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-market-cap line-link"
                >
                  <a href="/en/coins/dogecoin/">
                    <span className>
                      <span className="table-row">$7.3B</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-volume-24h line-link"
                >
                  <a href="/en/coins/dogecoin/">
                    <span className>
                      <span className="table-row">$1.2B</span>
                    </span>
                  </a>
                </td>
                <td title className="border right show-desktop line-link">
                  <a href="/en/coins/dogecoin/">
                    <img
                      className="table-image big"
                      src="https://static.coinstats.app/sparks/dogecoin_1w.png"
                      alt="Dogecoin, DOGE"
                    />
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                </td>
                <td title className="border left ">
                  <a href="/en/coins/dogecoin/">
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                  <div className="table-value">
                    <div className="jsx-3397508174 table-more-menu">
                      <div className="jsx-3397508174 more-icon-wrapper">
                        <span className="jsx-3397508174 icon-more_small " />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" ">
                <td title className="border left rank line-link">
                  <a href="/en/coins/theta-token/">
                    <span className>
                      <span className="table-row">16</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border left regular-weight-not-mobile coin-name-col qa-coin-name line-link"
                >
                  <a href="/en/coins/theta-token/">
                    <img
                      className="table-image "
                      src="https://static.coinstats.app/coins/theta-tokenrot.png"
                      alt="Theta Network, THETA"
                    />
                    <span className>
                      <span className="table-row">Theta Network</span>
                    </span>
                    <span className="show-desktop additional-label">
                      <span className="table-row"> • THETA</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right text-down regular-weight-not-mobile qa-coin-24h line-link"
                >
                  <a href="/en/coins/theta-token/">
                    <span className="change-row">
                      <span className="icon-priceDown" />
                      <span className="table-row">-5.05%</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right regular-weight-not-mobile qa-coin-price line-link"
                >
                  <a href="/en/coins/theta-token/">
                    <span className>
                      <span className="table-row">$6.96</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-price-btc line-link"
                >
                  <a href="/en/coins/theta-token/">
                    <span className>
                      <span className="table-row">0.00011927</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-market-cap line-link"
                >
                  <a href="/en/coins/theta-token/">
                    <span className>
                      <span className="table-row">$7.0B</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-volume-24h line-link"
                >
                  <a href="/en/coins/theta-token/">
                    <span className>
                      <span className="table-row">$684.1M</span>
                    </span>
                  </a>
                </td>
                <td title className="border right show-desktop line-link">
                  <a href="/en/coins/theta-token/">
                    <img
                      className="table-image big"
                      src="https://static.coinstats.app/sparks/theta-token_1w.png"
                      alt="Theta Network, THETA"
                    />
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                </td>
                <td title className="border left ">
                  <a href="/en/coins/theta-token/">
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                  <div className="table-value">
                    <div className="jsx-3397508174 table-more-menu">
                      <div className="jsx-3397508174 more-icon-wrapper">
                        <span className="jsx-3397508174 icon-more_small " />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" ">
                <td title className="border left rank line-link">
                  <a href="/en/coins/terra-luna/">
                    <span className>
                      <span className="table-row">17</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border left regular-weight-not-mobile coin-name-col qa-coin-name line-link"
                >
                  <a href="/en/coins/terra-luna/">
                    <img
                      className="table-image "
                      src="https://static.coinstats.app/coins/terra-luna8uT.png"
                      alt="Terra, LUNA"
                    />
                    <span className>
                      <span className="table-row">Terra</span>
                    </span>
                    <span className="show-desktop additional-label">
                      <span className="table-row"> • LUNA</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right text-down regular-weight-not-mobile qa-coin-24h line-link"
                >
                  <a href="/en/coins/terra-luna/">
                    <span className="change-row">
                      <span className="icon-priceDown" />
                      <span className="table-row">-1.40%</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right regular-weight-not-mobile qa-coin-price line-link"
                >
                  <a href="/en/coins/terra-luna/">
                    <span className>
                      <span className="table-row">$15.20</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-price-btc line-link"
                >
                  <a href="/en/coins/terra-luna/">
                    <span className>
                      <span className="table-row">0.00026102</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-market-cap line-link"
                >
                  <a href="/en/coins/terra-luna/">
                    <span className>
                      <span className="table-row">$6.1B</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-volume-24h line-link"
                >
                  <a href="/en/coins/terra-luna/">
                    <span className>
                      <span className="table-row">$876.8M</span>
                    </span>
                  </a>
                </td>
                <td title className="border right show-desktop line-link">
                  <a href="/en/coins/terra-luna/">
                    <img
                      className="table-image big"
                      src="https://static.coinstats.app/sparks/terra-luna_1w.png"
                      alt="Terra, LUNA"
                    />
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                </td>
                <td title className="border left ">
                  <a href="/en/coins/terra-luna/">
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                  <div className="table-value">
                    <div className="jsx-3397508174 table-more-menu">
                      <div className="jsx-3397508174 more-icon-wrapper">
                        <span className="jsx-3397508174 icon-more_small " />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" ">
                <td title className="border left rank line-link">
                  <a href="/en/coins/vechain/">
                    <span className>
                      <span className="table-row">18</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border left regular-weight-not-mobile coin-name-col qa-coin-name line-link"
                >
                  <a href="/en/coins/vechain/">
                    <img
                      className="table-image "
                      src="https://static.coinstats.app/coins/VeChainTTaJ5.png"
                      alt="VeChain, VET"
                    />
                    <span className>
                      <span className="table-row">VeChain</span>
                    </span>
                    <span className="show-desktop additional-label">
                      <span className="table-row"> • VET</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right text-up regular-weight-not-mobile qa-coin-24h line-link"
                >
                  <a href="/en/coins/vechain/">
                    <span className="change-row">
                      <span className="icon-priceUp" />
                      <span className="table-row">9.39%</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right regular-weight-not-mobile qa-coin-price line-link"
                >
                  <a href="/en/coins/vechain/">
                    <span className>
                      <span className="table-row">$0.072831</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-price-btc line-link"
                >
                  <a href="/en/coins/vechain/">
                    <span className>
                      <span className="table-row">0.00000125</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-market-cap line-link"
                >
                  <a href="/en/coins/vechain/">
                    <span className>
                      <span className="table-row">$4.7B</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-volume-24h line-link"
                >
                  <a href="/en/coins/vechain/">
                    <span className>
                      <span className="table-row">$892.3M</span>
                    </span>
                  </a>
                </td>
                <td title className="border right show-desktop line-link">
                  <a href="/en/coins/vechain/">
                    <img
                      className="table-image big"
                      src="https://static.coinstats.app/sparks/vechain_1w.png"
                      alt="VeChain, VET"
                    />
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                </td>
                <td title className="border left ">
                  <a href="/en/coins/vechain/">
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                  <div className="table-value">
                    <div className="jsx-3397508174 table-more-menu">
                      <div className="jsx-3397508174 more-icon-wrapper">
                        <span className="jsx-3397508174 icon-more_small " />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" ">
                <td title className="border left rank line-link">
                  <a href="/en/coins/aave/">
                    <span className>
                      <span className="table-row">19</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border left regular-weight-not-mobile coin-name-col qa-coin-name line-link"
                >
                  <a href="/en/coins/aave/">
                    <img
                      className="table-image "
                      src="https://static.coinstats.app/coins/aaveZSi.png"
                      alt="Aave, AAVE"
                    />
                    <span className>
                      <span className="table-row">Aave</span>
                    </span>
                    <span className="show-desktop additional-label">
                      <span className="table-row"> • AAVE</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right text-down regular-weight-not-mobile qa-coin-24h line-link"
                >
                  <a href="/en/coins/aave/">
                    <span className="change-row">
                      <span className="icon-priceDown" />
                      <span className="table-row">-5.65%</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right regular-weight-not-mobile qa-coin-price line-link"
                >
                  <a href="/en/coins/aave/">
                    <span className>
                      <span className="table-row">$370.79</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-price-btc line-link"
                >
                  <a href="/en/coins/aave/">
                    <span className>
                      <span className="table-row">0.00636736</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-market-cap line-link"
                >
                  <a href="/en/coins/aave/">
                    <span className>
                      <span className="table-row">$4.6B</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-volume-24h line-link"
                >
                  <a href="/en/coins/aave/">
                    <span className>
                      <span className="table-row">$718.8M</span>
                    </span>
                  </a>
                </td>
                <td title className="border right show-desktop line-link">
                  <a href="/en/coins/aave/">
                    <img
                      className="table-image big"
                      src="https://static.coinstats.app/sparks/aave_1w.png"
                      alt="Aave, AAVE"
                    />
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                </td>
                <td title className="border left ">
                  <a href="/en/coins/aave/">
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                  <div className="table-value">
                    <div className="jsx-3397508174 table-more-menu">
                      <div className="jsx-3397508174 more-icon-wrapper">
                        <span className="jsx-3397508174 icon-more_small " />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" ">
                <td title className="border left rank line-link">
                  <a href="/en/coins/crypto-com-chain/">
                    <span className>
                      <span className="table-row">20</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border left regular-weight-not-mobile coin-name-col qa-coin-name line-link"
                >
                  <a href="/en/coins/crypto-com-chain/">
                    <img
                      className="table-image "
                      src="https://static.coinstats.app/coins/crypto-com-chain8Qr.png"
                      alt="Crypto.com Coin, CRO"
                    />
                    <span className>
                      <span className="table-row">Crypto.com Coin</span>
                    </span>
                    <span className="show-desktop additional-label">
                      <span className="table-row"> • CRO</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right text-down regular-weight-not-mobile qa-coin-24h line-link"
                >
                  <a href="/en/coins/crypto-com-chain/">
                    <span className="change-row">
                      <span className="icon-priceDown" />
                      <span className="table-row">-6.44%</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right regular-weight-not-mobile qa-coin-price line-link"
                >
                  <a href="/en/coins/crypto-com-chain/">
                    <span className>
                      <span className="table-row">$0.178499</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-price-btc line-link"
                >
                  <a href="/en/coins/crypto-com-chain/">
                    <span className>
                      <span className="table-row">0.00000306</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-market-cap line-link"
                >
                  <a href="/en/coins/crypto-com-chain/">
                    <span className>
                      <span className="table-row">$4.5B</span>
                    </span>
                  </a>
                </td>
                <td
                  title
                  className="border right show-desktop qa-coin-volume-24h line-link"
                >
                  <a href="/en/coins/crypto-com-chain/">
                    <span className>
                      <span className="table-row">$169.1M</span>
                    </span>
                  </a>
                </td>
                <td title className="border right show-desktop line-link">
                  <a href="/en/coins/crypto-com-chain/">
                    <img
                      className="table-image big"
                      src="https://static.coinstats.app/sparks/crypto-com-chain_1w.png"
                      alt="Crypto.com Coin, CRO"
                    />
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                </td>
                <td title className="border left ">
                  <a href="/en/coins/crypto-com-chain/">
                    <span className>
                      <span className="table-row" />
                    </span>
                  </a>
                  <div className="table-value">
                    <div className="jsx-3397508174 table-more-menu">
                      <div className="jsx-3397508174 more-icon-wrapper">
                        <span className="jsx-3397508174 icon-more_small " />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
        */}
      
      
    </div>
  );
};

export default Mainsec;
