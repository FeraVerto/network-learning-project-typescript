import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType, UserType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    unfollow,
    getUsers
} from "../../redux/users-reducer";
import React from "react";
import {Preloader} from "../common/Preloader/Preloader";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}

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
    setCurrentPage: (pageNumber: number) => void
    setUserProfile: (userId: number) => void
    getUsers: (currentPage: number | string, pageSize: number) => void
}

type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType
type ContainerType = RouteComponentProps<PathParamsType> & UsersContainerType


class UsersContainer extends React.Component<ContainerType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                   followingInProgress={this.props.followingInProgress}
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


let WithUrlDataContainerComponent = withRouter(UsersContainer)

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        setUserProfile,
        getUsers
    }
)(WithUrlDataContainerComponent)


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