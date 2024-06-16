import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaReact } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                crossorigin="anonymous"
                referrerpolicy="no-referrer"
            />
            <link rel="stylesheet" href="css/styles.css" />
            <title>React Jobs | Become a React Developer</title>
            <nav className="bg-indigo-700 border-b border-indigo-500">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div
                            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                        >
                            {/* <!-- Logo --> */}
                            <Link className="flex flex-shrink-0 items-center mr-4" to="/index">
                                <FaReact size={28} color='white' />

                                <span className="hidden md:block text-white text-2xl font-bold ml-2"
                                >React Jobs
                                </span                                >
                            </Link>
                            <div className="md:ml-auto">
                                <div className="flex space-x-2">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => (isActive ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" :
                                            "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2")}
                                    >Home</NavLink>

                                    <NavLink
                                        to="/jobs"
                                        className={({ isActive }) => (isActive ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" :
                                            "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2")}                                    >Jobs</NavLink>
                                    <NavLink
                                        to="/add-job"
                                        className={({ isActive }) => (isActive ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" :
                                            "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2")}                                    >Add Job
                                    </NavLink >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar
