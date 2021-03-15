import React, {useMemo} from "react";
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

const MyPosts = React.memo((props: MyPostsType) => {
    let newPosts = props.posts.map(p => <MyPost key={p.id} id={p.id} message={p.message} like={p.like}/>)

    const onSubmit = (value: PostsFormType) => {
        props.addPostAC(value.newPostText)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

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

}*/
/*let num = (a) => {
    return +a
}
let arr = ["1", "2", "3"]
let toNumberArray = (stringarray) => stringarray.map(num)

toNumberArray(arr)*/

/*numbers[numbers.length - 1] **/
/*function evenLast(numbers) {
    return numbers.length === 0
        ? 0
        : numbers[numbers.length - 1] *
        numbers.reduce((num, acc, i) =>
            i % 2 === 0 ? num + acc : num + 0, 0)
}

evenLast([2, 3, 4, 5])


function sequence(x) {
    let res = []
    for (let i = 1; i <= x; i++) {
        res.push(i)
    }
    return res.sort()
}

sequence(16)*/
//result = [1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8, 9]
