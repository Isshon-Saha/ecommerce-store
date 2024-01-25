"use client";

import { useEffect, useState } from "react";

import PreviewModal from "@/components/preview-modal";

const ModalProvider = () => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return null;
	return (
		<>
			<PreviewModal />
		</>
	);
};

export default ModalProvider;
