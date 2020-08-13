import React from 'react'

import Layout from '../components/layout'
import CutoutArea from '../components/cutoutArea'
import image from '../images/o-nas.jpg'
import logo from '../images/logo.svg'
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
          <div>gdfgdgsdfgd</div>
      </CutoutArea>
    </Layout>
    )
}

export default Onas