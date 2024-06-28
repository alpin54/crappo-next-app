// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

// -- organisms
import Calculate from "@organisms/Calculate";

const CalculateWidget = () => {
	const [callCalculateData, setCallCalculateData] = useState(false);
	const [calculatedata, setCalculateData] = useState(null);

	const handleScroll = () => {
		const scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;
		const heroBanner = document.getElementById("hero-banner");
		const startScroll = heroBanner.offsetTop + heroBanner.clientHeight / 2;

		if (scrollTop > startScroll && !callCalculateData) {
			setCallCalculateData(true);
		}
	};

	const handleCalculateData = async () => {
		const { ready, data, error } = await httpRequest({
			method: "get",
			url: ENDPOINT.CALCULATE,
		});
		setCalculateData(data?.data);
	};

	useEffect(() => {
		if (callCalculateData) {
			handleCalculateData();
		}
	}, [callCalculateData]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		// cleaning even listener on component unmount
		return () => {
			window.addEventListener("scroll", handleScroll);
		};
	}, []);

	return <Calculate data={calculatedata} />;
};

export default CalculateWidget;
