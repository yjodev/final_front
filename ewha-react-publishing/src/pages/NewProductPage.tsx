import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom"


export const NewProductPage = () => {

    const [product, setProductt] = useState('');
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	


    const addProduct = () => {
        if (product != '') {
            axios
                .post('https://startup-coding-hbd.herokuapp.com/api/products', {
                    data: {
                        name: name,
                        descriptipn: email,
                        price: 1,
                        image: password
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
        }
    };

    // useEffect(() => {
    //     const bookData = axios
    //         .get(`https://startup-coding-hbd.herokuapp.com/api/products`)
    //         .then((res) => {
    //             const book = res.data.data.attributes;
    //             setBookTitle(book.bookName);
    //             setBookDescription(book.bookDescription);
    //             setBookCategory(book.category.data.attributes.categoryName);
    //             setBookImage(book.bookThumbnail);
    //             setBookWriter(book.bookWriter);
    //             setBookComments(book.comments.data);
    //             setBookRate(book.ratings.data[0].attributes.ratingScore);
    //             setBookTag(book.tags.data[0].attributes.tagName);
    //             // console.log(book.comments.data[0].attributes.commentContent);
    //             console.log(book.comments.data);
    //             console.log(comment)

    //         });

    // }, []);

	return <div><div className="container mx-auto px-6 py-3">
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
					<label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">상품 설명</label>
					<input value={email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="상품에 대한 설명을 입력하세요"
						onChange={(event) => {
							setEmail(event.target.value)
						}} />
				</div>
				<div>
					<label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">이미지 url</label>
					<input type="password" name="password" id="password" placeholder="상품의 이미지 url을 입력하세요" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						value={password}
						onChange={(event) => {
							setPassword(event.target.value)
						}} />
				</div>

				<button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>새로운 상품 추가하기</button>

			</div>          
                      
                    </div></div></div>
    

};