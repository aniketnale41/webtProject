import React from "react";

function LoginUi() {
  let logoLink =
    "https://joyofandroid.com/wp-content/uploads/2019/06/monefy-money-manager-best-android-business-expense-tracker-finance-financial-income-list-add-deduct-minus-computer-smartphone.png";

  return (
    <div
      className="row justify-content-center align-items-center"
      style={{ height: "100vh",}}
    >
      {/* top logo-image, logo-text, login text in one div */}
      <div className="d-flex-col justify-content-center align-items-center">
      <p 
          style={{
            fontFamily: "'Otomanopee One', sans-serif",
            color: "black",
            // paddingLeft:"10px",
            textAlign: "center",
            fontSize: "35px",
            margin: 0,
          }}
        > Expense Tracker
        </p>
        <img
          className="rounded mx-auto d-block"
          style={{ height: "50px", width: "80px" }}
          src={logoLink}
          alt="logo"
        ></img>
        <p
          style={{
            fontFamily: "'Otomanopee One', sans-serif",
            color: "black",
            textAlign: "center",
            fontSize: "25px",
            margin: 0,
          }}
        >
          LOGIN
        </p>
      </div>
      <div
        className="d-flex text-center rounded align-items-center justify-content-center"
        style={{ height: "60%" }}
      >
        <form className="col-sm-6">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
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
          <div
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button type="submit" class="btn btn-primary btn-lg">
              Login
            </button>
            
          </div>
          <button type="button" class="btn btn-dark">
              Forget Password
            </button>
          {/* <div
            style={{
              width: "100%",
              height: "1px",
              opacity: "50%",
              backgroundColor: "gray",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          /> */}
          <div
            style={{
              marginTop: "5px",
              display: "flex",
              flexDirection:"column",
              // justifyContent: "space-around",
              // alignItems: "center",
            }}
          >
            <p class="text-dark" style={{ fontSize: "20px" }}>
              {" "}
              Don't have an account?
            </p>
            <button type="button" class="btn btn-success btn-lg">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginUi;
