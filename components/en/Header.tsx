import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import LoginModal from "./LoginModal";
import { FaGlobe } from "react-icons/fa6";
import Home from "@/app/de/page";
import { defaultUrl, languagePath } from "@/components/en/const";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [searchBox, setSearchBox] = useState(false);
  const [cart, setCart] = useState(false);

  const cartItems = useAppSelector((state) => state.cart);
  const totalProducts = cartItems.products.reduce(
    (acc, product) => acc + product.quantity!,
    0
  );

  useEffect(() => {
    document.addEventListener("scroll", function () {
      if (window.scrollY > 600) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (window.scrollY > 50) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
        0;
      }
    });
  }, [scrolled]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  
  return (
    <>
      <header
        className={`header-section header-menu ${
          headerFixed && "animated fadeInDown header-fixed"
        }`}
      >
        <nav className="navbar w-100 flex-nowrappx-2 py-2 navbar-expand-xl">
          <Link href="/" className="navbar-brand ms-4 ms-xxl-15 d-flex align-items-left gap-2">
          <Image src="/images/fav.png" style={{ maxWidth: '23%', maxHeight: '23%' }} alt="logo" />
          </Link>

          <div className="collapse navbar-collapse d-flex gap-10 w-100 justify-content-end px-8 pe-2" id="navbar-content">
            <ul className="navbar-nav d-xl-flex d-none gap-3 py-4 py-lg-0 m-auto pe-20 align-self-center">
              <li>
                <Link href={`${languagePath}`} className="dropdown-nav">
                  Home
                </Link>
              </li>
              <li>
                <Link href={`${languagePath}/about-us`} className="dropdown-nav">
                  About RickedStudios
                </Link>
              </li>
              <li>
                <Link href={`${languagePath}/contact`} className="dropdown-nav">
                  Contact
                </Link>
              </li>
             <li className="dropdown show-dropdown">  
              <FaGlobe />
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="/de">
                    German
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/en">
                    English
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/fr">
                    French
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="right-area position-relative d-flex gap-3 gap-xxl-6 align-items-center">
              <div className={`single-item ${searchBox && "active"}`}>
                <div className="cmn-head">
                  <div
                    className="icon-area d-center position-relative"
                    onClick={() => setSearchBox(!searchBox)}>
                    <i className="material-symbols-outlined mat-icon fs-five">
                      search
                    </i>
                  </div>
                </div>
                <div className="main-area p-5">
                  <h5 className="mb-2">Search</h5>
                  <form action="#">
                    <div className="input-area mt-6 p-4 d-flex align-items-center">
                      <input type="text" placeholder="Enter Your Email" />
                      <div className="btn-area">
                        <button className="box-style btn-box border-re py-1 p-2">
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="single-item">
                <div className="cmn-head">
                  <button
                    type="button"
                    className="icon-area d-center position-relative"
                    data-bs-toggle="modal"
                    data-bs-target="#loginMod">
                    <i className="material-symbols-outlined mat-icon fs-five">
                      person
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- header-section end --> */}

      {/* <!-- Login Registration start --> */}
      <LoginModal />
      {/* <!-- Login Registration end --> */}
      
    </>
  );
};

export default Header;
