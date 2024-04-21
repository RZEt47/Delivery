import cls from "./Header.module.scss";
import PizzaIcon from "@/assets/img/logoPizza.svg";
import ToggleIcon from "@/assets/img/toggleTheme.svg";
import CartIcon from "@/assets/img/cart.svg";
import { Button } from "@/ui/Button";
import { Icon } from "@/ui/Icon";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import {Modal} from "@/ui/Modal/index.js";
import {useContext, useState} from "react";
import {BasketItem} from "@/components/BasketItem/index.js";
import {useSelector} from "react-redux";
import {getBasketTotalPrice} from "@/redux/basket/selectors/basketSelectors.js";
import {LayoutContext} from "@/providers/LayoutContextProvider.jsx";

const Header = () => {
  const navigate = useNavigate();

  const {popup} = useContext(LayoutContext)

  const totalPrice = useSelector(getBasketTotalPrice)

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((prev) => !prev);

  const onClick = () => {
    navigate("/");
  };

  const { toggleTheme } = useTheme();

  const toggleThemeHandler = () => {
    toggleTheme();
  };

  return (
      <>
        <header className={cls.header}>
          <div className={cls.container}>
            <div className={cls.content}>
              <div className={cls.logo}>
                <Icon Svg={PizzaIcon} clickable onClick={onClick}/>

                <p>Delivery</p>
              </div>

              <div className={cls.buttons}>
                <Icon Svg={ToggleIcon} clickable onClick={toggleThemeHandler}/>

                <Button onClick={handleClick} border className={cls.button}>
                  <Icon Svg={CartIcon}/>

                  <span>{totalPrice} Р</span>
                </Button>
              </div>
            </div>
            {popup && <p className={cls.popup}>Товар Был добавлен в корзину</p>}
          </div>
        </header>

        <Modal variant={"rightModal"}
               width={420}
               height={"100%"}
               scroll={"auto"}
               isOpen={isOpen}
               setIsOpen={setIsOpen}>

          <div className={cls.body}>
              <BasketItem/>

              <div className={cls.footer}>
                <div className={cls.totalPrice}>

                  <span>Итого {totalPrice} ₽</span>
                </div>

                <Button>Оформить заказ</Button>
              </div>
          </div>
        </Modal>
      </>
  );
};

export {Header};
