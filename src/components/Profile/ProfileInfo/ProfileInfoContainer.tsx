import React from "react";
import {ProfileInfo} from "./ProfileInfo";
import {connect} from "react-redux";
import {AppStateType, ProfilePageType} from "../../../redux/redux-store";
import {getUserProfile} from "../../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileInfoContainer extends React.Component<Type> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '8320'
        }
        this.props.getUserProfile(userId)
    }

    render() {
        console.log('Уходит в Профайл инфо')
        console.log(this.props)
        return (
            <ProfileInfo {...this.props} profile={this.props.profile}/>
        )
    }
}

type ParamsType = {
    userId: string
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
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}


type ProfileInfoContainerType = mapStateToPropsType & mapDispatchToPropsType
type Type = RouteComponentProps<ParamsType> & ProfileInfoContainerType


export default compose<React.ComponentType>(
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileInfoContainer)

