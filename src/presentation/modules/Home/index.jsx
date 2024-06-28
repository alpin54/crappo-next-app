"use client";

// -- core
import { useState } from "react";

// -- states
import useStateHeader from "core/states/header";

// -- widgets
import CalculateWidget from "@widgets/CalculateWidget";
import CryptoCurrenciesWidget from "@widgets/CryptoCurrenciesWidget";
import InvestSmartWidget from "@widgets/InvestSmartWidget";
// import StatisticsWidget from "@widgets/StatisticsWidget";
// import ProfitInvestmentsWidget from "@widgets/ProfitInvestmentsWidget";
import SubsribeWidget from "@widgets/SubscribeWidget";

// // -- organisms
import HeroBanner from "@organisms/HeroBanner";
import Numbers from "@organisms/Numbers";
import WhyCrappo from "@organisms/WhyCrappo";

const Home = (props) => {
	const { ssrData } = props;
	const { heroBanner, numbers, whyCrappo } = ssrData;

	// heroBanner
	const { data: heroBannerData, error: heroBannerError } = heroBanner;

	// numbers
	const { data: numbersData, error: numbersError } = numbers;

	// whyCrappo
	const { data: whyCrappoData, error: whyCrappoError } = whyCrappo;

	const { setMenu } = useStateHeader();

	useState(() => {
		setMenu("");
	}, []);

	return (
		<>
			{/* SSR */}
			<HeroBanner
				ready={true}
				data={heroBannerData.data}
				error={heroBannerError}
			/>
			<Numbers ready={true} data={numbersData.data} error={numbersError} />
			<WhyCrappo
				ready={true}
				data={whyCrappoData.data}
				error={whyCrappoError}
			/>
			{/* CSR */}
			{/* <CalculateWidget />
			<CryptoCurrenciesWidget />
			<InvestSmartWidget /> */}
			{/* <StatisticsWidget /> */}
			{/* <ProfitInvestmentsWidget /> */}
			<SubsribeWidget />
		</>
	);
};

export default Home;
