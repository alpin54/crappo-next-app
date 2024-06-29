// -- model
import productModel from "@models/product";

// -- Products Pages
import ProductsDetail from "@modules/Products/Detail";

const ProductsPage = async (PropsPage) => {
	const {
		params: { id },
	} = PropsPage;

	const productDetail = await productModel.detail(id);

	const props = {
		ssrData: { productDetail },
	};

	return <ProductsDetail {...props} />;
};

export default ProductsPage;
