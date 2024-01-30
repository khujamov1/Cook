import { NavLink, Outlet } from "react-router-dom";
import { Home_Nav, Temporary_Dine_In } from "../../constants";
import Delete from "../../../public/icons/Delete";
import "flowbite/dist/flowbite.min.js";

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
			<div className="sticky top-0  col-start-10 h-screen col-span-3 grow p-6 bg-[#1F1D2B]">
				<h2 className="text-[20px] font-medium mb-6">Orders #34562</h2>
				<div className="flex gap-x-2 mb-6">
					<label>
						<input
							className="meal__types visually-hidden"
							type="radio"
							name="type_meal"
							value="Dine in"
							defaultChecked
						/>
						<span className="btn bg-inherit text-[#ea7c69] hover:bg-[#EA7C69] hover:text-white text-[14px] font-semibold input_label py-[7px] px-[12px] border border-[#393C49]">
							Dine In
						</span>
					</label>
					<label>
						<input
							className="meal__types visually-hidden"
							type="radio"
							name="type_meal"
							value="To Go"
						/>
						<span className="btn bg-inherit text-[#ea7c69] hover:bg-[#EA7C69] hover:text-white text-[14px] font-semibold input_label py-[7px] px-[12px] border border-[#393C49]">
							To Go
						</span>
					</label>
					<label>
						<input
							className="meal__types visually-hidden"
							type="radio"
							name="type_meal"
							value="Delivery"
						/>
						<span className="btn bg-inherit text-[#ea7c69] hover:bg-[#EA7C69] hover:text-white text-[14px] font-semibold input_label py-[7px] px-[12px] border border-[#393C49]">
							Delivery
						</span>
					</label>
				</div>
				<div className="grid grid-cols-5 text-center pb-6 border-b border-[#393C49]">
					<strong className="col-span-3 text-left">Item</strong>
					<strong className="grow-1">Qty</strong>
					<strong className="grow-1">Price</strong>
				</div>
				<ul className="pt-7 mb-7 flex flex-col gap-y-7 max-h-[51%] overflow-y-scroll">
					{Temporary_Dine_In.map(({ img, title, price, id }) => (
						<li key={id}>
							<div className="grid grid-cols-5 mb-2.5 gap-x-4">
								<div className="flex items-start col-span-3">
									<img className="me-2 shrink-0" src={img} width={40} height={40} alt="" />
									<div>
										<h4 className="mb-1 text-sm leading-[130%] font-medium whitespace-nowrap truncate w-36">
											{title}
										</h4>
										<span className="text-xs leading-[140%] ">{price}</span>
									</div>
								</div>
								<button className="bg-[#2D303E] p-3.5 pb-3 rounded-lg font-medium" type="button">
									2
								</button>
								<strong className="self-center">$ 4,58</strong>
							</div>
							<div className="grid grid-cols-5 gap-x-4">
								<input
									className="bg-[#2D303E] outline-none p-3.5 rounded-lg grow col-span-4"
									placeholder="Order Note..."
									type="text"
								/>
								<button
									className="flex items-center justify-center border rounded-lg border-[#EA7C69]"
									type="button">
									<Delete className="text-[#EA7C69] text-xl" />
								</button>
							</div>
						</li>
					))}
				</ul>
				<div className="mb-6">
					<p className="flex justify-between mb-4">
						Discount <strong>$0</strong>
					</p>
					<p className="flex justify-between">
						Sub total <strong> $ 21,03</strong>
					</p>
				</div>
				<button
					className="flex w-full text-[14px] font-semibold grow justify-center py-3.5 bg-[#EA7C69] rounded-lg"
					type="button"
					data-drawer-target="drawer-right-example"
					data-drawer-show="drawer-right-example"
					data-drawer-placement="right"
					aria-controls="drawer-right-example">
					Continue to Payment
				</button>
			</div>
			<div
				id="drawer-right-example"
				className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-[#1F1D2B] w-1/3"
				tabIndex={-1}
				aria-labelledby="drawer-right-label"></div>
		</>
	);
};
