function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" data-bs-toggle="tooltip" title="Home Page" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tooltip" title="Create Account Page" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tooltip" title="Login Page" href="#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tooltip" title="Deposit Page" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tooltip" title="Withdraw Page" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tooltip" title="All Data Page" href="#/alldata/">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}
