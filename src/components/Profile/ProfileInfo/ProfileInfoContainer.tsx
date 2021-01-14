import React from "react";
import axios from "axios";
import {ProfileInfo} from "./ProfileInfo";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {setUserProfile} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileInfoContainer extends React.Component<ProfileInfoContainerType> {

    render() {
        return (

            <ProfileInfo {...this.props} profile={this.props.profile}/>
        )
    }
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

//@ts-ignore
let WithUrlDataContainerComponent = withRouter(ProfileInfoContainer)

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)
