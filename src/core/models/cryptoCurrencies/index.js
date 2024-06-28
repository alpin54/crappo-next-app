import httpClient from "@api/httpClient";
import ENDPOINT from "@api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpClient({
		method: "get",
		url: ENDPOINT.CRYPTOCURRENCIES,
	});

	return {
		ready,
		data,
		error,
	};
};

const cryptoCurrenciesModel = {
	list: handleList,
};

export default cryptoCurrenciesModel;
