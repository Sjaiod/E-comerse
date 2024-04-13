"use client"
import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { useRouter } from 'next/navigation'


const SHero = () => {
    const router = useRouter()
  return (
   <section className='flex items-center justify-center px-5'>
    <div className='flex items-center justify-center flex-col'>
        <div>
            <h2>Category</h2>
        </div>
        <div>
        <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
    <Card onPress={e=>router.push("/products/category/face")} isPressable={true}  className="col-span-12 cursor-pointer sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
      <p className="text-tiny text-white/60 uppercase font-bold">face</p>
        <h4 className="text-white font-medium text-large">Faceial and mackups</h4>
      </CardHeader>
      <Image
        removeWrapper
        isBlurred={true}
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/sh/face.webp"
      />
    </Card>
    <Card onPress={e=>router.push("/products/category/pants")} isPressable={true} className="col-span-12 cursor-pointer sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Pants</p>
        <h4 className="text-white font-medium text-large">Latest pants</h4>
      </CardHeader>
      <Image
      removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        isBlurred={true}
        src="/sh/pants.webp"
      />
    </Card>
    <Card onPress={e=>router.push("/products/category/rings")} isPressable={true} className="col-span-12 cursor-pointer sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
      <p className="text-tiny text-white/60 uppercase font-bold">Rings</p>
        <h4 className="text-white font-medium text-large">Different type of Rings</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/sh/ring.webp"
      />
    </Card>
    <Card onPress={e=>router.push("/products/category/shoes")} isPressable={true} className="w-full cursor-pointer h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Shoe</p>
        <h4 className="text-whitefont-medium text-2xl">Sneakers and Shoes</h4>
      </CardHeader>
      <Image
      isBlurred={true}
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="/sh/shoe.webp"
      />
      
    </Card>
    <Card isPressable={true} onPress={e=>router.push("/products/category/fashions")} className="w-full cursor-pointer h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Fashion</p>
        <h4 className="text-white/90 font-medium text-xl">Find out latest fashions</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="/sh/fashion.webp"
      />
    </Card>
  </div>
        </div>
    </div>

   </section>
  )
}

export default SHero
