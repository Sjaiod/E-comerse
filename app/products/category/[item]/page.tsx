'use client'
import Nav from '@/components/Nav'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import {Card, CardBody,Skeleton, CardFooter, Image,useDisclosure} from "@nextui-org/react";
import ProductsModal from '@/components/ProductsModal';

const Page = () => {
  const [list, setList] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
    const params = useParams<{ item: string }>()
    

    const getData=async(params)=>{
        try {
            const getdata= await fetch(`/api/v2/products/categoryes/${params.item}`)
            const data = await getdata.json();
            setList(data.items)
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
      getData(params)
    },[list])
  return (
    <main className='min-h-screen'>
        <Nav/>
        <section className='flex flex-col items-center justify-center px-10 py-10'>
    <h2 className='text-4xl capitalize text-zinc-100'>{params.item}</h2>
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-5">
        {list.map((item, index) => (
          <Card key={index} onPress={() => setActiveModal(item._id)} shadow="sm" isPressable>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.image}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b className="truncate max-w-[10rem] overflow-hidden overflow-ellipsis">{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
            <ProductsModal
              title={item.title}
              price={item.price}
              description={item.description}
              id={item._id}
              image={item.image}
              isOpen={activeModal === item._id}
              onClose={() => setActiveModal(null)}
            />
          </Card>
        ))}
      </div>
      
  </section>
    </main>
  )
}

export default Page
