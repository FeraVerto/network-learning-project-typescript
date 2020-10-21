import s from "../Profile.module.sass";
import React from "react";

export const ProfileInfo = () => {
    return (<>
            <div className={s.img_block}>
                <img
                    src="https://avatars.mds.yandex.net/get-zen_doc/1574327/pub_5e0459a9e6cb9b00b1dc0e68_5e047b6998930900b256b17c/scale_1200"
                    alt="Инженер"/>
            </div>
            <div>
                ava + descriptions
            </div>
        </>
    )
}