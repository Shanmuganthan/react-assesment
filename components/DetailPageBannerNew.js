import Link from 'next/link';
import React from 'react'


export const DetailPageBannerNew = ({ data }) => {
    console.log(data);
    return (
        <div className='banner-bg'>
            <div className="  md:flex-row items-center my-12 md:my-24">
                <div className="w-full mt-20 lg:w-2/2 lg:py-6 text-center">
                    <img className='banner-image-resize rounded' src={data.imageURL} alt={data.artName} />
                </div>
            </div>


        </div >
    )
}

