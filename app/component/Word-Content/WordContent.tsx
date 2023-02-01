import React, {useRef} from 'react';
import {PuffLoader} from "react-spinners";

interface WordConentProps {
    wordDetails: any;
    loading: boolean;
}
const SearchResult: React.FC<WordConentProps> = ({wordDetails,loading}) => {

    const audioRef = useRef(null)
    const handleClick = () => {
        // @ts-ignore
        audioRef?.current?.play()
    }
    return (
        <div>
            {loading ? (
                    <div className='flex items-center justify-center'>
                        <PuffLoader color="#36d7b7" />
                    </div>
                ) :
                (<>
                    {
                        wordDetails.map((item: any,id:any) =>{
                                return (
                                    <div key={id}>
                                        <section className={"px-10 md:px-[200px] py-8 flex items-center justify-between"}>
                                            <div>
                                                <div
                                                    className="font-[Cooper] font-thin  text-[30px] dark:text-gray-200">{item.word}</div>
                                                <h6 className="text-purple-500 py-2 text-[20px] ">{item.phonetic}</h6>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={handleClick}
                                                    className="w-16 h-16 rounded-full bg-purple-200 hover:bg-purple-600 hover:text-purple-200  text-purple-600 ">
                                                    <i className="ri-play-fill text-[30px] "></i>
                                                </button>
                                                <audio ref={audioRef}
                                                       src={item.phonetics[1]?.audio}></audio>
                                            </div>
                                        </section>
                                        <section className={"container-app flex items-center md:w-full"}>
                                            <div className="w-full border border-y-gray-300 pl-2 dark:bg-gray-300"></div>
                                            <h2 className="font-[Cooper] absolute  bg-white dark:bg-black dark:text-gray-100 w-[5.5rem]  h-14   text-[#1a1a1a] text-[1.5rem] pt-2">  {item.meanings[0]?.partOfSpeech}</h2>
                                        </section>
                                        <section className={"container-app py-12"}>
                                            <div className={" pt-14"}>
                                                <h4 className="text-gray-500 font-[serif] text-xl font-medium pb-2">Meaning</h4>
                                                <ul className="">
                                                    {item.meanings[0]?.definitions.map((item: { definition: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
                                                        <li key={index} className={"pt-6  md:px-8 flex items-start "}>
                                                            <div className="w-2 h-2 rounded-full bg-purple-900 px-1  py-1 mt-2"></div>
                                                            <p className="pl-4 dark:text-gray-400 leading-8 "> {item.definition}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className={"flex items-center gap-24 pt-12"}>
                                                <div>
                                                    <span className="font-semibold dark:text-gray-200 text-[20px]">   Synonyms:</span>{' '}
                                                    {item.meanings[0]?.synonyms.map((item: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
                                                        <span key={index} className='text-[22px] text-purple-600 px-8'>{item}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </section>
                                        <section className={"container-app flex items-center md:w-full"}    >
                                            <div className="w-full border border-y-gray-300 pl-2 dark:bg-gray-300"></div>
                                            <h3 className="font-[Cooper] absolute  bg-white dark:bg-black dark:text-gray-100 w-[5.5rem]  h-14   text-[#1a1a1a] text-[1.5rem] pt-2">verbs</h3>
                                        </section>
                                        <section className={"container-app py-4"}>
                                            <div className={" pt-14"}>
                                                <h4 className="text-gray-500 font-[serif] text-xl font-medium pb-2">Meaning</h4>
                                                <ul className="">
                                                    {item.meanings[1]?.definitions.map((item: { definition: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
                                                        <li className={"pt-6  md:px-8 flex items-start "} key={index}>
                                                            <div className="w-2 h-2 rounded-full bg-purple-900 px-1  py-1 mt-2"></div>
                                                            <p className="pl-4 dark:text-gray-400 leading-8 ">
                                                                {item.definition}
                                                            </p>

                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </section>
                                    </div>
                                )
                        })
                    }
                </>)

            }
        </div>
    );


}

export default SearchResult;
