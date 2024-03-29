"use client";

import { useEffect, useState } from "react";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import CartItem from "./_components/cart-item";
import Summary from "./_components/summary";

const CartPage = () => {
	const [isClient, setIsClient] = useState(false);
	const cartItems = useCart((state) => state.items);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return null;

	return (
		<div className="bg-white">
			<Container>
				<div className="px-4 py-16 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold text-slate-700">Shopping Cart</h1>
					<div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
						<div className="lg:col-span-7">
							{cartItems.length === 0 && (
								<p className="text-neutral-500">No items added to cart</p>
							)}
							<ul>
								{cartItems.map((item) => (
									<CartItem key={item.id} item={item} />
								))}
							</ul>
						</div>
						<Summary />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default CartPage;
