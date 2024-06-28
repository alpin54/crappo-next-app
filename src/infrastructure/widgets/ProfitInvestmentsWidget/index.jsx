// -- core
import { useEffect, useState } from "react";

// -- api
import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

// -- organisms
import ProfitInvestments from "@organisms/ProfitInvestments";

const ProfitInvestmentsWidget = () => {
	const [callProfitInvestmentsData, setCallProfitInvestmentsData] =
		useState(false);
	const [profitInvestmentsdata, setProfitInvestmentsData] = useState(null);

	const handleScroll = () => {
		const scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;
		const investSmart = document.getElementById("invest-smart");
		const startScroll = investSmart.offsetTop + investSmart.clientHeight / 2;

		if (scrollTop > startScroll && !callProfitInvestmentsData) {
			setCallProfitInvestmentsData(true);
		}
	};

	const handleProfitInvestmentsData = async () => {
		const { ready, data, error } = await httpRequest({
			method: "get",
			url: ENDPOINT.PROFIT_INVESTMENTS,
		});
		setProfitInvestmentsData(data?.data);
	};

	useEffect(() => {
		if (callProfitInvestmentsData) {
			handleProfitInvestmentsData();
		}
	}, [callProfitInvestmentsData]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		// cleaning even listener on component unmount
		return () => {
			window.addEventListener("scroll", handleScroll);
		};
	}, []);

	return <ProfitInvestments data={profitInvestmentsdata} />;
};

export default ProfitInvestmentsWidget;
