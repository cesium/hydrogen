"use server";

import axios from "axios";
import type { Product } from "../types";

const getProducts = async () => {
  try {
    const response = await axios.get<Record<string, Product>>(
      "https://api.shopk.it/v1/product?featured=true&limit=5",
      {
        headers: {
          "X-API-KEY": process.env.SHOPKIT_API_KEY!,
          "Content-Type": "application/json",
        },
      },
    );

    const productsArray = Object.values(response.data);

    return productsArray.slice(0, -1);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default getProducts;
