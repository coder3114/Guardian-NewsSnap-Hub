import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const NewsList = ({ news }) => {
  return news.map((news) => {
    const idParts = news?.id.split("/");
    const newsTitle = idParts[idParts.length - 1];

    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    return (
      <div key={news.id}>
        <img src={news.fields.thumbnail} alt={news.fields.headline} />
        <Link to={"/news-summary/" + newsTitle}>
          <h1 onClick={scrollToTop}> {news.webTitle} </h1>
        </Link>
      </div>
    );
  });
};

NewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
};
