const Footer = () => {
	return (
		<footer className="bg-white border-t">
			<div className="mx-auto py-10">
				<p className="text-center text-gray-500 text-xs">
					&copy; {new Date().getFullYear()} FakestoreName Inc. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
