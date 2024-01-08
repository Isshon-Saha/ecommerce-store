"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

import { Product } from "@/types";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { formatter } from "@/lib/utils";
import { Chip, Divider } from "@nextui-org/react";
import { PackageSearch, ShoppingBagIcon, ShoppingBasket } from "lucide-react";

type Props = {
	data: Product;
};

const ProductCard = ({ data }: Props) => {
	const router = useRouter();
	const { name, price, images, category } = data;
	return (
		<Card
			className="pt-4 grow-0"
			shadow="sm"
			isPressable
			onPress={() => router.push("/")}
		>
			<CardBody className="overflow-hidden py-2">
				<Image
					alt="Card background"
					className="object-cover rounded-xl aspect-square"
					src={images[0]?.url}
					height={270}
					width={270}
				/>
			</CardBody>
			<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
				<Chip
					className="font-semibold text-xs p-o mb-2"
					radius="sm"
					variant="flat"
					color="success"
				>
					{category?.name}
				</Chip>
				<small className="font-semibold text-slate-500">
					{formatter.format(parseInt(price))}
				</small>
				<h4 className="font-bold text-large text-slate-700 mb-2">{name}</h4>
			</CardHeader>
			<Divider orientation="horizontal" />
			<CardFooter className="px-4 flex items-center justify-between gap-x-5">
				<Button
					className="px-2 bg-slate-700 text-white dark:bg-white dark:bg-slate-700"
					size="md"
				>
					<PackageSearch className="h-4 w-4" />
					View Details
				</Button>
				<Button
					className="px-2 bg-slate-700 text-white dark:bg-white dark:bg-slate-700"
					size="md"
				>
					<ShoppingBasket className="h-4 w-4" />
					Add to Cart
				</Button>
			</CardFooter>
		</Card>
	);
};

export default ProductCard;
