import "../Footer/Footer.css";
import logoDigitalCollege from '../../assets/img/logoDigitalCollege.svg';
import iconFacebook from '../../assets/img/iconFacebook.svg';
import iconInstagram from '../../assets/img/iconInstagram.svg';
import iconTwitter from '../../assets/img/iconTwitter.svg';
import { Link } from "react-router-dom";


function Footer() {
  return (
    <>
      <div className="container-footer">
        <section id="contato">
          <div className="rodape">
            <div className="sobreIcones">
              <div className="sobre">
                <Link className="logo-footer" to="/"><img className="icon-img" src={logoDigitalCollege} alt="imagemlogo" /></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
              <div className="icones">
                <a href="https://www.facebook.com/digitalcollegebr/"><img className="icon-img" src={iconFacebook} alt="facebook" /></a>
                <a href="https://www.instagram.com/digitalcollegebr/"><img className="icon-img" src={iconInstagram} alt="instagram" /></a>
                <a href="https://x.com/eaicollegers"><img className="icon-img" src={iconTwitter} alt="twitter" /></a>
              </div>
            </div>
            <div className="informacao">
              <div className="informacao1">
                <h4>Informação</h4>
                <ul className="ul">
                  <li><Link to="/Error">Sobre ShoeStore</Link></li>
                  <li><Link to="/Error">Segurança</Link></li>
                  <li><Link to="/Error">Wishlist</Link></li>
                  <li><Link to="/Error">Blog</Link></li>
                  <li><Link to="/Error">Trabalhe conosco</Link></li>
                  <li><Link to="/Pedidos">Meus Pedidos</Link></li>
                </ul>
              </div>
              <div className="informacao2">
                <h4>Categorias</h4>
                <ul>
                  <li><Link to="/ProductList">Camisetas</Link></li>
                  <li><Link to="/ProductList">Calças</Link></li>
                  <li><Link to="/ProductList">Bonés</Link></li>
                  <li><Link to="/ProductList">Headphones</Link></li>
                  <li><Link to="/ProductList">Tênis</Link></li>
                </ul>
              </div>
            </div>
            <div className="contatos">
              <h3>Contato</h3>
              <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
              <h4>(85) 3051-3411</h4>
            </div>
          </div>
          <hr className="barra" />
        </section>
        <footer>
          <p>@ 2024 Digital College</p>
        </footer>
      </div>
    </>
  );
}

export default Footer