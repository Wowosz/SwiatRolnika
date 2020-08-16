import React, {useState} from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import "./header.css"

const Header = ({highlight}) => {
    const [opened, setOpened] = useState(false);
    const handleClick = () => {
        if(opened){
            setOpened(false);
        } else {
            setOpened(true);
        }
    }
    
    return(
    <div className="sticky">
        <div className="mobileNavBar">
            <div className={opened ? 'menu-btn open' : 'menu-btn'}  onClick={handleClick}>
                <div className="menu-btn__burger"></div>
            </div>
            <div className={`${opened ? 'mobileLinkListContainer open' : 'mobileLinkListContainer'} align-items-center justify-content-center`}>
                <ul className="mobileLinkList p-0 text-center">
                    <li className="my-4"><a href="/"><h1>Start</h1></a></li>
                    <li className="my-4"><a href="/o-nas"><h1>O Nas</h1></a></li>
                    <li className="my-4"><a href="/oferta"><h1>Oferta</h1></a></li>
                    <li className="my-4"><a href="/kontakt"><h1>Kontakt</h1></a></li>
                </ul>
            </div>
        </div>

        <div className="desktopNavBar container-fluid flex-row-reverse mx-0">
            <div className="col-lg-8 col-md-8">
                <ul className="navBarList row  justify-content-center m-0 h-100">
                    <AniLink fade to="/"  className={`${highlight === 0 ? 'redBack' : ''} px-lg-3 px-md-2 text-white d-flex align-items-center text-decoration-none`}><li><h5>Start</h5></li></AniLink>
                    <AniLink fade to="/o-nas"  className={`${highlight === 1 ? 'redBack' : ''} px-lg-3 px-md-2 text-white d-flex align-items-center text-decoration-none`}><li><h5>O nas</h5></li></AniLink>
                    <AniLink fade to="/oferta"  className={`${highlight === 2 ? 'redBack' : ''} px-lg-3 px-md-2 text-white d-flex align-items-center text-decoration-none`}><li><h5>Oferta</h5></li></AniLink>
                    <AniLink fade to="/kontakt"  className={`${highlight === 3 ? 'redBack' : ''} px-lg-3 px-md-2 text-white d-flex align-items-center text-decoration-none`}><li><h5>Kontakt</h5></li></AniLink>
                </ul>
            </div>
        </div>
    </div>
    )
}
export default Header