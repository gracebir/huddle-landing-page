import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'

const schema = yup.object().shape({
    email: yup.string().email("check your email please").required("required")
})

const Form = () => {
    const { errors, values, handleChange, touched, handleSubmit, handleBlur } = useFormik({
        initialValues: {
            email: ''
        },
        validateOnBlur: true,
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: schema
    })
    return (
        <form onSubmit={handleSubmit} className='mt-2 w-full flex lg:items-start items-end flex-col lg:flex-row gap-4 lg:gap-12'>
            <div className='lg:max-w-xs w-full flex-1'>
                <input
                    id='email'
                    name='email'
                    type="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={`outline-none rounded-md ${touched.email && errors.email ? `border border-color-red`:`border-none`} py-3 px-2 text-color-dark-cyan w-full`} />
                {touched.email && (<span className='text-color-red text-xs lg:text-sm'>{errors.email}</span>)}
            </div>
            <button className='py-3 bg-color-pink font-bold rounded-md hover:bg-color-light-pink px-8 w-1/2 lg:w-auto'>Subscribe</button>
        </form>
    )
}

export default Form
