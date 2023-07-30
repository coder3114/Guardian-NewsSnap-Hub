import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Headline } from "./Headline";
import { Picture } from "./Picture";
import { Summary } from "./Summary";

export const NewsSummary = ({ news }) => {
  const { newsTitle } = useParams();
  let index = news.findIndex((newsPiece) => newsPiece.id.includes(newsTitle));
  let newsPiece = news[index];

  let headlineProps = {
    newsPiece: newsPiece,
    path: newsPiece.webUrl,
  };
  let pictureProps = {
    thumbnailUrl: newsPiece.fields.thumbnail,
    altText: newsPiece.fields.headline,
  };

  return (
    <div className="container align-items-center">
      <Picture {...pictureProps} />;
      <Headline {...headlineProps} />
      <Summary newsBody={newsPiece.fields.bodyText} />
    </div>
  );
};

NewsSummary.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
};
