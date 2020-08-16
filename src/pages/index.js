import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import image from '../images/main-img.jpg'
import logo from '../images/logo.png'
import '../styles/css/bootstrap.min.css';
import '../styles/index.css'
import family from '../images/family.jpeg'
import CutoutArea from '../components/cutoutArea'

const IndexPage = () => (
  <Layout highlight={0}>
    <div className="content">
      <div className="mainImg container-fluid px-0">
        <img src={image} className="img-fluid w-100"/>
        <img src={logo} className="logoName"/>
        <h1 className="logoText">Wspólnie tworzymy wieś</h1>
      </div>
      <CutoutArea>

        <div className="row container justify-content-center mt-5 p-3">
          <div className="col-lg-6">
            <h2 className="text-center"><b>O NAS</b></h2>
            <h4>Firma „Handlowo-Techniczne Usługi Rolnicze” to rodzinny biznes i doświadczony zespół wysoko wykwalifikowanych ludzi działający w branży rolniczej od 1991 roku.
              <br/><br/>Jesteśmy grupą ambitnych i kreatywnych ludzi. Dzięki systematycznej pracy nasze usługi od wielu lat utrzymują się na najwyższym poziomie.</h4>
            <a className="rounded-pill bg-dark text-white float-right mr-4 mt-3 p-2 text-decoration-none" href="/o-nas/">Czytaj Więcej</a>
          </div>
          <div className="col-lg-6 mt-lg-0 mt-3">
            <img src={family} className="img-fluid rounded"></img>
          </div>
        </div>
        
        <div className="row container justify-content-center mt-5 p-3">
          <div className="col-lg-6">
            <h2 className="text-center"><b>Oferta</b></h2>
            <h4>W naszej ofercie posiadamy wiele części pochodzących od renomowanych firm.
              <br/><br/>Poza częściami możesz u nas zakupić całe maszyny, a także wszystkie najpotrzebniejsze przedmioty w pracy. Jak narzędzia, płyny, gwoździe itp.
              <br/><br/>Oferujemy też wiele innych usług jak transport i serwisy.
            </h4>
            <a className="rounded-pill bg-dark text-white float-right mr-4 mt-3 p-2 text-decoration-none" href="/oferta/">Sprawdź Ofertę</a>
          </div>
          <div className="col-lg-6 mt-lg-0 mt-3">
            <img src="https://agro-bis.eu/wp-content/uploads/2019/08/AgroBis-91-400x267.jpg" className="img-fluid rounded w-100 h-100"></img>
          </div>
        </div>

        <div className="row container mt-5 justify-content-center">
            <div className="col-lg-7 px-5 py-3 col-10 col-md-10 embed-responsive-item">
                <div className="google-maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d511.0937971074316!2d23.35372347301636!3d53.654486889074974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x278b0856041ee498!2sHandlowo-Techniczne%20Us%C5%82ugi%20Rolnicze!5e1!3m2!1spl!2spl!4v1597166969403!5m2!1spl!2spl" height="450" width="600" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
            <div className="col-lg-5 px-0 py-3 col-10 col-md-8 mb-5">
                <div className="slash pl-5">
                    <h1 className="mb-5 pt-0 textColorRed">Kontakt</h1>
                    <p className="mb-1">Handlowo Techniczne Usługi Rolnicze Sp.j. Harackiewicz,Sidor</p>
                    <p className="mb-1">ul.Obwodowa 6 16-200 Dąbrowa Białostocka</p>
                    <p className="mb-1">Tel. (85) 71 22 195</p>
                    <p className="mb-1">Kom. 602 348 161</p>
                    <p className="mb-1">e-mail: htur_sj.dabrowa@wp.pl</p>
                    <p className="mb-1">e-mail: annasidor50@gmail.com</p>
                    <p className="mb-1">Pn-Pt: 7.00-17.00</p>
                    <p className="mb-1">Sob: 7.00-14.00</p>
                </div>
                <a className="rounded-pill bg-dark text-white float-right mr-4 mt-3 p-2 text-decoration-none" href="/kontakt#wiadomosc">Wyślij Wiadomość</a>
                </div>
                </div>
      </CutoutArea>
    </div>
  </Layout>
)

export default IndexPage
