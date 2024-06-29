import httpClient from "infrastructure/api/httpClient";
import ENDPOINT from "infrastructure/api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpClient({
		method: "get",
		url: ENDPOINT.STATISTICS,
	});

	return {
		ready,
		data,
		error,
	};
};

const statisticsModel = {
	list: handleList,
};

export default statisticsModel;
