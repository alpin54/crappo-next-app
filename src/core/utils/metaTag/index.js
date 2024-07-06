// -- utils
import metaTagData from "@utils/metaTag/data";
import metaTagViewport from "@utils/metaTag/viewport";
import MetaTagDefault from "@utils/metaTag/default";

// -- metaTag
const metaTag = (() => {
	return {
		data: metaTagData,
		viewport: metaTagViewport,
	};
})();

export { MetaTagDefault };
export default metaTag;
