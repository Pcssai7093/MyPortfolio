import {GlobalStyle} from "./Style"
function Contact() {
    return ( 
        <div>
            <GlobalStyle/>
            <div className="cont">
                <a href = "mailto: abc@example.com"> <i className="fa fa-envelope" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/potti-chandra-sekhar-sai-716987221/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="https://github.com/Pcssai7093"><i className="fa fa-github" aria-hidden="true"></i></a>
            </div>
        </div>
    );
}

export default Contact;