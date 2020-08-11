import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import image from '../images/main-img.jpg'
import '../styles/css/bootstrap.min.css';
import '../styles/index.css'

const IndexPage = () => (
  <Layout>
    <div className="mainImg container-fluid px-0">
      <img src={image} className="img-fluid w-100"/>
      <h1 className="logoName">U Sidora</h1>
    </div>
  </Layout>
)

export default IndexPage
