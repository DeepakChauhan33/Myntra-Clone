import logoImg from '../Photos/Myntra_logo.png';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { SlBag } from "react-icons/sl";



const Header = ()=>{
    return(
        <>
            <header className='w-full flex items-center justify-between px-4 shadow-md '>
                <div className='w-16 h-16 ml-20'>
                    <img
                    className='w-full h-full object-contain'
                    src={logoImg} alt="logo Image" />
                </div>


                <div className='w-auto flex gap-8 font-bold text-sm h-[70px] items-center text-center justify-center'>
                    <div className='h-full flex items-center cursor-pointer hover:border-b-2'>MEN</div>
                    <div className='h-full flex items-center cursor-pointer hover:border-b-2'>WOMEN</div>
                    <div className='h-full flex items-center cursor-pointer hover:border-b-2'>KIDS</div>
                    <div className='h-full flex items-center cursor-pointer hover:border-b-2'>HOME</div>
                    <div className='h-full flex items-center cursor-pointer hover:border-b-2'>BEAUTY</div>
                    <div className='h-full flex items-center cursor-pointer hover:border-b-2'>GENZ</div>
                    <div className='h-full flex items-center cursor-pointer hover:border-b-2'>STUDIO<sup className='text-red-600'>NEW</sup></div>
                </div>

                <div>
                    <input 
                    className='border-[1px] w-[450px] p-1 rounded-md outline-line-none'
                    type="search" placeholder="🔍︎ Search for products, brans and more" />

                </div>

                <div className='w-40 '>
                    <ul className='flex w-auto p-2 items-center justify-between gap-2.5'>
                        <li className='flex flex-col items-center justify-center text-[14px] font-semibold cursor-pointer'><CgProfile /> Profile</li>
                        <li className='flex flex-col items-center justify-center text-[14px] font-semibold cursor-pointer'><CiHeart /> Wishlist</li>
                        <li className='flex flex-col items-center justify-center text-[14px] font-semibold cursor-pointer'><SlBag /> Bag
</li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;