import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HeaderComponent from '@/components/HeaderComponent'
import CardComponent from '@/components/CardComponent'
import { PrismaClient } from "@prisma/client";
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import NoResultFound from '@/components/NoResultFound'
import { store } from '@/store/store'
import { ART_GALLERY_DATA } from '@/store/constant'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

const Home = (props) => {

  const [artGalleryData, setArtGalleryData] = useState(() => props.artGalleryData);
  const [isFirst, setIsFirst] = useState(() => true);
  const storeData = useSelector((state) => state.artGalleryData)
  useEffect(() => {
    setArtGalleryData(prevState => storeData)
  }, [storeData]);

  useEffect(() => {
    store.dispatch({ type: ART_GALLERY_DATA, payload: props.artGalleryData });
  }, [props.artGalleryData]);

  return (
    <>
      <Head>
        <title>Art Gallery Application</title>
        <meta name="description" content="Art Gallery Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navigation></Navigation>
        <HeaderComponent></HeaderComponent>
        {artGalleryData && artGalleryData.length > 0 ? <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-24 mb-24'>
          <div className='grid grid-cols-3 gap-4 content-start'>
            {artGalleryData?.map((item) => <React.Fragment key={item.id}>  <CardComponent data={item}></CardComponent>  </React.Fragment>)}
          </div>
        </div> : <NoResultFound></NoResultFound>}

        <Footer></Footer>
      </main>
    </>
  )
}



export async function getServerSideProps() {
  // Fetch data from external API
  const prisma = new PrismaClient();
  const res = await prisma.artGallery.findMany({
    orderBy: [
      {
        id: 'desc',
      },
    ],
  });
  // Pass data to the page via props
  return {
    props: { artGalleryData: res }
  }
}

export default Home;
