import axios from "axios";
import { useState } from "react"
import { IoIosSearch, IoMdArrowRoundBack, IoMdClose, IoMdHome, IoMdSearch } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

export default function Login() {
    const [mode, setMode] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const [suc, setSuc] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    /**
     * @param {Event} event 
     */
    async function login(event) {
        event.preventDefault();
        var mode = mode
        setErr("")
        setSuc("")
        setIsLoading(true)
        try {
            var { data } = await axios.post("/api/auth/login", { email, password })
            setSuc("Welcome " + data.user.name + "!")
            localStorage.setItem("token", data.token)
            data.user.mode = mode
            localStorage.setItem("user", JSON.stringify(data.user))
            setIsLoading(false)
            await new Promise((r) => setTimeout(r, 1000))
            window.location.reload();
        } catch (error) {
            console.log(error);
            setErr("Username or Password wrong!")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <button className="btn normal-case mr-3 md:mr-0 btn-primary" onClick={() => document.getElementById('my_modal_1').showModal()}>Masuk</button>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box p-8 overflow-hidden">
                    {
                        mode == 'pencari' ? (
                            <motion.form key={1} animate={{ opacity: [0, 1] }} exit={{ opacity: [1, 0] }} transition={{ duration: 0.7 }} className="my-5" onSubmit={(e) => login(e)}>
                                <p className="font-bold text-lg text-center">Login sebagai Pencari</p>
                                {/* ALERT */}
                                <div role="alert" className={`alert alert-error flex flex-row items-center mt-4 ${!err && 'hidden'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>{err}</span>
                                </div>
                                <div role="alert" className={`alert alert-success flex flex-row items-center mt-4 ${!suc && 'hidden'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>{suc}</span>
                                </div>

                                <div className="flex flex-col gap-3 mt-4">
                                    <div className="form-control">
                                        <label htmlFor="email">Email</label>
                                        <input id="email" type="email" placeholder="email" className="input input-primary" onChange={e => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-control">
                                        <label htmlFor="password">Password</label>
                                        <input id="password" type="password" placeholder="password" className="input input-primary" onChange={e => setPassword(e.target.value)} />
                                    </div>
                                    {
                                        isLoading ? (
                                            <button className="btn btn-primary btn-disabled">
                                                <span className="loading loading-spinner"></span>
                                                loading
                                            </button>
                                        ) : (
                                            <button className="btn btn-primary mt-3">Masuk</button>
                                        )
                                    }
                                </div>
                            </motion.form>
                        ) : mode == 'pemilik' ? (
                            <motion.form key={2} animate={{ opacity: [0, 1] }} exit={{ opacity: [1, 0] }} transition={{ duration: 0.7 }} className="my-5" onSubmit={(e) => login(e)}>
                                <p className="font-bold text-lg text-center">Login sebagai Pemilik</p>
                                <div className="flex flex-col gap-3 mt-4">
                                    <div className="form-control">
                                        <label htmlFor="email">Email</label>
                                        <input id="email" type="email" placeholder="email" className="input input-primary" onChange={e => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-control">
                                        <label htmlFor="password">Password</label>
                                        <input id="password" type="password" placeholder="password" className="input input-primary" onChange={e => setPassword(e.target.value)} />
                                    </div>
                                    {
                                        isLoading ? (
                                            <button className="btn btn-primary btn-disabled">
                                                <span className="loading loading-spinner"></span>
                                                loading
                                            </button>
                                        ) : (
                                            <button className="btn btn-primary mt-3">Masuk</button>
                                        )
                                    }
                                </div>
                            </motion.form>
                        ) : (
                            <motion.div key={3} animate={{ opacity: [0, 1] }} exit={{ opacity: [1, 0] }} transition={{ duration: 0.7 }}>
                                <div className="flex flex-col items-center gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-44 h-44">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p className="font-bold text-lg">Masuk sebagai?</p>
                                </div>
                                <div className="flex flex-col gap-5 mt-4">
                                    <button className="btn btn-primary" onClick={() => setMode("pencari")}>
                                        <FaMagnifyingGlass size={20} />
                                        Pencari Kost
                                    </button>
                                    <button className="btn btn-primary" onClick={() => setMode("pemilik")}>
                                        <AiOutlineHome size={20} />
                                        Pemilik Kost
                                    </button>
                                </div>
                                <p className="text-right pt-3">Tidak punya akun?{" "}<span className="link">Daftar</span></p>
                            </motion.div>
                        )
                    }
                    <div className="modal-action">
                        <button className={`btn normal-case bg-yellow-600 ${!mode && 'hidden'}`} onClick={() => setMode('')}>
                            <IoMdArrowRoundBack />
                            Back
                        </button>
                        <form method="dialog">
                            <button className="btn normal-case bg-red-600 ml-2" onClick={() => setMode('')}>
                                <IoMdClose />
                                Tutup
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}
