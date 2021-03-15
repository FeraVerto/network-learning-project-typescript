/*import React from "react";
import {Profile} from "./Profile";

export class ProfileContainer extends React.Component<any, any> {

    render() {
        return (
            <Profile/>
        )
    }
}*/


import React from 'react';
import {getUserProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {AppStateType, ProfilePageType} from "../../redux/redux-store";
import {Profile} from "./Profile";

class ProfileContainer extends React.Component<Type> {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        console.log("ProfileContainer", userId)
        if (!userId) {
            userId = this.props.authorizedUserId;
            console.log("ProfileContainer undefined", userId)
            if (!userId) {
                //Не самое лучшее решение, но по-быструхе можно так сделать
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        console.log("ProfileContainer", this.props)
        return <Profile {...this.props}
                        isOwner={!this.props.match.params.userId}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        /*savePhoto={this.props.savePhoto}*//>
    }
}


type ParamsType = {
    userId: any
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

type mapStateToPropsType = {
    profile: ProfilePageType
    status: string
    authorizedUserId: number | null
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id
    }
}


type ProfileInfoContainerType = mapStateToPropsType & mapDispatchToPropsType
type Type = RouteComponentProps<ParamsType> & ProfileInfoContainerType


export default compose<React.ComponentType>(
    withRouter,
    withAuthRedirect,
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    })
)(ProfileContainer)

