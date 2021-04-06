import React from "react";
import MyPost from "./Post/MyPost";
import s from "./MyPosts.module.sass"
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {PostType} from "../../../types/types";
import {Button} from "../../common/Button/Button";


export type MyPostsType = {
    posts: Array<PostType>
    addPostAC: (formData: string) => void
    isAuth: boolean | null
    photo?: string
}

const maxLength40 = maxLengthCreator(40)

const MyPosts = React.memo(({posts, addPostAC, isAuth, photo}: MyPostsType) => {
    let newPosts = posts.map(p => <MyPost key={p.id} id={p.id} message={p.message} like={p.like} photo={photo}/>)

    console.log("photo", photo)
    const onSubmit = (value: PostsFormType) => {
        addPostAC(value.newPostText)
    }

    if (!isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.posts}>
            <PostsFormRedux onSubmit={onSubmit}/>
            <div className={s.posts_item}>
                {newPosts}
            </div>
        </div>
    )
})

export type PostsFormType = {
    newPostText: string
}

export const PostsForm: React.FC<InjectedFormProps<PostsFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.posts_form}>
                <Field
                    component={Textarea}
                    name={"newPostText"}
                    placeholder={"Empty"}
                    className={s.posts_textarea}
                    validate={[requiredField, maxLength40]}
                />
                <div className={s.button_block}>
                    <Button style={s.button_size}>Add post</Button>
                </div>
            </div>
        </form>
    )
}

export const PostsFormRedux = reduxForm<PostsFormType>({
    form: 'newPostText'
})(PostsForm)

export default MyPosts

