import { searchArtGallery } from '@/api';
import { FILTER_ART_GALLERY } from '@/store/constant';
import { store } from '@/store/store';

import React from 'react'
import { connect, useDispatch } from 'react-redux';

export const HeaderComponent = (props) => {

    const search = async (e) => {
        store.dispatch({ type: FILTER_ART_GALLERY, value: e.target.value })
    }



    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img src="https://www.burniearts.net/files/assets/bafc/homepage-slides/art-gallery-banner-slide.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 justify-center flex lg:max-w-none">
                    <div >
                        <input
                            onChange={search}
                            id="search"
                            name="searchText"
                            type="text"
                            className=" rounded-md border-0  px-3.5 py-2  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            placeholder="Search Your Favourite Art"
                            style={{ width: '400px' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent;