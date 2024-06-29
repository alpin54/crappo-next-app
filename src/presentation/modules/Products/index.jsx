"use client";

// -- core
import { useEffect } from "react";
import Link from "next/link";

// -- states
import useStateHeader from "core/states/header";

const Products = (props) => {
	const { ssrData } = props;
	const { product } = ssrData;

	// product
	const { data: productData, error: productError } = product;

	// set menu
	const { setMenu } = useStateHeader();

	useEffect(() => {
		setMenu("products");
	}, []);

	return (
		<>
			<div className="product">
				<div className="container">
					<div className="product__list">
						{productData !== null &&
							productData.map((val, idx) => (
								<div className="product__item" key={idx}>
									<div className="product__box">
										<Link
											href={`/products/${val.id}`}
											className="product__link"
										>
											{val.title}
										</Link>
										<div className="product__img">
											<img src={val.image} alt={val.title} />
										</div>
										<div className="product__txt">
											<h6 className="product__title">{val.title}</h6>
											<p className="product__price">${val.price}</p>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Products;
