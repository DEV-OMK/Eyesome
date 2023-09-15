import { Link } from "react-router-dom";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import "./index.css";

const TrendingProductCard = (props) => {
  const { id, name, image, price, category } = props.product;
  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
      <Link to={`product/${id}`} className="link-item">
        <div className="trending-product-card">
          <section className="trending-product-details">
            <h3 className="trending-product-title">{name}</h3>
            <div className="trending-product-info">
              <p>
                ₹{price} <TbSquareRoundedPlusFilled />
              </p>
              <span>{category}</span>
            </div>
          </section>
          <section className="trending-product-image-container">
            <img
              src={image}
              alt="trendingProduct"
              className="trending-product-image"
            />
          </section>
        </div>
      </Link>
    </div>
  );
};

export default TrendingProductCard;
