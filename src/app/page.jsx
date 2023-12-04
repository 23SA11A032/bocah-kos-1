import Image from 'next/image'

export default function Home() {
    return (
        <>
            <div className="min-h-screen">
                {/* HEADER */}
                <div className='flex flex-row justify-between items-center h-20 border-b border-slate-700'>
                    {/* ICON + NAME */}
                    <div className='container mx-auto'>
                        <div className='flex flex-row items-center gap-2'>
                            <Image alt='' src={"https://cdn0.iconfinder.com/data/icons/avatar-15/512/ninja-512.png"} height={50} width={50} />
                            <p className='font-bold text-2xl'>PAPI<span className='text-red-800'>KOS</span></p>
                        </div>
                    </div>

                </div>

                {/* BODY */}
                <div className='container mx-auto pt-4 flex flex-col h-full px-3 md:px-0'>
                    <div className="carousel w-full max-w-3xl rounded-lg self-center">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LIST */}
                <div className='container mx-auto pt-4 px-3 md:px-0'>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                        {Array.from({ length: 10 }).map((_, i) => {
                            return (
                                <div className="card card-compact bg-base-100 shadow-xl border border-slate-700" key={i}>
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
                                </div>
                            )
                        })}

                        {Array.from({ length: 10 }).map((_, i) => {
                            return (
                                <div className="card card-compact bg-base-100 shadow-xl border border-slate-700" key={i}>
                                    <figure><img src="https://www.sewakost.com/files/01-2020/ad28904/kos-kosan-443380741_large.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <div className="flex flex-row items-center gap-2">
                                            <div className="badge badge-secondary">PUTRI</div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                            <p>5.0</p>
                                        </div>                                        
                                        <p className='truncate'>Kost Singgahsini RR Mansion Tipe E Kost Singgahsini RR Mansion Tipe E</p>
                                        <p className='text-sm italic'>k. mandi dalam, wifi, kasur.</p>
                                        <p>Rp. 900.000</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

