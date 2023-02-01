import type {NextPage} from 'next'
import React, {useEffect, useState} from "react";
import Search from "../app/component/Search/Input";
import useSWR from 'swr'
import Navbar from '../app/component/Navbar/Navbar';
import WordContent from "../app/component/Word-Content/WordContent";
import callApi from "../app/helper/callApi";
import {useQuery} from "@tanstack/react-query";
const Home: NextPage = () => {
    const [darkToggle, setDarkToggle] = useState(false)
    const [fontFamily, setFontFamily] = useState('serif')
    const [term, setTerm] = useState('dictionary')
    const { isLoading, error, data,status , refetch,} = useQuery({
        queryKey: ['SearchKey',term],
        queryFn: async () =>
           await callApi().get(`/v2/entries/en/${term}`).then(
                (res) => res.data,
            ),

    })

    useEffect(()=>{
        refetch()
    },[term])
    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setFontFamily(e.target.value)
    }

    const onSearchedWord = (text: React.SetStateAction<string>) => {
        setTerm(text)
    }
    console.table(data)
    return (
        <div className={`${darkToggle && 'dark'}`}>
            <main className={"dark:bg-black min-h-screen"} style={{fontFamily}}>
                <Navbar darkToggle={darkToggle}
                        fontFamily={fontFamily}
                        handleChange={handleChange}
                        setDarkToggle={() => setDarkToggle(!darkToggle)}/>
                <section className={"container-app"} id="search">
                    {/* @ts-ignore*/}
                    <Search onChangeHandler={onSearchedWord}/>
                </section>
                <WordContent loading={isLoading}  wordDetails={data} />
            </main>
        </div>
    )
}

export default Home
