import { useState } from "react";
import { Link } from "react-router-dom";

const dummy = [{
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
    name: 'Wade Warren',
    description: 'Marketing Liaison\nCoordinator 💪',
    cart: [{
        name: 'Mac Book Pro',
        amount: 2,
        price: 20,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
    }]
},
{
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
    name: 'Loura Weber',
    description: 'Lead Manager\nConfidence',
    cart: [{
        name: 'Air Pod',
        amount: 2,
        price: 20,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
    }]
},
{
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
    name: 'Jane Cooper',
    description: 'Dog Trainer\nTrainer',
    cart: [{
        name: 'Dog Food',
        amount: 200,
        price: 10,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
    }]
},
{
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
    name: 'Jane Cooper',
    description: 'Dog Trainer\nTrainer',
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
    return (

        <div className="header">
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">

                    <div className="hidden w-full text-gray-600 md:flex md:items-center">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z" fill="currentColor" />
                        </svg>
                        <Link to="/homepage">
                            <button className="mx-1 text-sm">Home</button>
                        </Link>
                    </div>

                    <button className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                        친구 목록
                    </button>

                    <div className="flex items-center justify-end w-full">
                        <button className="text-gray-600 focus:outline-none mx-4 sm:mx-0" onClick={() => setOpen(true)}>
                            <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </button>
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

            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />


            <div className='flex flex-col items-center justify-center min-h-screen p-16 bg-slate-200'>

                {/* <div className="mb-4">
                    <button className="toggle-theme btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300" type="button">친구 추가</button>
                </div> */}
                <div className='user-list w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl flex flex-col py-4'>
                    {dummy.map((data: any) => <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
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

                        <div className="user-option mx-auto sm:ml-auto sm:mr-0">
                            <button className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300" type="button" onClick={() => {
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
                        <h3 className="text-2xl font-medium text-gray-700">Your cart</h3>
                        <button className="text-gray-600 focus:outline-none" onClick={() => setOpen(false)}>
                            <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>
                    <hr className="my-3" />

                    {cartData?.map((cart: any) => <div className="flex justify-between mt-6">
                        <div className="flex">
                            <img className="h-20 w-20 object-cover rounded" src={cart.image} alt="" />
                            <div className="mx-3">
                                <h3 className="text-sm text-gray-600">{cart.name}</h3>
                                <div className="flex items-center mt-2">
                                    <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                    <span className="text-gray-700 mx-2">{cart.amount}</span>
                                    <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <span className="text-gray-600">{cart.price}$</span>
                    </div>)}

                    <div className="mt-8">
                        <form className="flex items-center justify-center">
                            <input className="form-input w-48" type="text" placeholder="Add promocode" />
                            <button className="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <span>Apply</span>
                            </button>
                        </form>
                    </div>
                    <a className="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <span>Chechout</span>
                        <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                </div>
            </div>
        </div >
    )
};