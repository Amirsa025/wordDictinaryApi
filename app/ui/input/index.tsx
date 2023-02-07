import React from 'react';
import {InputProps} from "./inputType";
const Input = ({ search, register, required }: InputProps) => {
    return (
        <>
            <input {...register(search, { required })}
                   placeholder={"Enter Key word..."}
                   className="search font-[Cooper]   dark:text-purple-100 bg-transparent dark:bg-[#3a3a3a]
                   focus-visible:outline-0 w-10/12 h-[60px]  focus:outline-0
                   rounded-[20px] px-6" />
        </>
    );
};

export default Input;
