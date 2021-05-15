import React from "react";
import classes from "./Login.module.css"

const CreateAccount = (props) => {
  return (
    <div className="container">
    <div className="row">
        <h1 className={classes.headi}>Create Account</h1>
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5" style={{border:"0"}}>
          <div className="card-body"  style={{ backgroundColor: props.thema==="light"? "rgba(28,27,27,0.07)":"#2c2b2b",border:"0" }}>
            {/* <h5 className="card-title text-center">Sign In</h5> */}
            <form className="form-signin">
              <div className="form-label-group">
              <label htmlFor="inputEmail"style={{marginTop:"10px"}}>Sign Up With Email</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                
              </div>
              <div className="form-label-group">
              <label htmlFor="inputPassword" style={{marginTop:"10px"}}>Create Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                
              </div>
              <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                
              </div>
              <button className={`${classes.bgc} btn btn-lg btn-orange btn-block text-uppercase`} type="submit">Create A Account</button>
              {/* <h1 className={classes.forgot}>Fogot Password ?</h1>
              <h1 className={classes.forgot}>or Login with</h1> */}
              {/* <hr className="my-4" /> */}
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CreateAccount;
