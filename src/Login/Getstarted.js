import React from "react";
import classes from "./Login.module.css"
import {Link} from 'react-router-dom';

const Getstarted = (props) => {
  return (
      
<div className="container">
  <div className="row">
     
    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <div className="card card-signin my-5 border-0" style={{border:"0"}}>
        <div className="card-body border-0" style={{ backgroundColor: props.thema==="light"? "rgba(28,27,27,0.07)":"#2c2b2b",border:"0" }}>
          {/* <h5 className="card-title text-center">Sign In</h5> */}
          <form className="form-signin">
            <div className="form-label-group">
            <label className={classes.forgot} htmlFor="inputEmail"style={{marginTop:"10px",textAlign:'center'}}>Start managing your crypto portfolio like a pro</label>
              
           
            </div>
            
            <div className="custom-control custom-checkbox mb-3">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              
            </div>
            <button className={`${classes.cbl} btn btn-lg btn-orange btn-block text-uppercase`} type="submit">Login WIth Coinbase</button><br/>
            <Link to="/createaccount"> <button className={`${classes.bgc} btn btn-lg btn-orange btn-block text-uppercase`} type="submit">SignUp with the Email</button></Link>
            <h1 className={classes.forgot}>Fogot Password ?</h1>
            <h1 className={classes.forgot}>or Login with</h1>
            {/* <hr className="my-4" /> */}
            <div className={classes.alin}>
            <i className={`${classes.fab} fab fa-facebook-f ${classes.facebook}`}></i>
            <i className={`${classes.fab} fab fa-twitter ${classes.twitter}`}></i>
            <i className={`${classes.fab} fab fa-google ${classes.google}`}></i>
            <i className={`${classes.fab} fab fa-linkedin ${classes.linkedin}`}></i>
            <i className={`${classes.fab} fab fa-instagram ${classes.instagram}`}></i>
            </div>
          </form>
        </div>
      </div>
      <h1 className={classes.forgot}>Already have an account?<strong> LOGIN</strong></h1>
      <h1 className={classes.forgot}>By Using this service, you agree to our<strong> Terms of Use</strong> and <br/><strong>Privicy Policy</strong></h1>
    </div>
  </div>
</div>

  );
};

export default Getstarted;
