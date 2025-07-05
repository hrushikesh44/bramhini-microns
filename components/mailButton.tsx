'use client'

import Link from "next/link"


export default function MailButton(){
    return (
        <div className=" w-fit h-fit border mx-auto border-neutral-900/10 rounded-full p-3 shadow-xl hover:scale-105 transition-transform duration-300 hover:bg-black/60 hover:text-neutral-300">
            <Link href={"mailto:hrushikesh44.dev@gmail.com"} className="" >Contact us</Link>
            </div>
    )
}