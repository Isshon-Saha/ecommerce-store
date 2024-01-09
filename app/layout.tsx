import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import { Providers } from "./providers";
import FooterBlock from "@/components/footer";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Store",
	description: "Ecommerce store",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<Providers>
					<Navbar />
					{children}
					<FooterBlock />
				</Providers>
			</body>
		</html>
	);
}
