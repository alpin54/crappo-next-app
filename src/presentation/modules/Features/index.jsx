"use client";

// -- core
import { useEffect } from "react";

// -- states
import useStateHeader from "core/states/header";

const Features = () => {
	// set menu
	const { setMenu } = useStateHeader();

	useEffect(() => {
		setMenu("features");
	}, []);

	return (
		<>
			<h1>Feature Pages</h1>
		</>
	);
};

export default Features;
