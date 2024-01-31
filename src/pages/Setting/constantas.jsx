import { FaRegHeart } from "react-Icons/fa6";
import { CiDiscount1 } from "react-Icons/ci";
import { IoNotificationsOutline } from "react-Icons/io5";
import { SlLockOpen } from "react-Icons/sl";
import { CgInfo } from "react-Icons/cg";

export const menus = [
	{
		id: 0,
		Icon: ({ width, className }) => (
			<FaRegHeart width={width} className={className} />
		),
		title: "Appereance",
		desc: "Dark and Light mode, Font size",
	},
	{
		id: 1,
		Icon: ({ width, className }) => (
			<FaRegHeart width={width} className={className} />
		),
		title: "Your Restaurant",
		desc: "Dark and Light mode, Font size",
	},
	{
		id: 2,
		Icon: ({ width, className }) => (
			<CiDiscount1 width={width} className={className} />
		),
		title: "Products Management",
		desc: "Manage your product, pricing, etc",
	},
	{
		id: 3,
		Icon: ({ width, className }) => (
			<IoNotificationsOutline width={width} className={className} />
		),
		title: "Notifications",
		desc: "Customize your notifications",
	},
	{
		id: 4,
		Icon: ({ width, className }) => (
			<SlLockOpen width={width} className={className} />
		),
		title: "Security",
		desc: "Configure Password, PIN, etc",
	},
	{
		id: 5,
		Icon: ({ width, className }) => (
			<SlLockOpen width={width} className={className} />
		),
		title: "Security",
		desc: "Configure Password, PIN, etc",
	},
	{
		id: 6,
		Icon: ({ width, className }) => (
			<CgInfo width={width} className={className} />
		),
		title: "About Us",
		desc: "Find out more about Posly",
	},
];
