import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const NewsList = ({ news }) => {
  // const navigate = useNavigate();

  // const navigateToNewsDetails = () => {
  //   navigate(`/news-summary/${news?.id}`);
  // };

  return news?.map((news, index) => {
    return (
      <div key={news.id}>
        <img src={news.fields.thumbnail} />
        <Link to={"/news-summary/" + index}>
          <h1> {news.webTitle} </h1>
        </Link>
      </div>
    );
  });
};

NewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
};
