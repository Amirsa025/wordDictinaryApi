import React from 'react';
import Input from "../../ui/input";
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm} from "react-hook-form";
import {IFormValues, IsearchProps, schema} from "./search";



const SearchKeyWord: React.FC<IsearchProps> = ({onChangeHandler}) => {
    const { register, handleSubmit,formState: { errors } } = useForm<IFormValues>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<IFormValues> = data => {
        onChangeHandler(data.search);
    };
    return (
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full  bg-gray-200 rounded-[20px] h-[60px]  dark:bg-[#3a3a3a] flex items-center justify-between">
                    <Input register={register} required={true} search={"search"}/>
                    <button
                        type='submit'
                        value='submit'
                    >
                        <i className="ri-search-line text-[2rem] dark:text-purple-400 px-4 text-purple-400 " ></i>
                    </button>
                </form>
                <p className={"text-red-500 font-bold pl-6 pt-4"}>{errors.search?.message}</p>
            </div>

    );
};

export default SearchKeyWord;
