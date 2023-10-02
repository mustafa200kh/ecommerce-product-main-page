import { createSlice } from "@reduxjs/toolkit";
import product1 from "../../Assets/image-product-1.jpg";
import product2 from "../../Assets/image-product-2.jpg";
import product3 from "../../Assets/image-product-3.jpg";
import product4 from "../../Assets/image-product-4.jpg";

import productThumb1 from "../../Assets/image-product-1-thumbnail.jpg";
import productThumb2 from "../../Assets/image-product-2-thumbnail.jpg";
import productThumb3 from "../../Assets/image-product-3-thumbnail.jpg";
import productThumb4 from "../../Assets/image-product-4-thumbnail.jpg";

const productSlice = createSlice({
  initialState: {
    id: 1,
    company: "Sneakers Company",
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 125.0,
    discount: 50,
    oldPrice: 250,
    images: [product1, product2, product3, product4],
    thumb: [productThumb1, productThumb2, productThumb3, productThumb4],
  },
  name: "productSlice",
  reducers: {},
});

export default productSlice.reducer;
