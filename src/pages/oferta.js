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
          <div className="row ofertaBrandRow p-3 d-flex justify-content-center">
            <img src={john} alt="john Deer logo" className="img-fluid h-100 mx-1"></img>
            <img src={zetor} alt="zetor logo" className="img-fluid h-100 mx-1"></img>
            <img src={massey} alt="massey logo" className="img-fluid h-100 mx-1"></img>
            <img src={landini} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={dawid} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={classs} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={lamborghini} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={newHolladn} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={deutz} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={caseIH} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={ford} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={same} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={fendt} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={belarus} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={pronar} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={ursus} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={bizon} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={lemken} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={kverne} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={overum} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={kuhn} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={rabe} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={niemeyer} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={vogel} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={krone} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={pottinger} alt="landini logo" className="img-fluid h-100 mx-1"></img>
            <img src={fraugde} alt="landini logo" className="img-fluid h-100 mx-1"></img>
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
              <img src="https://lh3.googleusercontent.com/proxy/NXhx1aMF5mwmAsAHTyIH-vL5AXa02YfPkpjkcMwQtJWhl8JXloAgbXWjVIXNn8Ut091wyeqLHw9_sv_KmGpJJ3O0MrOjb8vrbfjqjLHhQKrg6SXTMQSbPF935AyBYg" className="img-fluid"></img>
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