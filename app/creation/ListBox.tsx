"use client"
import React from 'react';
import { Listbox, ListboxItem } from "@nextui-org/react";

interface ListBoxProps {
  category: any;
  setCategory: (category: string) => void;
}



const ListBox: React.FC<ListBoxProps> = ({ category, setCategory }) => {
  return (
    <div className=' flex  items-start border-2 rounded-md border-cyan-600'>
   
   <Listbox
      aria-label="Actions"
      onAction={(key: string) => setCategory(key)}
    >
      <ListboxItem className={category==="face"?" hover: bg-gray-400":""} key="face">Face</ListboxItem>
      <ListboxItem className={category==="pants"?" hover: bg-gray-400":""} key="pants">Pants</ListboxItem>
      <ListboxItem className={category==="fashions"?" hover: bg-gray-400":""} key="fashions">Fashions</ListboxItem>
      <ListboxItem className={category==="shoes"?" hover: bg-gray-400":""}  key="shoes">Shoe</ListboxItem>
      <ListboxItem className={category==="rings"?" hover: bg-gray-400":""} key="rings">Rings</ListboxItem>
    </Listbox>
    </div>
  );
};

export default ListBox;
