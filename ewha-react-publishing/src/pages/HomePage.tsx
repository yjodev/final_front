import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { isJSDocDeprecatedTag, isTemplateExpression } from 'typescript';
import { Label } from '../components/Label';
import { ProductCard } from '../components/ProductCard'

export type Product = {
  name: string;
  description: string;
  price: number;
  image: string
}

// 이걸 strapi에서 가져오는 법 ? 
const dummyProduct = [{
  id: "1",
  name: 'Mac Book Pro',
  price: 1960000,
  description: '개발자 필수템',
  image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
},
{
  id: "2",
  name: 'AirPod Pro',
  price: 260000,
  description: '출퇴근 필수템',
  image: "https://images.unsplash.com/photo-1606741965429-8d76ff50bb2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kJTIwcHJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{
  id: "3",
  name: 'Starbucks Americano',
  price: 4500,
  description: '간편한 생일선물',
  image: "https://media.istockphoto.com/photos/take-away-iced-coffee-on-table-picture-id1310420616?b=1&k=20&m=1310420616&s=170667a&w=0&h=2ehTQ901hsPQqEHwQz4RGmaSVZkQF7cW08FQQLGFaBw="
},
{
  id: "4",
  name: 'Icecream Cake',
  price: 33000,
  description: '맛있는 선물',
  image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aWNlJTIwY3JlYW0lMjBjYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
},
{
  id: "5",
  name: '비눗방울',
  price: 3000,
  description: '쓸데없는 선물',
  image: "https://images.unsplash.com/photo-1612855190135-bdbacda2a2b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnViYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{
  id: "6",
  name: '썬글라스',
  price: 20900,
  description: '멋진 선물',
  image: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuJTIwZ2xhc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
},
{
  id: "7",
  name: '와인',
  price: 45000,
  description: '럭셔리한 선물',
  image: "https://media.istockphoto.com/photos/pouring-red-wine-into-a-glass-on-rustic-wooden-table-picture-id1297231609?b=1&k=20&m=1297231609&s=170667a&w=0&h=SAI7SM2elNrYB5yqUMpNOo_q3dWNfxroMmMMPPtC_fo="
},
{
  id: "8",
  name: '이솝 스프레이',
  price: 33000,
  description: '럭셔리한 선물',
  image: "https://images.unsplash.com/photo-1621265010303-a793d1017307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWVzb3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},
{
  id: "9",
  name: '딸기',
  price: 16000,
  description: '맛있는 선물',
  image: "https://images.unsplash.com/photo-1587815073078-f636169821e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3RyYXdiZXJyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
},
{
  id: "10",
  name: '고급 핸드크림',
  price: 45000,
  description: '럭셔리한 선물',
  image: "https://images.unsplash.com/photo-1575410229391-19b4da01cc94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhbmQlMjBjcmVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
},
{
  id: "11",
  name: '샤넬 향수',
  price: 136000,
  description: '럭셔리한 선물',
  image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyZnVtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}, {
  id: "12",
  name: '인센스 스틱',
  price: 32000,
  description: '힐링 선물',
  image: "https://images.unsplash.com/photo-1624274579623-18121fc8126e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW5jZW5zZSUyMHN0aWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
}, {
  id: "13",
  name: 'Icecream',
  price: 8900,
  description: '파인트 아이스크림',
  image: "https://images.unsplash.com/photo-1629385697093-57be2cc97fa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
}, {
  id: "14",
  name: '무드등',
  price: 13000,
  description: '무드있는 생일선물',
  image: "https://images.unsplash.com/photo-1624258391922-0b3056c471e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cm9vbSUyMGxpZ2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
}, {
  id: "15",
  name: '휴대용 선풍기',
  price: 15000,
  description: '여름이 오고있어요',
  image: "https://images.unsplash.com/photo-1523437345381-db5ee4df9c04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}, {
  id: "16",
  name: '디퓨저',
  price: 23000,
  description: '포근한 방을 위한 힐링 선물',
  image: "https://images.unsplash.com/photo-1617351165959-471f874b60a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGRpZmZ1c2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
}, {
  id: "17",
  name: '컵 케이크',
  price: 11000,
  description: '호불호 없는 맛있는 선물',
  image: "https://images.unsplash.com/photo-1601409751311-cbecfe223af4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y3VwJTIwY2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
},
{
  id: "18",
  name: '애플망고',
  price: 29000,
  description: '맛있는 열대과일을 선물하세요',
  image: "https://images.unsplash.com/photo-1635716279493-d1e30afc25a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFuZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},
{
  id: "19",
  name: '러쉬',
  price: 30000,
  description: '힐링 선물',
  image: "https://images.unsplash.com/photo-1557827983-012eb6ea8dc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHVzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}]




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
  const [products, setProducts] = useState<Product[]>([]);      // 다른점: 저는 products 전체 데이터를 setProducts로 했는데 (전체페이지여서)
  const [name, setName] = useState('');                         // 나현님은 products내의 속성별로 set함 (상세페이지여서)

  console.log('[HomePage] products : ', products)

  const onChangeSearch = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  // console.log('search', search)



  // strapi에 저장된 products api 가져오기 
  const getData = async () => {
    const url = `http://localhost:1337/api/products`
    const response = await fetch(url);
    // console.log(response) // 이해 할 수 없는 형태의  data 
    if (response.status === 200) { // 데이터 잘 왔을 때 실행될 내용
      const data = await response.json();
      console.log('getData data : ', data);               // 이해 할 수 있는 json 형태의 data 
      setProducts(data.data);     // 여기까지 잘 됨 (object로 저장됨)
      // console.log(products)

      setName(data.data[0].attributes.name) //
      // console.log(name)
      // console.log(typeof (products)) // object -> slice 안됨, map 안됨
    }
    else { // 데이터가 잘 안왔을 때.. 
      throw new Error("데이터를 받아오지 못했습니다.")
    }
    setIsLoading(false);
  }

  const { push } = useHistory();

  useEffect(() => { //Effect Hook은 리랜더링 될때마다 실행된다. 하지만 배열을 넘겨서 선택적으로 업데이트 할 수 있다. 
    getData();
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
          {products.slice().filter((data: any) => {

            const { attributes: { image, description, name, price } } = data;

            if (filter && (data.price < filter.min || data.price >= filter.max)) {
              return false;
            }
            if (search && (!data.description.toUpperCase().includes(search.toUpperCase()) && !data.name.toUpperCase().includes(search.toUpperCase()))) {
              return false;
            }
            return true;
          }).map((data: any) => {
            console.log('map data : ', data);
            const { attributes: { image, description, name, price } } = data;
            return (
              <div key={data.id} className="">
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div> </div>
                  <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url(" + image + ")" }}>
                    <button onClick={() => alert('장바구니에 담겼습니다. 계속 쇼핑하시겠습니까?')} className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
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

          {/* <div className="">
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
              <div> </div>
              <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1606741965429-8d76ff50bb2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kJTIwcHJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" + ")" }}>
                <button onClick={() => alert('장바구니에 담겼습니다. 계속 쇼핑하시겠습니까?')} className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </button>
              </div>
              <div className="px-5 py-3">
                <h3 className="text-gray-700 uppercase">AirPod Pro</h3>
                <h3 className="text-gray-700 uppercase">출퇴근 필수템</h3>
                <span className="text-gray-500 mt-2">2421421원</span>
              </div>
            </div>
          </div> */}

          {/* {!isLoading && products.map((product) =>d
            <ProductCard label={product} />)} */}


        </div>

        <div>
          {/* {products.map((data: any) => {

          })} */}
        </div>


      </div>
    </div >

  )

};
