import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const NewsList = ({ news }) => {
  return news.map((news) => {
    const idParts = news?.id.split("/");
    const newsTitle = idParts[idParts.length - 1];

    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    return (
      <div className="container align-items-center" key={news.id}>
        <img
          className="col-10"
          src={news.fields.thumbnail}
          alt={news.fields.headline}
        />
        <Link
          className="col-10"
          style={{ textDecorationLine: "none", color: "black" }}
          to={"/news-summary/" + newsTitle}>
          <h1
            className="col-12"
            style={{ fontSize: "1.5rem" }}
            onClick={scrollToTop}>
            {news.webTitle}
          </h1>
        </Link>
      </div>
    );
  });
};

NewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
};
