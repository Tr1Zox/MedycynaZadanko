import react from "react"
import dom from "react-dom/client"
import "./index.css"

const Main = () =>
{
    return(
        <>
            <nav className="flex justify-between items-center h-20 mx-32">
                <a className="text-2xl">MedicalFunc</a>
                <div className="flex gap-5 pr-20 text-gray-500">
                    <a>Home</a>
                    <a>Product</a>
                    <a>Pricing</a>
                    <a>Contact</a>
                </div>
                <div className="flex gap-5 items-center">
                    <a>Login</a>
                    <a className="rounded px-5 py-3 bg-blue-500 text-white ">JOIN US →</a>
                </div>
            </nav>
            <header className="flex flex-row my-32 h-section mx-32">
                <div className="flex flex-col gap-10 w-1/2 justify-center">
                    <p className="text-blue-500 text-lg">Welcome</p>
                    <h1 className="text-5xl font-bold spacin leading-snug">Online <br/> Appoinment</h1>
                    <h2 className="text-2xl text-gray-500">Medical Functional is most focused in helping you discover your most beautiful smile</h2>
                    <div className="box-border flex gap-10">
                        <a className="rounded px-10 py-3 bg-blue-500 text-white font-bold">Get Quote Now</a>
                        <a className="rounded px-10 py-3 bg-whte text-blue-500 border-2 box-border border-blue-500 font-bold">Learn More</a>
                    </div>
                </div>
                <div className="w-1/2 bg-blue-400">
                    <img src="https://w7.pngwing.com/pngs/603/191/png-transparent-physician-doktor-cartoon-child-hand-presentation.png" className="h-section object-cover w-full"/>
                </div>
            </header>
            <main className="flex flex-col my-80 gap-32 w-full">
                <section className="flex flex-col justify-center px-52 box-border gap-20 w-full">
                    <div className="flex flex-col gap-5 justify-center w-full">
                        <p className="text-blue-500 text-lg">Practice Advice</p>
                        <h1 className="text-4xl font-bold">Our Activity</h1>
                        <h2 className="text-2xl text-gray-500">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtoman mechanics</h2>
                    </div>
                    <div className="flex flex-row w-full gap-20">
                        <div className=" shadow-lg sha w-1/3 p-4 flex flex-col gap-5">
                            <img src="https://tvn24.pl/najnowsze/cdn-zdjecie-jexnsb-pap_20230809_0hh-ph7963349/alternates/LANDSCAPE_480" className="w-24"/>
                            <h3 className="text-2xl">Emergency Case</h3>
                            <hr className="border-red-700 border-2 w-16"/>
                            <p className="text-gray-500 text-md">The gradual accumulation of information about</p>
                        </div>
                        <div className=" shadow-lg sha w-1/3 p-4 flex flex-col gap-5">
                            <img src="https://img.icons8.com/?size=100&id=87&format=png&color=1A9E02" className="w-24"/>
                            <h3 className="text-2xl">Health Queries</h3>
                            <hr className="border-red-700 border-2 w-16"/>
                            <p className="text-gray-500 text-md">The gradual accumulation of information about</p>
                        </div>
                        <div className=" shadow-lg sha w-1/3 p-4 flex flex-col gap-5">
                            <img src="https://img.icons8.com/?size=100&id=39210&format=png&color=AB0000" className="w-24"/>
                            <h3 className="text-2xl">Painless procedures</h3>
                            <hr className="border-red-700 border-2 w-16"/>
                            <p className="text-gray-500 text-md">The gradual accumulation of information about</p>
                        </div>
                    </div>
                </section>
                <section className="flex flex-row bg-red-200 w-full h-section-x px-52 justify-center gap-20">
                    <div className="w-1/2 flex flex-col justify-center gap-10">
                        <hr className="border-red-700 border-4 w-24"/>
                        <h1 className="text-4xl font-bold">Leading Medicine</h1>
                        <h2 className="text-2xl text-gray-500">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtoman mechanics</h2>
                        <a className="text-blue-500 font-bold">Learn More →</a>
                    </div>
                    <div className="w-1/2 flex justify-center items-center">
                        <img src="https://m.media-amazon.com/images/I/41liiLNL-bL._AC_SY580_.jpg"/>
                    </div>
                </section>
                <section className="flex flex-col justify-center px-52 box-border gap-20 w-full">
                    <div className="flex flex-col gap-5 justify-center w-full">
                        <p className="text-blue-500 text-lg">Practice Advice</p>
                        <h1 className="text-4xl font-bold">Our Doctors Specialize in you</h1>
                        <h2 className="text-2xl text-gray-500">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtoman mechanics</h2>
                    </div>
                    <div className="flex flex-row gap-20">
                        <div className="w-1/3">
                            <span className="absolute bg-red-500 text-white p-1 rounded-md px-4 m-5">Sale</span>
                            <img className="w-full h-80 object-cover" src="https://sire-media-foxpl.ficnohub.com/generic/serie-main/827.640x640.jpg"/>
                            <div className="absolute w-img">
                                <button className="bg-white p-2 rounded-full relative w-10  left-img bottom-16 mr-2"><img src="https://img.icons8.com/?size=100&id=87&format=png&color=000000"/></button>
                                <button className="bg-white p-2 rounded-full relative w-10  left-img bottom-16 mr-2"><img src="https://img.icons8.com/?size=100&id=lUAhXJeo12PL&format=png&color=000000"/></button>
                                <button className="bg-white p-2 rounded-full relative w-10 left-img bottom-16"><img src="https://img.icons8.com/?size=100&id=4y6r43dyjbzw&format=png&color=000000"/></button>
                            </div>
                            <div className=" flex flex-col gap-3 p-2 py-5">
                                <p className="text-blue-500">English Department <span className=" text-white float-end bg-slate-800 px-2 rounded-3xl"><img className="inline-block mr-1" src="https://img.icons8.com/?size=15&id=7856&format=png&color=FFDE59"/>4.9</span></p>
                                <h4 className="text-xl font-bold">Graphic Design</h4>
                                <p className=" text-gray-500">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                                <p className="font-bold text-gray-500 h-line"><img className="inline-block -translate-y-1" src="https://img.icons8.com/?size=24&id=366&format=png&color=6b7280"/> 15 sales</p>
                                <p className="font-bold text-gray-300">$16.48 <span className="text-green-400">$6.48</span></p>
                                <p className="text-gray-400"><img className="inline-block -translate-y-0 mr-1" src="https://img.icons8.com/?size=20&id=RhkKQFp4TrwF&format=png&color=58BCBF"/>22hr 30min <img className="inline-block -translate-y-0 mr-1" src="https://img.icons8.com/?size=20&id=wdfmkgweCGDk&format=png&color=FE9900"/>64 Lessons <img className="inline-block -translate-y-0 mr-1" src="https://img.icons8.com/?size=20&id=3005&format=png&color=4EDD15"/> Progress</p>
                                <a className="border-blue-500 border-2 text-blue-500 rounded-full px-5 py-3 font-bold w-40">Learn More →</a>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <span className="absolute bg-red-500 text-white p-1 rounded-md px-4 m-5">Sale</span>
                            <img className="w-full h-80 object-cover" src={process.env.PUBLIC_URL+"/doctor.jpg"}/>
                            <div className="absolute w-img">
                                <button className="bg-white p-2 rounded-full relative w-10  left-img bottom-16 mr-2"><img src="https://img.icons8.com/?size=100&id=87&format=png&color=000000"/></button>
                                <button className="bg-white p-2 rounded-full relative w-10  left-img bottom-16 mr-2"><img src="https://img.icons8.com/?size=100&id=lUAhXJeo12PL&format=png&color=000000"/></button>
                                <button className="bg-white p-2 rounded-full relative w-10 left-img bottom-16"><img src="https://img.icons8.com/?size=100&id=4y6r43dyjbzw&format=png&color=000000"/></button>
                            </div>
                            <div className=" flex flex-col gap-3 p-2 py-5">
                                <p className="text-blue-500">English Department <span className=" text-white float-end bg-slate-800 px-2 rounded-3xl"><img className="inline-block mr-1" src="https://img.icons8.com/?size=15&id=7856&format=png&color=FFDE59"/>4.9</span></p>
                                <h4 className="text-xl font-bold">Graphic Design</h4>
                                <p className=" text-gray-500">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                                <p className="font-bold text-gray-500 h-line"><img className="inline-block -translate-y-1" src="https://img.icons8.com/?size=24&id=366&format=png&color=6b7280"/> 15 sales</p>
                                <p className="font-bold text-gray-300">$16.48 <span className="text-green-400">$6.48</span></p>
                                <p className="text-gray-400"><img className="inline-block -translate-y-0 mr-1" src="https://img.icons8.com/?size=20&id=RhkKQFp4TrwF&format=png&color=58BCBF"/>22hr 30min <img className="inline-block -translate-y-0 mr-1" src="https://img.icons8.com/?size=20&id=wdfmkgweCGDk&format=png&color=FE9900"/>64 Lessons <img className="inline-block -translate-y-0 mr-1" src="https://img.icons8.com/?size=20&id=3005&format=png&color=4EDD15"/> Progress</p>
                                <a className="border-blue-500 border-2 text-blue-500 rounded-full px-5 py-3 font-bold w-40">Learn More →</a>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <span className="absolute bg-red-500 text-white p-1 rounded-md px-4 m-5">Sale</span>
                            <img className="w-full h-80 object-cover" src="https://img.freepik.com/premium-photo/cat-doctors-clothes-white-background_891428-363.jpg"/>
                            <div className="absolute w-img">
                                <button className="bg-white p-2 rounded-full relative w-10  left-img bottom-16 mr-2"><img src="https://img.icons8.com/?size=100&id=87&format=png&color=000000"/></button>
                                <button className="bg-white p-2 rounded-full relative w-10  left-img bottom-16 mr-2"><img src="https://img.icons8.com/?size=100&id=lUAhXJeo12PL&format=png&color=000000"/></button>
                                <button className="bg-white p-2 rounded-full relative w-10 left-img bottom-16"><img src="https://img.icons8.com/?size=100&id=4y6r43dyjbzw&format=png&color=000000"/></button>
                            </div>
                            <div className=" flex flex-col gap-3 p-2 py-5">
                                <p className="text-blue-500">English Department <span className=" text-white float-end bg-slate-800 px-2 rounded-3xl"><img className="inline-block mr-1" src="https://img.icons8.com/?size=15&id=7856&format=png&color=FFDE59"/>4.9</span></p>
                                <h4 className="text-xl font-bold">Graphic Design</h4>
                                <p className=" text-gray-500">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                                <p className="font-bold text-gray-500 h-line"><img className="inline-block -translate-y-1" src="https://img.icons8.com/?size=24&id=366&format=png&color=6b7280"/> 15 sales</p>
                                <p className="font-bold text-gray-300">$16.48 <span className="text-green-400">$6.48</span></p>
                                <p className="text-gray-400"><img className="inline-block -translate-y-0 mr-1" src="https://img.icons8.com/?size=20&id=RhkKQFp4TrwF&format=png&color=58BCBF"/>22hr 30min <img className="inline-block -translate-y-0 mr-1" src="https://img.icons8.com/?size=20&id=wdfmkgweCGDk&format=png&color=FE9900"/>64 Lessons <img className="inline-block -translate-y-0 mr-1" src="https://img.icons8.com/?size=20&id=3005&format=png&color=4EDD15"/> Progress</p>
                                <a className="border-blue-500 border-2 text-blue-500 rounded-full px-5 py-3 font-bold w-40">Learn More →</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col justify-center px-52 pt-44 box-border gap-20 w-full">
                    <div className="flex flex-col gap-5 justify-center w-full">
                        <p className="text-blue-500 text-lg">Practice Advice</p>
                        <h1 className="text-4xl font-bold">Pricing</h1>
                        <h2 className="text-2xl text-gray-500">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtoman mechanics</h2>
                    </div>
                    <div className="flex flex-row gap-20">
                        <div className="w-1/3 flex flex-col gap-10 justify-start items-start">
                            <img className="p-10 bg-blue-500 rounded-full" src="https://img.icons8.com/?size=50&id=7697&format=png&color=ffffff"/>
                            <h4 className="font-bold text-xl ">FREE</h4>
                            <p className="text-gray-500 font-bold">Organize across all apps by hand</p>
                            <h2 className="text-blue-500 font-bold text-4xl">19$ <br/><span className="text-sm font-normal">Per Month</span></h2>
                            <p className="text-gray-500">State helps you see how many more days you need...</p>
                            <button className="bg-blue-500 text-white p-3 rounded-md w-full">Try for free</button>
                            <p className="font-bold text-sm"><img className="inline-block mr-5" src="https://img.icons8.com/?size=26&id=12402&format=png&color=4ade80"/>Unlimited product updates</p>
                            <p className="font-bold text-sm"><img className="inline-block mr-5" src="https://img.icons8.com/?size=26&id=12402&format=png&color=4ade80"/>Unlimited product updates</p>
                            <p className="font-bold text-sm"><img className="inline-block mr-5" src="https://img.icons8.com/?size=26&id=12402&format=png&color=4ade80"/>Unlimited product updates</p>
                            <p className="font-bold text-sm"><img className="inline-block mr-5" src="https://img.icons8.com/?size=26&id=12402&format=png&color=6b7280"/>1GB Cloud storage</p>
                            <p className="font-bold text-sm"><img className="inline-block mr-5" src="https://img.icons8.com/?size=26&id=12402&format=png&color=6b7280"/>Email and community support</p>
                        </div>
                        <div className="w-1/3 flex flex-col gap-10 justify-start items-start">
                            <div className="absolute w-tag">
                                <span className="bg-orange-400 text-white text-2xl rounded-full font-bold w-24 h-24 block text-center line-h absolute right-0 -mt-12">New</span>
                            </div>
                            <img className="p-10 bg-blue-500 rounded-full" src="https://img.icons8.com/?size=50&id=7697&format=png&color=ffffff"/>
                            <h4 className="font-bold text-xl ">FREE</h4>
                            <p className="text-gray-500 font-bold">Organize across all apps by hand</p>
                            <h2 className="text-blue-500 font-bold text-4xl">19$ <br/><span className="text-sm font-normal">Per Month</span></h2>
                            <p className="text-gray-500">State helps you see how many more days you need...</p>
                            <button className="bg-blue-500 text-white p-3 rounded-md w-full">Try for free</button>
                            <p className="font-bold text-sm"><img className="inline-block mr-5" src="https://img.icons8.com/?size=26&id=12402&format=png&color=4ade80"/>Unlimited product updates</p>
                            <p className="font-bold text-sm"><img className="inline-block mr-5" src="https://img.icons8.com/?size=26&id=12402&format=png&color=4ade80"/>Unlimited product updates</p>
                            <p className="font-bold text-sm"><img className="inline-block mr-5" src="https://img.icons8.com/?size=26&id=12402&format=png&color=4ade80"/>Unlimited product updates</p>
                            <p className="font-bold text-sm"><img className="inline-block mr-5" src="https://img.icons8.com/?size=26&id=12402&format=png&color=6b7280"/>1GB Cloud storage</p>
                            <p className="font-bold text-sm"><img className="inline-block mr-5" src="https://img.icons8.com/?size=26&id=12402&format=png&color=6b7280"/>Email and community support</p>
                        </div>
                        <div className="w-1/3 flex flex-col gap-10 justify-start items-start">
                            <img className="p-10 bg-blue-500 rounded-full" src="https://img.icons8.com/?size=50&id=7697&format=png&color=ffffff"/>
                            <h4 className="font-bold text-xl ">FREE</h4>
                            <p className="text-gray-500 font-bold">Organize across all apps by hand</p>
                            <h2 className="text-blue-500 font-bold text-4xl">19$ <br/><span className="text-sm font-normal">Per Month</span></h2>
                            <p className="text-gray-500">State helps you see how many more days you need...</p>
                            <button className="bg-blue-500 text-white p-3 rounded-md w-full">Try for free</button>
                            <p className="font-bold text-sm"><img className="inline-block mr-5" src="https://img.icons8.com/?size=26&id=12402&format=png&color=4ade80"/>Unlimited product updates</p>
                            <p className="font-bold text-sm"><img className="inline-block mr-5" src="https://img.icons8.com/?size=26&id=12402&format=png&color=4ade80"/>Unlimited product updates</p>
                            <p className="font-bold text-sm"><img className="inline-block mr-5" src="https://img.icons8.com/?size=26&id=12402&format=png&color=4ade80"/>Unlimited product updates</p>
                            <p className="font-bold text-sm"><img className="inline-block mr-5" src="https://img.icons8.com/?size=26&id=12402&format=png&color=6b7280"/>1GB Cloud storage</p>
                            <p className="font-bold text-sm"><img className="inline-block mr-5" src="https://img.icons8.com/?size=26&id=12402&format=png&color=6b7280"/>Email and community support</p>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col justify-center px-52 pt-44 box-border gap-20 w-full">
                    <div className="flex flex-col gap-5 justify-center w-full">
                        <p className="text-blue-500 text-lg">Practice Advice</p>
                        <h1 className="text-4xl font-bold">Each and every client is important</h1>
                        <h2 className="text-2xl text-gray-500">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtoman mechanics</h2>
                    </div>
                    <div className="flex flex-row gap-20 px-28">
                        <div className="w-1/3 flex flex-col justify-center items-center gap-10">
                            <div><img className="inline-block mr-1" src="https://img.icons8.com/?size=30&id=7856&format=png&color=FFDE59"/><img className="inline-block mr-1" src="https://img.icons8.com/?size=30&id=7856&format=png&color=FFDE59"/><img className="inline-block mr-1" src="https://img.icons8.com/?size=30&id=7856&format=png&color=FFDE59"/><img className="inline-block mr-1" src="https://img.icons8.com/?size=30&id=7856&format=png&color=FFDE59"/><img className="inline-block mr-1" src="https://img.icons8.com/?size=30&id=104&format=png&color=FFDE59"/></div>
                            <p className="text-center text-gray-500">State helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                            <div className="float-start w-full">
                                <img className="w-24 h-24 object-cover rounded-full inline-block float-start mr-5" src="https://i1.sndcdn.com/artworks-FRIqYPtESjPf6jwJ-mEXsUg-t500x500.jpg"/>
                                <h4 className="w-1/2 mt-6 float-left box-border text-blue-500 font-bold">Regina Miles</h4>
                                <p className="w-1/2 float-left box-border">Designer</p>
                            </div>
                        </div>
                        <div className="w-1/3 flex flex-col justify-center items-center gap-10">
                            <div><img className="inline-block mr-1" src="https://img.icons8.com/?size=30&id=7856&format=png&color=FFDE59"/><img className="inline-block mr-1" src="https://img.icons8.com/?size=30&id=7856&format=png&color=FFDE59"/><img className="inline-block mr-1" src="https://img.icons8.com/?size=30&id=7856&format=png&color=FFDE59"/><img className="inline-block mr-1" src="https://img.icons8.com/?size=30&id=7856&format=png&color=FFDE59"/><img className="inline-block mr-1" src="https://img.icons8.com/?size=30&id=104&format=png&color=FFDE59"/></div>
                            <p className="text-center text-gray-500">State helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                            <div className="float-start w-full">
                                <img className="w-24 h-24 object-cover rounded-full inline-block float-start mr-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl_Lj7_qGVPezbyNHzC9sqYLKMLb1P2pD5MQ&s"/>
                                <h4 className="w-1/2 mt-6 float-left box-border text-blue-500 font-bold">Regina Miles</h4>
                                <p className="w-1/2 float-left box-border">Designer</p>
                            </div>
                        </div>
                        <div className="w-1/3 flex flex-col justify-center items-center gap-10">
                            <div><img className="inline-block mr-1" src="https://img.icons8.com/?size=30&id=7856&format=png&color=FFDE59"/><img className="inline-block mr-1" src="https://img.icons8.com/?size=30&id=7856&format=png&color=FFDE59"/><img className="inline-block mr-1" src="https://img.icons8.com/?size=30&id=7856&format=png&color=FFDE59"/><img className="inline-block mr-1" src="https://img.icons8.com/?size=30&id=7856&format=png&color=FFDE59"/><img className="inline-block mr-1" src="https://img.icons8.com/?size=30&id=104&format=png&color=FFDE59"/></div>
                            <p className="text-center text-gray-500">State helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                            <div className="float-start w-full">
                                <img className="w-24 h-24 object-cover rounded-full inline-block float-start mr-5" src="https://hips.hearstapps.com/hmg-prod/images/dr_dre_photo_by_christopher_pol_getty_images_entertainment_getty_120919208.jpg"/>
                                <h4 className="w-1/2 mt-6 float-left box-border text-blue-500 font-bold">Regina Miles</h4>
                                <p className="w-1/2 float-left box-border">Designer</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col justify-center px-96 pt-44 box-border gap-20 w-full">
                    <div className="flex flex-col gap-5 justify-center w-full items-center text-center">
                        <p className="text-blue-500 text-lg">Newsletter</p>
                        <h1 className="text-4xl font-bold">JOIN US</h1>
                        <h2 className="text-2xl text-gray-500">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtoman mechanics</h2>
                        <div className="w-full">
                            <input className="font-bold p-3 w-5/6 focus:outline-none shadow-md" placeholder="Your Email" />
                            <button className="bg-blue-500 text-white p-3 rounded-r-md w-1/6" >Subscribe</button>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col px-52 gap-32">
                <div className="flex flex-row">
                    <div className="flex flex-col w-1/5 gap-5 text-gray-500">
                        <h4 className="font-bold text-black text-lg">Company info</h4>
                        <a>About Us</a>
                        <a>Carrier</a>
                        <a>We are hiring</a>
                        <a>Blog</a>
                    </div>
                    <div className="flex flex-col w-1/5 gap-5 text-gray-500">
                        <h4 className="font-bold text-black text-lg">Legal</h4>
                        <a>About Us</a>
                        <a>Carrier</a>
                        <a>We are hiring</a>
                        <a>Blog</a>
                    </div>
                    <div className="flex flex-col w-1/5 gap-5 text-gray-500">
                        <h4 className="font-bold text-black text-lg">Features</h4>
                        <a>Bussiness Marketing</a>
                        <a>User Analytic</a>
                        <a>Live Chat</a>
                        <a>Unlimited Support</a>
                    </div>
                    <div className="flex flex-col w-1/5 gap-5 text-gray-500">
                        <h4 className="font-bold text-black text-lg">Resources</h4>
                        <a>IOS & Android</a>
                        <a>Watch a Demo</a>
                        <a>Customers</a>
                        <a>API</a>
                    </div>
                    <div className="flex flex-col w-1/5 gap-5 text-gray-500">
                        <h4 className="font-bold text-black text-lg">Get In Touch</h4>
                        <a><img className="inline-block mr-1" src="https://img.icons8.com/?size=30&id=9659&format=png&color=3b82f6"/>(480) 555-0103</a>
                        <a><img className="inline-block mr-1" src="https://img.icons8.com/?size=30&id=3723&format=png&color=3b82f6"/>4517 Washington Ave. Manchester. Kentucky 39495</a>
                        <a><img className="inline-block mr-1" src="https://img.icons8.com/?size=30&id=12580&format=png&color=3b82f6"/>debra.holt@example.com</a>
                    </div>
                </div>
                <div>
                    <h4 className="text-gray-500 font-bold text-lg py-5">Made With Love By Figmaland All RIght Reserved 
                        <span className="float-end">
                            <a><img className="inline-block mr-5" src="https://img.icons8.com/?size=30&id=435&format=png&color=3b82f6"/></a>
                            <a><img  className="inline-block mr-5"  src="https://img.icons8.com/?size=30&id=32292&format=png&color=3b82f6"/></a>
                            <a><img  className="inline-block"  src="https://img.icons8.com/?size=30&id=437&format=png&color=3b82f6"/></a>
                        </span>
                        </h4>
                </div>
            </footer>
        </>
    )    
}

const root = dom.createRoot(document.getElementById("root"));
root.render(<Main/>)