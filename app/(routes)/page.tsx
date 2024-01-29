import { unstable_noStore as noStore } from "next/cache";

import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const MainPage = async () => {
	const billboardPromise = getBillboard("3f07e84a-45fb-44e1-ac75-b7c055eb1c3e");
	const featuredProductsPromise = getProducts({ isFeatured: true });
	const notFeaturedProducts = await getProducts({ isFeatured: false });

	noStore();

	const res = await Promise.all([billboardPromise, featuredProductsPromise]);
	const [billboard, featuredProducts] = res;
	return (
		<Container>
			<div className="space-y-10 pb-10">
				<Billboard data={billboard} />
			</div>
			<div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
				<ProductList title="Featured Products" products={featuredProducts} />
			</div>
		</Container>
	);
};

export default MainPage;
