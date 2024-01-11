import GetProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

type Props = {
	params: {
		productId: string;
	};
};

const ProductPage = async ({ params }: Props) => {
	const { productId } = params;

	const product = await GetProduct({ id: productId });

	const suggestedProducts = await getProducts({
		categoryId: product?.category?.id,
	});

	return (
		<div className="bg-white">
			<Container>
				<div className="px-4 py-6 sm:px-6 lg:px-8">
					<div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
						<Gallery images={product?.images} />
						<div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
							{/* Description */}
							info
						</div>
					</div>
					<hr className="my-10" />
					<ProductList title="Related products" products={suggestedProducts} />
				</div>
			</Container>
		</div>
	);
};

export default ProductPage;