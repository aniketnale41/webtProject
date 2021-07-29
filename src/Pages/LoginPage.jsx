import React from "react";

function LoginPage() {
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
      <form style={{ width: "30%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <img
            src={logoLink}
            alt="logo"
            style={{ height: "100px", display: "flex" }}
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
         
          LOGIN
        </p>
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
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button type="submit" class="btn btn-primary btn-lg">
            Login
          </button>
          <button type="button" class="btn btn-dark">
            Forget Password
          </button>
        </div>
        <div
          style={{
            width: "100%",
            height: "3px",
            backgroundColor: "gray",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        />
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <p class="text-light" style={{ fontSize: "20px" }}>
            {" "}
            Don't have an account?
          </p>
          <button type="button" class="btn btn-success btn-lg">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
