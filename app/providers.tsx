"use client";
import { SessionProvider } from "next-auth/react";

export const Providers = ({ session, children }: any) => {
	return <SessionProvider session={session}>{children}</SessionProvider>;
};
