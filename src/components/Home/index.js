import { Link } from "react-router-dom";
import { BsArrowDownRightCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import TrendingProductCard from "../TrendingProductCard";
import CategoryCard from "../CategoryCard";

import "./index.css";
import { useEffect } from "react";
import { getProducts } from "../../store/productsSlice";
import { categoriesList } from "../../eyesomeData";
import { statusCode } from "../../utils/statusCode";
import Loader from "../Loader";
import ErrorCard from "../ErrorCard";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { data, status } = useSelector((state) => state.products);
  const trendingProductsData = data.filter(
    (product) => product.trending === true
  );

  const renderHomeBanner = () => (
    <section className="home-banner">
      <div>
        <h1 className="home-banner-title">Glasses & Lens</h1>
        <p className="home-banner-caption">
          Buy the best high-quality sunglasses from us.
          <br />
          More than 100 types of assortment.
        </p>
        <Link to="/products" className="link-item mr">
          <button type="button" className="home-banner-button">
            Start Shopping
          </button>
        </Link>
        <a href="#categoriesSection">
          <button
            type="button"
            className="home-banner-button home-banner-button-2"
          >
            <span>Explore More</span> <BsArrowDownRightCircle className="m-1" />
          </button>
        </a>
      </div>
      <div className="home-banner-image-container">
        <img
          className="home-banner-image"
          src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1690882963/Eyesome/bannerImg.712fc34e6a2084115f10_rtidnd.png"
          alt="homeBanner"
        />
      </div>
    </section>
  );

  const renderHomeTrendingView = () => (
    <section className="home-trending-view row">
      <div className="home-trending-title-container col-12 col-sm-6 col-lg-4 col-xl-3">
        <h2 className="home-trending-title">Trending Products</h2>
      </div>
      {trendingProductsData.map((product) => (
        <TrendingProductCard key={product.id} product={product} />
      ))}
    </section>
  );

  const renderCategoriesList = () => (
    <section className="home-categories-view row">
      <div className="home-categories-title-container col-12">
        <h2 className="home-trending-title text-center mb-4">Categories</h2>
      </div>
      {categoriesList.map((category) => (
        <CategoryCard key={category.id} categoryDetails={category} />
      ))}
    </section>
  );

  const renderHomeSuccessView = () => (
    <>
      {renderHomeBanner()}
      {renderHomeTrendingView()}
      {renderCategoriesList()}
    </>
  );

  const renderHomeView = () => {
    switch (status) {
      case statusCode.pending:
        return <Loader />;
      case statusCode.success:
        return renderHomeSuccessView();
      case statusCode.failure:
        return <ErrorCard />;
      default:
        return null;
    }
  };

  return renderHomeView();
};

export default Home;
