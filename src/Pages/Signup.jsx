
function SignUp() {
    return (<><nav
    className="navbar navbar-expand-lg navbar-dark"
    style={{background: "rgba(0, 0, 0, 0.7)"}}
  >
    <div className="container-fluid">
      <a className="navbar-brand" href="/"
        ><img
          style={{height: "2rem", width: "2rem"}}
          src="/Image/chart-line-solid.svg"
          alt="Main Page"
      /></a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/"
              >Contact Us</a
            >
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">About</a>
          </li>
        </ul>
        <button
          type="button"
          className="btn btn-warning"
          style={{marginRight: "1rem"}}
        >
          Login
        </button>
      </div>
    </div>
  </nav>
  <div className="contianer-fluid d-flex justify-content-center">
    <div className="col-sm-5">
      <div
        className=""
        style={{
          flex: "3",
          background: "wheat",
          height: "100%",
          padding: "2rem",
          marginTop: "1rem"
        }}
      >
        <form className="row g-3">
          <div className="col-md-8">
            <label for="inputEmail4" className="form-label" >First Name</label>
            <input type="text" className="form-control" id="inputEmail4" required minlength="3" maxlength="15" />
          </div>
          <br />
          <div className="col-md-8">
            <label for="inputEmail4" className="form-label" >Middle Name</label>
            <input type="text" className="form-control" id="inputEmail4" required minlength="3" maxlength="15"/>
          </div>
          <br />
          <div className="col-md-8">
            <label for="inputEmail4" className="form-label" >Last Name</label>
            <input type="text" className="form-control" id="inputEmail4" required minlength="3" maxlength="15"/>
          </div>
          <br />
          <div className="col-md-8">
            <label for="inputEmail4" className="form-label" >Email</label>
            <input type="email" className="form-control" id="inputEmail4" required/>
          </div>
          <div className="col-md-8">
            <label for="inputEmail4" className="form-label" >Password</label>
            <input type="password" className="form-control" id="inputEmail4" required />
          </div>
          <br />
          <div className="col-12">
            <label for="inputAddress" className="form-label" >Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              spellcheck="false"
              data-ms-editor="true"
              required
              minlength="5" maxlength="50"
            />
          </div>
          <div className="col-md-12">
            <label for="inputPassword4" className="form-label">Address2</label>
            <input type="text" className="form-control" id="inputPassword4" required minlength="5" maxlength="50"/>
          </div>
          <div className="col-md-6">
            <label for="inputCity" className="form-label" >City</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              spellcheck="false"
              data-ms-editor="true"
              required
              minlength="1" maxlength="60"
            />
          </div>

          <div className="col-md-6">
            <label for="inputZip" className="form-label" >Zip</label>
            <input
              type="number"
              className="form-control"
              id="inputZip"
              spellcheck="false"
              data-ms-editor="true"
              required
              min="0" max="6"
            />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                required
              />
              <label className="form-check-label" for="gridCheck">
                I agree to all <a href="">terms and conditions</a>
              </label>
            </div>
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-success">Sign in</button>
          </div>
          <div className="col-6">
            <button type="reset" className="btn btn-danger">Clear</button>
          </div>
        </form>
        <a href="">Forgot Password?</a>
      </div>
    </div>
  </div></>);
}

export default SignUp;