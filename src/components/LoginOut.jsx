import React from "react";
import "./LoginOut.css"

const LoginOut = () => {
   return (
      <>
         <div className="items-center justify-between flex">
            <div className="formImage">
               <img src="images/HeroImgFlip.png" alt="" srcset="" />
            </div>
            <div className="formContainer mr-40">
               <input type="checkbox" id="chk" aria-hidden="true" />
               <div className="login">
                  <form className="form">
                     <label className="loginLabel" htmlFor="chk" aria-hidden="true">
                        Log in
                     </label>
                     <input className="input" type="email" name="email" placeholder="Email" required />
                     <input className="input" type="password" name="pswd" placeholder="Password" required />
                     <button className="loginBtn formBtn">Log in</button>
                  </form>
               </div>
               <div className="register">
                  <form className="form">
                     <label className="loginLabel" htmlFor="chk" aria-hidden="true">
                        Register
                     </label>
                     <input className="input" type="text" name="txt" placeholder="Username" required />
                     <input className="input" type="email" name="email" placeholder="Email" required />
                     <input className="input" type="password" name="pswd" placeholder="Password" required />
                     <button className="registerBtn formBtn">Register</button>
                  </form>
               </div>
            </div>
         </div>
      </>
   );
};

export default LoginOut;
