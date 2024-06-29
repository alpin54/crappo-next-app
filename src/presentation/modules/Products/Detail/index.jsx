"use client";

// -- core
import { useEffect } from "react";

// -- states
import useStateHeader from "core/states/header";

const ProductsDetail = (props) => {
	const { ssrData } = props;
	const { productDetail } = ssrData;

	// product detail
	const { data: detailData, error: detailError } = productDetail;

	// set menu
	const { setMenu } = useStateHeader();

	useEffect(() => {
		setMenu("productsDetail");
	}, []);

	return (
		<>
			<div className="pdetail">
				<div className="container">
					<div className="pdetail__inner">
						<div className="pdetail__img">
							<img src={detailData.image} alt={detailData.title} />
						</div>
						<div className="pdetail__txt">
							<p className="pdetail__cat">{detailData.category}</p>
							<h1 className="pdetail__title">{detailData.title}</h1>
							<p className="pdetail__rating">
								⭐{detailData.rating.rate} ({detailData.rating.count} rating)
							</p>
							<p className="pdetail__price">${detailData.price}</p>
							<p className="pdetail__desc">{detailData.description}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductsDetail;
