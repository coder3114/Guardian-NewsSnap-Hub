import PropTypes from "prop-types";

export const Summary = ({ newsBody }) => {
  return (
    <>
      <p className="col-10" style={{ fontSize: "1.1rem" }}>
        {newsBody}
      </p>
    </>
  );
};

Summary.propTypes = {
  newsBody: PropTypes.string,
};
