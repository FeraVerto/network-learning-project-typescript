import React from "react";
import MyPost from "./Post/MyPost";
import s from "./MyPosts.module.sass"
import {PostType} from "../../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/Preloader/FormsControls/FormsControls";


export type MyPostsType = {
    posts: Array<PostType>
    addPostAC: (formData: string) => void
    isAuth: boolean | null
}

const maxLength10 = maxLengthCreator(10)

const MyPosts: React.FC<MyPostsType> = (props) => {
    let newPosts = props.posts.map(p => <MyPost key={p.id} id={p.id} message={p.message} like={p.like}/>)

    const onSubmit = (value: PostsFormType) => {
        props.addPostAC(value.newPostText)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.my_post}>
            <div className={s.posts_block}>
                <PostsFormRedux onSubmit={onSubmit}/>
                <div>
                    {newPosts}
                </div>
            </div>
        </div>
    )
}

export type PostsFormType = {
    newPostText: string
}

export const PostsForm: React.FC<InjectedFormProps<PostsFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.posts}>
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


// 2nd root of 256 is 16
// 4th root of 256 is 4
// 8th root of 256 is 2

/*function perfectRoots(n) {
    if (!Number.isInteger(n)) {
        return
    } else {
        let sqrt = Math.sqrt(n)
        if (!Number.isInteger(sqrt)) {
            return
        } else {
            console.log(sqrt)
            perfectRoots(sqrt)
        }
    }
}

perfectRoots(256) // returns true
perfectRoots(1000) // returns true
perfectRoots(6561) // returns true*/
