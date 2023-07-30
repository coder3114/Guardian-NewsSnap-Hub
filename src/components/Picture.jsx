import PropTypes from "prop-types";

export const Picture = ({ thumbnailUrl, altText }) => {
  return (
    <>
      <img className="col-10" src={thumbnailUrl} alt={altText} />
    </>
  );
};

Picture.propTypes = {
  thumbnailUrl: PropTypes.string,
  altText: PropTypes.string,
};
