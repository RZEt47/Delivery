import { productsName } from "@/const/const";
import {
  getProductItem,
  getProductItemLoading,
  getProductItemPrice,
} from "@/redux/productItem/selectors/productItemSelectors";
import { Modal } from "@/ui/Modal";
import { useSelector } from "react-redux";
import { ModalItemPizza } from "../ModalItemPizza/ModalItemPizza";
import { ModalItemRolls } from "../ModalItemRolls/ModalItemRolls";
import { ModalItemOthers } from "../ModalItemOthers/ModalItemOthers";
import {ModalItemSkeleton} from "@/components/ModalItem/ui/ModalItemSkeleton/ModalItemSkeleton.jsx";

const ModalItem = (props) => {
  const { isOpen, setIsOpen } = props;

  const product = useSelector(getProductItem);
  const loading = useSelector(getProductItemLoading);

  const price = useSelector(getProductItemPrice);

  const productOptions = () => {
    const props = {
      isOpen: isOpen,
      product: product,
      price: price,
    };

    switch (product.product) {
      case productsName.PIZZAS:
        return <ModalItemPizza {...props} />;
      case productsName.ROLLS:
        return <ModalItemRolls {...props} />;
      case productsName.OTHERS:
        return <ModalItemOthers {...props} />;

      default:
        return null;
    }
  };

  if (loading) {
    return (
        <Modal
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            width={1070}
            height={680}
            border={25}
        >
          <ModalItemSkeleton/>
        </Modal>
    );
  }

  return (
    <Modal
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      width={1070}
      height={680}
      border={25}
    >
      {productOptions()}
    </Modal>
  );
};

export { ModalItem };
