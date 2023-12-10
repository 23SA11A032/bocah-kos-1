'use client'

import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { IoMdMenu, IoMdSettings } from "react-icons/io";
import { HiHomeModern, HiInboxArrowDown } from "react-icons/hi2";
import Image from "next/image";
import Login from "@/components/Login";
import Logout from "@/components/Logout";
import { FaExchangeAlt } from 'react-icons/fa';
import { MdFileUpload, MdOutlineDomainVerification } from "react-icons/md";
import axios from "axios";

export default function Pemilik() {
    const [tab, setTab] = useState("4")
    const [user, setUser] = useState({})
    const [settings, setSettings] = useState({});
    

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
        fetch("/api/kos/" + JSON.parse(localStorage.getItem("user")).id, { cache: "no-cache" })
            .then((html) => html.json())
            .then(json => setSettings(json));
    }, [])

    async function handleUpdate() {
        try {
            var { data } = await axios.post("/api/kos/" + user.id, settings)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    function change(key, value) {
        setSettings()
    }

    return (
        <>
            <div className="min-h-screen flex flex-col">
                <div className="flex flex-row items-center border-b border-slate-600 h-20">
                    <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden"><IoMdMenu size={30} /></label>
                    <div className="flex-1 w-full">
                        {/* HEADER */}
                        <div className='flex flex-row items-center h-20 border-b w-full px-4 border-slate-700'>
                            {/* ICON + NAME */}
                            <div className='flex flex-row justify-between items-center w-full h-full'>
                                <div className='flex flex-row items-center gap-2 h-full'>
                                    <Image alt='' src={"https://cdn0.iconfinder.com/data/icons/avatar-15/512/ninja-512.png"} height={50} width={50} />
                                    <p className='font-bold text-2xl'>BOCAH<span className='text-red-800'>KOS</span></p>
                                </div>

                                {!user ? <Login /> : <Logout />}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="drawer lg:drawer-open flex-1">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex">
                        {/* content */}
                        <div className="m-4 p-5 bg-base-200 rounded-lg h-auto w-full">
                            {tab == "0" ? (<>
                                <div className="stats shadow">

                                    <div className="stat bg-primary-content">
                                        <div className="stat-title">Total Page Views</div>
                                        <div className="stat-value">89,400</div>
                                        <div className="stat-desc">21% more than last month</div>
                                    </div>

                                </div>
                            </>) : tab == "4" ? (<>
                                <div className="flex flex-col gap-3">
                                    <div className="form-control gap-2">
                                        <label htmlFor="nama">Nama Kost :</label>
                                        <input id="nama" type="text" placeholder="nama kost" defaultValue={settings.nama} className="input input-primary max-w-lg" />
                                    </div>
                                    <div className="form-control gap-2">
                                        <label htmlFor="type">Disewakan untuk putra/putri/campur :</label>
                                        <select id="type" className="select select-primary max-w-lg" defaultValue={settings.sewaFor}>
                                            <option disabled value={''}>Pilih</option>
                                            <option value={'putra'}>putra</option>
                                            <option value={'putri'}>putri</option>
                                            <option value={'campur'}>campur</option>
                                        </select>
                                    </div>
                                    <div className="form-control gap-2">
                                        <label htmlFor="desc">Deskripsi :</label>
                                        <textarea id="desc" defaultValue={settings.deskripsi} className="textarea textarea-primary max-w-lg" placeholder="Deskripsi..."></textarea>
                                    </div>
                                    <div className="form-control gap-2">
                                        <label htmlFor="peraturan">Peraturan :</label>
                                        <textarea id="peraturan" defaultValue={settings.peraturan} className="textarea textarea-primary max-w-lg" placeholder="Peraturan..."></textarea>
                                    </div>
                                    <div className="form-control gap-2">
                                        <label htmlFor="alamat">Alamat :</label>
                                        <textarea id="alamat" defaultValue={settings.alamat} className="textarea textarea-primary max-w-lg" placeholder="Alamat..."></textarea>
                                    </div>
                                    <div className="form-control gap-2">
                                        <label htmlFor="gmap">Link Google Maps :</label>
                                        <input id="gmap" defaultValue={settings.linkGoogleMaps} type="text" placeholder="nama kost" className="input input-primary max-w-lg" />
                                    </div>
                                    <div className="form-control gap-2">
                                        <label htmlFor="file">Image :</label>
                                        <input id={`file`} type="file" name="files[]" accept="image/*" multiple className="file-input file-input-bordered w-full max-w-lg" onChange={async e => console.log(await toBase64(e.target.files[0]))} />                                    
                                    </div>

                                    <button className="btn btn-primary w-fit mt-2" onClick={handleUpdate}>
                                        <MdFileUpload size={18} />
                                        Update
                                    </button>
                                </div>
                            </>) : (<></>)}
                        </div>
                    </div>
                    <div className="drawer-side h-full">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-2">
                            {/* Sidebar content here */}
                            {/* <li onClick={() => setTab("0")}><a className={`${tab == "0" && "bg-primary text-white hover:bg-primary"}`}><HiHomeModern size={26} />Dashboard</a></li> */}
                            {/* <li onClick={() => setTab("1")}><a className={`${tab == "1" && "bg-primary text-white hover:bg-primary"}`}><HiInboxArrowDown size={26} />Tambah Kost</a></li> */}
                            <li onClick={() => setTab("2")}><a className={`${tab == "2" && "bg-primary text-white hover:bg-primary"}`}><FaExchangeAlt size={26} />Permintaan</a></li>
                            {/* <li onClick={() => setTab("3")}><a className={`${tab == "3" && "bg-primary text-white hover:bg-primary"}`}><MdOutlineDomainVerification size={26} />Konfirmasi</a></li> */}
                            <li onClick={() => setTab("4")}><a className={`${tab == "4" && "bg-primary text-white hover:bg-primary"}`}><IoMdSettings size={26} />Settings</a></li>
                        </ul>

                    </div>
                </div>

            </div>
        </>
    )
}

function Home() {

}

function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }