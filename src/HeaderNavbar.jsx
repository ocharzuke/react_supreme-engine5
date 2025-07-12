import React from "react";
import { Link, useLocation } from "wouter";

export default function HeaderNavbar() {
  return (
    <>
      <header className="py-3 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <Link
            href="/"
            className={`d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none px-2 nav-link ${
              location === "/" ? "active" : ""
            }`}
          >
            <img
              src="https://picsum.photos/40/32"
              alt="Logo"
              className="me-2"
              width="40"
              height="32"
            />
            <span className="fs-4">Postcard Shop</span>
          </Link>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>
      </header>

      <nav className="py-2 bg-body-tertiary border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <a
                href="/about"
                className="nav-link link-body-emphasis px-2 active"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <Link
                href="/shop"
                className={`link-body-emphasis px-2 nav-link ${
                  location === "/shop" ? "active" : ""
                }`}
              >
                Products
              </Link>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <Link
                href="/register"
                className={`link-body-emphasis px-2 nav-link ${
                  location === "/register" ? "active" : ""
                }`}
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
