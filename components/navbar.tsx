'use client'

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar(){
    const [isOpen, setIsOpen] =useState(false);
    return(
        <div className=" h-16 w-screen border-b border-black/10 sticky top-0 backdrop-blur-xl md:flex justify-around p-4">
            <div className="flex justify-between">
                <Link href={'/'} className="text-xl font-bold truncate flex">
                <img src="/favicon.png" alt="" className="size-7 mr-3" />
                Brahmini Microns{' '}
                </Link>
                <span className="md:hidden " onClick={() => setIsOpen((prev) => !prev)}>{!isOpen &&  <Menu />}</span>
                {isOpen &&  (
                    <div className={`md:hidden h-screen w-[80vw] bg-[#fefefe] border-l border-neutral-900/10 flex flex-col gap-7 p-4 transition-all ease-in-out duration-300 ${isOpen ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}`} onClick={() => setIsOpen((prev) => !prev)}>
                        <X onClick={() => setIsOpen((prev) => !prev)} className=" text-black ml-auto"/>
                        <Link href='/' className="text-lg font-medium text-neutral-800 pt-6">About</Link>
                        <Link href='/products' className="text-lg font-medium text-neutral-800 pt-6">Products</Link>
                        <Link href='/policy' className="text-lg font-medium text-neutral-800 pt-6">Policy</Link>
                        <Link href='/contact' className="text-lg font-medium text-neutral-800 pt-6">Contact us</Link>
                    </div>
                )}
            </div>
            <div className="hidden md:block ">
                <Link href='/' className="text-lg font-medium text-neutral-800 pl-6">About</Link>
                <Link href='/products' className="text-lg font-medium text-neutral-800 pl-6">Products</Link>
                <Link href='/policy' className="text-lg font-medium text-neutral-800 pl-6">Policy</Link>
                <Link href='/contact' className="text-lg font-medium text-neutral-800 pl-6">Contact us</Link>
                
            </div>
        </div>
    )
}