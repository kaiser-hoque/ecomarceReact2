import React from "react";
import "./layout.css";

function Sidebar() {
  const userLogged = JSON.parse(localStorage.getItem("userdata"));

  return (
    <div className="col-2">
      <div className="dashboard-sidebar">
        <div className="dashboard-user-image">
          <img src={`http://localhost/furn/api/${userLogged.image}`} alt="" />
        </div>
        <a className="navbar-brand" href="#">
          Hi, {userLogged.name}
        </a>
        <hr style={{ backgroundColor: "#ffffff" }} />
        <a href="./dashboard" className="dashboard-nav-link">
          Admin Dashboard
        </a>
        <a href="./product" className="dashboard-nav-link">
          Product
        </a>
        <a href="./student" className="dashboard-nav-link">
          Category
        </a>
        <a href="./section" className="dashboard-nav-link">
          Order
        </a>
        <a href="./class" className="dashboard-nav-link">
          Shipping
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
