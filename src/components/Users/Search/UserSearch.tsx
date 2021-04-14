import React from "react";
import {useFormik} from "formik";

export const Search = (props: any) => {

    const formik = useFormik({
        initialValues: {
            term: ''
        },
        onSubmit: values => {
            props.onSearch(values)
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input id="term"
                   name="term"
                   type="text"
                   onChange={formik.handleChange}
                   value={formik.values.term}/>
            <button>Search</button>
        </form>
    )
}