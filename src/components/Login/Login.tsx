import React from "react"
import s from './Login.module.sass'
import {reduxForm, InjectedFormProps} from "redux-form";
import {Field} from "redux-form";
import {Input} from "../common/Preloader/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";


const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        let email = formData.email
        let password = formData.password
        let rememberMe = formData.rememberMe
        let captcha = formData.captcha
        props.loginTC(email, password, rememberMe, captcha)
    }

    if (props.isAuth) {
        <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1 className={s.h1}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


type mapDispatchToPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean, captcha?: boolean) => void
}

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {loginTC})(Login)


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Input}
                        placeholder={"Login"}
                        name={"email"}
                        validate={[requiredField]}/>
            </div>
            <div><Field component={Input}
                        placeholder={"Password"}
                        name={"password"}
                        validate={[requiredField]}
                        type={"password"}/>
            </div>
            <div><Field component={Input}
                        type={"checkbox"}
                        name={"rememberMe"}/>
                remember me
            </div>
            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)