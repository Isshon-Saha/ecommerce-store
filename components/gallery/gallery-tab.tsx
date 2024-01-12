"use client";

import { Tab } from "@headlessui/react";
import Image from "next/image";

import { Image as ImageType } from "@/types";
import { cn } from "@/lib/utils";

type Props = {
	image: ImageType;
};

const GalleryTab = ({ image }: Props) => {
	return (
		<Tab className="relative cursor-pointer flex aspect-square items-center justify-center rounded-md bg-white">
			{({ selected }) => (
				<div>
					<span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
						<Image
							fill
							src={image.url}
							alt=""
							className="object-cover object-center"
						/>
					</span>
					<span
						className={cn(
							"absolute inset-0 rounded-md ring-2 ring-offset-2",
							selected ? "ring-primary-500" : "ring-transparent",
						)}
					/>
				</div>
			)}
		</Tab>
	);
};

export default GalleryTab;
