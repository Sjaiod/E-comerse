"use client"
import React, { useEffect, useState } from 'react'
import {Card,Skeleton, CardBody, CardFooter,useDisclosure, Image} from "@nextui-org/react";
import ProductsModal from '../ProductsModal';

const RingItems = () => {
  const [list, setList] = useState([]);
  const [activeModal, setActiveModal] = useState(null);

  const fetchData=async ()=>{
    try {
      const response = await fetch('/api/v2/products/category/rings');
      const data = await response.json();
      // Set the fetched data to the state
      setList(data.items);
      

    } catch (error) {
      console.log(error);
      
    }
  }

useEffect(()=>{
  fetchData()

},[]
)
  return (
    <section className="flex flex-col items-center justify-center px-10 py-10">
    <h2 className="text-4xl text-zinc-100">Faces</h2>
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
  )
}

export default RingItems
