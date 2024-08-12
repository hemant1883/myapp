import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} href ="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse  justify-content-between" id="navbarSupportedContent">
        <ul className="navbar-nav  mb-2 mb-lg-0">
          <li className="nav-item">
            <a className={`nav-link active  text-${props.mode==='light'?'dark':'light'}`} aria-current="page" href="#">Home</a>
          </li>
          {/* <li className="nav-item">
            <Link className={`nav-link  text-${props.mode==='light'?'dark':'light'}`} to="/about">{props.aboutText}</Link>
          </li> */}
         
          <li className="nav-item">
            <a className={`nav-link  text-${props.mode==='light'?'dark':'light'}`} aria-disabled="true" href='/'>Blog</a>
          </li>
        </ul>

        <div className="form-check form-switch">
       
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.tooglemode} id="flexSwitchCheckDefault"/>
  <label className={`form-check-label" for="flexSwitchCheckDefault"   text-${props.mode==='light'?'dark':'light'}`} >Enable Dark Mode</label>
</div>


        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn mx-2 btn-primary   text-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes = {
  title:PropTypes.string,
  aboutText:PropTypes.string.isRequired
}

Navbar.defaultProps={
  title:'title',
  aboutText:'about info'
};