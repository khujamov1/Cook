import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { SettingsList } from "../../components/settingsList/SettingsList";
import { SettingsModal } from "../../components/settingsModal";
import { menus } from "./constantas";

export const Setting = () => {
	const [modalSwitch, setModalSwitch] = useState(false);

	return (
		<div className="p-6 col-span-11">
			<h2 className="text-2xl font-semibold mb-6">Settings</h2>
			<div className="flex w-full">
				<ul className="flex flex-col w-[325px] bg-[#1F1D2B] rounded-lg mr-12 mb-7">
					{menus.map(({ Icon, title, desc, id }) => {
						return (
							<li className="p-6 flex pr-0" key={id}>
								{/* item.icon console.log({item.icon}); */}
								{<Icon className="mt-2 mr-3" width="13px" />}
								<div className="">
									<h4 className="text-sm">{title}</h4>
									<p className="text-xs">{desc}</p>
								</div>
							</li>
						);
					})}
				</ul>
				<div>
					<div className="flex justify-between w-[1000px] items-center mb-10">
						<h2 className="text-xl text-white font-semibold">
							Products Management
						</h2>
						<select className="border-2 border-[#393C49] bg-transparent p-4 rounded-lg text-sm font-semibold">
							<option hidden>Manage Categories</option>
						</select>
					</div>
					<div className="mb-8">
						<nav>
							<ul className="flex gap-10 font-semibold text-base border-b-2 pb-4 border-[#393C49]">
								<li>
									<NavLink
										to="/setting"
										className={
											("transition-colors",
											({ isActive }) =>
												isActive
													? "home-link-active"
													: "")
										}
									>
										Hot dishes
									</NavLink>
								</li>
								<li>
									<Link to="coldDishes">Cold Dishes</Link>
								</li>
								<li>
									<Link to="soup">Soup</Link>
								</li>
								<li>
									<Link to="grill">Grill</Link>
								</li>
								<li>
									<Link to="appetizer">Appetizer</Link>
								</li>
								<li>
									<Link to="dessert">Dessert</Link>
								</li>
							</ul>
						</nav>
					</div>
					{modalSwitch ? (
						<SettingsModal
							setModalSwitch={setModalSwitch}
							title="Add new product item to list"
							firstButton="Close"
							secondButton="Add"
						/>
					) : (
						""
					)}
					<div className="flex gap-4">
						<button
							className="bg-[#1F1D2B] w-[220px] h-[310px] rounded-lg text-[#EA7C69] border-dashed border border-[#EA7C69]"
							onClick={() => setModalSwitch(true)}
						>
							+ Add new dish
						</button>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};
