"use client";

import { formatter } from "@/lib/utils";
import { useState, useEffect } from "react";

type Props = {
	value: string;
};

const Currency = (props: Props) => {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);
	if (!isMounted) return null;
	return <span>{formatter.format(parseInt(props.value))}</span>;
};

export default Currency;
