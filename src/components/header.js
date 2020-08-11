import React, {useState} from 'react'

import "./header.css"

const Header = () => {
    const [opened, setOpened] = useState(false);
    const handleClick = () => {
        if(opened){
            setOpened(false);
        } else {
            setOpened(true);
        }
    }
    
    return(
    <div>
        <div className="mobileNavBar">
            <div className={opened ? 'menu-btn open' : 'menu-btn'}  onClick={handleClick}>
                <div className="menu-btn__burger"></div>
            </div>
        </div>

        <div className="desktopNavBar container-fluid d-flex flex-row-reverse mx-0">
            <div className="col-lg-8 ">
                <ul className="navBarList row  align-content-center justify-content-center m-0 h-100">
                    <li className="mx-lg-3 text-white"><h5>Start</h5></li>
                    <li className="mx-lg-3 text-white"><h5>O nas</h5></li>
                    <li className="mx-lg-3 text-white"><h5>Oferta</h5></li>
                    <li className="mx-lg-3 text-white"><h5>Kontakt</h5></li>
                </ul>
            </div>
        </div>
    </div>
    )
}
export default Header