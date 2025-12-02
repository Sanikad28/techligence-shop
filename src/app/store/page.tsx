"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";

export default function StorePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((resData) => {
        console.log("PRODUCTS RESPONSE:", resData);

        if (Array.isArray(resData.data)) {
          setProducts(resData.data);
        } else {
          setProducts([]);
        }
      })
      .catch((err) => console.log("FETCH ERR:", err));
  }, []);

  return (
    <div className="pt-6 px-6">
      <h1 className="text-3xl font-bold text-center mb-10">Store</h1>

      {products.length === 0 && (
        <p className="text-center text-gray-500">No products found</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item: any) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
