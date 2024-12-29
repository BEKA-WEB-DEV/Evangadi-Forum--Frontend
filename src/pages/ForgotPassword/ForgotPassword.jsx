import { useState } from "react";
import { axiosInstance } from "../../utility/axios";
import { Link } from "react-router-dom";
import classes from "./ForgotPassword.module.css";
import Layout from "../../components/Layout/Layout";
import OtpPage from "../../components/Otp/OtpPage";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [showOtpPage, setShowOtpPage] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/user/forgotPassword", {
        email,
      });
      if (response.status === 200) {
        setMessage("OTP has been sent to your email.");
        setError(null);
        setShowOtpPage(true); // Show OTP page
      } else {
        setError(response.data.msg || "Failed to send OTP.");
        setMessage(null);
      }
    } catch (err) {
      setError(
        err.response?.data?.msg || "Error sending OTP. Please try again."
      );
      setMessage(null);
    }
  };

  return (
    <Layout>
      {showOtpPage ? (
        <OtpPage email={email} />
      ) : (
        <div className={classes.formcontainer}>
          <div className={classes.innerContainer}>
            <h2>Forgot your password?</h2>
            <p>
              Enter your email address, and we&apos;ll send you a link to reset
              your password.
            </p>
            {message && <p className={classes.success}>{message}</p>}
            {error && <p className={classes.error}>{error}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={email}
                onChange={handleChange}
                required
              />
              <button type="submit" className={classes.submitbtn}>
                Send OTP
              </button>
            </form>
            <p className={classes.rememberedPassword}>
              Remembered your password? <br />{" "}
              <Link to="/login">Go back to login</Link>
            </p>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default ForgotPassword;

// import { useState } from "react";
// import { axiosInstance } from "../../utility/axios";
// import classes from "./ForgotPassword.module.css";
// import Layout from "../../components/Layout/Layout";
// import OtpPage from "../../components/Otp/OtpPage";

// function ForgotPassword() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState(null);
//   const [error, setError] = useState(null);
//   const [showOtpPage, setShowOtpPage] = useState(false);

//   const handleChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axiosInstance.post("/user/forgotPassword", {
//         email,
//       });
//       if (response.status === 200) {
//         setMessage("Password reset link has been sent to your email.");
//         setError(null);
//         setShowOtpPage(true); // Show OTP page
//       } else {
//         setError(response.data.msg || "Failed to send password reset link.");
//         setMessage(null);
//       }
//     } catch (err) {
//       setError(
//         err.response?.data?.msg || "Error sending reset link. Please try again."
//       );
//       setMessage(null);
//     }
//   };

//   return (
//     <Layout>
//       {showOtpPage ? (
//         <OtpPage email={email} />
//       ) : (
//         <div className={classes.formcontainer}>
//           <div className={classes.innerContainer}>
//             <h3>Forgot your password?</h3>
//             <p>
//               Enter your email address, and we&apos;ll send you a link to reset
//               your password.
//             </p>
//             {message && <p className={classes.success}>{message}</p>}
//             {error && <p className={classes.error}>{error}</p>}
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email address"
//                 value={email}
//                 onChange={handleChange}
//                 required
//               />
//               <button type="submit" className={classes.submitbtn}>
//                 Send reset link
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </Layout>
//   );
// }

// export default ForgotPassword;

// import  { useState } from "react";
// import { axiosInstance } from "../../utility/axios";
// import classes from "./ForgotPassword.module.css";
// import Layout from "../../Layout/Layout.jsx";

// function ForgotPassword() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState(null);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axiosInstance.post("/user/forgotPassword", {
//         email,
//       });
//       if (response.status === 200) {
//         setMessage("Password reset link has been sent to your email.");
//         setError(null);
//       } else {
//         setError(response.data.msg || "Failed to send password reset link.");
//         setMessage(null);
//       }
//     } catch (err) {
//       setError(
//         err.response?.data?.msg || "Error sending reset link. Please try again."
//       );
//       setMessage(null);
//     }
//   };

//   return (
//     <Layout>
//     <div className={classes.formcontainer}>
//       <div className={classes.innerContainer}>
//         <h2>Forgot your password?</h2>
//         <p>
//           Enter your email address, and we&apos;ll send you a link to reset your
//           password.
//         </p>
//         {message && <p className={classes.success}>{message}</p>}
//         {error && <p className={classes.error}>{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email address"
//             value={email}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit" className={classes.submitbtn}>
//             Send reset link
//           </button>
//         </form>
//       </div>
//     </div>
//     </Layout>
//   );
// }

// export default ForgotPassword;
