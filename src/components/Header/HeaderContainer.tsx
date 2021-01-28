import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType, photoType} from "../../redux/redux-store";
import {setUserData, setUserPhoto} from "../../redux/auth-reducer";
import {authAPI, usersAPI} from "../../api/api";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ParamsType ={
    userId: string
}

type mapStateToPropsType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean | null,
    photo: photoType
}

type mapDispatchToPropsType = {
    setUserData: (id: number, email: string, login: string) => void
    setUserPhoto: (small: string, large: string) => void
}

type OwnHeaderContainerType = mapStateToPropsType & mapDispatchToPropsType
type HeaderContainerType = RouteComponentProps<ParamsType> & OwnHeaderContainerType


class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {

        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let id = response.data.data.id
                let email = response.data.data.email
                let login = response.data.data.login
                this.props.setUserData(id, email, login)
            }
        })

        let userId = this.props.match.params.userId
        usersAPI.getUser(userId).then(response => {
            if (response.data.resultCode === 0) {
                let small = response.data.photos.small
                let large = response.data.photos.large
                this.props.setUserPhoto(small, large)
            }
        })

        /*usersAPI.getUsersPhoto().then(response => {
            if (response.data.resultCode === 0) {
                let small = response.data.data.small
                let large = response.data.data.large
                this.props.setUserPhoto(small, large)
            }
        })*/
    }

    render = () => <Header {...this.props}/>
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        photo: state.auth.photo
    }
}

//@ts-ignore
let WithUrlUsersDataContainerComponent = withRouter(HeaderContainer)

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    setUserData,
    setUserPhoto
})(WithUrlUsersDataContainerComponent)

