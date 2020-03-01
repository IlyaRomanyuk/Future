import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setUsersTC, cahngeCurrentPageAC, cahngeSortPageAC, chooseUserAC, deleteUserAC, showAddFormAC, setUsersAC } from '../../redux/table-reducer';
import Table from './Table';

class TableContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            direction: {
                id: 'asc',
                firstName: 'asc',
                lastName: 'asc',
                email: 'asc',
                phone: 'asc',
            }
        }
    }

    componentDidMount() {
        this.props.setUsersData()
    }

    paginate = (pageNumber) => {
        this.props.changeCurrentPage(pageNumber)
    }

    sortByNumber = (key) => {
        let users = this.props.users

        users.sort((a, b) => {
            return this.state.direction[key] === "asc" ? 
            a[key] - b[key] : 
            b[key] - a[key]
        })

        this.setState({
            direction: {
                [key]: this.state.direction[key] === 'asc' ? 
                'desc' : 'asc'
            }
        })

        this.props.changeSortPage(users)
    }

    sortByString = (key) => {
        let users = this.props.users;

        if(this.state.direction[key] === 'asc'){
            users.sort((a,b) => {
                if(a[key] > b[key]){
                    return -1
                } else if(a[key] < b[key]){
                    return 1
                }
                return 0
            })
        } else {
            users.sort((a,b) => {
                if(a[key] < b[key]){
                    return -1
                } else if(a[key] > b[key]){
                    return 1
                }
                return 0
            })
        }

        this.setState({
            direction: {
                [key]: this.state.direction[key] === 'asc' ? 
                'desc' : 'asc'
            }
        })

        this.props.changeSortPage(users)
    }

    chooseUser = (user) => {
        this.props.chooseUser(user);
    }
    

    render() {
        return(
            <Table users={this.props.users}
                currentPage={this.props.currentPage}
                paginate={this.paginate}
                sortByNumber={this.sortByNumber}
                sortByString={this.sortByString}
                chooseUser={this.chooseUser}
                chooseUserData={this.props.chooseUserData}
                deleteUser={this.props.deleteUser}
                isFetching={this.props.isFetching}
                showAddForm={this.props.showAddForm}
                addForm={this.props.addForm}
                updateUsers={this.props.updateUsers}/>
        )  
    }
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    isFetching: state.usersPage.isFetching,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    chooseUserData: state.usersPage.chooseUser,
    addForm: state.usersPage.addForm
})

let mapDispatchToProps = (dispatch) => ({
    setUsersData: (pageSize) => {
        dispatch(setUsersTC(pageSize))
    },

    changeCurrentPage: (pageNumber) => {
        dispatch(cahngeCurrentPageAC(pageNumber))
    }, 

    changeSortPage: (users) => {
        dispatch(cahngeSortPageAC(users))
    },

    chooseUser: (choose) => {
        dispatch(chooseUserAC(choose))
    },

    deleteUser: () => {
        dispatch(deleteUserAC())
    }, 

    showAddForm: (form) => {
        dispatch(showAddFormAC(form))
    },

    updateUsers: (users) => {
        dispatch(setUsersAC(users))
    }
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(TableContainer);