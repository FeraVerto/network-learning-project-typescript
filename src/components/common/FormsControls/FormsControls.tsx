import React from 'react'
import s from './FormsControls.module.css'


export const FormControl = ({input, meta: {error, touched}, child, el, children, ...props}: any) => {
    const hasError = error && touched
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
                {/*{React.createElement(el, {...input, ...props})}*/}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>

}
