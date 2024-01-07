export type Billboard = {
	id: string;
	label: string;
	imageUrl: string;
};

export type Category = {
	id: string;
	name: string;
	billboard: Billboard;
};

export type Color = {
	id: string;
	name: string;
	value: string;
};

export type Size = {
	id: string;
	name: string;
	value: string;
};

export type Image = {
	id: string;
	Url: string;
};

export type Product = {
	id: string;
	name: string;
	price: string;
	imageUrl: string;
	isFeatured: boolean;
	category: Category;
	color: Color;
	size: Size;
	images: Image[];
};
