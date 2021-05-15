import React from "react";
import classes from "./Login.module.css"

const Login = (props) => {
  return (
      
<div className="container">
  <div className="row">
      <h1 className={classes.headi}>Login</h1>
    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <div className="card card-signin my-5" style={{border:"0"}}>
        <div className="card-body" style={{ backgroundColor: props.thema==="light"? "rgba(28,27,27,0.07)":"#2c2b2b",border:"0" }}>
          {/* <h5 className="card-title text-center">Sign In</h5> */}
          <form className="form-signin">
            <div className="form-label-group">
            <label htmlFor="inputEmail"style={{marginTop:"10px",color:"var(--eColor)"}} >Email/UserName</label>
              <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
              
            </div>
            <div className="form-label-group">
            <label htmlFor="inputPassword" style={{marginTop:"10px",color:"var(--eColor)"}}  >Password</label>
              <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
              
            </div>
            <div className="custom-control custom-checkbox mb-3">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              
            </div>
            <button className={`${classes.bgc} btn btn-lg btn-orange btn-block text-uppercase`} type="submit">Login</button>
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
    </div>
  </div>
</div>

  );
};

export default Login;
