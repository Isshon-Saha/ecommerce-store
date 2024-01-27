"use client";

import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@nextui-org/button";

import Currency from "@/components/currency";
import useCart from "@/hooks/use-cart";

const Summary = () => {
	const cartItems = useCart((state) => state.items);
	const removeAll = useCart((state) => state.removeAll);
	const searchParams = useSearchParams();

	const totalPrice = cartItems.reduce((total, item) => {
		return total + Number(item.price);
	}, 0);

	return (
		<div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
			<h2 className="text-lg font-medium text-slate-900">Order summary</h2>
			<div className="mt-6 space-y-4">
				<div className="flex items-center justify-between border-t border-gray-200 pt-4">
					<div className="text-base font-medium text-slate-900">
						Order total
					</div>
					<Currency value={String(totalPrice)} />
				</div>
			</div>
			<Button
				color="secondary"
				size="lg"
				className="w-full mt-6 flex items-center gap-x-2 rounded-md"
				onClick={() => toast.error("Checkout not implemented yet")}
			>
				Checkout
			</Button>
		</div>
	);
};

export default Summary;
