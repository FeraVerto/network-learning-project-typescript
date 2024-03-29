import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    unfollow,
    requestUsers
} from "../../redux/users-reducer";
import React from "react";
import {Preloader} from "../common/Preloader/Preloader";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize, getSearchOption,
    getTotalUsersCount,
    getUsersSelector
} from "../../redux/users-selectors";
import {Users} from "./Users";
import {UserType} from "../../types/types";


type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    currentPage: number | string
    pageSize: number
    isFetching: boolean
    followingInProgress: Array<number>
    searchOption?: string
}

type mapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    getUsers: (currentPage: number | string, pageSize: number, term?: string, friends?: boolean) => void
}

type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType
type ContainerType = RouteComponentProps<PathParamsType> & UsersContainerType


class UsersContainer extends React.Component<ContainerType> {
    componentDidMount() {
        //запрашиваем юзеров
        let {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize, this.props.searchOption)
    }

    onPageChanged = (pageNumber: number) => {
        //запрашиваем юзеров
        let {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize, this.props.searchOption)
    }

    onSearch = (term: {term: string}) => {
        this.props.getUsers(1, this.props.pageSize, term.term)
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
                   onSearch={this.onSearch}
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
        followingInProgress: getFollowingInProgress(state),
        searchOption: getSearchOption(state)
    }
}


let WithUrlDataContainerComponent = withRouter(UsersContainer)

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {
        follow,
        unfollow,
        getUsers: requestUsers
    }
)(WithUrlDataContainerComponent)


