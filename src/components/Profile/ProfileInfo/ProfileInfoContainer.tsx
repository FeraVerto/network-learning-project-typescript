import React from "react";
import {ProfileInfo} from "./ProfileInfo";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {getUserProfile} from "../../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


class ProfileInfoContainer extends React.Component<Type> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        /*!userId && <Redirect to={"/login"}></Redirect>*/
        this.props.getUserProfile(userId)
    }

    render() {
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
    profile: any
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

let WithUrlDataContainerComponent = withRouter(ProfileInfoContainer)

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
