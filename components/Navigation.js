import Link from 'next/link'
import React from 'react'

export const Navigation = () => {
    return (
        <nav className="bg-gray-800 p-2 mt-0 w-full">
            <div className="container mx-auto flex flex-wrap items-center">
                <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                    <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
                        <span className="text-2xl pl-2"><i className="em em-grinning"></i> Next+React</span>
                    </a>
                </div>
                <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                    <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                        <li className="mr-3">
                            <Link className="inline-block py-2 px-4 text-white no-underline" href={"/"}>Home</Link>
                        </li>
                        <li className="mr-3">
                            <Link className="inline-block py-2 px-4 text-white no-underline" href={"/wishlists"}>Wishlist</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

