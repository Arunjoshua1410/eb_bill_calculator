import React from "react";
import {Link} from "react-router-dom";

export default function Header(){
    return <>
       <div className="header mb-3 sticky-top bg-info ">
           <div className="header__left py-1 px-1 ">
               <Link className="header__link title-text col-12 col-xl-7 col-md-6 ms-6" to="/" style={{marginLeft:"50px"}}>
                  <img src="assets/logo.png" alt="logo" width={"50px"}/>
               </Link>
              
               <div className="header__links d-flex justify-content-between text-align-center transition-200 col-12 col-md-6 col-xl-5 head-over">
              
                <Link className="header__link title-text text-black  text-decoration-none text-info" to={"/"}>Home</Link>
                <Link className="header__link title-text text-black  text-decoration-none text-info" to={"calculator"}>Calculator</Link>
                <Link className="header__link title-text text-black  text-decoration-none text-info" to={"table"}>Table</Link>
               
           </div>
           </div>
           
           <div className="header__right">

           </div>
       </div>
       
    </>
}