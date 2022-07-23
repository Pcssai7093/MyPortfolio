import { GlobalStyle1 } from "./Style";

function Work() {
    return ( 
    <div className="cont">
        <GlobalStyle1/>
        <div className="work-wrap">
            <div className="work-card">
                <div className="title">Technical Content Writer at GFG</div>
                <div className="time-span">2022-2022</div>
                {/* <div className="work"><a href="#">Explore My Work</a></div> */}
            </div>
        </div>  

        <div className="work-wrap">
            <div className="work-card">
                <div className="title">Machine Learning Intern at Verzeo</div>
                <div className="time-span">2022-2022</div>
                {/* <div className="work"><a href="#">Explore My Work</a></div> */}
            </div>
        </div>  

         
    </div> );
}

export default Work;