import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.cart);


  console.log("user is on header page", JSON.stringify(user))
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="mynav">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Cart APP</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart <span className="badge bg-danger rounded-pill">{cart.length}</span></Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/register">Signup</Link>
              </li>


            </ul>


            <div className="user-info">

            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Header