import React from 'react'

import Layout from '../components/layout'
import '../styles/kontakt.css'

const Kontakt = () => {
    return(
    <Layout>
        <div>
            <div className="contactPlacetaker d-flex align-items-end p-4">
                <h1 className="text-white contactText">Kontakt</h1>
            </div>
            <div className="shadowUnder"></div>
        </div>
        <div className="row mt-5">
            <div className="col-lg-6 px-5 py-3 col-10 col-md-8 embed-responsive-item">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d511.0937971074316!2d23.35372347301636!3d53.654486889074974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x278b0856041ee498!2sHandlowo-Techniczne%20Us%C5%82ugi%20Rolnicze!5e1!3m2!1spl!2spl!4v1597166969403!5m2!1spl!2spl" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div className="col-lg-6 px-5 py-3 col-10 col-md-8">
                <p>Handlowo Techniczne Usługi Rolnicze Sp.j. Harackiewicz,Sidor</p>
                <p>ul.Obwodowa 6 16-200 Dąbrowa Białostocka</p>
                <p>Tel. (85) 71 22 195</p>
                <p>Kom. 602 348 161</p>
                <p>e-mail: htur_sj.dabrowa@wp.pl</p>
                <p>Pn-pt: 7-17</p>
                <p>Sob: 7-14</p>
            </div>
        </div>
    </Layout>
    )
}

export default Kontakt