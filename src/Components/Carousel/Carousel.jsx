import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Carousel/Carousel.css";
import sapato from "../../assets/img/sapato_carousel.svg";
import ilustracao from "../../assets/img/ornament.svg";
import fire from "../../assets/img/fire.png";
import { Link } from "react-router-dom";

function Carousel() {
  return (
    <>

      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
            aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="carousel-item-row">
              <div className="hero">
                <div className="texto-ofertas">
                  <h6 className="sub-titulo">Melhores ofertas personalizadas</h6>
                  <h1 className="titulo">Queima de stoque Nike <img src={fire} alt="fire" /></h1>
                  <p className="texto">
                    Consequat culpa exercitation mollit nisi excepteur do do
                    tempor laboris eiusmod irure consectetur.
                  </p>
                  <button className="oferta"><Link to="/ProductList">Ver Ofertas</Link></button>
                </div>
              </div>
              <div className="imagem-ilustrativa">
                <img src={sapato} className="d-block sapato" alt="sapato" />
                <img src={ilustracao} className="d-block ilustracao" alt="sapato" />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="carousel-item-row">
              <div className="hero">
                <div className="texto-ofertas">
                  <h6 className="sub-titulo">Melhores ofertas personalizadas</h6>
                  <h1 className="titulo">Queima de stoque Nike <img src={fire} alt="fire" /></h1>
                  <p className="texto">
                    Consequat culpa exercitation mollit nisi excepteur do do
                    tempor laboris eiusmod irure consectetur.
                  </p>
                  <button className="oferta"><Link to="/ProductList">Ver Ofertas</Link></button>
                </div>
              </div>
              <div className="imagem-ilustrativa">
                <img src={sapato} className="d-block sapato" alt="sapato" />
                <img src={ilustracao} className="d-block ilustracao" alt="sapato" />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="carousel-item-row">
              <div className="hero">
                <div className="texto-ofertas">
                  <h6 className="sub-titulo">Melhores ofertas personalizadas</h6>
                  <h1 className="titulo">Queima de stoque Nike <img src={fire} alt="fire" /></h1>
                  <p className="texto">
                    Consequat culpa exercitation mollit nisi excepteur do do
                    tempor laboris eiusmod irure consectetur.
                  </p>
                  <button className="oferta"><Link to="/ProductList">Ver Ofertas</Link></button>
                </div>
              </div>
              <div className="imagem-ilustrativa">
                <img src={sapato} className="d-block sapato" alt="sapato" />
                <img src={ilustracao} className="d-block ilustracao" alt="sapato" />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="carousel-item-row">
              <div className="hero">
                <div className="texto-ofertas">
                  <h6 className="sub-titulo">Melhores ofertas personalizadas</h6>
                  <h1 className="titulo">Queima de stoque Nike <img src={fire} alt="fire" /></h1>
                  <p className="texto">
                    Consequat culpa exercitation mollit nisi excepteur do do
                    tempor laboris eiusmod irure consectetur.
                  </p>
                  <button className="oferta"><Link to="/ProductList">Ver Ofertas</Link></button>
                </div>
              </div>
              <div className="imagem-ilustrativa">
                <img src={sapato} className="d-block sapato" alt="sapato" />
                <img src={ilustracao} className="d-block ilustracao" alt="sapato" />
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;