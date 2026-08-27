import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./Login.css";
import axios from "axios";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const res = await axios.post(
        "http://localhost:5000/api/login",
        formData
    );

    console.log("Login Response:", res.data);

} catch (error) {
    console.log("Login Error:", error.response?.data);
}
 }
  return (
    <div className="loginPage">
      <div className="loginCard">

        <div className="loginLogo">
          🎬
        </div>

        <h1>Welcome Back</h1>

        <p className="loginSubtitle">
          Login to continue watching your favorite movies
        </p>

        <form onSubmit={handleSubmit}>

          <div className="inputGroup">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="inputGroup">
            <label>Password</label>

            <div className="passwordBox">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="showPassword"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <div className="loginOptions">
            <label className="rememberMe">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="forgotPassword"
            >
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="loginBtn">
            Login
          </button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="guestBtn">
          Continue as Guest
        </button>

        <p className="signupText">
  Don't have an account?

  <NavLink
    to="/Signup"
    className="signupLink"
  >
    Sign Up
  </NavLink>
</p>

      </div>
    </div>
  );
};
