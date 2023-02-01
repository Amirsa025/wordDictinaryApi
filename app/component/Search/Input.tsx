import React, {useState} from 'react';
interface  IsearchProps {
    onChangeHandler:()=>unknown,
    text : string
}
const Search: React.FC<IsearchProps> = ({onChangeHandler}) => {
    const [text, setText] = useState('')
    const onTextSubmit = (e: any) => {
        e.preventDefault()
        // @ts-ignore
        onChangeHandler(text)
    }
    return (
        <form onSubmit={onTextSubmit} className="bg-gray-200 rounded-[20px] h-[60px]  dark:bg-[#3a3a3a] flex items-center justify-between">
            <input type="text" required placeholder={"Enter Key word..."}
                   onChange={(e) => setText(e.target.value)}
                   className="search font-[Cooper]  dark:text-purple-100 bg-transparent dark:bg-[#3a3a3a]
                   focus-visible:outline-0 w-3/4 h-[60px]  focus:outline-0
                   rounded-[20px] px-6"/>
            <button
                type='submit'
                value='submit'
            >
                <i className="ri-search-line text-[2rem] dark:text-purple-400 px-4 text-purple-400 " ></i>
            </button>

        </form>
    );
};

export default Search;
