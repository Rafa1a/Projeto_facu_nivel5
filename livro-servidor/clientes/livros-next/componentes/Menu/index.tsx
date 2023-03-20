import React from "react";
import Link  from "next/link";


export const Menu: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link href={"./index"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link href={"./LivroLista"} className="nav-link">
                  Catálogo
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"./LivroDados"} className="nav-link">
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