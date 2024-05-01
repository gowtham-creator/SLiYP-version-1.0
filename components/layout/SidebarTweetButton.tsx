import { useRouter } from "next/router";
import { FaFeather } from "react-icons/fa";

const SidebarTweetButton = () => {
    const router=useRouter();
    return ( <div onClick={()=>{router.push('/')}}>
        <div className="mt-6 lg:hidden rounded-lg  h-4 w-4 p-4 flex items-center justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... hover:bg-opacity-80 transition cursor-pointer">
            <FaFeather size={24} color="white"/>
        </div>
        <div className="mt-6
        hidden
        lg:block
        px-4
        py-2
        rounded-full
        bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...
        transition
        hover:bg-opacity-90
        cursor-pointer
        
        ">
            <p className="hidden lg:block font-semibold text-white test-[20px] text-center">Post Something</p>
        </div>
    </div> );
}
 
export default SidebarTweetButton;