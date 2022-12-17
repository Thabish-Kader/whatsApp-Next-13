"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/assets/whatsappLogo.svg";
import { SignOutBtn } from "./SignOutBtn";
import { useSession } from "next-auth/react";

export const Header = () => {
	const { data: session } = useSession();

	if (!session) {
		return (
			<header className="flex flex-col items-center justify-center sticky p-10 border-b shadow-sm space-y-2">
				<div className="flex items-center space-x-2 ">
					<Image src={logo} alt="/logo" className="h-10 w-10" />
					<p className="text-green-600 text-lg ">
						Sign in to Continue
					</p>
				</div>

				{/* sign in/out button */}
				<Link href="/auth/signIn" className="button">
					Sign In
				</Link>
			</header>
		);
	}

	return (
		<header className="flex items-center justify-between sticky p-10 border-b shadow-sm">
			<div className="flex ">
				<Image src={logo} alt="/logo" />
				<div className="flex flex-col items-center pl-4">
					<p className=" text-lg">Signed in as</p>
					<p className="font-bold text-lg ">byte Battalion</p>
				</div>
			</div>

			{/* sign in/out button */}
			<SignOutBtn />
		</header>
	);
};
