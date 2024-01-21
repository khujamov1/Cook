export const HotDishes = () => {
	return (
		<div>
			<div className="flex items-center justify-between font-semibold mb-6">
				<h3 className="text-xl">Choose Dishes </h3>
				<select className="dishes__select text-white appearance-none">
					<option defaultValue={""}>Dine In</option>
				</select>
			</div>
		</div>
	);
};
