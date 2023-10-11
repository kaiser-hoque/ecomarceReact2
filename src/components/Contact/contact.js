import Header from "../Header/header";
import Footer from "../Footer/footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost/furn/api/create_user.php",
        inputs
      );
      console.log(response.data);
      setSubmissionMessage(" <>Form submitted successfully!");
      navigate("/contact");
    } catch (error) {
      console.error(error);
      setSubmissionMessage("Form submission failed.");
    }
  };

  return (
    <div>
      <Header />
      <div className="containerk">
        <div className="container">
          <h3
            className="text-center bg-warning text-white pt-3 py-3 fs-1"
            style={{
              backgroundColor: "#E4A11B",
              textAlign: "center",
              padding: "10px",
              fontSize: "50px",
              color: "white",
            }}
          >
            Contact Form
          </h3>
          <form action="" onSubmit={handleSubmit} className="mx-auto">
            <div className="row">
              <div className="col-md-6 mt-2">
                <div className="mb-3">
                  <label htmlFor="fnamek" className="form-label mt-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={{ height: "55px" }}
                    id="fnamek"
                    name="name"
                    onChange={handleChange}
                    placeholder="Your name.."
                  />
                </div>
                <div className="mb-3 mt-2">
                  <label htmlFor="lnamek" className="form-label">
                    Mobile
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={{ height: "55px" }}
                    id="lnamek"
                    name="mobile"
                    placeholder="Your mobile.."
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6 mt-2">
                <div className="mb-3">
                  <label htmlFor="emailk" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={{ height: "55px" }}
                    id="emailk"
                    name="email"
                    placeholder="Your email.."
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subjectk" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={{ height: "55px" }}
                    id="subjectk"
                    name="subject"
                    placeholder="Your subject.."
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <button
              className="btn btn-warning"
              style={{ marginTop: "30px", fontSize: "30px" }}
            >
              Submit
            </button>
          </form>
          {submissionMessage && <div className="mt-3">{submissionMessage}</div>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
