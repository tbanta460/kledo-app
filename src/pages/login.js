import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import useLoginMutation from "../api/Auth/useLoginMutation";
import { useAuth } from "../globalState/Auth";
import { useNavigate, Navigate } from "react-router-dom";
import Header from "../components/Header";
const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Please input your email"),
    password: Yup.string().min(6, "Password too short").required("Please input your password")
});
const initialValues = {
    email: "",
    password: ""
}

const Login = () => {
    const navigate = useNavigate()
    const { onLogin, onUser, loggedIn } = useAuth();
    const {mutateAsync} = useLoginMutation();
    const onSubmit = ({email, password}) => {
        return mutateAsync({
            email: email,
            password:password
        })
        .then((res) => {
            onLogin(res.data.data.access_token);
            onUser(res.data.user);
            console.log("checking yah")
            return navigate("/dashboard")
        })
        .catch((error) => console.log(error, "check error"))
    }
    if(loggedIn){
        return <Navigate to="/dashboard" />
    }
    return (
        <>
            <Header />
            <div className="w-[50%] bg-white shadow-md rounded-lg mx-auto">
                <div className="w-[80%] mx-auto mt-[10rem] pt-[5rem]">
                    <h3 className="text-center font-bold text-5xl">Login</h3>
                    <div className="mt-[50px]">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {({values, setFieldValue, handleSubmit}) => {
                                return (
                                    <>
                                        <Form onSubmit={handleSubmit}>
                                            <div className="flex flex-col items-start ">
                                                <label htmlFor={"email"}>Email <span className="text-red-500">*</span></label>
                                                <Field type="email" id="email" name="email" placeholder="Input email here..." className="lg:py-[5px] lg:px-[15px] py-[5px] px-[15px] rounded-[10rem] outline-none text-[rgb(0,0,0,0.6)] border-2 w-full" />
                                                <ErrorMessage name="email" render={(errors) => {
                                                    return (
                                                        <div className="text-red-500">{errors}</div>
                                                    )
                                                }} />
                                            </div>
                                            <div className="flex flex-col items-start mt-[20px]">
                                                <label htmlFor={"password"}>Password <span className="text-red-500">*</span></label>
                                                <Field type="password" id="uspasswordername" name="password" placeholder="Input password here..." className="lg:py-[5px] lg:px-[15px] py-[5px] px-[15px] rounded-[10rem] outline-none text-[rgb(0,0,0,0.6)] border-2 w-full" />
                                                <ErrorMessage name="password" render={(errors) => {
                                                    return (
                                                        <div className="text-red-500">{errors}</div>
                                                    )
                                                }} />
                                            </div>
                                            <div>
                                                <button type="submit" className="bg-[#0B7FD0] py-[8px] px-[35px] rounded-[50px] outline-none w-full border-0 my-[50px] text-white font-bold">Submit</button>
                                
                                            </div>
                                        </Form>
                                    </>
                                )
                            }}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login