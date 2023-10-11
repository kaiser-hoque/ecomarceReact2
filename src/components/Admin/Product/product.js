import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Layout/footer";
import Sidebar from "../Layout/sidebar";
import "./product.css";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
    getDatas();
  }, []);

  function getDatas() {
    axios
      .get("http://localhost/furn/api/Product/product_list.php")
      .then(function (response) {
        setProducts(response.data.data);
      });
  }

  const deleteUser = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      axios
        .delete(`http://localhost/furn/api/Product/product_delete.php?id=${id}`)
        .then(function (response) {
          getDatas();
        });
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
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

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost/furn/api/Product/product_create.php", inputs)
      .then(function (response) {
        console.log(response.data);
        getDatas();
        document.getElementById("modelbutton").click();
      });
  };

  const clearData = () => {
    setInputs((values) => ({
      ...values,
      id: "",
      nname: "",
      image: "",
      price: "",
    }));
  };

  /* for update */
  const setProductData = (d) => {
    setInputs(d);
    setInputs((values) => ({ ...values, image: "" }));
  };

  return (
    <div className="container7">
      <div className="row">
        <Sidebar />
        <div className="col-9" style={{ marginTop: "10px" }}>
          <h1
            style={{
              fontSize: "40px",
              color: "#6082B6",
              textAlign: "center",
              marginBottom: "5px",
              backgroundColor: "#004792",
              padding: "10px",
              color: "white",
            }}
          >
            Product List
          </h1>
          <button
            onClick={clearData}
            id="modelbutton"
            type="button"
            className="btn btn-primary btn-sm float-end"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            style={{ fontSize: "20px" }}
          >
            Add Product
          </button>

          <table className="table " style={{ border: "2px solid #004792" }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((d, key) => (
                <tr key={key}>
                  <td>{d.id}</td>
                  <td>{d.nname}</td>
                  <td>{d.price}</td>
                  <td>
                    <img src={d.image} alt="" width={50} />
                  </td>
                  <td>
                    <a
                      href="javascript:void(0)"
                      className="edit "
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                      onClick={() => setProductData(d)}
                    >
                      <span class="edit">Edit</span>
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="delete"
                      onClick={() => deleteUser(d.id)}
                    >
                      <span class="delete">Delete</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="modal" id="myModal">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4
                    className="modal-title"
                    style={{
                      fontSize: "40px",
                      color: "#6082B6",
                      textAlign: "center",
                      margin: "30px",
                    }}
                  >
                    Product Data
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label className="form-label">Name</label>
                          <input
                            value={inputs.nname}
                            type="text"
                            className="form-control"
                            name="nname"
                            onChange={handleChange}
                          />
                          <input value={inputs.id} type="hidden" name="id" />
                        </div>
                      </div>

                      <div className="col-sm-4">
                        <div className="mb-3">
                          <label className="form-label">Price</label>
                          <input
                            type="text"
                            className="form-control"
                            name="price"
                            value={inputs.price}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-sm-4">
                        <div className="mb-3">
                          <label className="form-label">Image</label>
                          <input
                            type="file"
                            className="form-control"
                            name="image"
                            onChange={onFileChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 offset-sm-3">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                      <div
                        className="col-sm-6"
                        style={{ display: "inline-block" }}
                      >
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
