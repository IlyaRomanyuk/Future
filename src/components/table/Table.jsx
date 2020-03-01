import React from 'react';
import style from './Table.module.css';
import Preloader from '../../assets/preloader/Preloader';
import UserData from '../UserData/UserData';
import AddForm from './AddForm';
import FindContainer from './Find';

const Table = (props) => {
    let pages = [];
    let pagesCount = Math.ceil(props.users.length / 50)

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let indexOfLastUser = props.currentPage * 50;
    let indexOfFirstUser = indexOfLastUser - 50;
    let currentUsers = props.users.slice(indexOfFirstUser, indexOfLastUser);
    
    return (

        <div> 
            <FindContainer updateUsers={props.updateUsers} users={props.users}/> 
            <button onClick={() => props.showAddForm(true) } className={style.btn}>Добавить</button>
            {props.addForm && <AddForm updateUsers={props.updateUsers} users={props.users} />}

            <div className={style.pages}>
                {pages.map(p => <p className={props.currentPage === p && style.currentPage} onClick={event => props.paginate(p)}>{p}</p>)}
            </div>

            <div className={style.table}>
                <table border="1" width="80%">
                    <tr>
                        <th onClick={() => { props.sortByNumber('id') }}>id</th>
                        <th onClick={() => { props.sortByString('firstName') }}>firstName</th>
                        <th onClick={() => { props.sortByString('lastName') }}>lastname</th>
                        <th onClick={() => { props.sortByString('email') }}>email</th>
                        <th onClick={() => { props.sortByString('phone') }}>phone</th>
                    </tr>

                    {currentUsers.map(user => {
                        return <tr onClick={event => props.chooseUser(user)}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    })}
                </table>
            </div>
            {props.isFetching ? <Preloader /> : null}
            {props.chooseUserData ?
                <UserData delete={props.deleteUser} user={props.chooseUserData} /> :
                null}

        </div>
    )
}

export default Table