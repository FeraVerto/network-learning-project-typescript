import {connect} from "react-redux";
import {AppStateType, UserType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    unfollow,
    requestUsers
} from "../../redux/users-reducer";
import React from "react";
import {Preloader} from "../common/Preloader/Preloader";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSelector
} from "../../redux/users-selectors";
import {Users} from "./Users";


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
        //запрашиваем юзеров
        let{currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        //запрашиваем юзеров
        let{pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
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
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


let WithUrlDataContainerComponent = withRouter(UsersContainer)

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        setUserProfile,
        getUsers: requestUsers
    }
)(WithUrlDataContainerComponent)


