import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function NewsSummary({ news }) {
  const { id } = useParams();

  return (
    <>
      <img src={news[id].fields.thumbnail} />
      <Link to={news[id].webUrl}>
        <h1>{news[id].webTitle}</h1>
      </Link>
      <p>{news[id].fields.bodyText}</p>
    </>
  );
}

NewsSummary.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
};
