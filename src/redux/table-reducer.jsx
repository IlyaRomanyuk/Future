import * as axios from 'axios';

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const CHANGE_USERS_WITH_SORT = 'CHANGE_USERS_WITH_SORT';
const CHOOSE_USER = 'CHOOSE_USER';
const DELETE_USER = 'DELETE_USER';
const SHOW_ADD_FORM = 'SHOW_ADD_FORM';

let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 50,
    isFetching: true,
    chooseUser: null,
    addForm: false
}

export let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                users: action.users
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case CHANGE_USERS_WITH_SORT:
            return{
                ...state,
                users: action.users
            }

        case CHOOSE_USER: 
            return{
                ...state,
                chooseUser: action.choose
            }

        case DELETE_USER:
            return{
                ...state,
                chooseUser: null
            }

        case  SHOW_ADD_FORM: 
            return{
                ...state, 
                addForm: action.form
            }

        default: return state
    }
}

export const setUsersAC = (users) => ({ type: SET_USER_DATA, users });
const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const cahngeCurrentPageAC = (currentPage) => ({ type: CHANGE_CURRENT_PAGE, currentPage });
export const cahngeSortPageAC = (users) => ({ type: CHANGE_USERS_WITH_SORT, users });
export const chooseUserAC = (choose) => ({ type: CHOOSE_USER, choose });
export const deleteUserAC = () => ({ type: CHOOSE_USER });
export const showAddFormAC = (form) => ({ type: SHOW_ADD_FORM, form });

export const setUsersTC = () => {
    return (dispatch) => {
        dispatch(toggleIsFetchingAC(true))
        axios.get(`http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`).
            then(response => {
                dispatch(setUsersAC(response.data))
                dispatch(toggleIsFetchingAC(false))
            })
    }

}

