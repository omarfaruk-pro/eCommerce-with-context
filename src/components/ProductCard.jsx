import { Link } from "react-router";
import { useCart } from "../context/CartContext";

export default function ProductCard({product}) {
    const {cart, setCart} = useCart();
    const addToCart = () =>{
        setCart((prev) => [...prev, product]);
    }
    const removeFromCart = () =>{
        setCart((prev) => prev.filter((item) => item.productId !== product.productId));
    }
  return (
    <>
        <div className="group relative block overflow-hidden">
            <button
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
            >
                <span className="sr-only">Wishlist</span>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
                </svg>
            </button>

            <Link to={`/product/${product.productId}`}>
                <img
                    src={product.productImage}
                    alt={product.productName}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />
            </Link>

            <div className="relative border border-gray-100 bg-white p-6">
                <p className="text-gray-700">
                {product.productPrice}
                </p>
                <Link to={`/product/${product.productId}`}>
                    <h3 className="mt-1.5 text-lg font-medium text-gray-900">{product.productName}</h3>
                </Link>
                

                <p className="mt-1.5 line-clamp-3 text-gray-700">
                {product.productDescription.slice(0, 140)}
                </p>
                <div className="flex gap-4 mt-5">

                    {
                        cart.find((p) => p.productId === product.productId) ? (
                            <button onClick={removeFromCart} type='button'
                            className="block w-full rounded bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                        >
                            Remove From Cart
                        </button>
                        ) : (
                            <button onClick={addToCart} type="button"
                        className="block w-full rounded bg-gray-600 px-4 py-3 text-sm font-medium text-gray-200 transition hover:scale-105"
                        >
                            Add to Cart
                        </button>
                        )
                    }

                    <button type='button'
                        className="block w-full rounded bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}
