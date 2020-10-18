import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.sass";
import osoba from "../../assets/image/osoba.png";

const Dialogs = () => {
    return (
        <ul className={s.list}>

            <NavLink to="/messages" className={s.link}>
                <li className={s.item}>
                    <div className={s.user_avatar}>
                        <img src={osoba} alt="avatar"/>
                    </div>
                    <div className={s.message}>
                        <div className={s.user_name}>Особа</div>
                        <div className={s.last_message}>Last message</div>
                    </div>
                </li>
            </NavLink>
            <NavLink to="/messages" className={s.link}>
                <li className={s.item}>
                    <div className={s.user_avatar}>
                        <img src={osoba} alt="avatar"/>
                    </div>
                    <div className={s.message}>
                        <div className={s.user_name}>Инженер</div>
                        <div className={s.last_message}>Last message</div>
                    </div>
                </li>
            </NavLink>
            <NavLink to="/messages" className={s.link}>
                <li className={s.item}>
                    <div className={s.user_avatar}>
                        <img src={osoba} alt="avatar"/>
                    </div>
                    <div className={s.message}>
                        <div className={s.user_name}>Нателла Наумовна</div>
                        <div className={s.last_message}>Last message</div>
                    </div>
                </li>
            </NavLink>
            <NavLink to="/messages" className={s.link}>
                <li className={s.item}>
                    <div className={s.user_avatar}>
                        <img src={osoba} alt="avatar"/>
                    </div>
                    <div className={s.message}>
                        <div className={s.user_name}>Бандитник</div>
                        <div className={s.last_message}>Last message</div>
                    </div>
                </li>
            </NavLink>
            <NavLink to="/messages" className={s.link}>
                <li className={s.item}>
                    <div className={s.user_avatar}>
                        <img src={osoba} alt="avatar"/>
                    </div>
                    <div className={s.message}>
                        <div className={s.user_name}>Катамаранов</div>
                        <div className={s.last_message}>Last message</div>
                    </div>
                </li>
            </NavLink>
        </ul>
    )
}


export default Dialogs;
