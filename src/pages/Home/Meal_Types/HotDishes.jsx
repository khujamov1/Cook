import { Temporary_Dishes } from "../../../constants";

export const HotDishes = () => {
	return (
		<div className="">
			<div className="flex items-center justify-between font-semibold mb-[78px]">
				<h3 className="text-xl">Choose Dishes </h3>
				<select className="dishes__select text-white appearance-none">
					<option defaultValue={""}>Dine In</option>
				</select>
			</div>
			<ul className="grid grid-cols-3 gap-x-7 gap-y-14">
				{Temporary_Dishes &&
					Temporary_Dishes.map(({ id, img, title, price, available }) => {
						return (
							<li
								key={id}
								className="bg-[#1F1D2B] flex flex-col relative items-center px-[30px] pt-[114px] pb-6 rounded-lg ">
								<img className="absolute -top-[34px]" src={img} alt="" />
								<h3 className="text-[14px] font-medium text-center mb-2">{title}</h3>
								<ins className="no-underline mb-1 text-[14px]">{price}</ins>
								<span className="text-[14px] text-[#ABBBC2]">{available}</span>
							</li>
						);
					})}
			</ul>
		</div>
	);
};
