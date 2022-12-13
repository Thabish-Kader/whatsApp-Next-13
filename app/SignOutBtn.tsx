"use client";

export const SignOutBtn = () => {
	return (
		<button
			onClick={() => console.log("sign in")}
			className="p-2 bg-green-500 hover:bg-green-600 text-lg font-semibold  rounded text-white"
		>
			Sign Out
		</button>
	);
};
