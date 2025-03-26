"use client";

import InfoCard from "@/components/info-card";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import getProducts from "@/lib/api/getProducts";
import type { Product } from "@/lib/types";
import { shuffleArray } from "@/lib/utils";
import { useDictionary } from "@/contexts/dictionary-provider";

interface StoreProductProps {
  product: Product;
  sizeClass: string;
}

const StoreProduct = ({ product, sizeClass }: StoreProductProps) => {
  const [isLoading, setIsLoading] = useState(true);

  if (!product) {
    return (
      <div
        className={`relative ${sizeClass} flex-shrink-0 text-base font-semibold text-white`}
      >
        <div className="size-full animate-pulse rounded-lg bg-zinc-700" />
      </div>
    );
  }

  return (
    <div
      className={`relative ${sizeClass} flex-shrink-0 text-base font-semibold text-white transition-transform hover:-translate-y-1`}
    >
      <Link
        href={`https://store.cesium.pt/product/${product.handle}`}
        target="_blank"
      >
        <span
          className={`absolute right-0 z-20 -mr-3 -mt-6 rounded-3xl px-4 py-2 sm:mr-3 ${isLoading ? "animate-pulse bg-zinc-700 text-zinc-700" : "bg-black ring-2 ring-white"}`}
        >
          <p>{product.price_formatted}</p>
        </span>
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          {isLoading && (
            <div className="absolute inset-0 animate-pulse bg-zinc-700" />
          )}
          <Image
            src={product.image.square}
            alt={product.title}
            layout="fill"
            objectFit="contain"
            className="pointer-events-none select-none"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </Link>
    </div>
  );
};

const StoreCard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const dict = useDictionary();
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    async function fetchProducts() {
      try {
        const productsData = await getProducts();
        const limitedRandomProducts = shuffleArray([...productsData]).slice(
          0,
          3,
        );
        setProducts(limitedRandomProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    void fetchProducts();
  }, []);

  return (
    <InfoCard>
      <div className="flex flex-col bg-black sm:flex-row sm:justify-between sm:gap-2">
        <div className="flex w-full flex-col gap-2 px-6 py-9 pb-3 text-white sm:w-3/6 sm:px-9 sm:py-11">
          <h4 className="font-title text-2xl font-medium">
            {dict.store_card.title}
          </h4>
          <p>{dict.store_card.text}</p>
          <Link
            className="hover:bg-gray-100 mt-2 w-max rounded-full px-5 py-3 text-white ring-2 ring-white transition-colors hover:bg-white/5"
            href={"https://store.cesium.pt"}
            target="_blank"
          >
            {dict.store_card.button}
          </Link>
        </div>
        <div className="sm:relative sm:w-2/5">
          <div className="-ml-24 flex h-64 flex-col gap-2 overflow-hidden sm:absolute sm:-mt-32 sm:ml-0 sm:h-max">
            <div className="flex flex-row items-center justify-end gap-8 sm:translate-y-24 sm:justify-normal">
              <StoreProduct
                product={products[0]!}
                sizeClass="size-52 sm:size-72"
              />
              <div className="flex flex-col gap-11 overflow-hidden">
                <div className="ml-24 mt-8 sm:ml-48 sm:mt-0">
                  <StoreProduct
                    product={products[1]!}
                    sizeClass="size-32 sm:size-44"
                  />
                </div>
                <StoreProduct
                  product={products[2]!}
                  sizeClass="size-40 sm:size-56"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </InfoCard>
  );
};

export default StoreCard;
