import React from "react";
import {AppStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {DialogsItemType} from "../../types/types";

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

export default connect<mapStateToPropsType, null, {}, AppStateType>(mapStateToProps, null)(Dialogs)
