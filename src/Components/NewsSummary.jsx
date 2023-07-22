import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function NewsSummary({ news }) {
  const { newsTitle } = useParams();
  let index = news.findIndex((newsPiece) => newsPiece.id.includes(newsTitle));

  return (
    <>
      <img src={news[index]?.fields.thumbnail} />
      <Link to={news[index]?.webUrl}>
        <h1>{news[index]?.webTitle}</h1>
      </Link>
      <p>{news[index]?.fields.bodyText}</p>
    </>
  );
}

NewsSummary.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
};
