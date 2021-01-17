import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType, UserType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    setToggleIsFetching,
    unfollow, toggleFollowingProgress
} from "../../redux/users-reducer";
import axios from "axios";
import React from "react";
import {Preloader} from "../common/Preloader/Preloader";
import {setUserProfile} from "../../redux/profile-reducer";
import {getUser, getUsers, getUsersPage} from "../../api/api";


type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number | string
    isFetching: boolean
    followingInProgress: Array<number>
}

type mapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
    setUserProfile: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType


class UsersContainer extends React.Component<UsersContainerType> {
    componentDidMount() {
        this.props.setToggleIsFetching(true)
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
            this.props.setToggleIsFetching(false)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setToggleIsFetching(true)
        getUsersPage(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setToggleIsFetching(false)
        })
    }

    onClickUser = (userId: number) => {
        //let userId = this.props.history.match.params.userId
        getUser(userId).then(data => {
            this.props.setUserProfile(data)
        })

    }

    render = () =>
        <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   onClickUser={this.onClickUser}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        setToggleIsFetching,
        setUserProfile,
        toggleFollowingProgress
    }
)(UsersContainer)


/*const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (id) => {
            dispatch(followAC(id))
        },

        unfollow: (id) => {
            dispatch(unfollowAC(id))
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },

        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },

        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },

        setToggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/