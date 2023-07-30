import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Headline = ({ newsPiece, path }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Link
        className="col-10"
        style={{ textDecorationLine: "none", color: "black" }}
        to={path}>
        <h1
          className="col-12"
          style={{ fontSize: "1.8rem" }}
          onClick={scrollToTop}>
          {newsPiece?.webTitle}
        </h1>
      </Link>
    </>
  );
};

Headline.propTypes = {
  newsPiece: PropTypes.object,
  path: PropTypes.string,
};
