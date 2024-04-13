"use client"
import React, { useState } from 'react'
import {Input ,Button} from "@nextui-org/react";
import Link from 'next/link';
import { log } from 'console';
import { useRouter } from 'next/navigation';

const Page = () => {
    const [email,setEmail]=useState()
    const [password,setPassword] = useState()
    const [open,setOpen]=useState(false)
    const router=useRouter()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        setOpen(true)
        const res=await fetch("/api/v1/user"
        ,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        }
        ).then(response => response.json())
        .then(data => {
            localStorage.setItem("user",JSON.stringify(data.message))
            router.push("/")

        })
        .catch(error => console.error(error));
            
            
           // localStorage.setItem("user", JSON.stringify(res.json))
    }
    
  return (
    <div className='flex container items-center justify-center h-screen'>
        <div className=' w-[790px] h-[590px] bg-cyan-600 rounded-[100%]  absolute    blur-[100px] '>

        </div>

<form onSubmit={handleSubmit} className='px-5 py-4  border flex items-center z-10 justify-center flex-col border-zinc-600 rounded-md shadow-lg bg-gray-900' >
    <h2>Login</h2>
    <div className='flex gap-4 items-center justify-center flex-col'>

    <Input onChange={(e:any)=>setEmail(e.target.value)} type="email" variant="bordered" name="email" label="Email" className="w-[20rem]" />
<Input onChange={(e:any)=>setPassword(e.target.value)}  type="text" name="password"  variant="bordered" label="Password" />
<p className='text-sm'>Don&apos;t have an account? <Link className='text-blue-600' href="/auth/register">Register</Link></p>
<Button variant='solid' className='bg-cyan-600 w-[20rem]' isLoading={open} type='submit'>
    Submit
    </Button>

    </div>
    </form>
    </div>
  )
}

export default Page
