import React from "react";
import {SidebarFriendsType} from "../../../redux/state";
import {Avatar} from "@material-ui/core";
import s from "./Friends.module.sass";
import { AvatarGroup } from '@material-ui/lab';

export const Friends: React.FC<SidebarFriendsType> = (props) => {

    let friendsList = props.friends.map(f => <div key={f.id}>
        <Avatar className={s.avatar} src={f.avatar} alt={f.name}/>
    </div>)

    return (
        <AvatarGroup className={s.friends_block} spacing={0} max={3}>
            {friendsList}
        </AvatarGroup>
    )
}