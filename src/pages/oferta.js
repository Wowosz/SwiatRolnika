import React from 'react'
import CutoutArea from '../components/cutoutArea'

import Layout from '../components/layout'
import czesci from '../images/tools.jpg'
import logo from '../images/logo.svg'
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
          <h1 className="mt-4 text-center">Posiadamy części do maszyn i ciągników podanych Firm:</h1>
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
          <p></p>
      </CutoutArea>
    </Layout>
    )
}

export default Oferta