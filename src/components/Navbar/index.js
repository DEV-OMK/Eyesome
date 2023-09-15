import { Link } from "react-router-dom";
import { BiSolidUser, BiSolidBookmarkHeart } from "react-icons/bi";
import { FaRegSnowflake } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { BsHandbagFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { updateSearchInput } from "../../store/filtersSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  const wishlistProducts = useSelector((state) => state.wishlist);
  const filters = useSelector((state) => state.filters);

  return (
    <header className="navbar-container">
      <nav>
        <div>
          <section>
            <Link to="/profile" className="link-item mr">
              <BiSolidUser className="navbar-user-profile" />
            </Link>
            <Link to="/" className="link-item">
              <h1 className="navbar-logo">eyesome</h1>
            </Link>
          </section>
          <section className="searchbar-container searchbar-lg">
            <input
              type="search"
              placeholder="Search Glasses"
              className="navbar-search-input"
              value={filters.searchInput}
              onChange={(event) => {
                dispatch(updateSearchInput(event.target.value));
              }}
            />
            <button type="button" className="navbar-search-icon">
              <FiSearch />
            </button>
          </section>
          <section>
            <Link to="/products" className="link-item mr">
              <button
                type="button"
                className="navbar-button navbar-products-button"
              >
                <FaRegSnowflake className="navbar-products-icon" />
                <span>Explore</span>
              </button>
            </Link>

            <Link to="/wishlist" className="link-item mr navbar-button-display">
              <button
                type="button"
                className="navbar-button navbar-bookmark-button"
              >
                <BiSolidBookmarkHeart className="navbar-bookmark-icon" />
                {wishlistProducts.length !== 0 && (
                  <span className="navbar-cart-count">
                    {wishlistProducts.length}
                  </span>
                )}
              </button>
            </Link>
            <Link to="/cart" className="link-item mr navbar-button-display">
              <button
                type="button"
                className="navbar-button navbar-cart-button"
              >
                <BsHandbagFill className="navbar-cart-icon" />
                {cartProducts.length !== 0 && (
                  <span className="navbar-cart-count">
                    {cartProducts.length}
                  </span>
                )}
              </button>
            </Link>
            <div className="navbar-hamburger">
              <button
                type="button"
                className="navbar-button navbar-hamburger-button"
                onClick={() => {
                  document
                    .querySelector(".navbar-hamburger-menu-container")
                    .classList.toggle("display-hamburger");
                }}
              >
                <HiBars3 className="navbar-hamburger-icon" />
              </button>
              <div className="navbar-hamburger-menu-container">
                <Link to="/wishlist" className="link-item">
                  <button
                    type="button"
                    className="navbar-hamburger-menu"
                    onClick={() => {
                      document
                        .querySelector(".navbar-hamburger-menu-container")
                        .classList.toggle("display-hamburger");
                    }}
                  >
                    <BiSolidBookmarkHeart className="navbar-bookmark-icon mr" />
                    Wishlist
                  </button>
                </Link>
                <Link to="/cart" className="link-item">
                  <button
                    type="button"
                    className="navbar-hamburger-menu"
                    onClick={() => {
                      document
                        .querySelector(".navbar-hamburger-menu-container")
                        .classList.toggle("display-hamburger");
                    }}
                  >
                    <BsHandbagFill className="navbar-cart-icon mr" />
                    Bag
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>

        <div className="searchbar-container searchbar-sm">
          <input
            type="search"
            placeholder="Search Glasses"
            className="navbar-search-input"
            value={filters.searchInput}
            onChange={(event) => {
              dispatch(updateSearchInput(event.target.value));
            }}
          />
          <button type="button" className="navbar-search-icon">
            <FiSearch />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
