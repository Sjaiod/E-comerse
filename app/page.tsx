import Footer from "@/components/Footer";
import FaceItems from "@/components/Home/FaceItems";
import FashionItems from "@/components/Home/FashionItems"
import Hero from "@/components/Home/Hero"
import RingItems from "@/components/Home/RingItems";
import SHero from "@/components/Home/SHero"
import ShoeItems from "@/components/Home/ShoeItems";

import Nav from "@/components/Nav";


const page = () => {
  return (
    <>
    
    <Nav/>
    <main className="min-h-screen ">
      <Hero/>
      <SHero/>
      <FashionItems/>
      <RingItems/>
      <FaceItems/>
      <ShoeItems/>
      
    </main>
    <Footer/>
    </>
    
  )
}

export default page