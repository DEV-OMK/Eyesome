import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { addCartItem } from "../../store/cartSlice";
import { addWishlistItem, removeWishlistItem } from "../../store/wishlistSlice";
import { useEffect, useState } from "react";
import { BiSolidBookmarkHeart } from "react-icons/bi";
import { BsHandbagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../store/productDetailsSlice";
import Loader from "../Loader";
import ErrorCard from "../ErrorCard";
import { statusCode } from "../../utils/statusCode";

import "./index.css";

const ProductDetailsCard = (props) => {
  const productId = useParams("id");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(productId.id));
  }, [dispatch, productId.id]);

  const { data, status } = useSelector((state) => state.productDetails);
  const {
    id,
    brand,
    category,
    gender,
    description,
    name,
    image,
    newPrice,
    price,
    rating,
    weight,
  } = data;

  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

  const addToCart = () => {
    dispatch(addCartItem({ ...data, qty: 1 }));
    setIsAddedToCart(true);
  };

  const addToWishlist = () => {
    dispatch(addWishlistItem(data));
    setIsAddedToWishlist(true);
  };

  const removeFromWishlist = () => {
    dispatch(removeWishlistItem(id));
    setIsAddedToWishlist(false);
  };

  const renderProductDetailsCardSuccessView = () => (
    <div className="product-details-card">
      <div className="product-details-card-image-container">
        <img
          className="product-details-card-image"
          src={image}
          alt="productImage"
        />
      </div>
      <div className="p-4 product-details-card-description">
        <h1 className="product-details-card-title">{name}</h1>
        <p className="product-details-card-info">{description}</p>
        <p className="product-details-card-rating">
          <AiFillStar className="color-yellow" />
          <AiFillStar className="color-yellow" />
          <AiFillStar className="color-yellow" />
          <AiFillStar className="color-yellow" />
          <AiFillStar className="color-yellow" />
          <span> ({rating}) Rating</span>
        </p>
        <p className="about-product-text">About Product</p>
        <div className="about-product-details">
          <li>
            <span>Brand: </span>
            {brand}
          </li>
          <li>
            <span>Gender: </span>
            {gender}
          </li>
          <li>
            <span>Category: </span>
            {category}
          </li>
          <li>
            <span>Weight: </span>
            {weight}
          </li>
        </div>
        <p className="product-details-card-price">
          <span>Price: </span> ₹{newPrice} <del>₹{price}</del>
        </p>
        <div className="product-details-card-buttons">
          {!isAddedToCart && (
            <button
              type="button"
              className="product-details-card-cart-button"
              onClick={addToCart}
            >
              <span>
                <BsHandbagFill />
              </span>{" "}
              Add to Cart
            </button>
          )}
          {isAddedToCart && (
            <Link
              to="/cart"
              className="link-item product-details-card-cart-button"
            >
              <span>
                <BsHandbagFill />
              </span>
              Go to Cart
            </Link>
          )}
          {!isAddedToWishlist && (
            <button
              type="button"
              className="product-details-card-cart-button"
              onClick={addToWishlist}
            >
              <span>
                <BiSolidBookmarkHeart />
              </span>{" "}
              Wishlist Item
            </button>
          )}
          {isAddedToWishlist && (
            <button
              type="button"
              className="product-details-card-cart-button"
              onClick={removeFromWishlist}
            >
              <span>
                <BiSolidBookmarkHeart />
              </span>
              Remove from Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const renderProductDetailsCardView = () => {
    switch (status) {
      case statusCode.pending:
        return <Loader />;
      case statusCode.success:
        return renderProductDetailsCardSuccessView();
      case statusCode.failure:
        return <ErrorCard />;
      default:
        return null;
    }
  };

  return renderProductDetailsCardView();
};

export default ProductDetailsCard;
