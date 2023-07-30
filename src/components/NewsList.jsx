import PropTypes from "prop-types";
import { Greeting } from "./Greeting";
import { Headline } from "./Headline";
import { Picture } from "./Picture";

export const NewsList = ({ news }) => {
  return (
    <>
      <Greeting />
      {news.map((newsPiece) => {
        const newsTitle = newsPiece.id.split("/")[4];

        let pictureProps = {
          thumbnailUrl: newsPiece.fields.thumbnail,
          altText: newsPiece.fields.headline,
        };
        let headlineProps = {
          newsPiece: newsPiece,
          path: "/news-summary/" + newsTitle,
        };

        return (
          <div className="container align-items-center" key={newsPiece.id}>
            <Picture {...pictureProps} />;
            <Headline {...headlineProps} />
          </div>
        );
      })}
    </>
  );
};

NewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
};
