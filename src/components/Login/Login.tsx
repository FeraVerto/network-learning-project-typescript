import React from "react"
import s from './Login.module.sass'
import {reduxForm, InjectedFormProps} from "redux-form";
import {Field} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {Button} from "../common/Button/Button";


const Login: React.FC<mapStateToPropsType & mapDispatchToPropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div className={s.login}>
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

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <div><Field component={Input}
                        placeholder={"Login"}
                        name={"email"}
                        validate={[requiredField]}
                        className={s.item}
            />

            </div>
            <div><Field component={Input}
                        placeholder={"Password"}
                        name={"password"}
                        validate={[requiredField]}
                        type={"password"}
                        className={s.item}
            />
            </div>

            <div><Field component={Input}
                        type={"checkbox"}
                        name={"rememberMe"}
                        className={s.item}
            />
                remember me
            </div>
            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <Button style={s.button_login}>Login</Button>
            </div>
        </form>
    )
}


export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)