import React from "react"
import { Link } from "react-router-dom"
import Logo from "./../../../assets/Website_Logo.svg"


function Header() {

    return (
        <nav className="bg-customBg">

            <div className="navbar md:flex justify-between p-0 sm:p-2">

                <div className="navbar-start sm:hidden">
                    <div className="dropdown dropdown-start">
                        <div tabindex="0" className="">
                            <label className="btn btn-ghost hover:bg-gray-100 hover:shadow-md swap swap-rotate">
                                {/* <!-- this hidden checkbox controls the state --> */}
                                <input type="checkbox" />

                                {/* <!-- hamburger icon --> */}
                                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                    viewBox="0 0 512 512">
                                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                                </svg>

                                {/* <!-- close icon --> */}
                                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                    viewBox="0 0 512 512">
                                    <polygon
                                        points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                                </svg>
                            </label>
                        </div>
                        <ul tabindex="0"
                            className="menu menu-md dropdown-content top-14 bg-gray-50 rounded-b z-[11] shadow-sm min-w-72">

                            <Link to={"/"} className="text-lg font-semibold mx-auto py-2">Home</Link>

                            {/* <!-- nested drop-down  --> */}
                            <li className=" transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105
                         duration-300">
                                <Link to={"/products"}
                                    className="mb-1 bg-gray-50 hover:bg-gray-100 p-6 rounded cursor-pointer shadow-sm hover:shadow-xl">
                                    <div className="font-semibold" >Collections</div>
                                </Link>
                            </li>
                            {/* <!-- nested drop-down  --> */}
                            <li className=" transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105
                         duration-300">
                                <Link to={"/winter"}
                                    className="mb-1 bg-gray-50 hover:bg-gray-100 p-6 rounded cursor-pointer shadow-sm hover:shadow-xl">
                                    <div className="font-semibold" >Winter</div>
                                </Link>
                            </li>
                            {/* <!-- nested drop-down  --> */}
                            <li className=" transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105
                         duration-300">
                                <details className="mb-1">
                                    <summary
                                        className="bg-gray-50 hover:bg-gray-100 p-6 rounded cursor-pointer shadow-sm hover:shadow-xl">
                                        <Link to={"/products"} className="font-semibold" >Men</Link>
                                    </summary>
                                    <ul className="">
                                        <li className="bg-sky-50 hover:bg-sky-100 p-2 my-2 rounded cursor-pointer shadow-sm"><a
                                            href="#">Winter Collections</a></li>
                                    </ul>
                                </details>
                            </li>
                            {/* <!-- nested drop-down  --> */}
                            <li className=" transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105
                         duration-300">
                                <details className="mb-1">
                                    <summary
                                        className="bg-gray-50 hover:bg-gray-100 p-6 rounded cursor-pointer shadow-sm hover:shadow-xl">
                                        <Link to={"/products"} className="font-semibold" >Women</Link>
                                    </summary>
                                    <ul className="">
                                        <li className="bg-sky-50 hover:bg-sky-100 p-2 my-2 rounded cursor-pointer shadow-sm"><a
                                            href="#">Winter Collections</a></li>
                                    </ul>
                                </details>
                            </li>
                            {/* <!-- nested drop-down  --> */}
                            <li className=" transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105
                         duration-300">
                                <details className="mb-1">
                                    <summary
                                        className="bg-gray-50 hover:bg-gray-100 p-6 rounded cursor-pointer shadow-sm hover:shadow-xl">
                                        <Link to={"/products"} className="font-semibold" >Kid's</Link>
                                    </summary>
                                    <ul className="">
                                        <li className="bg-sky-50 hover:bg-sky-100 p-2 my-2 rounded cursor-pointer shadow-sm"><a
                                            href="#">Winter Collections</a></li>
                                    </ul>
                                </details>
                            </li>
                            {/* <!-- nested drop-down  --> */}
                            <li className=" transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105
                         duration-300">

                                <Link to={"/minaz-dream"}
                                    className="mb-1 bg-gray-50 hover:bg-gray-100 p-6 rounded cursor-pointer shadow-sm hover:shadow-xl">
                                    <div className="font-semibold" >Minaz-Dream(Brand)</div>
                                </Link>
                            </li>


                        </ul>
                    </div>
                </div>

                <div className="navbar-center">
                    <div className="avatar lg:pl-[100px] lg:mt-5 ">

                        <Link to={"/"} style={{
                            backgroundImage: `url(${Logo})`,
                            backgroundSize: `cover`,
                            backgroundRepeat: `no-repeat`,
                            backgroundPosition: `center`
                        }}
                            className=" h-10 w-44 lg:h-20 sm:h-14 sm:w-60 lg:w-80 cursor-pointer">
                        </Link>
                    </div>
                </div>



                <div className="navbar sm:hidden mr-2">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>

                    <Link to={"/shoping-cart"} className="flex no-underline hover:text-black" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                    </Link>

                    <Link to={"/login"} className="flex px-2 sm:hidden no-underline hover:text-black" href="#">
                        <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24">
                            <circle fill="none" cx="12" cy="7" r="3" />
                            <path
                                d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                        </svg>
                    </Link>

                </div>

                <form className="navbar-end hidden sm:flex lg:pr-[100px]">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>

                        </div>
                        <input type="search" id="default-search"
                            className=" w-full px-3 py-[10px] ps-10 text-sm text-gray-900 outline-none rounded-md bg-sky-50  ring-1 focus:ring-2 ring-sky-100 ring-offset-2 ring-offset-sky-50"
                            placeholder="Searching" required />

                        <div className="absolute end-[2px] top-0">
                            <a
                                className="group relative inline-block overflow-hidden border border-sky-200 bg-sky-200 px-6 py-[7px] focus:outline-none"
                                href="#"
                            >
                                <span
                                    className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-tr from-sky-300 to-yellow-600 transition-all group-hover:w-full group-active:bg-sky-500"
                                ></span>

                                <span
                                    className="relative text-sm tracking-wider font-medium text-sky-900 transition-colors group-hover:text-white"
                                >
                                    search
                                </span>
                            </a></div>
                    </div>
                </form>
            </div>


            <div className="hidden sm:flex items-center justify-end text-xs  lg:pr-20 md:pr-20">



                <Link className="flex items-center no-underline hover:text-black " to={"/shoping-cart"}> <svg
                    className="mr-2 w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                >
                    {/* SVG path data */}
                    <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20l44 0 0 44c0 11 9 20 20 20s20-9 20-20l0-44 44 0c11 0 20-9 20-20s-9-20-20-20l-44 0 0-44c0-11-9-20-20-20s-20 9-20 20l0 44-44 0c-11 0-20 9-20 20z" />
                </svg>
                    Cart</Link>

                <Link className="flex items-center pl-3 no-underline hover:text-black" to={"/whish-list"}>
                    <svg className="mr-2 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg>
                    WishList</Link>
                    
                    <Link className="flex items-center pl-3 no-underline hover:text-black"  to={"/login"}>
                    <svg className="mr-2 w-6 h-6" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                        <style type="text/css">
                            {`
                            .st0 { fill: #1E3050; }
                            .st1 { fill: #A5ACB9; }
                        `}
                        </style>
                        <g>
                            <image style={{ overflow: 'visible', opacity: 0.3 }} width="522" height="457" xlinkHref="490B6D0D.png" transform="matrix(1 0 0 1 -3.4016 29.5984)"></image>
                            <g>
                                <g>
                                    <path className="st0" d="M344.4,278L213.2,410.8c-19.7,19.9-53.6,6-53.6-22v-69.2H28c-15.9,0-28.8-12.9-28.8-28.8v-69.6
                                    c0-15.9,12.9-28.8,28.8-28.8h131.6v-69.2c0-28,33.9-41.9,53.6-22L344.4,234C356.4,246.2,356.4,265.8,344.4,278z"/>
                                    <path className="st1" d="M512.8,123.5v265c0,50.7-41.1,91.9-91.9,91.9h-71.4c-17.2,0-31.1-13.9-31.1-31.1v0
                                    c0-17.2,13.9-31.1,31.1-31.1h62.3c21.4,0,38.8-17.4,38.8-38.8V132.6c0-21.4-17.4-38.8-38.8-38.8h-62.3
                                    c-17.2,0-31.1-13.9-31.1-31.1v0c0-17.2,13.9-31.1,31.1-31.1h71.4C471.7,31.6,512.8,72.8,512.8,123.5z"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                    Login</Link>
                
            </div>


            <div className="hidden sm:flex justify-center items-center cursor-pointer bg-sky-50">

                {/* <Link to={"/winter"} className="btn bg-sky-50 hover:bg-sky-200 border-0 rounded-sm py-4 mx-[1px] min-w-28">
                    Winter</Link> */}
                <div className="mr-[2px]">
                    <Link to={"/"}
                        className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                        href="#"
                    >
                        <span
                            className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-yellow-600 to-sky-300 transition-all group-hover:h-full group-active:bg-sky-500"
                        ></span>

                        <span
                            className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                        >
                            Home
                        </span>
                    </Link></div>
                <div className="mr-[2px]">
                    <Link to={"/products"}
                        className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                        href="#"
                    >
                        <span
                            className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-sky-300 to-yellow-600 transition-all group-hover:h-full group-active:bg-sky-500"
                        ></span>

                        <span
                            className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                        >
                            Collections
                        </span>
                    </Link></div>

                <div className="mr-[2px]">
                    <Link to={"/winter"}
                        className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                        href="#"
                    >
                        <span
                            className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-yellow-600 to-sky-300  transition-all group-hover:h-full group-active:bg-sky-500"
                        ></span>

                        <span
                            className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                        >
                            Winter
                        </span>
                    </Link></div>

                <div className="mr-[2px]">
                    <Link to={"/men"}
                        className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                        href="#"
                    >
                        <span
                            className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-sky-300 to-yellow-600 transition-all group-hover:h-full group-active:bg-sky-500"
                        ></span>

                        <span
                            className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                        >
                            Men
                        </span>
                    </Link></div>
                <div className="mr-[2px]">
                    <Link to={"/women"}
                        className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                        href="#"
                    >
                        <span
                            className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-yellow-600 to-sky-300 transition-all group-hover:h-full group-active:bg-sky-500"
                        ></span>

                        <span
                            className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                        >
                            Women
                        </span>
                    </Link></div>
                <div className="mr-[2px]">
                    <Link to={"/kids"}
                        className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                        href="#"
                    >
                        <span
                            className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-sky-300 to-yellow-600 transition-all group-hover:h-full group-active:bg-sky-500"
                        ></span>

                        <span
                            className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                        >
                            Kid's
                        </span>
                    </Link></div>
                <div className="mr-[2px]">
                    <Link
                        className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                        to={"/minaz-dream"}
                    >
                        <span
                            className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-yellow-600 to-sky-300 transition-all group-hover:h-full group-active:bg-sky-500"
                        ></span>

                        <span
                            className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                        >
                            Minaz-Dream
                        </span>
                    </Link></div>


            </div>
        </nav>
    )
}
export default React.memo(Header);