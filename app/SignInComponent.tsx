"use client";
import { getProviders } from "next-auth/react";
import { signIn } from "next-auth/react";

type Props = {
	providers: Awaited<ReturnType<typeof getProviders>>;
};

export const SignInComponent = ({ providers }: Props) => {
	return (
		<div className="flex justify-center">
			{Object.values(providers!).map((provider) => (
				<div key={provider.name}>
					<button
						className="bg-green-500 mt-10 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
						onClick={() =>
							signIn(provider.id, {
								callbackUrl:
									process.env.VERCEL_URL ||
									"http://localhost:3000/",
							})
						}
					>
						Sign In with {provider.name}
					</button>
				</div>
			))}
		</div>
	);
};
