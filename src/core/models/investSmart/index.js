import httpClient from "infrastructure/api/httpClient";
import ENDPOINT from "infrastructure/api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpClient({
		method: "get",
		url: ENDPOINT.INVEST_SMART,
	});

	return {
		ready,
		data,
		error,
	};
};

const investSmartModel = {
	list: handleList,
};

export default investSmartModel;
