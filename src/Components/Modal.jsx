import React from 'react'

const Modal = ({ img, bio, Repos, followers }) => {
    return (
        <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 dark:bg-gray-50 dark:text-gray-800 mx-auto items-center">
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img src={img} className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{Repos}</span>
                    <h2 className="text-xl font-semibold tracking-wide">{followers}</h2>
                </div>
                <p className="dark:text-gray-800">{bio}</p>
            </div>

        </div>
    )
}

export default Modal