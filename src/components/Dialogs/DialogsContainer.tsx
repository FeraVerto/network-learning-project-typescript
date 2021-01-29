import React from "react";
import {AppStateType, DialogsItemType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    dialogs: Array<DialogsItemType>
    isAuth: boolean | null
}

type mapDispatchToPropsType = {

}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {

    }
}

export const DialogsContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs)
