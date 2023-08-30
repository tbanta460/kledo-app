import React from "react"
import { Formik, Form, Field } from "formik"
const ShippingList = ({setSearchState, dataList, setType, isLoading, error, setDataUser}) => {
    return (
        <>
            <div className="w-[80%]">
                                <div className="w-[80%] mx-auto rouded-lg shadow-lg mt-[5rem] pb-[50px]">
                                    <div className="flex justify-between">
                                        <h3 className="text-start text-3xl font-bold ml-[10px] flex">Shipping Comps <span className="block text-center bg-blue-500 rounded-full py-0 my-0 font-300 h-[40px] w-[40px] text-white cursor-pointer ml-[10px]" onClick={() => setType("add")}>+</span></h3>
                                        <Formik
                                            initialValues={{
                                                name:""
                                            }}
                                            onSubmit={({name}) => {
                                                setSearchState(name)
                                            }}
                                        >
                                            {({values, setFieldValue}) => {
                                                return (
                                                    <Form>
                                                        <Field type="text" id="name" name="name" placeholder="Cari" className="lg:py-[5px] lg:px-[15px] py-[5px] px-[15px] rounded-[10rem] outline-none text-[rgb(0,0,0,0.6)] border-2 mr-[10px]" onChange={(e) => {
                                                            setSearchState(e.target.value)
                                                            setFieldValue("name", e.target.value)
                                                        }}/>
                                                    </Form>
                                                )
                                            }}
                                        </Formik>
                                    </div>
                                    <div>
                                        <div className="w-full bg-[#EBF1F5] mt-[50px]">
                                            <h5 className="text-start ml-[20px] font-bold text-2xl cursor-pointer" >Name</h5>
                                        </div>
                                        {error && (
                                            <span>Server error...</span>
                                        )}
                    
                                        {isLoading && (
                                            <span>Loading...</span>
                                        )}
                                                
                                        {
                                            dataList && dataList?.data?.length === 0 && (
                                                <span>Data not found</span>
                                            )
                                        }
                                       
                                        {dataList && dataList?.data?.map((data) => (
                                            <div key={data.id} className="text-start border-b-2 pt-[10px] ml-[10px] cursor-pointer" onClick={() => {
                                                setDataUser(data)
                                                setType("edit")
                                                }}>
                                                <h5>{data?.name}</h5>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
        </>
    )
}

export default ShippingList