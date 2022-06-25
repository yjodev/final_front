import axios from 'axios';
import { relativeTimeRounding } from 'moment';
import React, { useEffect,useState } from 'react';
import { Link, useHistory } from "react-router-dom"


export const RandomPage = () => {
	const { push } = useHistory();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productsData = axios
            .get('https://startup-coding-hbd.herokuapp.com/api/products')
            .then((res) => {
                setProducts(res.data.data);
                console.log("res.data.data: ",res.data.data);
            });
    }, []);

	return <div>
    <div className="header">
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
                            fillRule="evenodd"
                            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </div>
        </div>


        <button className="w-full text-gray-700 md:text-center text-2xl font-semibold">
            랜덤 선물 추천
        </button>

        <div className="flex items-center justify-end w-full">
            <Link to="/homepage">
                <button className="text-gray-600 focus:outline-none mx-4 sm:mx-0" >
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
</div>

<div className="products">
    {products.map((data: any) => {
        return(
    <div key={data.id} className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          
              <div className="">
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div> </div>
                  <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: `url('${data.attributes.image})` }} >
                    {/* <img src="https://images.unsplash.com/photo-1587815073078-f636169821e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3RyYXdiZXJyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""></img> */}
                    <button onClick={() => {
                      const isOk = window.confirm('장바구니에 담겼습니다. 계속 쇼핑하시겠습니까?')
                    }} className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                  </div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">{data.attributes.name}</h3>
                    <h3 className="text-gray-700 uppercase">{data.attributes.description}</h3>
                    <span className="text-gray-500 mt-2">{data.attributes.price}원</span>
                  </div>
                </div>
              </div>
          
        
          
          <div>

          </div>

    </div>)})}


</div>

 

</div>

};