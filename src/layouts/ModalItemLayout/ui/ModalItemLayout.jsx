import { Button } from "@/ui/Button";
import {useDispatch} from "react-redux";
import {basketActions} from "@/redux/basket/slice/basketSlice.js";
import cls from "./ModalItemLayout.module.scss";
import {useContext} from "react";
import {LayoutContext} from "@/providers/LayoutContextProvider.jsx";

const ModalItemLayout = (props) => {
  const { params, options, price } = props;

  const {setIsOpen, openPopup} = useContext(LayoutContext)

  const dispatch = useDispatch();

  const onClick = () => {
      dispatch(basketActions.addItem({...params, price: price}))
      setIsOpen(false)
      openPopup()
  }

  return (
    <div className={cls.body}>
      <img className={cls.img} src={params.img} />

      <div className={cls.content}>
        <h3 className={cls.title}>{params.title}</h3>

        {options && options}

        <div className={cls.footer}>
          <span className={cls.price}>Итого: {price} ₽</span>

          <Button onClick={onClick} border className={cls.button}>
            Добавить
          </Button>
        </div>
      </div>
    </div>
  );
};

export { ModalItemLayout };
