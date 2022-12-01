import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">

            <a className="navbar-brand logo" href="index.html">              
              <img src="images/logo.png" className="img-fluid" alt="bookworms"/>                 
            </a>           


            <a href="login.html" className="btn login_btn d-md-block d-lg-none"><i className="fa-solid fa-circle-user"></i></a>      

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav_menu" aria-controls="nav_menu" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""><i className="fa-solid fa-bars"></i></span>
            </button>

            <div className="collapse navbar-collapse menu" id="nav_menu">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Shop" className="nav-link">Shop</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Blog" className="nav-link">Blog</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Contact" className="nav-link">Contact</NavLink>
                </li>
                <li className="nav-item d-lg-block d-none">
                  <NavLink to="/Login" className="btn login_btn nav-link">Login</NavLink>
                </li>
              </ul>

            </div>

          </div>
        </nav>    
      </div>    
    </header>
    </>
  )
}

export default Header