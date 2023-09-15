import "./index.css";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  const { displayText, imageUrl } = props.categoryDetails;

  return (
    <div className="col-12 col-md-4 mb-4">
      <Link to="products" className="link-item">
        <div
          className="category-card"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <p>{displayText}</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
