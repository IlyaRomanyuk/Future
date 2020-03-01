import React from 'react';
import style from './AddForm.module.css';
import { reduxForm, Field } from 'redux-form';

const Find = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={style.findPerson}>
            <Field name='data' component="input" placeholder="Введите данные" />
            <button>Найти</button>
        </form>
    )
}
const FindReduxForm = reduxForm({ form: 'find' })(Find)

class FindContainer extends React.Component {

    isMatching = (full, chunk) => {
        if (toString(full.id).toLowerCase().indexOf(chunk.toLowerCase()) !== -1 ||
            full.firstName.toLowerCase().indexOf(chunk.toLowerCase()) !== -1 ||
            full.lastName.toLowerCase().indexOf(chunk.toLowerCase()) !== -1 ||
            full.email.toLowerCase().indexOf(chunk.toLowerCase()) !== -1 ||
            full.phone.toLowerCase().indexOf(chunk.toLowerCase()) !== -1) {
            return full
        }
    }


    findUsers = (formData) => {
        let { data } = formData;
        let users = this.props.users;
        let newArr = [];

        if (data === undefined) {
            this.props.updateUsers(users)
        } else {
            users.forEach(element => {
                if (this.isMatching(element, data)) {
                    newArr.push(element)
                }
            })

            this.props.updateUsers(newArr);
        }

    }

    render() {
        return (
            <FindReduxForm onSubmit={this.findUsers} />
        )
    }
}

export default FindContainer