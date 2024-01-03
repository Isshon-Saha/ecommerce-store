import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "./main-nav";

const Navbar = () => {
	return (
		<div className="border-b">
			<Container>
				<div className="flex items-center h-16 px-4 sm:px-6 lg:px-8">
					<Link href="/" className="ml-4 lg:ml-0 flex gap-x-2">
						<p className="font-bold text-xl">Store</p>
					</Link>
					<MainNav
						data={[
							{ id: "1", label: "Category 1" },
							{ id: "2", label: "Category 2" },
						]}
					/>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
