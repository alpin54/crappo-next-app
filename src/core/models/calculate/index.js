import httpClient from "@api/httpClient";
import ENDPOINT from "@api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpClient({
		method: "get",
		url: ENDPOINT.CALCULATE,
	});

	return {
		ready,
		data,
		error,
	};
};

const calculateModel = {
	list: handleList,
};

export default calculateModel;
