import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import { useDarkMode } from "../context/DarkMode";

export default function Header() {
  const {darkMode ,darkModeActive} = useDarkMode();
  const{cart} = useCart();
  return (
    <>
    <button onClick={darkModeActive} className='bg-gray-300 dark:bg-gray-950  py-2 px-4 fixed left-0 top-1/2 z-10'>
      {
        darkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="white" viewBox="0 0 384 512"><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/></svg>
        ):(
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 384 512"><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/></svg>
        )
      }
    </button>
      <header className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link to={"/"} className="block text-teal-600">
                Faruk
              </Link>
            </div>
      
            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link to={"/"} className="text-gray-500 font-bold text-xl transition hover:text-gray-500/75 dark:text-white dark:hover:text-gray-300"> Home </Link>
                  </li>
                </ul>
              </nav>
              <Link to="/cart">
                <div className="relative">
                  <img className='w-10 ' src="https://cdn-icons-png.flaticon.com/512/3225/3225209.png" alt="" />
                  <span className='absolute text-xs -top-2 -right-4 inline-flex justify-center items-center h-6 w-6 rounded-full bg-gray-300 font-semibold'>{cart.length && cart.length}</span>
                  </div>
              </Link>
          </div>
          </div>
        </div>
      </header>
    </>
  )
}
