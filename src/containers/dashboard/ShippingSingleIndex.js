import Sidebard from "../../components/Sidebard"
import React, { useState } from "react";
import useShippingList from "../../api/Core/useShippingList";
import ShippingList from "./ShippingList";
import ShippingAdd from "./ShippingAdd";
import ShippingEdit from "./ShippingEdit";
const ShippingSingleIndex = () => {
    const [type, setType] = useState("list");
    const [searchState, setSearchState] = useState("")
    const [dataUser, setDataUser] = useState(null)
    const { data:dataList, isLoading, error } = useShippingList({name:searchState ?? ""});
  
    return (
        <>
            <Sidebard>
                {
                    type === "list" && (
                        <>
                            <ShippingList setDataUser={setDataUser} setSearchState={setSearchState} dataList={dataList} setType={setType} isLoading={isLoading} error={error}/>
                        </>
                    )
                    
                }
                {
                    type === "add" && (
                        <>
                            <ShippingAdd setType={setType}/>
                        </>
                    )
                }
                {
                    type === "edit" && dataUser && (
                        <ShippingEdit dataUser={dataUser} setType={setType} setDataUser={setDataUser}/>
                    )
                }
            </Sidebard>
        </>
    )
}

export default ShippingSingleIndex