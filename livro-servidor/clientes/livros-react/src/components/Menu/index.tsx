import React from "react";
import { Link } from "react-router-dom";


export default function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to={"/catalogo"} className="nav-link">
                  Catálogo
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/novo"} className="nav-link">
                  Novo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}