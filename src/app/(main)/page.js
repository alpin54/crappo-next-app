// -- model
import heroBannerModel from "@models/heroBanner";
import numbersModel from "@models/numbers";

// -- modules
import Home from "@modules/Home";

// -- metadata
const metadata = {
	title: "Home",
};

const HomePage = async () => {
	const heroBanner = await heroBannerModel.list();
	const numbers = await numbersModel.list();

	const props = {
		ssrData: { heroBanner, numbers },
	};

	return <Home {...props} />;
};

export { metadata };
export default HomePage;
