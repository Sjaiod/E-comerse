import React from 'react'
import {Input ,Button} from "@nextui-org/react";
import Link from 'next/link';

const Page = () => {
  return (
    <div className='flex container items-center justify-center h-screen'>
        <div className=' w-[790px] h-[590px] bg-cyan-600 rounded-[100%]  absolute    blur-[100px] '>

        </div>

<form  className='px-5 py-4  border flex items-center z-10 justify-center flex-col border-zinc-600 rounded-md shadow-lg bg-gray-900' action="POST">
    <h2>Register</h2>
    <div className='flex gap-4 items-center justify-center flex-col'>
    <Input type="text"  variant="bordered" label="Name" />
    <Input  type="email" variant="bordered" label="Email" className="w-[20rem]" />
<Input type="text"  variant="bordered" label="Password" />
<p className='text-sm'>Already have an account <Link className='text-blue-600' href="/auth/login">Login</Link></p>
<Button variant='solid' className='bg-cyan-600 w-[20rem]' type='submit'>Submit</Button>

    </div>
    </form>
    </div>
  )
}

export default Page