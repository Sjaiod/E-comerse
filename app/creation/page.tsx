"use client"
import React, { useState } from 'react';
import { Input, Button } from '@nextui-org/react';
import ListBox from './ListBox';

const Page = () => {
    const [title,setTitle]=useState<string>()
    const [description,setDescription]=useState<string>()
    const [image,setImage]=useState<string>()
    const [price,setPrice]=useState<number>()
  const [category, setCategory] = useState<any>();

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {

        const res=await fetch("/api/v2/products/create",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title, price,description,image,category
            })
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            
            
            
          //  localStorage.setItem("user",JSON.stringify(data.message))
          //  router.push("/")

        })
        .catch(error => console.error(error));
        console.log( title, price,description,image,category);
        
    } catch (error) {
        console.log(error);
        
    }
  }

  return (
    <main className="flex bg-gray-900 items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="px-5 py-4 border flex items-center z-10 justify-center flex-col border-zinc-600 rounded-md shadow-lg bg-blend-multiply">
        <h2>Create</h2>
        <div className="flex gap-4 items-center justify-center flex-col">
          <Input type="text" variant="bordered" name="title" label="Title"
          onChange={(e:any)=>setTitle(e.target.value)} 
           className="w-[20rem]" />
          <Input type="text" onChange={(e:any)=>{setDescription(e.target.value)}} variant="bordered" label="Description" />
          <Input type="number" onChange={(e:any)=>setPrice(e.target.value)} variant="bordered" label="Price" />
          <Input type="text" name="image" onChange={(e:any)=>{setImage(e.target.value)}}  variant="bordered" label="Image" />
          <ListBox category={category} setCategory={setCategory} />
          <Button variant="solid" className="border-2 hover:bg-cyan-600 transition-all delay-75 w-[20rem] border-cyan-600" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </main>
  );
};

export default Page;
