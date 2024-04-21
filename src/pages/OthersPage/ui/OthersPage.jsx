import { CartItem } from "@/components/CartItem";
import { ProductLayout } from "@/layouts/ProductLayout";
import { ProductLayoutSkeleton } from "@/layouts/ProductLayout/ui/ProductLayout";
import {
  getOthers,
  getOthersError,
  getOthersLoading,
} from "@/redux/others/selectors/rollsSelectors";
import { fetchNextOthersPage } from "@/redux/others/services/fetchNextOthersPage";
import {useContext, useEffect} from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import {LayoutContext} from "@/providers/LayoutContextProvider.jsx";

const OthersPage = () => {
  const others = useSelector(getOthers);
  const error = useSelector(getOthersError);
  const loading = useSelector(getOthersLoading);

  const { handleClick } = useContext(LayoutContext);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 1,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!error) {
      dispatch(fetchNextOthersPage());
    }
  }, [dispatch, error, inView]);

  if (error) {
    return <div className="error"> {error}</div>;
  }

  const item = others.map((el) => {
    return (
      <CartItem
        id={el.id}
        key={el.id}
        product={el.product}
        img={el.photo}
        title={el.name}
        description={el.description}
        price={el.price}
        handleClick={handleClick}
      />
    );
  });

  return (
    <>
      <ProductLayout header={"Прочее"} item={item} />

      {loading && <ProductLayoutSkeleton />}
      {!loading && <div ref={ref} />}
    </>
  );
};

export default OthersPage;
