import { searchArtGallery } from '@/api'
import { COMPILER_NAMES } from 'next/dist/shared/lib/constants';
import Link from 'next/link';
import React from 'react'
import { useSelector, useStore } from 'react-redux';
import { WhichListComponent } from './WhichListComponent';

const CardComponent = ({ data }) => {

    return (
        <div className="max-w-sm flex flex-col bg-white border  rounded-lg shadow  mx-6">
            <Link href={`/art-gallery/${data?.id}`} className=''>
                <img className="rounded-t-lg w-full" src={data.imageURL} alt={data.artName} style={{ height: "300px" }} />
            </Link>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.artName}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='font-semibold'>Author</span> : {data.artistName} </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='font-semibold'>Location</span> : {data.location} </p>
                <div className='flex flex-row justify-between'>
                    <Link href={`/art-gallery/${data?.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Origin
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                    <WhichListComponent artId={data.id}></WhichListComponent>
                </div>
            </div>
        </div>
    )
}

export default CardComponent;
