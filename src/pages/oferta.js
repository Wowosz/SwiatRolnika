import React from 'react'
import CutoutArea from '../components/cutoutArea'

import Layout from '../components/layout'
import czesci from '../images/tools.jpg'
import logo from '../images/logo.png'
import '../styles/oferta.css'

import john from '../images/john-deer.jpg'
import zetor from '../images/zetor.jpg'
import massey from '../images/massey-ferguson-logo.jpg'
import landini from '../images/landini-logo-png-transparent.png'
import dawid from '../images/david-brown.svg'
import classs from '../images/class.png'
import lamborghini from '../images/logo lamborghini.jpg'
import newHolladn from '../images/new-holland.png'
import deutz from '../images/deutz-fahr-3-logo.png'
import caseIH from '../images/caseIH.jpg'
import ford from '../images/ford.svg'
import same from '../images/same.png'
import fendt from '../images/fendt.jpg'
import belarus from '../images/belarus.png'
import pronar from '../images/Pronar.png'
import ursus from '../images/ursus.png'
import bizon from '../images/bizon.jpg'
import lemken from '../images/lemken.png'
import kverne from '../images/kverme.png'
import overum from '../images/unnamed.png'
import kuhn from '../images/kuhn.png'
import rabe from '../images/rabe.svg'
import niemeyer from '../images/Niemeyer.png'
import vogel from '../images/vogel.png'
import krone from '../images/Krone.png'
import pottinger from '../images/Pottinger.png'
import fraugde from '../images/Fraugde.jpg'


