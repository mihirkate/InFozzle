import Image from "next/image";
import Navbar from "./components/navbar";
import InvestmentCounter from "./components/InvestmentCounter";
import FeaturedIn from "./components/FeaturedIn";
import ImpactAchievements from "./components/ImpactAchievements";
import BusinessModel from "./components/BusinessModel";
import MainStreet from "./components/MainStreet";
import IndustryVertical from "./components/IndustryVertical";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import SuccessStories from "./components/SuccessStories";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainStreet />

      <ImpactAchievements />
      <FeaturedIn />

      <BusinessModel />
      <IndustryVertical />
      <HowItWorks />
      <FAQ />
      <SuccessStories />
      <Footer />


    </>
  );
}