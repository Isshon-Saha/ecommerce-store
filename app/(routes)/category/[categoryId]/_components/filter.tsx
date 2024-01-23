"use client";

import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { Button, Divider } from "@nextui-org/react";

import { Color, Size } from "@/types";
import { cn } from "@/lib/utils";

type Props = {
	data: (Size | Color)[];
	name: string;
	valueKey: string;
};

const Filter = ({ data, name, valueKey }: Props) => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return null;

	const selectedValue = searchParams.get(valueKey);

	const onClick = (id: string) => {
		const current = queryString.parse(searchParams.toString());

		const query = {
			...current,
			[valueKey]: id,
		};

		if (id === current[valueKey]) {
			query[valueKey] = null;
		}

		const url = queryString.stringifyUrl(
			{
				url: window.location.href,
				query,
			},
			{ skipNull: true },
		);

		router.push(url);
	};
	return (
		<div className="mb-8 ">
			<h3 className="text-lg font-semibold text-slate-700">{name}</h3>
			<Divider className="my-4" />
			<div className="flex flex-wrap gap-2">
				{data.map((filter) => (
					<div className="flex items-center" key={filter.id}>
						<Button
							className={cn(
								"rounded-md text-sm border-2 text-slate-800 p-2 bg-white",
								selectedValue === filter.id && "border-primary-500",
							)}
							variant="flat"
							onClick={() => onClick(filter.id)}
						>
							{filter.name}
						</Button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Filter;
