import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Navigation } from '@/components/Navigation'
import { DetailPageBanner } from '@/components/DetailPageBanner'
import { PrismaClient } from '@prisma/client'
import { Footer } from '@/components/Footer'
import Accordion from '@/components/Accordion'
import CardComponent from '@/components/CardComponent'
import React from 'react'
import { Location } from '@/components/Location'
import { DetailPageBannerNew } from '@/components/DetailPageBannerNew'
const inter = Inter({ subsets: ['latin'] })


const AddionationalInformation = () => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                <tbody className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <tr>
                        <td className="px-6 py-4">Weight</td>
                        <td className="px-6 py-4">6.72g</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Dimensions</td>
                        <td className="px-6 py-4">61 × 81 × 8 cm</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Brand</td>
                        <td className="px-6 py-4">Gallery One</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Orientation</td>
                        <td className="px-6 py-4">Portrait</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


const DetailPage = (props) => {
    const addionalData = [
        {
            title: "Description",
            content:
                "he “Journey Through Arabian Doors” is a Colorful examination of the distinctive design of Arabian Doors. Each is a unique expression both of the owners tastes coupled with the architect’s style and influences. Focusing on the Color blue, this artwork presents a calming and stylish addition to light-Colored walls."
        },
        {
            title: "Addional Information",
            content: AddionationalInformation(),
            isComponents: true

        },
        {
            title: "Location",
            content: <Location></Location>,
            isComponents: true
        }
    ]
    return (
        <>
            <Head>
                <title>
                    {props.result.title}
                </title>
                <meta name="description" content={`${props.result.artName} , ${props.result.artistName} , ${props.result.location} `} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Navigation></Navigation>
                <div className='container mx-auto flex flex-col'>
                    <DetailPageBannerNew data={props.result} ></DetailPageBannerNew>

                    <div className=" mx-auto flex flex-col md:flex-row items-center ">
                        <div className=" w-full  lg:w-2/2  text-center mt-8">
                            <h1 className="text-3xl mt-8 lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">{props.result.artName} <strong></strong>. </h1>
                            <p className="text-black-500 mt-4 mb-6 ">{props.result.artistName}</p>
                            <p className="text-black-500 mt-4 mb-6">{props.result.location}</p>
                        </div>
                    </div>

                    <div className=" md-12 clearfix mx-auto clearfix  md:flex-row items-center my-12 md:my-24">
                        {addionalData.map((item, index) => (
                            <React.Fragment key={index}> <Accordion isComponents={item.isComponents} title={item.title} content={item.content} /> </React.Fragment>
                        ))}
                    </div>

                    <div className=" mx-auto flex flex-col md:flex-row items-center ">
                        <div className=" w-full  lg:w-2/2  text-center">
                            <h4 className='text-3xl'>Recent Works!</h4>
                        </div>
                    </div>

                    {props.latestResult && props.latestResult.length > 0 && <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-24 mb-24'>
                        <div className='grid grid-cols-3 gap-4 content-start'>
                            {props.latestResult?.map((item) => <React.Fragment key={item.id}>  <CardComponent data={item}></CardComponent>  </React.Fragment>)}
                        </div>
                    </div>}

                </div>
                <Footer></Footer>
            </main>
        </>
    )
}


export async function getServerSideProps(context) {
    const { id } = context.query;
    const prisma = new PrismaClient();
    const result = await prisma.artGallery.findUnique({
        where: {
            id: Number(id)
        }
    });
    let latestResult = await prisma.artGallery.findMany({
        orderBy: [
            {
                id: 'desc',
            },
        ],
        skip: 0,
        take: 3,
    })
    console.log(latestResult)
    return {
        props: { result, latestResult }
    }
}

export default DetailPage;