import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { NavBar } from "./nav/NavBar.js";
import { Authorized } from "./views/Authorized";
import { ApplicationViews } from "./views/AppViews.js";


function PackTrack() {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
	


			<Route
				path='*'
				element={
					<Authorized>
						<>
							<NavBar />
							<ApplicationViews />
						</>
					</Authorized>
				}
			/>
		</Routes>
	);
}

export default PackTrack;