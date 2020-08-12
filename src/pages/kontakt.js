import React, {useState} from 'react'

import Layout from '../components/layout'
import CutoutArea from '../components/cutoutArea'
import '../styles/kontakt.css'

const Kontakt = () => {

    const [sended, setSended] = useState(false);

    return(
    <Layout>
        <div>
            <div className="contactPlacetaker d-flex align-items-end p-4">
                <h1 className="text-white contactText">Kontakt</h1>
            </div>
            <div className="shadowUnder"></div>
        </div>
        <div className="row mt-5 justify-content-center">
            <div className="col-lg-7 px-5 py-3 col-10 col-md-10 embed-responsive-item">
                <div className="google-maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d511.0937971074316!2d23.35372347301636!3d53.654486889074974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x278b0856041ee498!2sHandlowo-Techniczne%20Us%C5%82ugi%20Rolnicze!5e1!3m2!1spl!2spl!4v1597166969403!5m2!1spl!2spl" height="450" width="600" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
            <div className="col-lg-5 px-0 py-3 col-10 col-md-8">
                <div className="slash pl-5">
                    <h1 className="mb-5 pt-0 textColorRed">Kontakt</h1>
                    <p className="mb-1">Handlowo Techniczne Usługi Rolnicze Sp.j. Harackiewicz,Sidor</p>
                    <p className="mb-1">ul.Obwodowa 6 16-200 Dąbrowa Białostocka</p>
                    <p className="mb-1">Tel. (85) 71 22 195</p>
                    <p className="mb-1">Kom. 602 348 161</p>
                    <p className="mb-1">e-mail: htur_sj.dabrowa@wp.pl</p>
                    <p className="mb-1">Pn-pt: 7-17</p>
                    <p className="mb-1">Sob: 7-14</p>
                </div>
            </div>
            <CutoutArea>
                <div className="row justify-content-center">
                    <div className="text-center col-10 mt-3">
                        <h1>Masz problem lub pytanie ?</h1>
                        <h2>Napisz do nas!</h2>
                    </div>
                    <div className={sended ? "emailSended": ""}>
                        <form id="gform" method="POST" data-email="from_email@example.com" onSubmit={() => {setSended(true)}}
                        action="https://script.google.com/macros/s/AKfycbwN88VXC-tSz7jz0DX43Lxk31hNTO2vUCmDOai8c-6doT56Usw/exec">
                            <div className="row justify-content-center mt-3">
                                <input className="col-4 mr-5 rounded-pill pill" id="name" name="name" placeholder="Podaj imię" />
                                <input className="col-4 rounded-pill pill" id="email" name="email" type="email"
                                    required placeholder="twój.email@email.pl" />
                            </div>
                            <div className="row justify-content-center">
                            <textarea className="rounded pill w-75 mt-4"id="message" name="message" rows="10"
                                    placeholder="Powiedz nam czego potrzebujesz i zostaw jakiś kontakt!"></textarea>
                            <br/>
                            </div>
                            <div className="row justify-content-center mt-3">
                            <button class="rounded pill w-25 mb-5">
                                Wyślij Wiadomość
                            </button>
                            </div>
                        </form>
                        <div className={sended ? "" : "emailNotSended"}id="thankyou_message">
                            <h2>
                                <em>Dziekujemy</em> za kontakt!
                                Niedługo się odezwiemy!
                            </h2>
                        </div>
                    </div>
                </div>
            </CutoutArea>
        </div>
    </Layout>
    )
}

export default Kontakt