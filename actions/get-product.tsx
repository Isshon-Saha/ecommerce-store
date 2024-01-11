import { Product } from "@/types";

type Props = {
	id: string;
};

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const GetProduct = async ({ id }: Props): Promise<Product> => {
	const url = `${URL}/${id}`;
	const res = await fetch(url);

	return res.json();
};

export default GetProduct;
