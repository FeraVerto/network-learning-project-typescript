import React from "react";
import {FriendType} from "../../../redux/redux-store";
import {Avatar} from "@material-ui/core";
import s from "./Friends.module.sass";
/*import { AvatarGroup } from '@material-ui/lab';*/

type FriendsType = {
    friends: Array<FriendType>
}


export const Friends: React.FC<FriendsType> = (props) => {

    let friendsList = props.friends.map(f => <div key={f.id}>
        <Avatar className={s.avatar} src={f.avatar} alt={f.name}/>
    </div>)

    return (
        <div></div>
        /*<AvatarGroup className={s.friends_block} spacing={0} max={3}>
            {friendsList}
        </AvatarGroup>*/
    )
}