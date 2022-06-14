import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom"

export const SignupPage = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const { replace } = useHistory();

	const register = () => {
		axios
			.post('http://localhost:1337/api/auth/local/register', {
				username: name,
				email: email,
				password: password,
			})
			.then((response) => {
				// Handle success.
				console.log('Well done!');
				console.log('User profile', response.data.user);
				console.log('User token', response.data.jwt);
				localStorage.setItem('token', response.data.jwt);
				replace("/");
			})
			.catch((error) => {
				// Handle error.
				console.log('An error occurred:', error.response);
			});
	}

	return <div className="max-w-2xl mx-auto">
		<div
			className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
			<div className="space-y-6">
				<h3 className="text-xl font-medium text-gray-900 dark:text-white">회원이 되신 것을 축하합니다</h3>
				<div>
					<label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your name</label>
					<input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="홍길동"
						value={name}
						onChange={(event) => {
							setName(event.target.value)
						}} />
				</div>
				<div>
					<label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
					<input value={email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com"
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

				<button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					onClick={() => {
						register();
					}}>Create your account</button>

			</div>
		</div>



	</div>;
};
