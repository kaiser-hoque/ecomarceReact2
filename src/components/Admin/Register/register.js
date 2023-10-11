import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { register } from "../Auth/auth";

function Register() {
  const [inputs, setInputs] = useState([]);
  const navigate = useNavigate();
  let signup = async (inputs) => {
    await register(inputs);
    navigate("/signin");
  };
  const onFileChange = (e) => {
    let files = e.target.files;
    let fileReader = new FileReader();
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
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(inputs);
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
                className=" img-fluid"
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

                <button
                  type="submit"
                  style={{ marginTop: "20px", fontSize: "20px" }}
                >
                  Register
                </button>

                <div
                  className="px-3 pt-0 mt-0 text-center"
                  style={{ marginTop: "20px", fontSize: "20px" }}
                >
                  ALready have an account? <a href="/signin">Login</a> Now
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
