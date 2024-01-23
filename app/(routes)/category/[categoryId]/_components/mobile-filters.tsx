"use client";

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

import { Color, Size } from "@/types";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import Filter from "./filter";

type Props = {
	sizes: Size[];
	colors: Color[];
};

const MobileFilters = ({ sizes, colors }: Props) => {
	const [open, setOpen] = useState(false);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return null;

	const onOpen = () => setOpen(true);
	const onClose = () => setOpen(false);
	return (
		<>
			<Button
				className="flex items-center gap-x-2 lg:hidden"
				variant="flat"
				color="primary"
				onClick={onOpen}
			>
				Filters
				<Plus size={20} />
			</Button>
			<Dialog
				open={open}
				onClose={onClose}
				as="div"
				className="relative z-40 lg:hidden"
			>
				{/* Background */}
				<div className="fixed inset-0 bg-black bg-opacity-25" />
				{/* Modal panel */}
				<div className="fixed inset-0 z-40 flex">
					<Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white shadow-xl py-4 pb-6">
						{/* Close button */}
						<div className="flex items-center justify-end px-4">
							<Button
								size="sm"
								radius="full"
								onClick={onClose}
								variant="ghost"
								color="primary"
							>
								<X size={15} className="p-2" />
							</Button>
						</div>
						{/* Content */}
						<div className="p-4">
							<Filter valueKey="sizeId" name="Sizes" data={sizes} />
							<Filter valueKey="colorId" name="Colors" data={colors} />
						</div>
					</Dialog.Panel>
				</div>
			</Dialog>
		</>
	);
};

export default MobileFilters;
