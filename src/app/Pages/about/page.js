import AboutHero from '@/app/Components/About/AboutHero'
import FourStatsAbout from '@/app/Components/About/FourStatsAbout'
import IndustriesAbout from '@/app/Components/About/IndustriesAbout'
import ProWebStory from '@/app/Components/About/ProWebStory'
import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import CTAsection from '@/app/Components/Home/CTAsection'
import React from 'react'


export default function about() {
  return (
    <>

      <Header />
      <AboutHero />
      <ProWebStory />
      <FourStatsAbout />
      <IndustriesAbout />
      <CTAsection />
      <Footer />



    </>
  )
}
