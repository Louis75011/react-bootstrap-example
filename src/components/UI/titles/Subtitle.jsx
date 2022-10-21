const Subitle = (props) => {
  return (
    <h3
      className={
        "border border-secondary text-decoration-underline w-40 px-3 py-1 mx-1 mt-5 mb-3 bg-light rounded text-start text-dark"
      }
      style={{ fontSize: "20px" }}
    >
      {props.text}
    </h3>
  );
};

export default Subitle;
