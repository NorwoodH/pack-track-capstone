import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUserEmail } from "./AuthAPIManager";

export const Login = () => {
	const [email, set] = useState();
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();

		return getUserEmail(email).then((foundUsers) => {
			if (foundUsers.length === 1) {
				const user = foundUsers[0];
				localStorage.setItem(
					"activeUser",
					JSON.stringify({
						id: user.id,
					})
				);

				navigate("/");
			} else {
				window.alert("Invalid login");
			}
		});
	};

	return (
		<main className='container--login'>
			<section>
				<header className='App-header'>
					<h1> Pack Track </h1>
				</header>
				<form className='form--login' onSubmit={handleLogin}>
					<h2>Please sign in</h2>
					<fieldset>
						<label htmlFor='inputEmail'> Email address </label>
						<input
						id="inputEmail"
							type='email'
							onChange={(evt) => set(evt.target.value)}
							className='form-control'
							placeholder='Email address'
							required
							autoFocus
						/>
					</fieldset>
					<fieldset>
						<button type='submit'>Sign in</button>
					</fieldset>
				</form>
			</section>
			<section className='link--register'>
				<Link to='/register'>Not a member yet?</Link>
			</section>
		</main>
	);
};