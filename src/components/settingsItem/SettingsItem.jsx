import lagmon from "../../../public/images/Image 1.png";

export const SettingsItem = () => {
	return (
		<li className="rounded-lg pt-5 bg-[#1F1D2B]">
			<div className="w-[143px] mx-9 text-center mb-4">
				<img src={lagmon} alt="" className="mx-auto h-[130px] mb-3" />
				<h5 className="mb-2">Spicy seasoned seafood noodles</h5>
				<span className="mr-5 text-gray-500 font-semibold">$ 2.29</span>
				<span className="text-gray-500 font-semibold">20 Bowls</span>
			</div>
			<button className="bg-[#EA7C69] text-center block w-full py-4 rounded-b-lg opacity-25 font-semibold text-sm">
				EDIT
			</button>
		</li>
	);
};
