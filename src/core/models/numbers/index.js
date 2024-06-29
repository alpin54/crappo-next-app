import httpClient from "@api/httpClient";
import ENDPOINT from "@api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpClient({
		method: "get",
		url: ENDPOINT.NUMBERS,
	});

	return {
		ready,
		data,
		error,
	};
};

const numbersModel = {
	list: handleList,
};

export default numbersModel;
