import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

function Link({ children, to, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();
  const classes = classNames("text-blue-500", className, currentPath === to && activeClassName);
  function handelClick (event) {
    event.preventDefault()
    navigate(to)
  }

  return (
    <a className={classes} href={to} onClick={handelClick}>
      {children}
    </a>
  );
}

export default Link