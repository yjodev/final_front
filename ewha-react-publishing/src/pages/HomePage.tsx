import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { isJSDocDeprecatedTag, isTemplateExpression } from 'typescript';
import { Label } from '../components/Label';
import { ProductCard } from '../components/ProductCard'

const qs = require('qs');
const query = qs.stringify({
  filters: {
    "userId": {
      $eq: 9,
    },
  },
  populate: '*'
}, {
  encodeValuesOnly: true,
});

axios.get(`https://startup-coding-hbd.herokuapp.com/api/products?${query}`)
// .then(res => console.log('장바구니 데이터 : ', res.data))

console.log('query : ', query)

export type Product = {
  name: string;
  description: string;
  price: number;
  image: string
}

export type Cart = {
  userID: string;
  name: string;
  description: string;
  price: number;
  image: string
}



const filters = [{
  id: 1,
  min: 0,
  max: 10000,
}, {
  id: 2,
  min: 10000,
  max: 20000,
}, {
  id: 3,
  min: 20000,
  max: 30000,
}, {
  id: 4,
  min: 30000,
  max: 40000,
}, {
  id: 5,
  min: 40000,
  max: 50000,
}, {
  id: 6,
  min: 50000,
  max: 3000000,
},]


export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<any>();
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);
  const [count, setCount] = useState(1);

  const onChangeSearch = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  // cart 수량 변경용
  function onClick() {
    setCount(count + 1);
  }

  function onClick2() {
    setCount(count - 1);
  }


  // strapi에 저장된 products api 가져오기 
  const getProductData = async () => {
    const url = `https://startup-coding-hbd.herokuapp.com/api/products`
    const response = await fetch(url);
    if (response.status === 200) { // 데이터 잘 왔을 때 실행될 내용
      const data = await response.json();
      setProducts(data.data);     // 여기까지 잘 됨 (object로 저장됨)
      console.log('data: ', data)
      console.log('products: ', products)
      console.log('typeof (products)', typeof (products)) // object -> slice 안됨, map 안됨
    }
    else { // 데이터가 잘 안왔을 때.. 
      throw new Error("데이터를 받아오지 못했습니다.")
    }
    setIsLoading(false);
  }


  // 장바구니와 user relation 

  const qs = require('qs');
  const query = qs.stringify({
    filters: {
      "userId": {
        $eq: 9,
      },
    },
    populate: '*'
  }, {
    encodeValuesOnly: true,
  });

  axios.get(`https://startup-coding-hbd.herokuapp.com/api/products?${query}`)
  // .then(res => console.log('장바구니 데이터 : ', res.data))

  console.log('query : ', query)

  const getCartData = async () => {
    const url = `https://startup-coding-hbd.herokuapp.com/api/products?${query}`
    const response = await fetch(url);
    if (response.status === 200) { // 데이터 잘 왔을 때 실행될 내용
      const data = await response.json();
      console.log('Data :', data)
      setCart(data.data);
      console.log('CartData :', cart)
    }
    else { // 데이터가 잘 안왔을 때..  카트 데이터를 잘 못받는중
      throw new Error("데이터를 받아오지 못했습니다.")
    }
    setIsLoading(false);
  }


  const { push } = useHistory();

  useEffect(() => { //Effect Hook은 리랜더링 될때마다 실행된다. 하지만 배열을 넘겨서 선택적으로 업데이트 할 수 있다. 
    getProductData();
    getCartData();


    // const getData = axios
    //   .get('http://localhost:1337/api/products')
    //   .then((res) => {
    //     console.log(res);
    //     setProducts(res.data.data);
    //     console.log(res.data.data);
    // });
  }, []); // 처음 렌더링 될때만 데이터를 가져온다




  return (
    <div className="header">
      <div className="container mx-auto px-6 py-3">

        <div className="flex items-center justify-between">

          <div className="hidden w-full text-gray-600 md:flex md:items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>

            </svg>
            <Link to="/follow">
              <button className="mx-1 text-sm">Follower</button>
            </Link>


          </div>

          <button className="w-full text-gray-700 md:text-center text-2xl font-semibold">
            선물 고르기
          </button>

          <div className="flex items-center justify-end w-full">
            <button className="text-gray-600 focus:outline-none mx-4 sm:mx-0" onClick={() => setOpen(true)}>
              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </button>
            <div className="flex sm:hidden">
              <button type="button" className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>
          </div>

        </div>

        <nav className="sm:flex sm:justify-center sm:items-center mt-4">
          <div className="flex flex-col sm:flex-row">
            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#" onClick={() => setFilter(filters[0])}>만원이하</a>
            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#" onClick={() => setFilter(filters[1])}>만원대</a>
            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#" onClick={() => setFilter(filters[2])}>이만원대</a>
            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#" onClick={() => setFilter(filters[3])}>삼만원대</a>
            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#" onClick={() => setFilter(filters[4])}>사만원대</a>
            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#" onClick={() => setFilter(filters[5])}>오만원이상</a>
          </div>
        </nav>
        <div className="relative mt-6 max-w-lg mx-auto">


          <span className="absolute inset-y-0 left-0 pl-3 flex items-center" >
            <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <form onSubmit={onChangeSearch}>
            <input className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search" onChange={onChangeSearch} />
          </form>
        </div>

      </div >


      {/* 장바구니*/}


      <div className={`fixed ${open ? 'right-0' : '-right-80'} duration-100 ease-in-out transition transition-all top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300`}>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-medium text-gray-700">Your cart</h3>
          <button className="text-gray-600 focus:outline-none" onClick={() => setOpen(false)}>
            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <hr className="my-3" />

        <div className="flex justify-between mt-6">
          <div className="flex">
            <img className="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="" />
            <div className="mx-3">
              <h3 className="text-sm text-gray-600">Mac Book Pro</h3>
              <div className="flex items-center mt-2">
                <button onClick={onClick} className="text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>
                <span className="text-gray-700 mx-2">{count}</span>
                <button onClick={onClick2} className="text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>
              </div>
            </div>
          </div>
          <span className="text-gray-600">1960000원</span>
        </div>





        <a className="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
          <span>구매하기</span>
          <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>





      <main className="my-8" />
      <div className="container mx-auto px-6">
        <h3 className="text-gray-700 text-2xl font-medium">가격대별 선물</h3>
        <span className="mt-3 text-sm text-gray-500">10+ Products</span>


        {/* 상품 목록*/}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {products.filter((data: any) => {

            if (filter && (data.attributes.price < filter.min || data.attributes.price >= filter.max)) {
              return false;
            }
            if (search && (!data.attributes.description.toUpperCase().includes(search.toUpperCase()) && !data.attributes.name.toUpperCase().includes(search.toUpperCase()))) {
              return false;
            }
            return true;
          }).map((data: any) => {
            // console.log('map data : ', data);
            const { attributes: { image, description, name, price } } = data;
            return (
              <div key={data.id} className="">
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div> </div>
                  <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url(" + image + ")" }}>
                    <button onClick={() => {
                      const isOk = window.confirm('장바구니에 담겼습니다. 계속 쇼핑하시겠습니까?')

                      axios.post('https://startup-coding-hbd.herokuapp.com/api/products', {
                        data: {
                          product: data.id,
                          userId: localStorage.getItem('id')
                        }
                      })
                    }} className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                  </div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">{name}</h3>
                    <h3 className="text-gray-700 uppercase">{description}</h3>
                    <span className="text-gray-500 mt-2">{price}원</span>
                  </div>
                </div>
              </div>)
          }
          )
          }
          <div>

          </div>

        </div>

      </div>
      {/* 
      {cart.map((data: any) => {

        <div className="flex justify-between mt-6">
          <div className="flex">
            <img className="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="" />
            <div className="mx-3">
              <h3 className="text-sm text-gray-600">{data.attributes.product.data.attributes.name}</h3>
              <div className="flex items-center mt-2">
                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>
                <span className="text-gray-700 mx-2">1</span>
                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>
              </div>
            </div>
          </div>
          <span className="text-gray-600">{data.attributes.product.data.attributes.price}원</span>
        </div>

      })} */}

    </div >

  )

};
