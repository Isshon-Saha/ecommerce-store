"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

type Props = {
	data: Category[];
};

type FormattedRoute = {
	href: string;
	label: string;
	active: boolean;
};

const MainNav = ({ data }: Props) => {
	const pathname: string = usePathname();

	const routes: FormattedRoute[] = data.map((route) => ({
		href: `/category/${route.id}`,
		label: route.name,
		active: pathname.includes(`/category/${route.id}`),
	}));

	return (
		<nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
			{routes.map((route) => (
				<Link
					href={route.href}
					key={route.href}
					className={cn(
						"text-sm font-medium transition-colors hover:text-black",
						route.active ? "text-black" : "text-slate-700",
					)}
				>
					{route.label}
				</Link>
			))}
		</nav>
	);
};

export default MainNav;
