"use client"

import { useEffect, useState } from "react"
import Login from "./Login"
import Image from "next/image"
import Logout from "./Logout"

export default function Header() {
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        setUser(localStorage.getItem("user"))
    }, [])

    return (
        <div className='flex flex-row items-center h-20 border-b border-slate-700'>
            {/* ICON + NAME */}
            <div className='flex flex-row justify-between items-center container mx-auto px-3 lg:px-0 h-full'>
                <div className='flex flex-row items-center gap-2 h-full'>
                    <Image alt='' src={"https://cdn0.iconfinder.com/data/icons/avatar-15/512/ninja-512.png"} height={50} width={50} />
                    <p className='font-bold text-2xl'>BOCAH<span className='text-red-800'>KOS</span></p>
                </div>

                {!user ? <Login /> : <Logout />}
            </div>
        </div>
    )
}