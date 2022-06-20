import React, { Component, useEffect, useState } from 'react';
import { TextField } from '../components/TextField';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { resourceLimits, setEnvironmentData } from 'worker_threads';


export const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { push, replace } = useHistory();
	// replace('/'); // 현재 상위 페이지를 대체
	// push('/signup');  // 페이지 이동

	// const [data,setData] = useState<any>();

	// useEffect (() => {
	// 	fetch("http://localhost:1337/api/products", {
	// 		method: 'GET',
	// 		headers: {
	// 			accept: "application.json",
	// 			Authorization: ''
	// 		}
	// 	}).then((result) => result.json()).then((json) => setData(json))
	// }, [])
	// console.log('data',data)




	const checkUser = () => {
		if (email === "" || password === "") {
			alert("아이디와 비밀번호를 입력해주세요.")
			return;
		}
		axios
			.post('https://startup-coding-hbd.herokuapp.com/api/users/auth/local', {
				identifier: email,
				password: password,
			})
			.then((response) => {
				// Handle success.
				console.log('Well done!');
				console.log('checkUser response.data : ', response.data);
				console.log('User token', response.data.jwt);
				localStorage.setItem("token", response.data.jwt);
				localStorage.setItem("id", response.data.user.id);
				replace("/");
			})
			.catch((error) => {
				// Handle error.
				console.log('An error occurred:', error.response);
			});
	}

	// useEffect(() => {
	// 	if (localStorage.getItem("token")) {
	// 		replace("/");
	// 	}
	// }, [])

	return <div className="max-w-2xl mx-auto">
		<div
			className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
			<div className="space-y-6">
				<h3 className="text-xl font-medium text-gray-900 dark:text-white">로그인하여 선물 고민을 끝내보세요</h3>
				<div>
					<label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
					<input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com"
						value={email}
						onChange={(event) => {
							setEmail(event.target.value)
						}} />
				</div>
				<div>
					<label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
					<input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						value={password}
						onChange={(event) => {
							setPassword(event.target.value)
						}} />
				</div>
				<div className="flex items-start">
					<div className="flex items-start">
						<div className="flex items-center h-5">
							<input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
						</div>
						<div className="text-sm ml-3">
							<label htmlFor="remember" className="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
						</div>
					</div>
				</div>
				<button onClick={() => checkUser()} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
				<div className="text-sm font-medium text-gray-500 dark:text-gray-300">
					Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500" onClick={() => push('/signup')}>Create
						account</a>
				</div>
			</div>
		</div>



	</div>;
};
