import React from 'react'
import HeroHill from '../components/home/HeroHill'
import Hero from '../components/home/Hero'
import ProductsReport from '../components/home/ProductsReport'
import ProductsOffer from '../components/home/ProductsOffer'
import BusinessOffer from '../components/home/BusinessOffer'
import MeatAndFruit from '../components/home/MeatAndFruit'
import HouseholdProducts from '../components/home/HouseholdProducts'
const Home = () => {
  return (
    <>
      <HeroHill/>
      <Hero/>
      <ProductsReport/>
      <ProductsOffer/>
      <MeatAndFruit/>
      <HouseholdProducts/>
      <BusinessOffer/>
    </>
  )
}

export default Home