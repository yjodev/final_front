import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const dummy = [
    {
        id: 1,
        name: 'Marcel Jones ',
        email: "atuny0@sohu.com",
        phone: "+63 791 675 8914",
        show: false,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
        id: 2,
        name: 'Sheldon Quigley ',
        "email": "hbingley1@plala.or.jp",
        "phone": "+7 813 117 7139",
        show: false,
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
    },
    {
        id: 3,
        name: 'Leonard Leach ',
        "email": "rshawe2@51.la",
        "phone": "+63 739 292 7942",
        show: true,
        image: "https://images.unsplash.com/photo-1584999734482-0361aecad844?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500",
    },


]

export const MessagePage = () => {
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState<any>();
    const [search, setSearch] = useState("");

    const onChangeSearch = (e: any) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    return (
        <div>
            <div>



                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">

                        <div className="hidden w-full text-gray-600 md:flex md:items-center">
                            {/* <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z" fill="currentColor" />
                            </svg> */}



                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>

                            </svg>

                            <Link to="/follow">
                                <button className="mx-1 text-sm">Follower</button>
                            </Link>
                        </div>

                        <button className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                            메세지함
                        </button>

                        <div className="flex items-center justify-end w-full">
                            <Link to="/homepage">
                                <button className="text-gray-600 focus:outline-none mx-4 sm:mx-0" onClick={() => setOpen(true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                    </svg>
                                </button>
                            </Link>
                            <div className="flex sm:hidden">
                                <button type="button" className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
                                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                        <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>





                <div className="w-full h-full flex flex-col">
                    <div className="h-16 border-b flex justify-between items-center w-full px-5 py-2 shadow-sm">
                        <div className="flex items-center">
                            <img className="h-10 w-10 overflow-hidden rounded-full"
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                alt="" />
                            <p className="font-semibold ml-3 text-slate-600">김경진</p>
                        </div>

                    </div>
                    <div className="h-full px-10 py-4">

                        <div className="text-center  my-5">
                            <hr className="-mb-3" />
                            <span className="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">Wednesday, Feburary
                                5</span>
                        </div>

                        <div className="w-full flex flex-start overflow-y-auto">
                            <div className="w-1/2">
                                <div className="flex items-center">
                                    <img className="h-5 w-5 overflow-hidden rounded-full"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                        alt="" />
                                    <p className="font-semibold ml-3 text-sm text-slate-600">김경진 <span
                                        className="text-slate-400 text-xs">3:21 PM</span></p>
                                </div>

                                <div className="mt-3 w-full bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                                    <p className=" text-sm text-slate-500">
                                        유진아, <br />
                                        이 선물 어때?
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex justify-end mt-3">
                            <div className="w-1/2 ">
                                <div className="flex items-center justify-end">
                                    <p className="font-semibold mr-3 text-sm text-slate-600">Me <span
                                        className="text-slate-400 text-xs">3:25 PM</span></p>

                                    <img className="h-5 w-5 overflow-hidden rounded-full"
                                        src="https://source.unsplash.com/random/500x500/?face"
                                        alt="" />

                                </div>

                                <div className="mt-3 w-full bg-blue-500 p-4 rounded-b-xl rounded-tl-xl">
                                    <p className=" text-sm text-white">
                                        헐 <br />
                                        너무 좋아
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center  my-5">
                            <hr className="-mb-3" />
                            <span className="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">Today, 2:15 AM
                                5</span>
                        </div>

                        <div className="w-full flex flex-start">
                            <div className="w-1/2">
                                <div className="flex items-center">
                                    <img className="h-5 w-5 overflow-hidden rounded-full"
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                        alt="" />
                                    <p className="font-semibold ml-3 text-sm text-slate-600">김경진 <span
                                        className="text-slate-400 text-xs">3:21 PM</span></p>
                                </div>

                                <div className="mt-3  bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                                    <p className=" text-sm text-slate-500">
                                        그래? 이거 사줄게
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>
            </div>



            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                <div>
                    <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className="flex-grow ml-4">
                    <div className="relative w-full">
                        <input
                            type="text"
                            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                        />
                        <button
                            className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="ml-4">
                    <button
                        className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                    >
                        <span>Send</span>
                        <span className="ml-2">
                            <svg
                                className="w-4 h-4 transform rotate-45 -mt-px"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                ></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>


    );
};
