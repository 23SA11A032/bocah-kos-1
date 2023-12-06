"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import Login from '@/components/Login';
import Profile from '@/components/Profile';
import { RiHome4Line, RiPhoneFindLine, RiUser3Line } from "react-icons/ri";

export default function Home() {
    const [user, setUser] = useState(null)

    var images = [
        "https://static.mamikos.com/uploads/cache/data/event/2023-10-26/yz5WBfq1-540x720.jpg",
        "https://static.mamikos.com/uploads/cache/data/event/2023-11-14/lpSj9r0O-540x720.jpg",
        "https://static.mamikos.com/uploads/cache/data/event/2023-05-30/vP4HjDLB-540x720.jpg",
        "https://static.mamikos.com/uploads/cache/data/event/2023-07-04/VmQFAmbE-540x720.jpg",
        "https://static.mamikos.com/uploads/cache/data/event/2023-08-02/otjkenCs-540x720.jpg",
        "https://static.mamikos.com/uploads/cache/data/event/2022-03-25/VTcV35Br-540x720.jpg",
        "https://static.mamikos.com/uploads/cache/data/event/2023-05-16/hkqFTkBN-540x720.jpg",
    ]

    useEffect(() => {
        setUser(localStorage.getItem("user"))
    }, [])

    return (
        <>
            <div className="min-h-screen">
                {/* HEADER */}
                <div className='flex flex-row items-center h-20 border-b border-slate-700'>
                    {/* ICON + NAME */}
                    <div className='flex flex-row justify-between items-center container mx-auto px-3 md:px-0'>
                        <div className='flex flex-row items-center gap-2'>
                            <Image alt='' src={"https://cdn0.iconfinder.com/data/icons/avatar-15/512/ninja-512.png"} height={50} width={50} />
                            <p className='font-bold text-2xl'>BOCAH<span className='text-red-800'>KOS</span></p>
                        </div>

                        {!user && <Login />}
                    </div>

                </div>

                {/* BODY */}
                <div className='pt-4 flex flex-col h-full px-3 md:px-0 overflow-hidden'>
                    <div className='container overflow-hidden self-center'>
                        <Corousel img={images} />
                    </div>
                </div>

                {/* KOS PUTRA */}
                <div className='container mx-auto pt-4 px-3 md:px-0'>
                    <p className='text-xl font-bold'>KOS PUTRA</p>
                    <div className='flex flex-row overflow-x-auto gap-3 pt-4'>
                        {Array.from({ length: 10 }).map((_, i) => {
                            return (
                                <motion.div animate={{ x: ['100%', '0%'] }} transition={{ duration: 0.7 * (i + 1), type: "tween" }} className="card card-compact bg-base-100 shadow-xl border border-slate-700 max-w-[12rem] w-full" key={i}>
                                    <figure><img src="https://www.sewakost.com/files/01-2020/ad28904/kos-kosan-443380741_large.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <div className="flex flex-row items-center gap-2">
                                            <div className="badge badge-primary">PUTRA</div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                            <p>5.0</p>
                                        </div>
                                        <p className='truncate'>Kost Singgahsini RR Mansion Tipe E Kost Singgahsini RR Mansion Tipe E</p>
                                        <p className='text-sm italic'>k. mandi dalam, wifi, kasur.</p>
                                        <p>Rp. 900.000</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>


                {/* KOS PUTRI */}
                <div className='container mx-auto pt-4 px-3 md:px-0'>
                    <p className='text-xl font-bold'>KOS PUTRI</p>
                    <div className='flex flex-row overflow-x-auto gap-3 pt-4'>
                        {Array.from({ length: 10 }).map((_, i) => {
                            return (
                                <motion.div animate={{ x: ['100%', '0%'] }} transition={{ duration: 0.7 * (i + 1), type: "tween" }} className="card card-compact bg-base-100 shadow-xl border border-slate-700 max-w-[12rem] w-full" key={i}>
                                    <figure><img src="https://www.sewakost.com/files/01-2020/ad28904/kos-kosan-443380741_large.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <div className="flex flex-row items-center gap-2">
                                            <div className="badge badge-primary">PUTRA</div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                            <p>5.0</p>
                                        </div>
                                        <p className='truncate'>Kost Singgahsini RR Mansion Tipe E Kost Singgahsini RR Mansion Tipe E</p>
                                        <p className='text-sm italic'>k. mandi dalam, wifi, kasur.</p>
                                        <p>Rp. 900.000</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                {/* NAVIGATION */}
                <div className='h-20 w-screen border-t border-slate-700 fixed bottom-0 bg-base-200'>
                    <div className='container mx-auto flex flex-row justify-between items-center h-full px-0 sm:px-3 md:px-4 lg:px-7 xl:px-12'>
                        {/* HOME */}
                        <div className='flex flex-col justify-center'>
                            <RiHome4Line size={40} />
                            <div className={`h-3 w-full bg-blue-`}></div>
                        </div>
                        
                        <div>
                            <RiPhoneFindLine size={40} />
                        </div>

                        <div>
                            <RiUser3Line size={40} />
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <footer className="footer p-10 bg-base-200 text-base-content mt-6 mb-20">
                    <aside>
                        <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                        <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                    </aside>
                    <nav>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </div>
        </>
    )
}

function Corousel({ img }) {
    const images = img
    const [num, setNum] = useState(0);

    useEffect(() => {
        async function loop() {
            for (let i in images) {
                i = Number(i);
                setNum(i);
                await new Promise((r) => setTimeout(r, 4000));
            }
            for (let i in images) {
                i = ((images.length - 1) - Number(i));
                setNum(i);
                await new Promise((r) => setTimeout(r, 4000));
            }
            loop();
        }
        loop();
    }, []);

    return (
        <div className='flex flex-row max-w-xl w-full mx-auto'>
            {images.map((v, i) => {
                if (num < i) return <img src={v} alt="" key={i} className={`rounded-md duration-1000 object-contain py-8 px-14`} style={{ transform: `translateX(-${num * 100}%)` }} />;
                if (num > i) return <img src={v} alt="" key={i} className={`rounded-md duration-1000 object-contain py-8 px-14`} style={{ transform: `translateX(-${num * 100}%)` }} />;
                return <img src={v} alt="" key={i} className={`rounded-md duration-1000 object-contain`} style={{ transform: `translateX(-${num * 100}%)` }} />;
            })}
        </div>
    );
}

