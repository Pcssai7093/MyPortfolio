import style from "./Loader.module.css";
import { RotatingSquare } from "react-loader-spinner";
function Loader() {
  return (
    <div className={style.cont}>
      <div className="load">
        <RotatingSquare color="rgb(54, 51, 51)" />
      </div>
      <div>Powered By React</div>
    </div>
  );
}

export default Loader;
