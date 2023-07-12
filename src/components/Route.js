import useNavigation from "../hooks/useNavigation";



function Route({ path, children }) {
  const { currentPath } = useNavigation();
  if (currentPath === path) {
    return children;
  } else {
    return null;
  }
}

export default Route