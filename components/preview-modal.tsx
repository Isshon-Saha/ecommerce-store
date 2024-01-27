"use client";

import { Modal, ModalBody, ModalContent } from "@nextui-org/modal";

import usePreviewModal from "@/hooks/use-preview-modal";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import { useMediaQuery } from "usehooks-ts";

const PreviewModal = () => {
	const previewModal = usePreviewModal();
	const product = usePreviewModal((state) => state.data);
	const isMobile = useMediaQuery("(max-width: 768px)");

	if (!product) return null;
	return (
		<Modal
			isOpen={previewModal.isOpen}
			onClose={previewModal.onClose}
			placement="auto"
			size={isMobile ? "md" : "3xl"}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalBody className="grid py-5 w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
							<div className="sm:col-span-4 lg:col-span-5">
								<Gallery images={product.images} />
							</div>
							<div className="sm:col-span-8 lg:col-span-7">
								<Info data={product} />
							</div>
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};

export default PreviewModal;
