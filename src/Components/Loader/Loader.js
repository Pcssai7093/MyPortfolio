import {GlobalStyle} from "./Style"
import {Audio,Circles,BallTriangle,Bars,Hearts,Grid,Oval,Puff,Rings,RotatingSquare,TailSpin,ThreeDots,Triangle,ThreeCircles,CirclesWithBar,MutatingDots,RevolvingDot,LineWave,Plane,Watch} from "react-loader-spinner"
function Loader() {
    return ( 
    <div className="cont">
        <GlobalStyle/>
        <div className="load">
          {/* <Audio color="rgb(79,188,217)"/> */}
          {/* <Circles color="rgb(79,188,217)"/> */}
         {/* <BallTriangle color="rgb(79,188,217)"/> */}
         {/* <Bars color="rgb(79,188,217)"/> */}
         {/* <Hearts color="rgb(79,188,217)"/> */}
         {/* <Grid color="rgb(79,188,217)"/> */}
         {/* <Oval color="rgb(79,188,217)"/> */}
         {/* <Puff color="rgb(79,188,217)"/> */}
         {/* <Rings color="rgb(79,188,217)"/> */}
         
         <RotatingSquare color="rgb(79,188,217)"/>
         {/* <TailSpin color="rgb(79,188,217)"/> */}
         {/* <ThreeDots color="rgb(79,188,217)"/> */}
         {/* <CirclesWithBar color="rgb(79,188,217)"/> */}
         {/* <MutatingDots color="rgb(79,188,217)"/> */}
         {/* <RevolvingDot color="rgb(79,188,217)"/> */}
         {/* <LineWave color="rgb(79,188,217)"/> */}
         {/* <Plane color="rgb(79,188,217)"/> */}
         {/* <Watch color="rgb(79,188,217)"/>    */}



        </div>
        <div>
        Powered By React
        </div>
    </div> );
}

export default Loader;