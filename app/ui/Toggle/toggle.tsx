import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
    interface ItoggleProps {
        darkToggle:any
        setDarkToggle:any
    }
const Toggles:React.FC<ItoggleProps>=({darkToggle,setDarkToggle})=> {

    return (
        <Switch
            checked={darkToggle}
            onChange={setDarkToggle}
            className={`${
                darkToggle ? 'bg-purple-600' : 'bg-gray-500'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
            <span className="sr-only">Enable notifications</span>
            <span
                className={`${
                    darkToggle ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
        </Switch>
    )
}
export default  Toggles
