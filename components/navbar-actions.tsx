"use client";

import { useEffect, useState } from "react";

import { Button } from "@nextui-org/button";
import { Badge } from "@nextui-org/react";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
	const [isMounted, setIsMounted] = useState(false);
	const router = useRouter();

	const cartItems = useCart((state) => state.items);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<div className="ml-auto flex items-center gap-x-4">
			<Button
				size="md"
				radius="sm"
				color="primary"
				variant="bordered"
				className="flex items-center px-2 py-3"
				onClick={() => router.push("/cart")}
			>
				<Badge color="danger" className="text-xs" content={cartItems.length}>
					<ShoppingBag size={20} stroke="currentColor" />
				</Badge>
			</Button>
		</div>
	);
};

export default NavbarActions;
