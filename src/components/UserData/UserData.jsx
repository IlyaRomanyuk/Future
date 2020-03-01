import React from 'react';
import style from './userData.module.css';
import close from './../../assets/error.png';

const UserData = (props) => {
    return (
        <div className={style.userData}>
            <div className={style.closeDiv}>
                <img onClick={props.delete} src={close} className={style.close} />
            </div>
            <div>
                <span>Выбран пользователь: </span>
                <b>{`${props.user.firstName} ${props.user.lastName}`}</b>
            </div>
            <textarea value={props.user.description}></textarea>
            <div>
                <span>Адрес проживания: </span>
                <b>{props.user.address.streetAddress}</b>
            </div>
            <div>
                <span>Город: </span>
                <b>{props.user.address.city}</b>
            </div>
            <div>
                <span>Провинция: </span>
                <b>{props.user.address.state}</b>
            </div>
            <div>
                <span>Индекс: </span>
                <b>{props.user.address.zip}</b>
            </div>
        </div>
    )
} 

export default UserData;