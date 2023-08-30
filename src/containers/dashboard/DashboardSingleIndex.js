import Sidebard from "../../components/Sidebard";
import { useAuth } from "../../globalState/Auth";
const DashboardSingleIndex = () => {
    const {userData} = useAuth()
    return (
        <>
            <Sidebard>
                <div className="w-[80%] ">
                    <div className="w-[80%] mx-auto rouded-lg shadow-lg mt-[5rem] h-[25rem]">
                        <h3 className="text-start text-3xl font-bold ml-[10px]">Dashboard</h3>
                        <div className="text-center font-bold bg-[#EBF1F5] w-[70%] rounded-lg mx-auto mt-[30px] py-[5rem]">
                            <h3 className="text-2xl">Selamat Datang</h3>
                            <h3 className="text-2xl ">{userData?.userData?.name ?? "No Name"}</h3>
                        </div>
                    </div>
                </div>
            </Sidebard>
        </>
    )
}

export default DashboardSingleIndex