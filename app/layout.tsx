import "../styles/globals.css";
import { Header } from "./HEader";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
