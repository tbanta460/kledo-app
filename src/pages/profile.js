import React from "react";
import Header from "../components/Header";
const Profile = () => {
    return (
        <>
            <Header />
            <div className="mt-[5rem]">
                <h3 className="text-3xl font-bold">Profile</h3>
                <div className="w-[50%] mx-auto bg-white shadow-lg rounded-lg flex justify-between py-[40px] px-[20px]">
                    <div className="text-start flex flex-col gap-[20px] w-[70%]">
                        <div className="flex flex-col justify-start items-start">
                            <span className="text-gray-500 text-2xl font-bold">Nama</span>
                            <span className="text-xl font-bold">Teuku Banta Karollah</span>
                        </div>
                        <div className="flex flex-col justify-start items-start">
                            <span className="text-gray-500 text-2xl font-bold">Alamat</span>
                            <span className="text-xl font-bold">DKI Jakarta, Jakarta Pusat, Kel:Rawasari, Kec:Cempaka Putih</span>
                        </div>
                        <div className="flex flex-col justify-start items-start">
                            <span className="text-gray-500 text-2xl font-bold">No. HP</span>
                            <span className="text-xl font-bold">083878832756</span>
                        </div>
                        <div className="flex flex-col justify-start items-start">
                            <span className="text-gray-500 text-2xl font-bold">Email</span>
                            <span className="text-xl font-bold">bantakarollah@gmail.com</span>
                        </div>
                        <div className="flex flex-col justify-start items-start">
                            <span className="text-gray-500 text-2xl font-bold">Motto</span>
                            <span className="text-xl font-bold ">Fokus pada tujuan, dan mengalir tapi tidak tenggelam.</span>
                        </div>
                    </div>
                    <div className="w-max">
                        <img src="/karollah.jpeg" alt="profile" className="block w-[80px] h-[80px] rounded-full"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile