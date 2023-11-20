
import { Outlet, Route, Routes } from "react-router-dom";
import { GearList } from "../components/gear/GearList"
import { GearContainer } from "../components/gear/GearContainer"
import { MessageContainer } from "../components/messages/MessageContainer";
import { TripList } from "../components/trips/TripList"
import { TripContainer } from "../components/trips/TripContainer";


<div className='Dashboard'>
	<header className='App-header'>
		<h1> Pack Track </h1>
	</header>
</div>;

export const ApplicationViews = () => {
	const localPackTrack = localStorage.getItem("activeUser");
	const packTrackUserObject = JSON.parse(localPackTrack);

	if (packTrackUserObject) {
		return (
			<>
				<div className='Dashboard'>
					
				
					<Routes>
						<Route
							path='/'
							element={
								<>
									<h1>Pack Track</h1>
									<Outlet />
								</>
							}>
								<Route>
									
								
								<Route path= '/gear/create' element={<GearList/>}/>
								{/*<Route path= '/gear' element={<GearContainer/>} />*/}
								
								<Route path= '/trips/create' element={<TripList/>}/>
								<Route path= '/trips' element={<TripContainer/>}/>

								<Route path='/messages' element={<MessageContainer/>} />

                                </Route>
						</Route>
					</Routes> 
				</div>
			</>
		);
	}
};