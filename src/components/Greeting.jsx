export const Greeting = () => {
  return (
    <div className="container align-items-center">
      <div className="col-10" style={{ fontSize: "2rem" }}>
        <h4>📰 Welcome to the Guardian NewsSnap Hub! </h4>
        <h4>📅 Today is {new Date().toDateString()} </h4>
        <h4>🌍 Here are today's most trending news stories. </h4>
      </div>
    </div>
  );
};
