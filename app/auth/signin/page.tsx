import { getProviders } from "next-auth/react";
import Image from "next/image";
import { SignInComponent } from "../../SignInComponent";
import whatsapp from "../../../public/assets/whatsappLogo.svg";

const SignInPage = async () => {
	const providers = await getProviders();
	return (
		<div className="grid justify-center">
			<div className="mt-32">
				<Image
					className="rounded-full mx-2 object-cover"
					width={300}
					height={300}
					alt="profile pic"
					src={whatsapp}
				/>
			</div>
			<SignInComponent providers={providers} />
		</div>
	);
};

export default SignInPage;
