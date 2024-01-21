import { NavLink, Outlet } from "react-router-dom";
import { Home_Nav } from "../../constants";

export const Home = () => {
	return (
		<>
			<div className="col-start-2 col-span-8 pt-[13px] ms-1 pe-11 leading-[140%]">
				<div className="flex items-center justify-between mb-6">
					<div>
						<h1 className="text-[28px] font-semibold">Jaegar Resto</h1>
						<time className="">Tuesday, 2 Feb 2021</time>
					</div>
					<label className="bg-[#393C49]  text-sm flex items-center p-3 rounded-lg">
						<img className="me-2" src={"/icons/search.svg"} width={20} height={20} alt="" />
						<input
							className="bg-[#393C49] outline-none"
							placeholder="Search for food, coffe, etc.."
							type="search"
						/>
					</label>
				</div>
				<nav>
					<ul className="flex gap-x-8 text-sm font-semibold">
						{Home_Nav.map((item) => {
							return (
								<li key={item.id}>
									<NavLink
										className={
											("transition-colors", ({ isActive }) => (isActive ? "home-link-active" : ""))
										}
										to={"/home" + item.path}>
										{item.name}
										<span className="inline-block rounded-sm h-1 w-3/5"></span>
									</NavLink>
								</li>
							);
						})}
					</ul>
				</nav>
				<Outlet />
			</div>
			<div className="fixed col-start-10 h-screen w-full col-span-3 bg-[#1F1D2B]"></div>
		</>
	);
};
