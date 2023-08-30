import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup";
import useShippingAdd from "../../api/Core/useShippingAdd";
import { useQueryClient } from "react-query";
const validationSchema = Yup.object().shape({
    name: Yup.string().required("Cannot be empty")
})
const ShippingAdd = ({setType}) => {
    const queryClient = useQueryClient()
    const {mutateAsync} = useShippingAdd()
    return (
        <>
            <div className="w-[80%]">
                <div className="w-[80%] mx-auto rouded-lg shadow-lg mt-[5rem] pb-[50px]">
                    <div className="flex flex-col items-start">
                    <h3 className="text-start text-3xl font-bold ml-[10px] flex">Tambah Shipping Comps</h3>
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={{
                            name:""
                        }}
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

export default ShippingAdd