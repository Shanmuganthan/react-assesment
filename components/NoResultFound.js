import React from 'react'

export default function NoResultFound() {
    return (
        <div className="flex no-result-div">
            <div className="text-center">
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">No Result </h1>
                <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find any result.</p>
            </div>
        </div>
    )
}
