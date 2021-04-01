import React from 'react';
import {getUserProfile, getStatus, updateStatus, savePhoto, updateProfile} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {AppStateType, ProfilePageType, ProfileType} from "../../redux/redux-store";
import {Profile} from "./Profile";

class ProfileContainer extends React.Component<Type> {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
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
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile {...this.props}
                        isOwner={!this.props.match.params.userId}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        savePhoto={this.props.savePhoto}
                        updateProfile={this.props.updateProfile}
                        refreshProfile={this.refreshProfile}/>
    }
}


type ParamsType = {
    userId: any
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
    savePhoto: (photo: string) => void
    updateProfile: (dataForm: ProfileType) => void
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
        updateStatus,
        savePhoto,
        updateProfile
    })
)(ProfileContainer)

