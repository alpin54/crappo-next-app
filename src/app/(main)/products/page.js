// -- model
import productModel from "@models/product";

// -- Products Pages
import Products from "@modules/Products";

const ProductsPage = async () => {
	const product = await productModel.list();

	const props = {
		ssrData: { product },
	};

	return <Products {...props} />;
};

export default ProductsPage;
