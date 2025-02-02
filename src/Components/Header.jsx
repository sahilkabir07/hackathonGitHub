import React from 'react'
import { FaGithub, FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex justify-between h-16 mx-auto">
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">

                        <Link to="/" rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600">Home</Link>
                    </li>
                    <li className="flex">

                        <Link to="/filter" rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600">Filtered Data</Link>
                    </li>



                </ul>

                <div className="flex items-center md:space-x-4">

                    <FaGithub size={60} />
                </div>

            </div>
        </header>
    )
}

export default Header