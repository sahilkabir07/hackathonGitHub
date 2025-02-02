import React from 'react'

const UserCard = ({ name, img, handleApi, description }) => {
    return (
        <div onClick={handleApi} className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
            <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{name}</span>
                <p>⭐{description} stars (Highest repo)</p>
            </div>
        </div>
    )
}

export default UserCard