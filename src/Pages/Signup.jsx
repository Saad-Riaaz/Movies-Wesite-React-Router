import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Signup.css";
import axios from "axios";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {

        const res = await axios.post(
            "http://localhost:5000/api/register",
            {
                name: formData.name,
                email: formData.email,
                password: formData.password
            }
        );

        console.log("Backend Response:", res.data);

    } catch (error) {

        console.log(error.response?.data);

    }
};

  return (
    <div className="signupPage">

      <div className="signupCard">

        <div className="signupLogo">
          🎬
        </div>

        <h1>Create Account</h1>

        <p className="signupSubtitle">
          Create your account and start exploring movies
        </p>

        <form onSubmit={handleSubmit}>

          <div className="inputGroup">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

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
                placeholder="Create a password"
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

          <div className="inputGroup">
            <label>Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="signupSubmitBtn"
          >
            Create Account
          </button>

        </form>

        <p className="loginText">
  Already have an account?

  <NavLink
    to="/Login"
    className="loginLink"
  >
    Login
  </NavLink>
</p>

      </div>

    </div>
  );
};

