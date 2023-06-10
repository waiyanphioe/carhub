import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Navbar = () => {
	return (
		<header className="w-full absolute z-10">
			<nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4 sm:px-16">
				<Link className="flex justify-center items-center" href={"/"}>
					<Image
						src={"/logo.svg"}
						width={120}
						height={30}
						alt="logo"
						className="object-contain"
					/>
				</Link>
				<CustomButton
					title="Get Started"
					containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
					btnType="button"
				/>
			</nav>
		</header>
	);
};

export default Navbar;
