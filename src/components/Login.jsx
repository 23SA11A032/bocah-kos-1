import { useState } from "react"

export default function Login() {
    var [mode, setMode] = useState('')

    return (
        <>
            <button className="btn normal-case mr-3 md:mr-0 btn-primary" onClick={() => document.getElementById('my_modal_1').showModal()}>Masuk</button>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box p-8">
                    {
                        mode == 'pencari' ? (
                            <>
                                <div className="flex flex-col items-center gap-4">

                                </div>
                            </>
                        ) : mode == 'pemilik' ? (
                            <>
                                <div className="flex flex-col items-center gap-4"></div>
                            </>
                        ) : (
                            <>
                                <div className="flex flex-col items-center gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-48 h-48">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p className="font-bold text-lg">Masuk sebagai?</p>
                                </div>
                                <div className="flex flex-col gap-3 mt-4">
                                    <button className="btn btn-primary" onClick={() => setMode("pencari")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                                        </svg>
                                        Pencari Kost
                                    </button>
                                    <button className="btn btn-primary" onClick={() => setMode("pemilik")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                        </svg>
                                        Pemilik Kost
                                    </button>
                                </div>
                            </>
                        )
                    }
                    <div className="modal-action">
                        <button className={`btn normal-case bg-yellow-600 ${!mode && 'hidden'}`} onClick={() => setMode('')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                            </svg>
                            Back
                        </button>
                        <form method="dialog">
                            <button className="btn normal-case bg-red-600 ml-2" onClick={() => setMode('')}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Tutup
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}
