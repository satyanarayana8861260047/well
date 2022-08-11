import React,{useState} from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { Person, Lock } from '@material-ui/icons';
import { useFormik } from "formik";
import * as Yup from 'yup';
import SubmitForm from './SubmitForm';

const Signin = () => {
    const[isSubmitSuccess,setisSubmitSuccess]= useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required
                ("The Email address is required "),
            password: Yup.string().required("Password is required"),
        }),


        onSubmit: (values) => {
            console.log(values);
            setisSubmitSuccess(true)
        },
    });


    return (
        <div className="container">
            <div className=" signin signin_wrapper">
                {
                    isSubmitSuccess ? (<SubmitForm />) : (
                          <form onSubmit={formik.handleSubmit}>
                    <h2>Login</h2>
                    <TextField name="email" type="text"
                        placeholder="User name or Email"
                        className="textField" InputProps={{
                            startAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <Person />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email} />

                    {
                        formik.touched.email && formik.errors.email
                            ? <div className="error_msg">{formik.errors.email}</div> : null
                    }


                    <TextField
                        name="password" type="password"
                        placeholder="Password"
                        className="textField" InputProps={{
                            startAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <Lock />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password} />

                    {
                        formik.touched.password && formik.errors.password
                            ? (<div className="error_msg">{formik.errors.password}</div>) : null
                    }


                    <button type="submit">Sign in</button>
                    <h3> Not a member? <span className ="signup"> Signup now </span></h3>
                </form>
                    )
                }
              
            </div>

        </div>
    )
}

export default Signin