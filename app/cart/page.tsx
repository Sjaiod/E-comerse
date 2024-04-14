"use client";
import Nav from '@/components/Nav';
import React, { useState, useEffect } from 'react';
import { Divider,Image, Spinner, Button, Popover, PopoverTrigger, PopoverContent,} from '@nextui-org/react';
import { FiShoppingCart } from 'react-icons/fi';
import Footer from '@/components/Footer';

const Page = () => {
  const [list, setList] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async (id) => {
    try {
      const res = await fetch(`/api/v1/user/${id}`);
      const data = await res.json();
      setList(data.user && data.user.cart);      
      setLoading(false);
    } catch (error) {
      console.error(error);
     
    }
  };

  useEffect(() => {
    const userInfo = localStorage.getItem('user');
    if (userInfo) {
      const user = JSON.parse(userInfo);
      setUser(user);
      getData(user._id);
    }
  }, []);

  return (
    <main className='min-h-screen'>
      <Nav />
      <section className='flex  flex-col justify-center px-5'>
        <div className=' flex items-center justify-center text-3xl text-zinc-100 font-bold'>
            <h1>Cart</h1>
        </div>
        <Divider className="my-4"/>
        {list&& list.map((item)=>(
            <>
            <div className=' w-full flex px-5 max-md:flex-col justify-between py-2 cursor-pointer hover:opacity-hover   shadow-sm shadow-white mb-3 rounded-lg' >
                <div className='flex max-md:flex-col'>
                <div>
                    <Image  removeWrapper  src={item.image} className=' !w-[10rem] max-md:!w-full max-md:!h-[15rem]  !h-[8rem]'/>
                </div>
                <div className=' px-2'>
                    <h2 className='  font-bold text-2xl'>{item.title}</h2>
                    <p>{item.description}</p>
                    <p className=' text-blue-400'>{item.price}</p>
                </div>
                </div>
               
                
                <Popover placement="right">
      <PopoverTrigger>
      <Button color='primary' variant='solid'>Buy</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Sorry</div>
          <div className="text-tiny">This is a demo website</div>
        </div>
      </PopoverContent>
    </Popover>


            </div>
            </>
        ))}
         {!list&&(
           <Spinner label="Danger" color="danger" labelColor="danger"/>
        )}
      </section>
      <Footer/>
    </main>
  );
};

export default Page;
