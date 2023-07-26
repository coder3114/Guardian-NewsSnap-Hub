import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function NewsSummary({ news }) {
  const { newsTitle } = useParams();

  let index = news.findIndex((newsPiece) => newsPiece.id.includes(newsTitle));

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <img src={news[index]?.fields.thumbnail} />
      <Link to={news[index]?.webUrl}>
        <h1 onClick={scrollToTop}>{news[index]?.webTitle}</h1>
      </Link>
      <p>{news[index]?.fields.bodyText}</p>
    </>
  );
}

NewsSummary.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
};
