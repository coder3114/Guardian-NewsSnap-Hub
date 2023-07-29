import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const NewsSummary = ({ news }) => {
  const { newsTitle } = useParams();

  let index = news.findIndex((newsPiece) => newsPiece.id.includes(newsTitle));

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="container align-items-center">
      <img className="col-10" src={news[index]?.fields.thumbnail} />
      <Link
        className="col-10"
        style={{ textDecorationLine: "none", color: "black" }}
        to={news[index]?.webUrl}>
        <h1
          className="col-12"
          style={{ fontSize: "1.8rem" }}
          onClick={scrollToTop}>
          {news[index]?.webTitle}
        </h1>
      </Link>
      <p className="col-10" style={{ fontSize: "1.1rem" }}>
        {news[index]?.fields.bodyText}
      </p>
    </div>
  );
};

NewsSummary.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
};
