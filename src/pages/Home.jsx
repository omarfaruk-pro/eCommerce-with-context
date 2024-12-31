
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { useDarkMode } from '../context/DarkMode';
import { useProduct } from '../context/ProductContext';

export default function Home() {
  const {darkMode} = useDarkMode();
  const {cart, setCart} = useCart();
  const {myProducts} = useProduct();
   
  return (
    <>
        <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          
            <div className='container'>
                <div className='grid grid-cols-3 gap-6'>
                    {
                        myProducts.map((product) => (
                            <ProductCard key={product.productId}  product={product} setCart={setCart} cart={cart}/>
                        ))
                    }
                </div>
            </div>
        </section>
    </>
  )
}
