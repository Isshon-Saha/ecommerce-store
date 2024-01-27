"use client";

import Image from "next/image";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import { Button } from "@nextui-org/button";

import Currency from "@/components/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

type Props = {
	item: Product;
};

const CartItem = ({ item }: Props) => {
	const removeFromCart = useCart((state) => state.removeItem);
	return (
		<li className="flex py-6 border-b">
			<div className="relative w-24 h-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
				<Image
					fill
					src={item.images[0].url}
					alt="ProductImage"
					className="object-cover object-center"
				/>
			</div>
			<div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
				<div className="absolute top-0 right-0 z-10">
					<Button
						onClick={() => removeFromCart(item.id)}
						variant="flat"
						color="danger"
						className="w-8 h-8 rounded-full"
					>
						<Trash2 className="w-5 h-5 rounded-full" />
					</Button>
				</div>
				<div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
					<div className="flex justify-between">
						<p className="font-semibold text-lg text-slate-700">{item.name}</p>
					</div>
					<div className="mt-1 flex text-sm">
						<p className="text-slate-500">{item.color.name}</p>
						<p className="text-slate-500 ml-4 border-l border-slate-500 pl-4">
							{item.size.name}
						</p>
					</div>
					<Currency value={item.price} />
				</div>
			</div>
		</li>
	);
};

export default CartItem;
