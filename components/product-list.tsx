"use client";

import { Suspense, useEffect, useState } from "react";

import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import ProductCard from "./ui/product-card";

type Props = {
	title: string;
	products: Product[];
};

const ProductList = ({ title, products }: Props) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<div className="space-y-4">
			<h3 className="font-bold text-3xl text-slate-700">{title}</h3>
			<div className="h-[5vh]" />
			{products.length === 0 && <NoResults />}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
				{products.map((product) => (
					<Suspense fallback={<div>Loading...</div>}>
						<ProductCard data={product} key={product.id} />
					</Suspense>
				))}
			</div>
			<div className="h-[5vh]" />
		</div>
	);
};

export default ProductList;
