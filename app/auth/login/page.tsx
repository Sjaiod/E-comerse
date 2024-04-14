"use client"
import Nav from '@/components/Nav';
import React, { useEffect, useState, Suspense } from 'react';
import { useParams,useSearchParams } from 'next/navigation';
import { Button, Card, CardBody, CardFooter, Image, Input, Link, useDisclosure } from "@nextui-org/react";
import ProductsModal from '@/components/ProductsModal';

const Page = () => {
    const [emai,setEmail]=useState()
    const [password,setPassword]=useState()

    const getData = async () => {
        try {
            const res = await fetch('/api/v1/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: emai,
                    password: password
                })
            });
            const ref=await res.json()
            if(ref){
                localStorage.setItem("user",ref.user)
            }
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='flex container items-center justify-center h-screen'>
        <div className=' w-[790px] h-[590px] bg-cyan-600 rounded-[100%]  absolute    blur-[100px] '>

        </div>

<form  className='px-5 py-4  border flex items-center z-10 justify-center flex-col border-zinc-600 rounded-md shadow-lg bg-gray-900' action="POST">
    <h2>Login</h2>
    <div className='flex gap-4 items-center justify-center flex-col'>
    <Input onChange={(e:any)=>setEmail(e.target.value)} type="email" variant="bordered" label="Email" className="w-[20rem]" />
<Input type="text" onChange={(e:any)=>setPassword(e.target.value)}  variant="bordered" label="Password" />
<p className='text-sm'>Dont have an account
<Link className='text-blue-600' href="/auth/login">Register</Link>
</p>
<Button variant='solid' className='bg-cyan-600 w-[20rem]' type='submit'>Submit</Button>

    </div>
    </form>
    </div>
    );
};



export default Page;
