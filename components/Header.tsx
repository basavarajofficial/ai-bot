"use client"
import { useIsMobile } from '@/hooks/use-mobile'
import React from 'react'
import { Button } from './ui/button';
import { AiOutlineMenu } from 'react-icons/ai';
import { useSidebar } from '@/hooks/use-sidebar';

function Header() {

    const isMobile = useIsMobile();
    const { toggleSidebar } = useSidebar();

  return (
    <div className='flex justify-between mx-4'>
        {isMobile &&
        <Button variant={"outline"} className="mt-4 flex items-center justify-center bg-gray-700 rounded hover:bg-gray-600" onClick={toggleSidebar}>
            <AiOutlineMenu size={20} />
        </Button>
        }
        <h1>Logo</h1>
    </div>
  )
}

export default Header
