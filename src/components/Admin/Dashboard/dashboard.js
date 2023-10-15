import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Layout/footer";
import Sidebar from "../Layout/sidebar";
// import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  const userLogged = JSON.parse(localStorage.getItem("userdata"));
  return (
    <div>
      <Sidebar />
      <h1
        style={{
          textAlign: "center",
          margin: "30px  auto",
          backgroundColor: "#0a4d90",
          width: "200px",
          borderRadius: "20px",
        }}
      >
        <a
          href="./product"
          style={{ margin: "15px", fontSize: "30px", color: "white" }}
        >
          Product
        </a>
      </h1>
      <h1>
        {/* Hi <b>{userLogged.name}</b>, */}
      </h1>
      <img
        src={`http://localhost/furn/api/${userLogged.image}`}
        alt=""
        style={{ width: "200px" }}
      />
      <Footer />
    </div>
  );
}

export default Dashboard;
