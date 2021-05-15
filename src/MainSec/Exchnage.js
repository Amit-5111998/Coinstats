import React from 'react'
import Tabledata from './Tabledata'
import cls from "./Tabledata.module.css";
import {Link} from "react-router-dom";  

const Exchnage = () => {
    return (
        <div style={{ width: "100%", color: "var(--eColor)",marginTop:"25px" }}>
        <table
          className="table custom-cols-table"
          style={{ color: "var(--eColor)" }}
        >
          <thead>
            <tr>
              <th scope="col" className="left nowrap rank">
                <span className="table-column-title with-iconArrange">
                  #<span className="icon-arrange " />
                </span>
              </th>
              <th scope="col" className="left">
                <span className="table-column-title with-iconArrange">Name</span>
              </th>
              <th scope="col" className="right">
                <span className="table-column-title with-iconArrange">
                  24h Change
                </span>
              </th>
              <th scope="col" className="right">
                <span className="table-column-title with-iconArrange">Price</span>
              </th>
              <th scope="col" className={`right show-desktop ${cls.disp}`}>
                <span className="table-column-title with-iconArrange">
                  Price in BTC
                </span>
              </th>
              <th scope="col" className={`right show-desktop ${cls.disp}`}>
                <span className="table-column-title with-iconArrange">
                  Market Cap
                </span>
              </th>
              <th scope="col" className={`right show-desktop ${cls.disp}`}>
                <span className="table-column-title with-iconArrange">
                  Volume 24h
                </span>
              </th>
              <th scope="col" className={`right show-desktop ${cls.disp}`}>
                <span className="with-iconArrange">
                  <span className="table-column-title">LANCHED</span>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" ">
              <th scope="row">
                <a href="/en/coins/bitcoin/">
                  <span className>
                    <span className="table-row">1</span>
                  </span>
                </a>
              </th>
              <td
                title
                className={`left regular-weight-not-mobile coin-name-col qa-coin-name line-link}`}
              >
                <Link to="/currheader">
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
                </Link>
              </td>
              <td>
                <a href="/en/coins/bitcoin/">
                  <span className="change-row">
                    <span className="icon-priceUp" />
                    <span className="table-row">-3.76%</span>
                  </span>
                </a>
              </td>
              <td>
                <a href="/en/coins/bitcoin/">
                  <span className>
                    <span className="table-row">$58,324.97</span>
                  </span>
                </a>
              </td>
              <td className={`${cls.disp}`}>
                <a href="/en/coins/bitcoin/">
                  <span className>
                    <span className="table-row">1.00000000</span>
                  </span>
                </a>
              </td>
              <td className={`${cls.disp}`}>
                <a href="/en/coins/bitcoin/">
                  <span className>
                    <span className="table-row">$1.1T</span>
                  </span>
                </a>
              </td>
              <td className={`${cls.disp}`}>
                <a href="/en/coins/bitcoin/">
                  <span className>
                    <span className="table-row">$53.1B</span>
                  </span>
                </a>
              </td>
              <td className={`${cls.disp}`}>
                <a href="/en/coins/bitcoin/">
                  July 2017
                  <span className>
                    <span className="table-row" />
                  </span>
                </a>
              </td>
              
            </tr>
            <tr>
              <th scope="row">
                <a href="/en/coins/bitcoin/">
                  <span className>
                    <span className="table-row">2</span>
                  </span>
                </a>
              </th>
              <td
                title
                className=" left regular-weight-not-mobile coin-name-col qa-coin-name line-link"
              >
                <a href="/en/coins/bitcoin/">
                  <img
                    className="table-image "
                    src="https://static.coinstats.app/coins/EthereumOCjgD.png"
                    alt="Bitcoin, BTC"
                  />
                  <span className>
                    <span className="table-row">Ethereum</span>
                  </span>
                  <span className="show-desktop additional-label">
                    <span className="table-row"> • ETH</span>
                  </span>
                </a>
              </td>
              <td>
                <a href="/en/coins/bitcoin/">
                  <span className="change-row">
                    <span className="icon-priceDown" />
                    <span className="table-row">-4.26%</span>
                  </span>
                </a>
              </td>
              <td>
                <a href="/en/coins/bitcoin/">
                  <span className>
                    <span className="table-row">$58,324.97</span>
                  </span>
                </a>
              </td>
              <td className={`${cls.disp}`}>
                <a href="/en/coins/bitcoin/">
                  <span className>
                    <span className="table-row">1.00000000</span>
                  </span>
                </a>
              </td>
              <td className={`${cls.disp}`}>
                <a href="/en/coins/bitcoin/">
                  <span className>
                    <span className="table-row">$1.1T</span>
                  </span>
                </a>
              </td>
              <td className={`${cls.disp}`}>
                <a href="/en/coins/bitcoin/">
                  <span className>
                    <span className="table-row">$53.1B</span>
                  </span>
                </a>
              </td>
              <td className={`${cls.disp}`}>
                <a href="/en/coins/bitcoin/">
                  May 2018
                  <span className>
                    <span className="table-row" />
                  </span>
                </a>
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default Exchnage
