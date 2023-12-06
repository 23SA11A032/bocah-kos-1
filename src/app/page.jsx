"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import Login from '@/components/Login';
import Profile from '@/components/Profile';
import { RiHome4Line, RiPhoneFindLine, RiUser3Line } from "react-icons/ri";
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

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
                <Header />

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
                <Navigation />

                {/* FOOTER */}
                <Footer />
            </div >
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

