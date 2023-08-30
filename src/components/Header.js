import React from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
    const location = useLocation()
    return (
        <>
            <div>
                <div className="w-full bg-blue-500 py-[20px] px-[10px] flex justify-between">
                    <h3 className="text-white text-3xl font-bold">KLEDO TEST</h3>
                    <ul className="flex text-white gap-[20px]">
                        <li>
                            <Link to="/profile" className={`py-[20px] px-[30px] ${location.pathname === "/profile" && "bg-blue-200"}`}>Profile</Link>
                        </li>
                        <li>
                            <Link to={"/login"} className={`py-[20px] px-[30px] ${location.pathname === "/login" && "bg-blue-600"}`}>Login</Link>
                        </li>
                      
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header