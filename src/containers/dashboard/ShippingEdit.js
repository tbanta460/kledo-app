import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup";
import useShippingEdit from "../../api/Core/useShippingEdit";
import useShippingDelete from "../../api/Core/useShippingDelete";
import { useQueryClient } from "react-query";
import {BsTrash}from "react-icons/bs";
const validationSchema = Yup.object().shape({
    name: Yup.string().required("Cannot be empty")
})
const initialValues = {
    name:""
}
const ShippingEdit = ({setType, dataUser, setDataUser}) => {
    const queryClient = useQueryClient()
    const {mutateAsync} = useShippingEdit({id:dataUser.id ?? null});
    const {mutateAsync: mutateDelete} = useShippingDelete({id:dataUser.id ?? null});
    const mappedData = {
        ...initialValues,
        name:dataUser.name ?? ""
    }
    const handleDelete = () => {
        mutateDelete().then((res) => {
            queryClient.refetchQueries(["companyList"])
            setType("list")
        })
        .catch((error) => console.log(error, "check error"))
    }
    return (
        <>
            <div className="w-[80%]">
                <div className="w-[80%] mx-auto rouded-lg shadow-lg mt-[5rem] pb-[50px]">
                    <div className="flex flex-col items-start">
                    <div className="text-start text-3xl font-bold ml-[10px] flex">
                        <h3 className="text-start text-3xl font-bold ml-[10px] flex">Edit Shipping Comps </h3>
                        <div className="bg-red-500 w-[50px] h-[50px] rounded-full flex items-center justify-center ml-[10px] cursor-pointer" onClick={handleDelete}>
                            <BsTrash className="text-white"/>
                        </div>
                    </div>
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={mappedData}
                        onSubmit={({name}) => {
                            mutateAsync({
                                name
                            })
                            .then((res) => {
                                queryClient.refetchQueries(["companyList"])
                                setType("list")
                            })
                            .catch((error) => console.log(error, "check error"))
                        }}
                    >
                    {({values, setFieldValue}) => {
                        return (
                            <Form>
                                <div className="flex flex-col items-start mt-[30px] ml-[30px]">
                                    <label htmlFor="name my-0">Name:</label>
                                    <Field type="text" id="name" name="name" placeholder="Input name here..." className=" lg:py-[5px] lg:px-[15px] py-[5px] px-[15px] rounded-[10rem] outline-none text-[rgb(0,0,0,0.6)] border-2 mr-[10px]" />
                                    <ErrorMessage name="name" render={(errors) => {
                                        return (
                                            <div className="text-red-500 text-start">{errors}</div>
                                        )
                                    }} />
                                    <button className="rounded-lg py-[10px] px-[15px] bg-blue-500 text-white mt-[50px]">
                                        Simpan
                                    </button>
                                </div>
                            </Form>
                            )
                        }}
                    </Formik>
                    </div>
                                    
                 </div>
            </div>
        </>
    )
}

export default ShippingEdit