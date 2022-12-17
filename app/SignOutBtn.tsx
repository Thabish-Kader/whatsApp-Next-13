"use client";
import { signOut } from "next-auth/react";
export const SignOutBtn = () => {
	return (
		<button onClick={() => signOut()} className="button">
			Sign Out
		</button>
	);
};
