import React from 'react'

const Navigation = () => {
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            
            <div className="flex items-center">
                <span className="font-bold">Logo</span>
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Name
            </button>
        </nav>
    )
}

export default Navigation