import { Link, useParams } from "react-router";
import { useProduct } from "../context/ProductContext";
import { useCart } from "../context/CartContext";


function SingleProduct() {
  const {cart, setCart} = useCart();
  const addToCart = () =>{
    setCart((prev) => [...prev, product]);
}
const removeFromCart = () =>{
    setCart((prev) => prev.filter((item) => item.productId !== product.productId));
}
  const { id } = useParams();
  const {myProducts} = useProduct();
  const product = myProducts.find((p) => p.productId === id);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div class="bg-white dark:bg-gray-800 py-20">
      <div class="container">
        <div>
            <Link to={"/"} className="font-semibold dark:text-gray-100 flex gap-3 mb-10"><svg width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg> Go for More Shopping</Link>
            <div class="flex flex-col md:flex-row -mx-4">
                <div class="md:flex-1 px-4">
                    <div class=" rounded-lg">
                        <img class="w-full min-h-96 object-cover" src={product.productImage} alt={product.productName}/>
                    </div>
                </div>
                <div class="md:flex-1 px-4 flex flex-col justify-between">
                  <div>
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{product.productName}</h2>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">{product.productItem}</p>
                    <div class="mr-4 mb-8">
                      <span class="font-bold mr-1 text-gray-700 dark:text-gray-300">Price:</span>
                      <span class="text-gray-600 dark:text-gray-300">{product.productPrice}</span>
                    </div>
                    <div>
                      <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                      <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">{product.productDescription}</p>
                    </div>
                  </div>
                  <div class="flex gap-4 mt-5">
                    <div class="w-1/2">
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
                    </div>
                    <div class="w-1/2">
                        <button className="block w-full rounded bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105">Add to Wishlist</button>
                    </div>
                  </div>
                </div>
            </div> 
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
