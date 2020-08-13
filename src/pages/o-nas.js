import React from 'react'

import Layout from '../components/layout'
import CutoutArea from '../components/cutoutArea'
import image from '../images/o-nas.jpg'
import logo from '../images/logo.svg'
import team from '../images/team.jpg'
import czesci from '../images/czesci.jpeg'
import '../styles/onas.css'

const Onas = () => {
    return(
    <Layout highlight={1}>
        <div className="onasImg container-fluid px-0">
            <img src={image} className="img-fluid w-100 h-75"/>
            <img src={logo} className="onasLogoName"/>
            <h1 className="onasLogoText">Kilka słów o nas.</h1>
      </div>
      <CutoutArea>
          <div className="row mx-4 container mt-4 teamDesc pt-5 pb-3">
            <div className="col-lg-8 d-flex align-content-center">
                <p className="mb-1 pt-4">Firma „Handlowo Techniczne Usługi Rolnicze” to rodzinna firma i doświadczony zespół wysoko wykwalifikowanych ludzi działająca w branży rolniczej od 1991 roku.<br/>
                <br/>Jesteśmy grupą ambitnych i kreatywnych ludzi. Dzięki temu, że nie popadamy w rutynę nasze usługi od wielu lat utrzymują się na najwyższym poziomie.</p>
            </div>
            <img src={team} className="col-lg-4"></img>
          </div>
          <div className="row mx-4 container mt-0 aboutOffert pt-5 pb-5">
            <div className="col-lg-8 d-flex align-content-center">
                <p className="mb-1 pt-4">U nas kupisz wszystko niezbędne dla każdego rolnika i majsterkowicza!<br/>
                <br/>Świadczymy usługi dla szerokiej grupy odbiorców. Naszymi gośćmi są zarówno <br/>Klienci indywidualni, jak i duże przedsiębiorstwa.
                U nas możesz liczyć na fachowe wsparcie i pomoc w zakupach. Błyskawicznie realizujemy wszystkie zamówienia.
                <br/><br/>Zadowolenie naszych Klientów jest dla nas priorytetem, dlatego też dokładamy wszelkich starań aby oferowany przez nas towar był najwyższej jakości.</p>
            </div>
            <img src={czesci} className="col-lg-4"></img>
          </div>
          <div className="row mx-4 container mt-0 familyDesc pt-5 pb-3 mb-5">
            <div className="col-lg-8 d-flex align-content-center">
                <p className="mb-1 pt-5">Mamy od 20 lat stałych klientów a nasi pracownicy są z nami również po 20 lat. Dzięki temu w naszej firmie wszyscy znamy się jak rodzina.
                <br/>Zapraszamy do kontaktu i zakupów, mamy nadzieję że i Ty dołączysz do naszej rodziny!
                <br/><br/>Czekamy na Ciebie, załoga sklepu!</p>
            </div>
            <img src={team} className="col-lg-4"></img>
          </div>
      </CutoutArea>
    </Layout>
    )
}

export default Onas