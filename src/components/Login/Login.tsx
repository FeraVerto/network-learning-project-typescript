import React from "react"
import s from './Login.module.sass'
import {reduxForm, InjectedFormProps} from "redux-form";
import {Field} from "redux-form";


export const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        /*props.loginTC(formData)*/
        console.log(formData)
    }
    return (
        <div>
            <h1 className={s.h1}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha?: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={"input"} placeholder={"Login"} name={"login"}/></div>
            <div><Field component={"input"} placeholder={"Password"} name={"password"}/></div>
            <div><Field component={"checkbox"} name={"rememberMe"}/>remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)