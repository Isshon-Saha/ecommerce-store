type Props = {
	children: React.ReactNode;
};

const Container = (props: Props) => {
	return <div className="mx-auto max-w-7xl">{props.children}</div>;
};

export default Container;
