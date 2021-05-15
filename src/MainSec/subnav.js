import React from 'react'
import './subnav.css';

const Subnav = () => {
    return (
        <div>
  <div className="navbar">
    <a href="fake_pagfake">Home</a>
    <a href="fake_pagfake">News</a>
    <div className="dropdown">
      <button className="dropbtn">Dropdown 
        <i className="fa fa-caret-down" />
      </button>
      <div className="dropdown-content">
        <div className="header">
          <h2>Mega Menu</h2>
        </div>   
        <div className="row">
          <div className="column">
            <h3>Category 1</h3>
            <a href="fake">Link 1</a>
            <a href="fake">Link 2</a>
            <a href="fake">Link 3</a>
          </div>
          <div className="column">
            <h3>Category 2</h3>
            <a href="fake">Link 1</a>
            <a href="fake">Link 2</a>
            <a href="fake">Link 3</a>
          </div>
          <div className="column">
            <h3>Category 3</h3>
            <a href="fake">Link 1</a>
            <a href="fake">Link 2</a>
            <a href="fake">Link 3</a>
          </div>
        </div>
      </div>
    </div> 
  </div>
  <div style={{padding: 16}}>
    <h3>Responsive Mega Menu (Full-width dropdown in navbar)</h3>
    <p>Hover over the "Dropdown" link to see the mega menu.</p>
    <p>Resize the browser window to see the responsive effect.</p>
  </div>
</div>

    )
}

export default Subnav
