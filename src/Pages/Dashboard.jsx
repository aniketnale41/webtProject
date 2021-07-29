import React from "react";

function Dahsboard() {
  let logoLink =
    "https://joyofandroid.com/wp-content/uploads/2019/06/monefy-money-manager-best-android-business-expense-tracker-finance-financial-income-list-add-deduct-minus-computer-smartphone.png";
  return (
    <>
      <div
        className="container-fluid "
        style={{
          height: "60px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0px 1px gray",
        }}
      >
        <div
          style={{
            height: "60px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <button style={{ border: "0px", background: "white" }}>
            <i className="bi bi-list" style={{ fontSize: "25px" }}></i>
          </button>
          <img
            src={logoLink}
            alt=""
            style={{ marginLeft: "15px" }}
            height="35px"
            width="35px"
          />
          <p
            style={{
              fontFamily: "Lobster",
              marginLeft: "15px",
              fontSize: "30px",
              marginTop: "15px",
              color: "teal",
              //   textShadow: "1px 1px #ff5e00",
            }}
          >
            Expense Tracker
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button style={{ border: "0px", background: "white" }}>
            <i className="bi bi-bell" style={{ fontSize: "20px" }}></i>
          </button>
          <div style={{ marginLeft: "25px", marginRight: "20px" }}>
            <button style={{ border: "0px", background: "white" }}>
              <i class="bi bi-person-circle" style={{ fontSize: "25px" }}></i>
              {/* <img
                src="https://www.atmeplay.com/images/users/avtar/avtar.png"
                height="45px"
                alt=""
                style={{
                  borderRadius: "10.0rem",
                }}
              ></img> */}
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ height: "95vh" }}>
        <div className="row" style={{ height: "95vh" }}>
          
            <ul class="col-md-2 list-group list-group-numbered">
              <li class="list-group-item  d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <span class="badge bg-primary rounded-pill">14</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <span class="badge bg-primary rounded-pill">14</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <span class="badge bg-primary rounded-pill">14</span>
              </li>
            </ul>
         
          <div className="col-md-10 bg-light"></div>
        </div>
      </div>
    </>
  );
}

export default Dahsboard;
