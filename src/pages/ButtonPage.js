import { GoBell, GoDatabase, GoZoomIn, GoArrowBoth, GoArrowUp } from "react-icons/go";
import Button from "../components/Button";


function ButtonPage() {
  const handelClick = () => {
    console.log('click');
  }
  
  return (
    <div>
      <div>
        <Button primary outline onClick={handelClick}> <GoBell />1</Button>
      </div>
      <div>
        <Button secondary outline><GoDatabase />2</Button>
      </div>
      <div>
        <Button success outline><GoArrowBoth />3</Button>
      </div>
      <div>
        <Button danger><GoArrowUp />4</Button>
      </div>
      <div>
        <Button warning><GoZoomIn />5</Button>
      </div>
    </div>
  );
}

export default ButtonPage