const Oferta = () => {
    return(
    <Layout highlight={2}>
        <div className="mainImg container-fluid px-0">
        <img src={czesci} className="img-fluid w-100 czesciIMG"/>
        <img src={logo} className="czesciLogoName"/>
        <h1 className="czesciLogoText">Sprawdź co u nas kupisz</h1>
        <p className="logoShadow">&nbsp;</p>
      </div>
      <CutoutArea>
          <h3 className="mt-4 text-center col-10">Posiadamy części do maszyn i ciągników podanych Firm:</h3>
          <div className="row ofertaBrandRow p-3 d-flex justify-content-center mx-0">
            <img src={john} alt="john Deer logo" className="img-fluid h-100 mx-1"></img>
            <img src={zetor} alt="zetor logo" className="img-fluid h-100 mx-1"></img>
            <img src={massey} alt="massey logo" className="img-fluid h-100 mx-1"></img>
            <img src={landini} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={dawid} alt="dawid logo" className="img-fluid h-100 mx-1"></img>
            <img src={lamborghini} alt="lamborghini logo" className="img-fluid h-100 mx-1"></img>
            <img src={newHolladn} alt="newholland logo" className="img-fluid h-100 mx-1"></img>
            <img src={deutz} alt="deutzland logo" className="img-fluid h-100 mx-1"></img>
            <img src={caseIH} alt="caseih logo" className="img-fluid h-100 mx-1"></img>
            <img src={ford} alt="ford logo" className="img-fluid h-100 mx-1"></img>
            <img src={same} alt="same logo" className="img-fluid h-100 mx-1"></img>
            <img src={belarus} alt="belarus logo" className="img-fluid h-100 mx-1"></img>
            <img src={pronar} alt="pronar logo" className="img-fluid h-100 mx-1"></img>
            <img src={ursus} alt="ursus logo" className="img-fluid h-100 mx-1"></img>
            <img src={bizon} alt="bizon logo" className="img-fluid h-100 mx-1"></img>
            <img src={overum} alt="overum logo" className="img-fluid h-100 mx-1"></img>
            <img src={kuhn} alt="kuhn logo" className="img-fluid h-100 mx-1"></img>
            <img src={rabe} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={niemeyer} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={krone} alt="krone logo" className="img-fluid h-100 mx-1"></img>
            <img src={pottinger} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={fraugde} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={kverne} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={lemken} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={fendt} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={classs} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={vogel} alt="landini logo" className="img-fluid h-100 mx-1"></img>
          </div>
      </CutoutArea>
      <CutoutArea>
        <div className="row justify-content-center">
          <h3 className="mt-4 text-center col-10">Także zajmujemy się sprzedażą detaliczną maszyn, w naszej ofercie posiadamy:</h3>
            <div className="mt-4 row container justify-content-center align-items-center rel">
            <span className="verticalLine"></span>
              <div className="col-5 text-center borderRight">
                <p>Agregaty Uprawowe i Uprawowo-Siewne</p>
              </div>
              <div className="col-5 text-center">
                <p>Przetrząsacze Karuzelowe</p>
              </div>
            </div>
            
            <div className="row container justify-content-center align-items-center rel">
              <span className="verticalLine"></span>
              <div className="col-5 text-center">
                <p>Prasy Kostkujące</p>
              </div>
              <div className="col-5 text-center borderLeft">
                <p>Rozdrabniacze Bel</p>
              </div>
            </div>

            <div className="row container justify-content-center align-items-center rel">
              <span className="verticalLine"></span>
              <div className="col-5 text-center borderRight">
                <p>Brony Polowe</p>
              </div>
              <div className="col-5 text-center borderLeft">
                <p>Rozsiewacze Nawozu</p>
              </div>
            </div>

            <div className="row container justify-content-center align-items-center rel">
              <span className="verticalLine"></span>
              <div className="col-5 text-center borderRight">
                <p>Brony Talerzowe</p>
              </div>
              <div className="col-5 text-center borderLeft">
                <p>Sadzarki Do Rosady</p>
              </div>
            </div>

            <div className="row container justify-content-center align-items-center rel">
              <span className="verticalLine"></span>
              <div className="col-5 text-center borderRight">
                <p>Chwytaki Bel</p>
              </div>
              <div className="col-5 text-center borderLeft">
                <p>Sadzarki Do Ziemniaków</p>
              </div>
            </div>

            <div className="row container justify-content-center align-items-center rel">
              <span className="verticalLine"></span>
              <div className="col-5 text-center borderRight">
                <p>Glebogryzarki</p>
              </div>
              <div className="col-5 text-center borderLeft">
                <p>Siewniki Do Kukurydzy</p>
              </div>
            </div>

            <div className="row container justify-content-center align-items-center rel">
              <span className="verticalLine"></span>
              <div className="col-5 text-center borderRight">
                <p>Kombajny Ziemniaczane</p>
              </div>
              <div className="col-5 text-center borderLeft">
                <p>Wały Strunowe</p>
              </div>
            </div>

            <div className="row container justify-content-center align-items-center rel">
              <span className="verticalLine"></span>
              <div className="col-5 text-center borderRight">
                <p>Kabiny Ciągnikowe</p>
              </div>
              <div className="col-5 text-center borderLeft">
                <p>Wozy Asenizacyjne</p>
              </div>
            </div>

            <div className="row container justify-content-center align-items-center rel">
              <span className="verticalLine"></span>
              <div className="col-5 text-center borderRight">
                <p>Kosiarki Rotacyjne</p>
              </div>
              <div className="col-5 text-center borderLeft">
                <p>Wozy Paszowe</p>
              </div>
            </div>

            <div className="row container justify-content-center align-items-center rel">
              <span className="verticalLine"></span>
              <div className="col-5 text-center borderRight">
                <p>Kosiarki Dyskowe</p>
              </div>
              <div className="col-5 text-center borderLeft">
                <p>Zbieracze Bel</p>
              </div>
            </div>

            <div className="row container justify-content-center align-items-center rel">
              <span className="verticalLine"></span>
              <div className="col-5 text-center borderRight">
                <p>Kultywatory</p>
              </div>
              <div className="col-5 text-center borderLeft">
                <p>Zgrabiarki</p>
              </div>
            </div>

            <div className="row container justify-content-center align-items-center rel">
              <span className="verticalLine"></span>
              <div className="col-5 text-center borderRight">
                <p>Ładowacze</p>
              </div>
              <div className="col-5 text-center borderLeft">
                <p>Tandemy</p>
              </div>
            </div>

            <div className="row container justify-content-center align-items-center rel">
              <span className="verticalLine"></span>
              <div className="col-5 text-center borderRight">
                <p>Opryskiwacze</p>
              </div>
              <div className="col-5 text-center borderLeft">
                <p>Mieszadła Do Gnojowicy</p>
              </div>
            </div>

            <div className="row container justify-content-center align-items-center rel">
              <span className="verticalLine"></span>
              <div className="col-5 text-center borderRight">
                <p>Owijarki</p>
              </div>
              <div className="col-5 text-center borderLeft">
                <p>Młynki Bijakowe</p>
              </div>
            </div>

            <div className="row container justify-content-center align-items-center rel">
              <span className="verticalLine"></span>
              <div className="col-5 text-center borderRight">
                <p>Pielniko-Obsypniki</p>
              </div>
              <div className="col-5 text-center borderLeft">
                <p>Przenośniki Paszowe</p>
              </div>
            </div>

            <div className="row container justify-content-center align-items-center rel">
              <span className="verticalLine"></span>
              <div className="col-5 text-center borderRight">
                <p>Pługi Zwykłe</p>
              </div>
              <div className="col-5 text-center borderLeft">
                <p>Pługi Resorowe</p>
              </div>
            </div>

            <div className="row container justify-content-center align-items-center rel">
              <span className="verticalLine"></span>
              <div className="col-5 text-center borderRight">
                <p>Pługi Obracalne</p>
              </div>
              <div className="col-5 text-center borderLeft">
                <p>Prasy Zwijające</p>
              </div>
            </div>
          </div>
          <div className="row mt-5 container text-center justify-content-center">
            <h3>Poza maszynami możesz u nas kupić wszystkie inne potrzebne artykuły z branży
              budowlanej i rolniczej, czyli:
            </h3>

            <div className="col-lg-3 col-5 p-4 m-2 itemki d-flex justify-content-center flex-column">
              <p>Śruby, Gwoździe, Wkręty</p>
              <img src="https://images-na.ssl-images-amazon.com/images/I/71W9aZXuiTL._AC_SY450_.jpg" className="img-fluid"></img>
            </div>

            <div className="col-lg-3 col-5 p-4 m-2 itemki d-flex justify-content-center flex-column">
              <p>Elektronarzędzia, Klucze i Narzędzia</p>
              <img src="https://facom.com.pl/29255/cme16-set-of-76-piece-electronic-tools.jpg" className="img-fluid"></img>
            </div>

            <div className="col-lg-3 col-5 p-4 m-2 itemki d-flex justify-content-center flex-column">
              <p>Farby, Lakiery</p>
              <img src="https://media.castorama.pl/media/catalog/product/cache/0/image/9df78eab33525d08d6e5fb8d27136e95/F/a/Farba_podkladowa_Dulux_Sciana_i_Sufit_10_l-741084-446678.jpg" className="img-fluid"></img>
            </div>

            <div className="col-lg-3 col-5 p-4 m-2 itemki d-flex justify-content-center flex-column">
              <p>Wszelkie przewody elektrynyczne, Eski,
                Wtyczki, Gniazdka</p>
              <img src="https://i0.wp.com/skemaku.com/wp-content/uploads/2016/06/komponen-elektronika.jpg?fit=750%2C361&ssl=1" className="img-fluid"></img>
            </div>

            <div className="col-lg-3 col-5 p-4 m-2 itemki d-flex justify-content-center flex-column">
              <p>Oleje, Płyny</p>
              <img src="https://1.allegroimg.com/s512/01de35/7cd0f3df4c29baeee2bacef621d1/OLEJ-SILNIKOWY-SUPEROL-CC-30-5L" className="img-fluid"></img>
            </div>

            <div className="col-lg-3 col-5 p-4 m-2 itemki d-flex justify-content-center flex-column">
              <p>Pianki, Silikony</p>
              <img src="https://media.castorama.pl/media/catalog/product/cache/0/image/9df78eab33525d08d6e5fb8d27136e95/S/i/Silikon_uniwersalny_Tytan_280_ml_bialy-927281-476083.jpg" className="img-fluid"></img>
            </div>

            <div className="col-lg-3 col-5 p-4 m-2 itemki d-flex justify-content-center flex-column">
              <p>Odzież BHP</p>
              <img src="https://a.allegroimg.com/s512/119d5a/1262206f444383b4d378a847595b/UBRANIE-ROBOCZE-ODZIEZ-ROBOCZA-KOMBINEZON-BHP-r-50" className="img-fluid"></img>
            </div>

            <div className="col-lg-3 col-5 p-4 m-2 itemki d-flex justify-content-center flex-column">
              <p>Łożyska, Paski Klinowe, Oringi itp.</p>
              <img src="https://3.allegroimg.com/s512/110263/2c2b43864b88b50b5fa8aa275fe3/Lozysko-kulkowe-6306-RS-6306RS-FLT-30x72x19" className="img-fluid"></img>
            </div>

            <div className="col-lg-3 col-5 p-4 m-2 itemki d-flex justify-content-center flex-column">
              <p>Środki Ochrony Roślin</p>
              <img src="https://image.ceneostatic.pl/data/products/38029160/i-monsanto-roundup-360-plus-5l-11916.jpg" className="img-fluid"></img>
            </div>

          </div>
          <div className="row mt-5 container text-center justify-content-center mb-5">
            <h3>Zajmiemy się także różnymi innymi usługami mechanicznymi takimi jak:</h3>

            <div className="col-lg-3 col-5 p-4 m-2 itemki d-flex justify-content-center flex-column">
              <p className="text-capitalize">Serwis ciągników i maszyn</p>
              <img src="https://a.allegroimg.com/s512/11fbc8/5c6fe7d74f9597e685dc820f5ddb/Ciagnik-Rolniczy-LOVOL-M504-Kabina-Klimatyzacja" className="img-fluid"></img>
            </div>

            <div className="col-lg-3 col-5 p-4 m-2 itemki d-flex justify-content-center flex-column">
              <p className="text-capitalize">sprawdzanie końcówek wtryskiwaczy</p>
              <img src="https://d.allegroimg.com/s512/035644/054df6704a80859f2b9731404afd/WTRYSKI-WTRYSKIWACZ-MERC-0445115076-A6420701987" className="img-fluid"></img>
            </div>

            <div className="col-lg-3 col-5 p-4 m-2 itemki d-flex justify-content-center flex-column">
              <p className="text-capitalize">regeneracja pomp wtryskowych</p>
              <img src="data:image/jpeg;base64,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" className="img-fluid"></img>
            </div>

            <div className="col-lg-3 col-5 p-4 m-2 itemki d-flex justify-content-center flex-column">
              <p className="text-capitalize">szlify wałów, planowanie głowic</p>
              <img src="https://a.allegroimg.com/s1024/0c5835/273018174d7abf07c7b6a26df0e7" className="img-fluid"></img>
            </div>

            <div className="col-lg-3 col-5 p-4 m-2 itemki d-flex justify-content-center flex-column">
              <p className="text-capitalize">Wulkanizacja</p>
              <img src="https://image.ceneostatic.pl/data/products/67769116/i-barum-polaris-5-205-55r16-91t.jpg" className="img-fluid"></img>
            </div>

            <div className="col-lg-3 col-5 p-4 m-2 itemki d-flex justify-content-center flex-column">
              <p className="text-capitalize">Tunning silników w skuterach</p>
              <img src="https://d.allegroimg.com/s512/0322bd/4cba9a4b4596b624f613d136e95d/RETRO-skuter-ZIPP-APPIA-VERACRUZE-50-125-DOSTAWA" className="img-fluid"></img>
            </div>

            <div className="col-lg-3 col-5 p-4 m-2 itemki d-flex justify-content-center flex-column">
              <p className="text-capitalize">Stacja Obsługi Opryskiwaczy</p>
              <img src="https://traktomix.pl/media/products/eff2ad17d32cbe8170bf3dc553187cc2/images/thumbnail/large_opryskiwacz-pol-200.jpg?lm=1585640688" className="img-fluid"></img>
            </div>

            <div className="col-lg-3 col-5 p-4 m-2 itemki d-flex justify-content-center flex-column">
              <p className="text-capitalize">Transport</p>
              <img src="https://bioage.typepad.com/.a/6a00d8341c4fbe53ef01bb08fd9eae970d-500wi" className="img-fluid"></img>
            </div>
          </div>
      </CutoutArea>
    </Layout>
    )
}

export default Oferta