import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import banner_img from "../../assets/excitednoob_IOT_sensors_Devices_machines_in_a_industry_Connecte_c0de89d7-79ab-43c3-bdce-1da15b1545dd 1.png";
import "./loginPage.css";


export default function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailLogin = async (e) => {
    e.preventDefault();

    try {
      // Sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);
      // If successful, you can redirect the user to another page
      history.push("https://www.predco.ai/contact");
      console.log("Logged in successfully");
    } catch (error) {
      setError("User not Found Please Sign in with Google");
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      // Sign in with Google popup
      await signInWithPopup(auth, provider);
      // If successful, you can redirect the user to another page
      console.log("Logged in with Google successfully");
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <div className="container">
      <div className="login-page-wrapper">
        <div className="left">
          <div className="login-container">
            <h3 className="login-heading">Login to Your Account</h3>
            <p className="login-sub-heading">
              Welcome Back, Please enter your details
            </p>
            <form className="form-horizontal" onSubmit={handleEmailLogin}>
              <input
                type="email"
                name="email"
                className="login-input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="login-btn" type="submit">
                Login with Email
              </button>
            </form>
            <div className="or-divider">OR</div>
            <button className="google-login-btn" onClick={handleGoogleLogin}>
            
            </button>
          
            <div>
              <span className="label-text">Email not registered? </span>
              <span className="contact-us">Contact Us</span>
            </div>
            {error && <div className="error-message">{error}</div>}
          </div>
          
        </div>
        <div className="right">
          <div className="image-wrapper">
            <img src={banner_img} alt="banner" className="banner-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
