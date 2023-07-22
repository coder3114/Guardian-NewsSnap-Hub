import PropTypes from "prop-types";

export const NewsList = ({ news }) => {
  return news?.map((news, key) => {
    return (
      <div key={key}>
        <img src={news.fields.thumbnail} />
        <h1> {news.webTitle} </h1>
      </div>
    );
  });
};

NewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
};
