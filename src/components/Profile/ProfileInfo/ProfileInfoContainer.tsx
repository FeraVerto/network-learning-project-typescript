import React from "react";
import {ProfileInfo} from "./ProfileInfo";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {setUserProfile} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../../api/api";


class ProfileInfoContainer extends React.Component<Type> {

    componentDidMount() {
        let userId= this.props.match.params.userId
        usersAPI.getUser(userId).then(data => {
            this.props.setUserProfile(data)
        })
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
    setUserProfile: (profile: any) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

type ProfileInfoContainerType = mapStateToPropsType & mapDispatchToPropsType
type Type = RouteComponentProps<ParamsType> & ProfileInfoContainerType

let WithUrlDataContainerComponent = withRouter(ProfileInfoContainer)

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)
