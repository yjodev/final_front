import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface MatchParams {
    id: string;
}

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

export function MessagePage({ match }: RouteComponentProps<MatchParams>) {
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState<any>();
    const [search, setSearch] = useState("");

    const onChangeSearch = (e: any) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    const { push } = useHistory();
    const [messages, setMessages] = useState([]);
    const { id } = match.params;
    const [roomTitle, setRoomTitle] = useState('');
    const [content, setContent] = useState('');
    const sendMsg = () => {
        axios
            .post('http://localhost:1337/api/messages', {
                data: {
                    content: content,
                    room: +id,
                    username: localStorage.getItem('username'),
                },
            })
            .then((response) => {
                // Handle success.

                window.location.reload();
            })
            .catch((error) => {
                // Handle error.
                console.log('An error occurred:', error.response);
            });
    };

    useEffect(() => {
        const roomsData = axios
            .get(`http://localhost:1337/api/rooms/${id}?populate=*`)
            .then((res) => {
                setMessages(res.data.data.attributes.messages.data);
                const title = res.data.data.attributes.title;
                setRoomTitle(title);
            });
    }, []);




    return (
        <div>
            <div>



                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">

                        <div className="hidden w-full text-gray-600 md:flex md:items-center">

                            <div className="m-5 text-slate-400">
                                <a href="javascript:history.back();">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-10 w-10"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <button className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                            메세지함
                        </button>

                        <div className="flex items-center justify-end w-full">
                            <Link to="/homepage">
                                <button className="text-gray-600 focus:outline-none mx-4 sm:mx-0" onClick={() => setOpen(true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                    </svg>
                                </button>
                            </Link>
                            <div className="flex sm:hidden">
                                <button type="button" className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
                                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
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
                                        src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
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

                    </button>
                </div>
                <div className="flex-grow ml-4">
                    <div className="relative w-full">
                        <input
                            type="text"
                            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                            onChange={(event) => {
                                setContent(event.target.value);
                            }}
                        />
                        <button
                            className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                            onClick={() => {
                                sendMsg();
                            }}
                        >

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
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
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
