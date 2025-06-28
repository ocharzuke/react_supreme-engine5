import "./App.css";
import ProductCard from "./ProductCard";

export default function App() {
  return (
    <>
      <nav className="py-2 bg-body-tertiary border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link link-body-emphasis px-2 active"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-body-emphasis px-2">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-body-emphasis px-2">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-body-emphasis px-2">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-body-emphasis px-2">
                About
              </a>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <a href="#" className="nav-link link-body-emphasis px-2">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
          >
            <img
              src="https://picsum.photos/40/32"
              alt="Logo"
              className="me-2"
              width="40"
              height="32"
            />
            <span className="fs-4">Postcard Shop</span>
          </a>
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
      <body>
        <div id="hero">
          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Of Correspondence</h1>
                <p className="lead text-body-secondary">
                  For the lovers of elsewhere, the keepers of fleeting skies,
                  <br />
                  the ones who write to remember.
                  <br />
                  Heart—tiny invitations to wander and wonder.
                  <br />
                  Choose a card. Chase a feeling. Mail the magic.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <ProductCard
                  imageUrl="https://picsum.photos/id/486/300/200"
                  productName="Typewriter-themed Set"
                  price="19.99"
                  productDescription="Beautiful typewriter themed"
                />
              </div>
              <div className="col">
                <ProductCard
                  imageUrl="https://picsum.photos/id/508/300/200"
                  productName="Architecture-themed Set"
                  price="25.99"
                  productDescription="Featuring only beautiful concrete"
                />
              </div>
              <div className="col">
                <ProductCard
                  imageUrl="https://picsum.photos/id/401/300/200"
                  productName="Hot Air Balloon-themed Set"
                  price="28.99"
                  productDescription="Dreamy vibes only"
                />
              </div>
              <div className="col">
                <ProductCard
                  imageUrl="https://picsum.photos/id/287/300/200"
                  productName="Mountain-themed Set"
                  price="30.99"
                  productDescription="For those who dream of high places"
                />
              </div>
              <div className="col">
                <ProductCard
                  imageUrl="https://picsum.photos/id/318/300/200"
                  productName="Famous Landmarks-themed Set"
                  price="40.99"
                  productDescription="Iconic and recognisable motifs"
                />
              </div>
              <div className="col">
                <ProductCard
                  imageUrl="https://picsum.photos/id/213/300/200"
                  productName="Seascapes-themed Set"
                  price="55.99"
                  productDescription="All you water babies out there let's splash"
                />
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
