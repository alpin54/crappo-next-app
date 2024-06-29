import httpClient from "infrastructure/api/httpClient";
import ENDPOINT from "infrastructure/api/endPoint";

const handleList = () => {
	const { ready, data, error } = httpClient({
		method: "get",
		url: ENDPOINT.PROFIT_INVESTMENTS,
	});

	return {
		ready,
		data,
		error,
	};
};

const profitInvestmentsModel = {
	list: handleList,
};

export default profitInvestmentsModel;
