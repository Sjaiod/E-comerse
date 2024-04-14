"use client"
import React, { useEffect, useState ,Suspense} from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link,Button, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { useParams, useSearchParams  } from 'next/navigation';
import { SearchIcon } from './SearchIcon';
import { useRouter } from 'next/navigation';
import { NextURL } from 'next/dist/server/web/next-url';


const Page = () => {
    const [user,setUser]=useState<any>()
   

    const path=useParams()
    const router=useRouter()
    const searchs=useSearchParams().get("search")
    const [search,setSearch]=useState(searchs||"")

    const handleSearch=(e)=>{
      e.preventDefault()
      router.push(`/search?search=${search}`)
      
    }
    useEffect(()=>{
      const userInfo=localStorage.getItem('user')
      if(userInfo){
          const user=JSON.parse(userInfo)
          setUser(user)
      }
    },[])
       

  return (
<Navbar className=' bg-gray-900' isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
       
          <Link href='/' className="hidden sm:block font-bold text-inherit">SAJID_ECOM</Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link  href="/products/category/fashions" aria-current="page" color={path.item==="fashions"?"secondary":"foreground"} >
              Fashion
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link href="/products/category/rings" aria-current="page" color={path.item==="rings"?"secondary":"foreground"} >
              Rings
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link  href="/products/category/shoes" aria-current="page" color={path.item=="shoes"?"secondary":"foreground"}>
              Shoes
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <form  onSubmit={handleSearch}>
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
          
          onChange={e=>setSearch(e.target.value)}
          value={search}
        />
        </form>
        {user &&(
          <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{user.email}</p>
            </DropdownItem>
            <DropdownItem href='/cart' key="help_and_feedback">My Cart</DropdownItem>
            <DropdownItem onClick={(e)=>{
              localStorage.clear()
              router.push("/")
            }} key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        )}
        {user&&(
          <Button color="primary" onClick={()=>router.push("/auth/login")}>
            Login
          </Button>
        )}
       
      </NavbarContent>
    </Navbar>
  )
}

const Nav = () => (
  <Suspense fallback={<div>Loading...</div>}>
      <Page />
  </Suspense>
);

export default Nav;