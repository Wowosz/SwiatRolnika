import React from 'react'

import "./footer.css"

const Footer = () => {
    return(
        <div className="containe-fluid row align-content-center bg-secondary pt-4 flex-column text-center text-white">
            <h5>©2020,Handlowo Techniczne Usługi Rolnicze</h5>
            <p>Created by <a className="text-decoration-none link" href="https://www.facebook.com/wojtek.szoda.3/">Wojciech Szoda</a></p>
        </div>
    );
}

export default Footer