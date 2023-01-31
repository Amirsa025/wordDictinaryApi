import React, {useState} from 'react';
import Toggles from "../../ui/Toggle/toggle";
interface INavProps {
    darkToggle:boolean,
    setDarkToggle:any,
    handleChange:any,
    fontFamily:string,

}
const Navbar:React.FC<INavProps> = ({darkToggle,fontFamily,handleChange,setDarkToggle}) => {
    return (
        <>
            <header className={`px-6 py-12 md:px-[200px]`}>
                <div className={"flex items-center justify-between"}>
                    <div className="dictionary_Icons">
                        <i className="ri-book-2-line dark:text-[#3a3a3a]  text-[60px] text-gray-500"></i>
                    </div>
                    <div className={"flex items-center justify-between ml-12"}>
                        <div className={"flex items-center justify-between"}>
                            <div className="relative  w-32">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                     className="absolute top-0 bottom-0 w-6 h-6 my-auto text-indigo-800 right-2.5">
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                                          fill="rgba(155,89,182,1)"/>
                                </svg>
                                <form  >
                                    <select
                                        name='option'
                                        id='option'
                                        value={fontFamily}
                                        onChange={handleChange}
                                        className="w-full focus-visible:outline-0 dark:text-white dark:bg-black p-2.5 text-gray-500 bg-white  appearance-none focus-visible:border-0 focus:border-0">
                                        <option value='not-serif'>Serif</option>
                                        <option value='sans-serif'>Sans Serif</option>
                                        <option value='cursive'>Monospace</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div className=" border-l  h-12 flex items-center w-full justify-between pl-8">
                            {/* eslint-disable-next-line react/jsx-no-undef */}
                            <div className=" flex items-center ">
                                <Toggles darkToggle={darkToggle} setDarkToggle={setDarkToggle}/>
                                <div className="px-6 ">
                                    {
                                        darkToggle ? <i className="ri-sun-fill text-[28px] text-yellow-500"></i> :
                                            <i className="ri-moon-line text-[28px] text-gray-400 "></i>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
