"use client";

import { CustomButtonProps } from "@/types";
import React from "react";

const CustomButton = (props: CustomButtonProps) => {
	return (
		<button
			disabled={false}
			type={props.btnType}
			className={`custom-btn ${props.containerStyles}`}
			onClick={props.handleClick}
		>
			<span className={"flex-1"}>{props.title}</span>
		</button>
	);
};

export default CustomButton;
