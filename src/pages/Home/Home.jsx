import { NavLink, Outlet } from "react-router-dom";
import { Home_Nav } from "../../constants";
import { useEffect, useRef, useState } from "react";

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
			<div className="fixed col-start-10 h-screen col-span-3 w-3/12 grow p-6 bg-[#1F1D2B]">
				<h2 className="text-[20px] font-medium mb-6">Orders #34562</h2>
				<div className="labels mb-6">
					<input
						className="input__radio hidden"
						type="radio"
						name="type_meal"
						id="radio0"
						value={0}
						defaultChecked
					/>
					<label
						className="btn bg-inherit text-[#ea7c69] hover:bg-[#EA7C69] hover:text-white text-[14px] font-semibold input_label py-[7px] px-[12px] h-auto min-h-min"
						htmlFor="radio0">
						Dine In
					</label>
					<input
						className="input__radio hidden"
						type="radio"
						name="type_meal"
						id="radio1"
						value={1}
					/>
					<label
						className="btn bg-inherit text-[#ea7c69] hover:bg-[#EA7C69] hover:text-white text-[14px] font-semibold input_label py-[7px] px-[12px] h-auto min-h-min"
						htmlFor="radio1">
						To Go
					</label>
					<input
						className="input__radio hidden"
						type="radio"
						name="type_meal"
						id="radio2"
						value={2}
					/>
					<label
						className="btn bg-inherit text-[#ea7c69] hover:bg-[#EA7C69] hover:text-white text-[14px] font-semibold input_label py-[7px] px-[12px] h-auto min-h-min"
						htmlFor="radio2">
						Delivery
					</label>
				</div>
				<table className="flex">
					{/* <thead>
						<th>
							<td>Item</td>
							<td>Qty</td>
							<td>Price</td>
						</th>
					</thead> */}
				</table>
			</div>
		</>
	);
};
