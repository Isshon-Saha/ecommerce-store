import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

import Navbar from "@/components/navbar";
import { Providers } from "@/app/providers";
import FooterBlock from "@/components/footer";
import ModalProvider from "@/providers/modal-provider";

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
					<Toaster position="bottom-center" richColors />
					<ModalProvider />
					<Navbar />
					{children}
					<FooterBlock />
				</Providers>
			</body>
		</html>
	);
}
