import type {NextPage} from 'next'
import React, {useEffect, useState} from "react";
import Navbar from '../app/component/Navbar/Navbar';
import WordContent from "../app/component/Word-Content/WordContent";
import callApi from "../app/helper/callApi";
import {useQuery} from "@tanstack/react-query";
import SearchKeyWord from "../app/component/Search";

const Home: NextPage = () => {
    const [darkToggle, setDarkToggle] = useState(false)
    const [fontFamily, setFontFamily] = useState('Monospace')
    const [term, setTerm] = useState('dictionary')
    const { status, data,error,isFetching} = useQuery({
        queryKey: ['SearchKey',term],
        queryFn: async () =>
           await callApi().get(`/v2/entries/en/${term}`).then(
                (res) => res.data,
            ),

    })


    useEffect(()=>{
        setTerm(term)
    },[])
    const onSearchedWord = (text: React.SetStateAction<string>) => {
        setTerm(text)
    }
    return (
        <div className={`${darkToggle && 'dark'}`}>
            <main className={"dark:bg-black min-h-screen"} style={{fontFamily}}>
                <Navbar darkToggle={darkToggle}
                        fontFamily={fontFamily}
                        handleChange={(event: { target: { value: React.SetStateAction<string>; }})=>setFontFamily(event.target.value)}
                        setDarkToggle={() => setDarkToggle(!darkToggle)}/>
                <section className={"container-app w-"} id="search">
                    <SearchKeyWord onChangeHandler={onSearchedWord}/>
                </section>

                <WordContent isFetching={isFetching} status={status}  error={error} wordDetails={data} />
            </main>
        </div>
    )
}

export default Home
