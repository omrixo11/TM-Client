import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductsStatus,
  fetchProducts,
  selectAllProducts,
  getProductsError,
} from "../products/productsSlice";

const ProductsIndex = () => {
  const dispatch = useDispatch();
  const productsStatus = useSelector(getProductsStatus);
  const products = useSelector(selectAllProducts);
  const error = useSelector(getProductsError);

  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productsStatus, dispatch]);

  let contentToDisplay = "";
  if (productsStatus === "loading") {
    contentToDisplay = <h2>Loading...</h2>;
  } 
  else if (productsStatus === "succeeded") { 
    contentToDisplay = products ? products.map((data) => (
      <div key={data.id}>
        <h2>{data.name}</h2>
    <h3>{data.price}</h3>
    <h3>{data.category}</h3>
        <hr />
      </div>
      
  )): <></>;
  } else if (productsStatus === "failed") {
    contentToDisplay = <>
    {/* <CircularProgress/> */}
    {console.log(error)}</>;
  }
  return (
    <div>
      <h1>services page</h1>
      {contentToDisplay}
    </div>
  );
};

export default ProductsIndex;
