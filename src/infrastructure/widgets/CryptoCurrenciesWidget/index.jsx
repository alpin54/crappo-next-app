// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

// -- organisms
import CryptoCurrencies from "@organisms/CryptoCurrencies";

const CryptoCurrenciesWidget = () => {
	const [callCryptoCurrenciesData, setCallCryptoCurrenciesData] =
		useState(false);
	const [cryptoCurrenciesdata, setCryptoCurrenciesData] = useState(null);

	const handleScroll = () => {
		const scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;
		const numbers = document.getElementById("numbers");
		const startScroll = numbers.offsetTop + numbers.clientHeight / 2;

		if (scrollTop > startScroll && !callCryptoCurrenciesData) {
			setCallCryptoCurrenciesData(true);
		}
	};

	const handleCryptoCurrenciesData = async () => {
		const { ready, data, error } = await httpRequest({
			method: "get",
			url: ENDPOINT.CRYPTOCURRENCIES,
		});
		setCryptoCurrenciesData(data?.data);
	};

	useEffect(() => {
		if (callCryptoCurrenciesData) {
			handleCryptoCurrenciesData();
		}
	}, [callCryptoCurrenciesData]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		// cleaning even listener on component unmount
		return () => {
			window.addEventListener("scroll", handleScroll);
		};
	}, []);

	return <CryptoCurrencies data={cryptoCurrenciesdata} />;
};

export default CryptoCurrenciesWidget;
