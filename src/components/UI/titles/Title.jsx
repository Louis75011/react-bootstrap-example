import classes from "../../../design/Components.module.css";

const Title = (props) => {
  return (
    <h2
      className={`${classes.policeTitle} border border-secondary p-4bis m-4bis bg-dark rounded text-center text-white`}
    >
      {props.text}
    </h2>
  );
};

export default Title;
