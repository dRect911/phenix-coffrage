import {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faClose} from "@fortawesome/free-solid-svg-icons"

export default function Navbar(){

    const [nav, setNav] = useState(false)

    const handleNav = ()=>{
        setNav(!nav)
    };

    return(
        <nav className="flex h-24 w-full justify-between items-center mx-auto px-4 bg-indigo-700 text-white">
            {/* Desktop view */}
            <h1 className="ml-2 w-full font-bold text-3xl">PhenixCoffrage</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contacts</li>
            </ul>

            {/* Mobile view */}
            <div className="align-right p-2 block md:hidden" onClick={handleNav}>
                {!nav ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-indigo-500 bg-indigo-700 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className="w-full font-bold text-3xl ml-6 mt-6">Phenix</h1>
                <h1 className="w-full font-bold text-3xl ml-6 mb-4">Coffrage</h1>
                <ul className="p-4 uppercase text-white">
                    <li className="p-4 border-b border-indigo-500">Home</li>
                    <li className="p-4 border-b border-indigo-500">Company</li>
                    <li className="p-4 border-b border-indigo-500">Resources</li>
                    <li className="p-4 border-b border-indigo-500">About</li>
                    <li className="p-4 border-b border-indigo-500">Contact</li>
                </ul>
            </div>
        </nav>
    )
}