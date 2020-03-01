import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required } from '../../utils/validators';
import style from './AddForm.module.css';


const Form = (props) => {
    let error = props.error;
    return (
        <form  onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} name={'id'} placeholder="id" component={'input'}/>
            </div>

            <div>
                <Field validate={[required]} name={'firstName'} placeholder="firstName" component={'input'}/>
            </div>

            <div>
                <Field validate={[required]} name={'lastName'} placeholder="lastName" component={'input'}/>
            </div>

            <div>
                <Field validate={[required]} name={'email'} placeholder="email" component={'input'}/>
            </div>

            <div>
                <Field validate={[required]} name={'phone'} placeholder="phone" component={'input'}/>
            </div>
    
            <div>
                <button disabled={props.pristine || props.submitting} >Добавить в таблицу</button>
            </div>
        </form>
    )
}

const AddReduxForm = reduxForm({form: 'add'})(Form)

const AddForm = (props) => {

    let onSubmit = (formData) => {
        let users = [formData, ...props.users]
        props.updateUsers(users);
    }

    return (
        <div className={style.form}>
            <h3>Добавить пользователя</h3>
            <AddReduxForm onSubmit={onSubmit} />
        </div>
    )
}
export default AddForm