import React from "react";
import {AppStateType, DialogsItemType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

type mapStateToPropsType = {
    dialogs: Array<DialogsItemType>
    isAuth: boolean | null
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        isAuth: state.auth.isAuth
    }
}

export const DialogsContainer = connect<mapStateToPropsType, null, {}, AppStateType>(mapStateToProps, null)(Dialogs)
