import React from "react";
import axios from "axios";
import {ProfileInfo} from "./ProfileInfo";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {setUserProfile} from "../../../redux/profile-reducer";


class ProfileInfoContainer extends React.Component<ProfileInfoContainerType> {

    render() {
        console.log(this.props)
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
    console.log(state)
    return {
        profile: state.profilePage.profile
    }
}

type ProfileInfoContainerType = mapStateToPropsType & mapDispatchToPropsType

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setUserProfile})(ProfileInfoContainer)
