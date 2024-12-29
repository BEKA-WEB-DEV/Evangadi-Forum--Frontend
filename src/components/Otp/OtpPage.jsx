import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utility/axios";
import classes from "./OtpPage.module.css";
import Layout from "../Layout/Layout";

function OtpPage({ email }) {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/user/verifyOtp", {
        email,
        otp,
      });
      if (response.status === 200) {
        setMessage("OTP verified successfully.");
        setError(null);
        Navigate.push("/login"); // Redirect to login page
      } else {
        setError(response.data.msg || "Failed to verify OTP.");
        setMessage(null);
      }
    } catch (err) {
      setError(
        err.response?.data?.msg || "Error verifying OTP. Please try again."
      );
      setMessage(null);
    }
  };

  return (
    <Layout>
      <div className={classes.formcontainer}>
        <div className={classes.innerContainer}>
          <h2>Enter OTP</h2>
          <p>Enter the OTP sent to your email address.</p>
          {message && <p className={classes.success}>{message}</p>}
          {error && <p className={classes.error}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="otp"
              placeholder="OTP"
              value={otp}
              onChange={handleChange}
              required
            />
            <button type="submit" className={classes.submitbtn}>
              Verify OTP
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default OtpPage;
