"use client";

import { Tabs, Tab } from "@nextui-org/react";

import { Image as ImageType } from "@/types";
import GalleryTab from "@/components/gallery/gallery-tab";

type Props = {
	images: ImageType[] | undefined;
};

const Gallery = ({ images }: Props) => {
	return (
		<div className="flex flex-col-reverse">
			<div className="mx-auto mt-6 hidden sm:block w-full max-w-2xl lg:max-w-none">
				<Tabs items={images} className="grid grid-cols-4 gap-6">
					{(item) => <Tab key={item.id}>GalleryItem</Tab>}
				</Tabs>
			</div>
		</div>
	);
};

export default Gallery;
