import { getProviders } from "next-auth/react";
import Image from "next/image";
import { SignInComponent } from "../../SignInComponent";

const SignInPage = async () => {
	const providers = await getProviders();
	return (
		<div className="grid justify-center">
			<div>
				<Image
					className="rounded-full mx-2 object-cover"
					width={700}
					height={700}
					alt="profile pic"
					src="https://links.papareact.com/161"
				/>
			</div>
			<SignInComponent providers={providers} />
		</div>
	);
};

export default SignInPage;
