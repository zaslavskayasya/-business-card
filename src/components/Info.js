import React from "react";
import Photo from '../images/2222.jpg';
import Mail from '../images/Mail.svg';
import Linkedin from '../images/linkedin.svg';


export default function Info(){
    return(
        <div className="InfoWrap">
           <div className="PhotoWrap">
                <img src={Photo}></img>
           </div>
           <h1 className="Name"> Anastasiia Zaslavska</h1>
           <h4 className="Position">Frontend Developer</h4>
           <div className="Buttons-wrap">
                <a className="button button-white " href="mailto:someone@yoursite.com">
                    <img className=" button-image" src={Mail}></img>
                    <span className="button-name">
                        Email
                    </span>
                </a>  
                <a className="button button-blue " href="https://www.linkedin.com/in/anastasiia-z-225b8514a/">
                    <img className=" button-image" src={Linkedin}></img>
                    <span className="button-name">
                       Linkedin
                    </span>
                </a>  

           </div>
        </div>    
    )
}