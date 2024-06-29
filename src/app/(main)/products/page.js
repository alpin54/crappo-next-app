// -- model
import productModel from "@models/product";

// -- modules
import Products from "@modules/Products";

// -- metadata
const metadata = {
	title: "Product",
	description: "Product Description",
	keywords: "Product, portofilio",
};

const ProductsPage = async () => {
	const product = await productModel.list();

	const props = {
		ssrData: { product },
	};

	return <Products {...props} />;
};

export { metadata };
export default ProductsPage;
