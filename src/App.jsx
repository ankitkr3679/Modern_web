import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import CompanyLogo from './Components/CompanyLogo'
import PurposeSection from './Components/PurposeSection'
import FeaturesSection from './Components/FeaturesSection'
import ScheduleSection from './Components/ScheduleSection'
import MoniterSection from './Components/MoniterSection'
import ModalController from './Components/ModalController'
import PriceSection from './Components/PriceSection'
import ServicesSection from './Components/ServicesSection'
import TestimonialSection from './Components/TestimonialSection'
import NewsletterSection from './Components/NewsletterSection'
import Footer from './Components/Footer'

const App = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <ModalController />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <ScheduleSection />
        <MoniterSection />
        <PriceSection />
        <ServicesSection />
        <TestimonialSection />
        <NewsletterSection />
        <Footer />
      </div>
    </main>
  )
}

export default App
