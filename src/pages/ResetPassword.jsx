import React from "react";
import bgimg from "./../images/bg.jpg";
import logo1 from "./../images/logo1.png";
import './ResetPassword.css';
const ResetPassword = () => {
  return (
    
     <div  style={{ backgroundImage: `url(${bgimg})` }} className="resetpassword">
             <div className="login-card">
        <div className="login-card-content">
          <div className="header">
            <div className="logo">
                
              <div><img src={logo1} alt="" width="100px" height="100px"/></div>
            </div>
            <h2>Reset Password</h2>
            {/* <!-- <h3>company slogan</h3> --> */}
          </div>
          {/* <div className="form">
            <div className="form-field username">
              <div className="icon">
                <i className="far fa-user"></i>
              </div>
              <input type="text" placeholder="Email ID"/>
            </div> */}
            
            <div className="form-field username">
                <div className="icon">
                  <i className="far fa-user"></i>
                </div>
                <input type="text" placeholder="New Password"/>
              </div>
  

            <div className="form-field password">
              <div className="icon">
                <i className="fas fa-lock"></i>
              </div>
              <input type="password" placeholder=" Confirm Password"/>
            </div>
      
            <button type="reset">
              reset
            </button>
           
          </div>
        
      </div>
     </div>
  )
}

export default ResetPassword;

