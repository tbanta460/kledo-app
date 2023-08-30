import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../globalState/Auth";
import { BiLogIn } from "react-icons/bi"
import { BsTruck } from "react-icons/bs"
import { AiOutlineHome } from "react-icons/ai"
import AccessControl, { AuthRestrict } from "../globalState/AccessControl";
const Sidebard = ({children}) => {
    const navigate = useNavigate()
    const location = useLocation();
    const { userData, onLogout } = useAuth();
    const menu = [
        {
            name:"Dashboard",
            code:"dashboard",
            path:"/dashboard"
        },
        {
            name:"Shipping Company",
            code:"shipping_company",
            path:"/shipping-company"
        }
    ]
    return(
        <>
        <AccessControl forbidWhen={AuthRestrict.LOGGED_OUT}>
            <div>
                <div className="w-full bg-blue-500 flex justif-between py-[20px] relative z-10">
                    <div>
                        <h3 className="text-3xl font-bold text-white">{userData?.userData?.name ?? "No Name"}</h3>
                    </div>
                </div>
            </div>
            <div className="flex ">
                <div className="container-sidebar h-screen w-[20%] shadow-lg relative">
                    <div className="mt-[1rem]">
                        <ul className="flex flex-col gap-[20px] items-start">
                            {
                                menu.map((data) => (
                                    <li className="w-full" key={data.code}>
                                        <Link to={data.path} className={`flex items-center border-t-2 border-b-2 pl-[10px] py-[20px] cursor-pointer hover:bg-blue-200 font-bold w-full text-start ${location.pathname === data.path ? "text-blue-500" : ""} flex w-full`}>
                                            {data.code === "dashboard" ? <AiOutlineHome className="w-[30px] h-[30px] mr-[10px]"/> : <BsTruck className="w-[30px] h-[30px] mr-[10px]"/>} {data.name}
                                        </Link>
                                    </li>
                                ))
                            }
                            <li className={`bg-blue-500 text-white border-t-2 border-b-2 pl-[10px] py-[20px] cursor-pointer font-bold w-full text-start flex w-full absolute left-0 bottom-0 flex items-center`} onClick={() => {
                                onLogout()
                                navigate("/login")
                            }}>
                                <BiLogIn className="w-[30px] h-[30px] mr-[10px]"/> Logout
                            </li>
                        </ul>
                    </div>
                </div>
                {children}
            </div>
        </AccessControl>
        </>
    )
}

export default Sidebard