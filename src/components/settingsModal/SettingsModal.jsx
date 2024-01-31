import React from "react";

export const SettingsModal = ({
	setModalSwitch,
	title,
	firstButton,
	secondButton,
}) => {
	return (
		<>
			{
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<div className="bg-[#1F1D2B] p-8 w-[520px] rounded opacity-100 relative">
						<div className="flex justify-between mb-8">
							<h2 className="text-2xl font-bold">{title}</h2>
							<button
								className="border px-3 text-4xl absolute top-4 right-4 rounded-lg"
								onClick={() => setModalSwitch(false)}
							>
								&times;
							</button>
						</div>
						<form className="flex flex-col gap-5">
							<input
								type="text"
								placeholder="Product name  "
								className="bg-[#2D303E] p-4 rounded-lg placeholder:text-[#E0E6E9]"
							/>
							<input
								type="text"
								placeholder="Product bowls"
								className="bg-[#2D303E] p-4 rounded-lg placeholder:text-[#E0E6E9]"
							/>
							<input
								type="text"
								placeholder="Product price"
								className="bg-[#2D303E] p-4 rounded-lg placeholder:text-[#E0E6E9]"
							/>
							<select className="bg-[#2D303E] p-4 rounded-lg placeholder:text-[#E0E6E9]">
								<option hidden>Product category </option>
							</select>
							<div className="bg-[#2D303E] p-4 rounded-lg h-40 text-center pt-20 placeholder:text-[#E0E6E9]">
								<strong className="text-[#EA7C69]">
									Click or drag file to this area to upload
								</strong>
								<p className="text-[#ABBBC2] text-xs">
									Support for a single or bulk upload.
								</p>
							</div>
							<div className="flex gap-5">
								<button className="p-4 flex-grow border border-[#EA7C69] text-[#EA7C69] rounded-lg">
									{firstButton}
								</button>
								<button className="p-4 flex-grow bg-[#EA7C69] rounded-lg">
									{secondButton}
								</button>
							</div>
						</form>
					</div>
				</div>
			}
		</>
	);
};
