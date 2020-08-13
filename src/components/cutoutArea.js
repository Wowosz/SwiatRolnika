import React from 'react'

import './cutoutArea.css'

const CutoutArea = ({children}) => {
    return(
        <div className="cutoutArea">
            <div className="contentCutoutArea row justify-content-center">
            {children}
            </div>
            <div className="shadowCutout"></div>
        </div>
    )
}

export default CutoutArea