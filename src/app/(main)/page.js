// -- model
import heroBannerModel from "@models/heroBanner";
import numbersModel from "@models/numbers";

// -- modules
import Home from "@modules/Home";

// -- metadata
const metadata = {
	title: "RZF Software | Professional Application Developer",
	description:
		"Sebuah usaha yang berfokus pada produk dan layanan dalam bidang teknologi dan informasi",
	keywords: "rzf software, aplikasi umkm, aplikasi kesehatan, aplikasi grosir",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		locale: "en_US",
		type: "website",
		siteName: "RZF Software",
		title: "RZF Software | Professional Application Developer",
		description:
			"Sebuah usaha yang berfokus pada produk dan layanan dalam bidang teknologi dan informasi",
		url: "/",
		images: [
			{
				url: "https://nextjs.org/og.png",
				alt: "RZF Software | Professional Application Developer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@rzf_software",
		siteId: "@rzf_software",
		creator: "@rzf_software",
		title: "RZF Software | Professional Application Developer",
		description:
			"Sebuah usaha yang berfokus pada produk dan layanan dalam bidang teknologi dan informasi",
		images: ["https://nextjs.org/og.png"],
	},
};

// ==================
// HomePage
// ==================

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
