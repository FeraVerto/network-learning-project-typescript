import React, {useMemo} from "react";
import MyPost from "./Post/MyPost";
import s from "./MyPosts.module.sass"
import {PostType} from "../../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


export type MyPostsType = {
    posts: Array<PostType>
    addPostAC: (formData: string) => void
    isAuth: boolean | null
}

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo(({posts, addPostAC, isAuth}: MyPostsType) => {
    let newPosts = posts.map(p => <MyPost key={p.id} id={p.id} message={p.message} like={p.like}/>)

    const onSubmit = (value: PostsFormType) => {
        addPostAC(value.newPostText)
    }

    if (!isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.posts}>
            <PostsFormRedux onSubmit={onSubmit}/>
            <div>
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
                    validate={[requiredField, maxLength10]}
                />
                <div className={s.button_block}>
                    <button className={s.posts_button}>Add post</button>
                </div>
            </div>
        </form>
    )
}

export const PostsFormRedux = reduxForm<PostsFormType>({
    form: 'newPostText'
})(PostsForm)

export default MyPosts

