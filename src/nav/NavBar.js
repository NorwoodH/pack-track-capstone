import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
	const navigate = useNavigate();

	return (
		<ul className='navbar'>
			{localStorage.getItem("activeUser") ? (
				<>
					<li className='navbar__item navbar__logout'>
						<Link
							className='navbar__link'
							to=''
							onClick={() => {
								localStorage.removeItem("activeUser");
								navigate("/", { replace: true });
							}}
						>
							Logout
						</Link>
					</li>
					<li className='navbar__item navbar__home'>
						<Link className='navbar__link' to='/home'>
							Home
						</Link>
					</li>
					<li className='navbar__item navbar__gear'>
						<Link className='navbar__link' to='/gear'>
							Gear
						</Link>
					</li>
					<li className='navbar__item navbar__messages'>
						<Link className='navbar__link' to='/messages'>
							Messages
						</Link>
					</li>
					<li className='navbar__item navbar__trips'>
						<Link className='navbar__link' to='trips'>
							Trips
						</Link>
					</li>
				</>
			) : (
				""
			)}
			
		</ul>
	);
};
