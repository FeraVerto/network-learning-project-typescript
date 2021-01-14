import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {AppStateType, photoType} from "../../redux/redux-store";
import {setUserData, setUserPhoto} from "../../redux/auth-reducer";


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

type HeaderContainerType = mapStateToPropsType & mapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            //отправляем куки
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let id = response.data.data.id
                let email = response.data.data.email
                let login = response.data.data.login
                this.props.setUserData(id, email, login)
            }
        })

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/photo`, {
            //отправляем куки
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let small = response.data.data.small
                let large = response.data.data.large
                this.props.setUserPhoto(small, large)
            }
        })
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


export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setUserData, setUserPhoto})(HeaderContainer)

