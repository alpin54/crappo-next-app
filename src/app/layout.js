// style
import "@styles/app.scss";

const RootLayout = (props) => {
	const { children } = props;

	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
