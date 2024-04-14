'use client'
import Nav from '@/components/Nav';
import React, { useEffect, useState, Suspense } from 'react';
import { useParams,useSearchParams } from 'next/navigation';
import { Card, CardBody, CardFooter, Image, Spinner, useDisclosure } from "@nextui-org/react";
import ProductsModal from '@/components/ProductsModal';

const Page = () => {
    const [list, setList] = useState([]);
    const [activeModal, setActiveModal] = useState(null);
    const [loading,setLoading]=useState(true)
    const  search  = useSearchParams().get("search");

    const getData = async () => {
        try {
            const getdata = await fetch(`/api/v2/products/search?search=${search}`);
            const data = await getdata.json();
            setList(data);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, [search]);

    return (
        <main className='min-h-screen'>
            <Nav />
            <section className='flex flex-col items-center justify-center px-10 py-10'>
                <h2 className='text-4xl capitalize text-zinc-100'>{search}</h2>
                <div className="gap-2 grid grid-cols-2 sm:grid-cols-5">
                    {list && list.map((item, index) => (
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
                {loading&&(
           <Spinner  color="danger" />
        )}
            </section>
        </main>
    );
};

const SuspendedPage = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Page />
    </Suspense>
);

export default SuspendedPage;
