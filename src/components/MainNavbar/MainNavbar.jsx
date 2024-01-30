import { Link, NavLink } from "react-router-dom";
import { LogOut, Logo, MainNavbarIcons } from "../../../public/icons";

export const MainNavbar = () => {
	return (
		<nav className="flex flex-col sticky top-0 h-screen">
			<ul className="flex flex-col flex-grow bg-[#1F1D2B] ps-3">
				<li className="flex-grow py-6 pe-6 ps-3 flex justify-center items-center">
					<Link className="grow flex justify-center" to="/home/">
						<img className="" src={Logo} width={24} height={24} alt="" />
					</Link>
				</li>
				{MainNavbarIcons.map((item, index) => {
					return (
						<li
							className="flex-grow flex justify-center items-center main-navbar__item"
							key={index}>
							<NavLink
								to={item.path}
								className={
									(({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : ""),
									"ps-3 py-3 pe-6 grow flex justify-center")
								}>
								{<item.img className="p-4" />}
							</NavLink>
						</li>
					);
				})}
				<li className="flex-grow py-6 pe-6 ps-3 flex justify-center items-center">
					<button type="button" className="grow flex justify-center">
						<img className="" src={LogOut} width={24} height={24} alt="" />
					</button>
				</li>
			</ul>
		</nav>
	);
};
