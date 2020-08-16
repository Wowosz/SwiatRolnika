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

      </CutoutArea>
    </div>
  </Layout>
)

export default IndexPage
