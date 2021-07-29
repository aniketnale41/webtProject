import React from "react";

function RegisterPage() {
  let logoLink =
    "https://joyofandroid.com/wp-content/uploads/2019/06/monefy-money-manager-best-android-business-expense-tracker-finance-financial-income-list-add-deduct-minus-computer-smartphone.png";
  return (
    <div
      className="container-fluid"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage:
          "linear-gradient(to top,#15181c,#030b17,#080f1a,#06275c)",
      }}
    >
      {" "}
      <form style={{ width: "70%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <img
            src={logoLink}
            alt="logo"
            style={{ height: "125px", display: "flex" }}
          ></img>
        </div>
        <p
          style={{
            fontFamily: "'Otomanopee One', sans-serif",
            color: "white",
            textAlign: "center",
            fontSize: "40px",
          }}
        >
          {" "}
          REGISTER
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            columnGap: "10px",
          }}
        >
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="First Name"
            />
            <label for="floatingInput">First Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Last Name"
            />
            <label for="floatingInput">Middle Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Last Name"
            />
            <label for="floatingInput">Last Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Last Name"
            />
            <label for="floatingInput">Email Id</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Last Name"
            />
            <label for="floatingInput">Mobile Number</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Last Name"
            />
            <label for="floatingInput">Birth Date</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Last Name"
            />
            <label for="floatingInput">Gender</label>
          </div>
          
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Confirm Password</label>
          </div>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          ></div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit" class="btn btn-success btn-lg mt-4 ">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
