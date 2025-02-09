"use client"

import React from 'react'
import { useParams } from 'next/navigation';

function Chats() {
    // const { id } = use(params);
    const { id } = useParams();

    if(id){
        console.log("Id present");
    }else{
        console.log("Id Not present");
    }
  return (
    <div className='max-w-5xl h-screen flex items-center justify-center bg-green-300'>
        <div>
        Chat : {id}
        </div>
    </div>
  )
}

export default Chats;
