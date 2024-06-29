import httpClient from "infrastructure/api/httpClient";
import ENDPOINT from "infrastructure/api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpClient({
		method: "get",
		url: ENDPOINT.WHY_CRAPPO,
	});

	return {
		ready,
		data,
		error,
	};
};

const whyCrappoModel = {
	list: handleList,
};

export default whyCrappoModel;
