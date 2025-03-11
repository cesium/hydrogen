"use server";

import type { Product } from "../types";

const getProducts = async () => {
  try {
    const response = await fetch(
      "https://api.shopk.it/v1/product?featured=true&limit=5",
      {
        headers: {
          "X-API-KEY": process.env.SHOPKIT_API_KEY!,
          "Content-Type": "application/json",
        },
        next: { revalidate: 86400 },
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const data: Record<string, Product> = await response.json() as Record<string, Product>;
    const productsArray = Object.values(data);

    return productsArray.slice(0, -1);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default getProducts;
