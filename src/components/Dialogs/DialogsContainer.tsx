import React from "react";
import {AppStateType, DialogsItemType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


type mapStateToPropsType = {
    dialogs: Array<DialogsItemType>
}

type mapDispatchToPropsType = {

}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {

    }
}

export const DialogsContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs)
