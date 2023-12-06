'use client'

import Link from "next/link";
import { RiHome4Line, RiPhoneFindLine, RiUser3Line } from "react-icons/ri";
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion'

export default function Navigation() {
    const path = usePathname();

    return (
        <div className='h-16 w-screen border-t border-slate-700 fixed bottom-0 bg-base-200 z-10'>
            <div className='container mx-auto flex flex-row justify-between items-center h-full px-6 sm:px-3 md:px-16 lg:px-28 xl:px-36'>
                {/* HOME */}
                <Link href={"/"}>
                    <button className="btn hover:bg-white/30">
                        <div className='flex flex-col justify-center'>
                            <RiHome4Line size={40} />
                            {path == "/" && <motion.div animate={{ width: ["0%", '100%'] }} transition={{ duration: 1 }} className={`h-1 w-full bg-blue-400 rounded-lg`}></motion.div>}
                        </div>
                    </button>
                </Link>

                <Link href={"/find"}>
                    <button className="btn hover:bg-white/30">
                        <div>
                            <RiPhoneFindLine size={40} />
                            {path == "/find" && <motion.div animate={{ width: ["0%", '100%'] }} transition={{ duration: 1 }} className={`h-1 w-full bg-blue-400 rounded-lg`}></motion.div>}
                        </div>
                    </button>
                </Link>

                <Link href={"/profile"} className="btn hover:bg-white/30">
                    <div>
                        <RiUser3Line size={40} />
                        {path == "/profile" && <motion.div animate={{ width: ["0%", '100%'] }} transition={{ duration: 1 }} className={`h-1 w-full bg-blue-400 rounded-lg`}></motion.div>}
                    </div>
                </Link>
            </div>
        </div>
    )
}