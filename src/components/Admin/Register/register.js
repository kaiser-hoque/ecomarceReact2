// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./register.css";
// import { register } from "../Auth/auth";

// function Register() {
//   const [inputs, setInputs] = useState([]);
//   const navigate = useNavigate();
//   let signup = async (inputs) => {
//     await register(inputs);
//     navigate("/signin");
//   };
//   const onFileChange = (e) => {
//     let files = e.target.files;
//     let fileReader = new FileReader();
//     fileReader.readAsDataURL(files[0]);

//     fileReader.onload = (event) => {
//       const name = "image";
//       const value = event.target.result;
//       setInputs((values) => ({ ...values, [name]: value }));
//     };
//   };

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs((values) => ({ ...values, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     signup(inputs);
//   };
//   return (
//     <div className="register-wrap mt-5">
//       <div className="login-container1">
//         <div className="container5 mt-5">
//           <span className="span2">Create A New Account</span>
//           <div className="row">
//             <div className="col-sm-6">
//               <img
//                 src="assets/images/sufa.png"
//                 className=" img-fluid"
//                 alt="sfdgdfg"
//               />
//             </div>
//             <div className="col-sm-6 offset-sm-1">
//               <form onSubmit={handleSubmit}>
//                 <label for="uname">
//                   <b>Name</b>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Full Name"
//                   name="name"
//                   onChange={handleChange}
//                 />

//                 <label for="uname">
//                   <b>Email</b>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Email Address"
//                   name="email"
//                   onChange={handleChange}
//                   required
//                 />

//                 <label for="psw">
//                   <b>Password</b>
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="Enter Password"
//                   name="password"
//                   onChange={handleChange}
//                   required
//                 />
//                 <label for="psw">
//                   <b>Image</b>
//                 </label>
//                 <input
//                   type="file"
//                   className="form-control"
//                   name="image"
//                   onChange={onFileChange}
//                 />

//                 <button
//                   type="submit"
//                   style={{ marginTop: "20px", fontSize: "20px" }}
//                 >
//                   Register
//                 </button>

//                 <div
//                   className="px-3 pt-0 mt-0 text-center"
//                   style={{ marginTop: "20px", fontSize: "20px" }}
//                 >
//                   ALready have an account? <a href="/signin">Login</a> Now
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;

 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { register } from "../Auth/auth";

function Register() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    image: null,
  });
  const navigate = useNavigate();
  const [passwordValidations, setPasswordValidations] = useState({
    hasCapital: false,
    hasSmall: false,
    hasNumber: false,
    isLengthValid: false,
  });

  const signup = async () => {
    await register(inputs);
    navigate("/signin");
  };

  const onFileChange = (e) => {
    const files = e.target.files;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);

    fileReader.onload = (event) => {
      const name = "image";
      const value = event.target.result;
      setInputs((values) => ({ ...values, [name]: value }));
    };
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // Update the state with the new value
    setInputs((values) => ({ ...values, [name]: value }));

    // Check password validation requirements
    const newPassword = value; // Use the updated password value
    const validations = {
      hasCapital: /[A-Z]/.test(newPassword),
      hasSmall: /[a-z]/.test(newPassword),
      hasNumber: /\d/.test(newPassword),
      isLengthValid: newPassword.length >= 8,
    };

    setPasswordValidations(validations);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate name, email, and password
    const { name, email, password } = inputs;
    if (!name) {
      alert("Name is required");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    // Check if all password validations pass
    if (
      passwordValidations.hasCapital &&
      passwordValidations.hasSmall &&
      passwordValidations.hasNumber &&
      passwordValidations.isLengthValid
    ) {
      signup();
    } else {
      alert("Password requirements not met");
    }
  };

  return (
    <div className="register-wrap mt-5">
      <div className="login-container1">
        <div className="container5 mt-5">
          <span className="span2">Create A New Account</span>
          <div className="row">
            <div className="col-sm-6">
              <img
                src="assets/images/sufa.png"
                className="img-fluid"
                alt="sfdgdfg"
              />
            </div>
            <div className="col-sm-6 offset-sm-1">
              <form onSubmit={handleSubmit}>
                <label for="uname">
                  <b>Name</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={handleChange}
                />

                <label for="uname">
                  <b>Email</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                />

                <label for="psw">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={handleChange}
                  required
                />
                <label for="psw">
                  <b>Image</b>
                </label>
                <input
                  type="file"
                  className="form-control"
                  name="image"
                  onChange={onFileChange}
                />
                <div>
                  {passwordValidations.hasCapital && (
                    <div>Password contains at least one capital letter</div>
                  )}

                  {passwordValidations.hasSmall ? (
                    <div className="password-success">Password contains at least one small letter</div>
                  ):<div className="password-error">password containes at least one small letter</div>
                  }

                  {passwordValidations.hasNumber && (
                    <div>Password contains at least one numeric digit</div>
                  )}

                  {passwordValidations.isLengthValid && (
                    <div>Password is at least 8 characters long</div>
                  )}
                </div>
                <button
                  type="submit"
                  style={{ marginTop: "20px", fontSize: "20px" }}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
