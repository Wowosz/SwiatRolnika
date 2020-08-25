import React from 'react'

import Layout from '../components/layout'
import CutoutArea from '../components/cutoutArea'
import image from '../images/o-nas.jpg'
import logo from '../images/logo.png'
import team from '../images/team.jpg'
import czesci from '../images/czesci.jpeg'
import family from '../images/family.jpeg'
import '../styles/onas.css'

const Onas = () => {
    return(
    <Layout highlight={1}>
        <div className="onasImg container-fluid px-0">
            <img src={image} className="img-fluid w-100 h-75"/>
            <img src={logo} className="onasLogoName"/>
            <h1 className="onasLogoText">Kilka słów o nas.</h1>
      </div>
      <CutoutArea className="tekst">
          <div className="row mx-4 container mt-4 teamDesc pt-5 pb-3">
            <div className="col-lg-8 d-flex align-content-center">
                <p className="mb-1 pt-4">Firma „Handlowo-Techniczne Usługi Rolnicze” to rodzinny biznes i doświadczony zespół wysoko wykwalifikowanych ludzi działający w branży rolniczej od 1991 roku.<br/>
                <br/>Jesteśmy grupą ambitnych i kreatywnych ludzi. Dzięki systematycznej pracy nasze usługi od wielu lat utrzymują się na najwyższym poziomie.</p>
            </div>
            <img src={team} className="col-lg-4 rounded"></img>
          </div>
          <div className="row mx-4 container mt-0 aboutOffert pt-5 pb-5">
            <div className="col-lg-8 d-flex align-content-center">
                <p className="mb-1 pt-4">U nas kupisz wszystko niezbędne dla każdego rolnika i majsterkowicza!<br/>
                <br/>Świadczymy usługi szerokiej grupie odbiorców. Naszymi gośćmi są zarówno
                Klienci indywidualni, jak i duże przedsiębiorstwa. U nas możesz liczyć na fachowe wsparcie i pomoc w zakupach. Błyskawicznie realizujemy wszystkie zamówienia.
                <br/><br/>Zadowolenie naszych Klientów jest dla nas priorytetem, dlatego też dokładamy wszelkich starań, aby nasz oferowany towar był najwyższej jakości.</p>
            </div>
            <img src={czesci} className="col-lg-4 rounded"></img>
          </div>
          <div className="row mx-4 container mt-0 familyDesc pt-5 pb-3 mb-5">
            <div className="col-lg-8 d-flex align-content-center">
                <p className="mb-1 pt-5">Mamy stałych klientów, jak również członków zespołu towarzyszących nam od 20 lat naszej pracy. Dzięki temu w naszej firmie jesteśmy niczym rodzina. 
                <br/>Zapraszamy do kontaktu i zakupów. Mamy nadzieję, że Ty również dołączysz do naszej rodziny!
                <br/><br/>Cała załoga czeka na Ciebie!</p>
            </div>
            <img src={family} className="col-lg-4 rounded"></img>
          </div>
      </CutoutArea>
    </Layout>
    )
}

export default Onas