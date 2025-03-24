import React from 'react'
import './loader.css'
import loaderImage from '../../assets/loader.gif'

const Loader = () => {
    return ReactDom.createPortal(
        <div className="loader-wrapper">
            <div className="loader">
                <img src={loaderImage} alt="loading..." />
            </div>
        </div>,
        document.getElementById("loader")
    )
}

export const Spinner = () =>{
    return (
        <div className="--center-all">
            <img src={loaderImage} alt="loading..."  width={50}/>
        </div>
    )
}

export default Loader