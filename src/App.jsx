import data from "./data.json";
import Navigation from "./components/navbar";
import { useState } from "react";
import { Button } from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/16/solid";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="bg-white">
      <Navigation cart={cart} />
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <Heading title="Products" />
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <ProductCard product={product} setCart={setCart} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Heading = ({ title }) => {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
  );
};

const ProductCard = ({ product, setCart }) => {
  return (
    <>
      <div key={product.id} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            alt={product.imageAlt}
            src={product.imageSrc}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900">
              <a href={product.href}>
                {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                {product.name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.description}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium text-gray-900">{product.price}</p>
          <button className="bg-gray-300 p-4 rounded-md text-sm hover:bg-gray-500">
            <Button onClick={() => setCart((cart) => [...cart, product])}>
              {/* <PlusCircleIcon
                aria-hidden="true"
                className="hidden sm:ml-6 sm:block h-6 w-6 group-data-[open]"
              /> */}
              Add to Cart
            </Button>
          </button>
        </div>
      </div>
    </>
  );
};
