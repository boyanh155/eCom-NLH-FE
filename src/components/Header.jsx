import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../assets/css/layout/header.css";

import productHandler from "../features/product/function";
const Banner = React.lazy(() => import("../components/header/Banner.jsx"));
const HeaderContent = React.lazy(() =>
  import("../components/header/HeaderContent.jsx")
);

const Header = () => {
  const [imgArr, setImgArr] = useState([]);
  const [product, setProduct] = useState();

  //Get Product by ID New Api
  useEffect(() => {
    //Get All products New Api
    productHandler.getAllProducts().then((res) => {
      // console.log(res.data);
      const listProducts = res.data.products;
      console.log("List of products:");
      console.log(listProducts);
    });

    //Get Products by keyword New Api
    productHandler.getProductList({ keyword: "" }).then((res) => {
      console.log(res);
      const listProducts = res.data.products;
      console.log("Search product by keyword:");
      console.log(listProducts);
    });
    productHandler
      .getProductById({ productId: "6362440216e3c97b296ef5dd" })
      .then((res) => {
        console.log(res);
        const product = res.data;
        console.log("Get product by Id:");
        console.log(product);
        setProduct(product);
      });
  }, []);

  useEffect(() => {
    let arr = [];
    product?.productOptions.forEach((productOption) => {
      productOption?.colors.forEach((color) => {
        color?.images.forEach((img) => {
          arr.push(img?.urlImage);
        });
      });
    });
    console.log(product?.productOptions);
    // console.log(product?.productOptions?.colors);
    console.log(arr);
  }, [product]);

  return (
    <div className="headerWrapper grid  ">
      <Banner />
      {/* Header */}
      {/* Header - Top */}
      {/* Header - Main */}
      <HeaderContent />
    </div>
  );
};

export default Header;
