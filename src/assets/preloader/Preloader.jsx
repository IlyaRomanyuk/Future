import React from 'react';
import preloader from './preloader.svg';
import style from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={style.divPreloader}>
            <img className={style.preloader} src={preloader} alt="" />
        </div>
    )
}

export default Preloader