import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import image from '../images/main-img.jpg'
import john from '../images/john-deer.png'
import zetor from '../images/zetor.jpg'
import '../styles/css/bootstrap.min.css';
import '../styles/index.css'

const IndexPage = () => (
  <Layout>
    <div className="mainImg container-fluid px-0">
      <img src={image} className="img-fluid w-100"/>
      <h1 className="logoName">U Sidora</h1>
    </div>
    <div className="brandContainer">
      <div className="brandSigns">
        <div className="row brandRow p-3 d-flex justify-content-center">
          <img src={john} alt="john Deer logo" className="img-fluid h-100 mx-1"></img>
          <img src={zetor} alt="zetor logo" className="img-fluid h-100 mx-1"></img>
        </div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
      <div className="shadowUnder"></div>
    </div>
  </Layout>
)

export default IndexPage
