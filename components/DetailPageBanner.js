import Link from 'next/link';
import React from 'react'


export const DetailPageBanner = ({ data }) => {
    console.log(data);
    return (
        <div className='banner-bg'>

            <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                <div className="flex flex-col w-full lg:w-2/3 justify-center items-center pt-12 pb-24 px-6">


                    <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                        <h1 className="text-3xl mt-8 lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">{data.artName} <strong></strong>. </h1>
                        <p className="text-black-500 mt-4 mb-6 ">{data.artistName}</p>
                        <p className="text-black-500 mt-4 mb-6">{data.location}</p>
                        <Link href="/" className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none undefined">Back</Link>
                    </div>
                </div>
                <div className="w-full mt-20 lg:w-1/2 lg:py-6 text-center">
                    <img className='banner-image-resize rounded' src={data.imageURL} alt={data.artName} />
                </div>
            </div>



        </div >
    )
}

