import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";

type Props = {
	title: string;
	products: Product[];
};

const ProductList = ({ title, products }: Props) => {
	return (
		<div className="space-y-4">
			<h3 className="font-bold text-3xl">{title}</h3>
			{products.length === 0 && <NoResults />}
			<p>Products array size: {products.length}</p>
		</div>
	);
};

export default ProductList;
