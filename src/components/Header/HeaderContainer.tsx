import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType, photoType} from "../../redux/redux-store";
import {getUserAuthData, getUserPhoto} from "../../redux/auth-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ParamsType = {
    userId: string
}

type mapStateToPropsType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean | null,
    photo: photoType
    isLoggedIn: boolean
}

type mapDispatchToPropsType = {
    getUserAuthData: () => void
    getUserPhoto: (userId: string) => void
}

type OwnHeaderContainerType = mapStateToPropsType & mapDispatchToPropsType
type HeaderContainerType = RouteComponentProps<ParamsType> & OwnHeaderContainerType


class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        //запрашиваем авторизационные данные
        this.props.getUserAuthData()

        //запрашиваем фото авторизованного пользователя
        let userId = this.props.match.params.userId
        this.props.getUserPhoto(userId)
    }

    render = () => <Header {...this.props}/>
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        photo: state.auth.photo,
        isLoggedIn: state.auth.isLoggedIn
    }
}


let WithUrlUsersDataContainerComponent = withRouter(HeaderContainer)

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {
        getUserAuthData,
        getUserPhoto
    })(WithUrlUsersDataContainerComponent)

