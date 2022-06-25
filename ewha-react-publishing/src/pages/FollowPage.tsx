import { useState } from "react";
import { Link } from "react-router-dom";

const dummy = [{
    id: "1",
    profile: "https://cyber.ewha.ac.kr/pluginfile.php/1911367/user/icon/coursemosv2/f1?rev=55184336",
    name: '최용철',
    description: '1/12 \nEntropy Paradox💻',
    cart: [{
        name: 'Mac Book Pro',
        amount: 10,
        price: 1960000,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
        link: "https://www.coupang.com/vp/products/4322481029?itemId=5504842535&vendorItemId=72804430096&pickType=COU_PICK&q=%EB%A7%A5%EB%B6%81%ED%94%84%EB%A1%9C&itemsCount=36&searchId=6808399a6dc9450a839db6079690c7d1&rank=3&isAddedCart="
    },
    {
        name: '썬글라스',
        amount: 1,
        price: 20900,
        image: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuJTIwZ2xhc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        link: "https://www.coupang.com/vp/products/5315492295?itemId=7715737429&vendorItemId=75146505219&pickType=COU_PICK&q=%EC%8D%AC%EA%B8%80%EB%9D%BC%EC%8A%A4&itemsCount=36&searchId=5a003ea027ba406dba04542c77f1b1c7&rank=1&isAddedCart="
    }]
},
{
    id: "2",
    profile: "https://avatars.githubusercontent.com/u/16367297?v=4",
    name: '김정현',
    description: '3/21 \n Entropy Paradox💻',
    cart: [{
        name: 'Air Pod Pro',
        amount: 1,
        price: 20,
        image: "https://images.unsplash.com/photo-1606741965429-8d76ff50bb2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kJTIwcHJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }, {
        name: '와인',
        amount: 1,
        price: 20,
        image: "https://media.istockphoto.com/photos/pouring-red-wine-into-a-glass-on-rustic-wooden-table-picture-id1297231609?b=1&k=20&m=1297231609&s=170667a&w=0&h=SAI7SM2elNrYB5yqUMpNOo_q3dWNfxroMmMMPPtC_fo="
    }
    ]
},
{
    id: "3",
    profile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: '박지은',
    description: '4/3 \n All rounder 😉',
    cart: [{
        name: 'Ice Cream Cake',
        amount: 1,
        price: 33000,
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aWNlJTIwY3JlYW0lMjBjYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        name: '디퓨저',
        amount: 1,
        price: 23000,
        image: "https://images.unsplash.com/photo-1617351165959-471f874b60a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGRpZmZ1c2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }]
},
{
    id: "4",
    profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: '김경진',
    description: '3/30 \n 멋쟁이✨',
    cart: [{
        name: '휴대용 선풍기',
        amount: 1,
        price: 10,
        image: "https://images.unsplash.com/photo-1523437345381-db5ee4df9c04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        link: "https://www.coupang.com/vp/products/1802195522?itemId=3066335622&vendorItemId=81539231504&q=%ED%9C%B4%EB%8C%80%EC%9A%A9+%EC%84%A0%ED%92%8D%EA%B8%B0&itemsCount=36&searchId=4c10c7b409d14c13b8d674c8bdf8d67a&rank=15&isAddedCart="
    }]
},
{
    id: "5",
    profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: '오유진',
    description: '1/1 \n 경영학과😎',
    cart: [{
        name: 'Dog Food',
        amount: 200,
        price: 10,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
    }]
}]

export const FollowPage = () => {
    const [open, setOpen] = useState(false);
    const [cartData, setCartData] = useState<any[]>();
    const [count, setCount] = useState(1);


    // cart 수량 변경용
    function addCart() {
        setCount(count + 1);
    }

    function deleteCart() {
        setCount(count - 1);
    }

    return (

        <div className="header">
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">

                    <div className="hidden w-full text-gray-600 md:flex md:items-center">

                        
                    </div>


                    <button className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                        Following
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
            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">

                <div className="flex-grow ml-4">
                    <div className="relative w-full">
                        <input
                            type="text"
                            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                            placeholder='이메일로 검색하세요'
                        />
                        <button
                            className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                        >

                        </button>
                    </div>
                </div>
                <div className="ml-4">
                    <button
                        className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                    >
                        <span>친구추가</span>

                    </button>
                </div>
            </div>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />


            <div className='flex flex-col items-center justify-center min-h-screen p-16 bg-white-200'>

                {/* <div className="mb-4">
                    <button className="toggle-theme btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300" type="button">친구 추가</button>
                </div> */}

                <div className='user-list w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl flex flex-col py-4'>
                    {dummy.map((data: any) => <div key={data.id} className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
                        <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
                            <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                                <img className="avatar w-20 h-20 rounded-full" src={data.profile} />
                            </div>
                            <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                                <a href="#" className="title font-medium no-underline">{data.name}</a>
                                <div className="skills flex flex-col">
                                    <span className="whitespace-pre-line subtitle text-slate-500">{data.description}</span>
                                </div>
                            </div>
                        </div>

                        <div className="user-option mx-auto sm:ml-auto sm:mr-0 ">
                            <Link to="/message">
                                <button className="mx-2 btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-blue-500 hover:bg-blue-600 duration-300"> 메세지 </button></Link>
                            <button className="mx-2 btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-blue-500 hover:bg-blue-600 duration-300" type="button" onClick={() => {
                                if (!cartData) {
                                    setOpen(true);

                                    setCartData(data.cart)
                                } else {

                                    setOpen(false);
                                    setTimeout(() => {
                                        setCartData(data.cart)
                                        setOpen(true)
                                    }, 500)
                                }

                            }}>장바구니</button>
                        </div>

                    </div>)}



                    <a className="show-more block w-10/12 mx-auto py-2.5 px-4 text-center no-underline rounded hover:bg-[#f6f8f9] font-medium duration-300" href="#/">Show more members</a>
                </div>
                <div className={`fixed ${open ? 'right-0' : '-right-80'} duration-100 ease-in-out transition transition-all top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300`}>
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-medium text-gray-700">Cart</h3>
                        <button className="text-gray-600 focus:outline-none" onClick={() => setOpen(false)}>
                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>
                    <hr className="my-3" />

                    {cartData?.map((cart: any) => <div><div className="flex justify-between mt-6">
                        <div className="flex">
                            <img className="h-20 w-20 object-cover rounded" src={cart.image} alt="" />
                            <div className="mx-3">
                                <h3 className="text-sm text-gray-600">{cart.name}</h3>
                                <div className="flex items-center mt-2">
                                    <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                    <span className="text-gray-700 mx-2">{cart.amount}</span>
                                    <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <span className="text-gray-600">{cart.price}원</span>
                    </div>
                        <div>
                            <a className="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">

                                <a href={cart.link}>

                                    <span>🎁 선물하기</span>
                                </a>
                                <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>
                    </div>)}


                </div>
            </div>
        </div >
    )
};