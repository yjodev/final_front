import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom"


export const NewProductPage = () => {

	const [description, setDescription] = useState("");
	const [name, setName] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [price, setPrice] = useState("");


    const [products, setProducts] = useState([]);

      useEffect(() => {
          const productsData = axios
              .get('https://startup-coding-hbd.herokuapp.com/api/products')
              .then((res) => {
                  setProducts(res.data.data);
                  console.log("products: ",res.data.data);
              });
      }, []);
  
    const addProduct = () => {
            if (description === "" || imageUrl === "" || price ==="") {
                alert("제품명, 제품 설명, 가격을 입력해주세요.")
                return; }
            axios
                .post('https://startup-coding-hbd.herokuapp.com/api/products', {
                    data: {
                        name: name,
                        description: description,
                        price: price,
                        image: imageUrl
                    },
                })
                .then((response) => {
                    // Handle success.
                    alert('상품이 등록되었습니다. 홈페이지에서 확인하세요')
                    window.location.reload();
                    
                })
                .catch((error) => {
                    // Handle error.
                    console.log('An error occurred:', error.response);
                });
        
    };



	return <div>
    <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between space-y-">
            
            <div className="hidden w-full text-gray-600 md:flex md:items-center">
                
            </div>
       <button className="w-full text-gray-700 md:text-center text-2xl font-semibold">
            상품 추가하기
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

<div className = "flex justify-center h-screen">
<div className="flex flex-row space-x-0.5">
<div className="space-y-6 ">
				<div>
					<label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">상품명</label>
					<input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="상품명을 입력하세요"
						value={name}
						onChange={(event) => {
							setName(event.target.value)
						}} />
				</div>

				<div>
					<label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">상품 설명</label>
					<input value={description} type="description" name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="상품에 대한 설명을 입력하세요"
						onChange={(event) => {
							setDescription(event.target.value)
						}} />
				</div>

                <div>
					<label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">상품 가격</label>
					<input value={price} type="price" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="상품 가격을 입력하세요"
						onChange={(event) => {
							setPrice(event.target.value)
						}} />
				</div>

                <div>
					<label htmlFor="imageUrl" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">이미지 url</label>
					<input value={imageUrl} type="imageUrl" name="imageUrl" id="imageUrl" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="상품의 이미지 url을 입력하세요"
						onChange={(event) => {
							setImageUrl(event.target.value)
						}} />
				</div>




				<button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {
                            addProduct();
                        
                        }}
					>새로운 상품 추가하기</button>

			</div>          
                      
         </div>
    </div>
    </div>
    

}
