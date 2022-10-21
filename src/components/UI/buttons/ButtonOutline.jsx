const ButtonOutline = (props) => {
  return (
    <button
      className="btn btn-outline-secondary border m-1 mb-3"
      onClick={props.click}
    >
      {props.children}
    </button>
  );
};

export default ButtonOutline;
