"use client";

import { Divider } from "@nextui-org/divider";
import { ShoppingCart } from "lucide-react";
import { Button } from "@nextui-org/react";

import { Product } from "@/types";
import Currency from "@/components/currency";
import useCart from "@/hooks/use-cart";

type Props = {
	data: Product;
};

const Info = ({ data }: Props) => {
	const addToCart = useCart((state) => state.addItem);
	return (
		<div className="flex flex-col justify-between">
			<h1 className="text-3xl font-bold text-slate-700">{data.name}</h1>
			<div className="flex items-end mt-3 justify-between">
				<p className="text-2xl font-semibold text-slate-700">
					<Currency value={data?.price} />
				</p>
			</div>
			<Divider className="my-4" />
			<div className="flex flex-col gap-y-6">
				<div className="flex items-center gap-x-4">
					<h3 className="font-semibold text-slate-700">Size:</h3>
					<div>{data?.size?.name}</div>
				</div>
				<div className="flex items-center gap-x-4">
					<h3 className="font-semibold text-slate-700">Color:</h3>
					<div
						className="h-6 w-6 rounded-full border border-gray-600"
						style={{ backgroundColor: data?.color.value }}
					/>
				</div>
			</div>
			<div className="mt-10 flex items-center gap-x-3">
				<Button
					color="secondary"
					size="lg"
					className="w-full mt-auto flex items-center gap-x-2 rounded-md"
					onClick={() => addToCart(data)}
				>
					Add to Cart
					<ShoppingCart className="" />
				</Button>
			</div>
		</div>
	);
};

export default Info;
