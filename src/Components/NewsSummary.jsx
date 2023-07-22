import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export function NewsSummary({ news }) {
  const { id } = useParams();

  return (
    <>
      <img src={news[id].fields.thumbnail} />
      <h1>{news[id].webTitle}</h1>
      <p>{news[id].fields.bodyText}</p>
    </>
  );
}

NewsSummary.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
};
