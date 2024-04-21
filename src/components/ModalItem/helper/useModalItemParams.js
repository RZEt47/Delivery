import {useSelector} from "react-redux";
import {getProductItem} from "@/redux/productItem/selectors/productItemSelectors.js";

export const useModalItemParams = () => {
    const product = useSelector(getProductItem);

    return {
        id: product.id,
        product: product.product,
        img: product.photo,
        title: product.name,
        count: 1
    }
}