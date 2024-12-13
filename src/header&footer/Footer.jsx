import React from "react"
export default function Footer(){
    return <>
       <div className="footer ">
       <div className="row w-100 ">
                <div className="col-sm-12 col-md-12 col-xl-6 col-xxl-6 d-flex align-items-center justify-content-center flex-column">
                            <img src="assets/logo.png" alt="" width={"100px"}/>
                            <b className="sub-b-text">Save Power</b>
                    </div>
                    <div className="col-sm-12  col-md-12 col-xl-6 col-xxl-6 ">
                            <h5>Contact Us</h5>
                            <div className="d-flex justify-content-around mb-4">
                                <a target="blank"  href="https://github.com/Arunjoshua1410"> <i class="fa-brands fa-github text-black"></i></a>
                                <a target="blank" href="https://api.whatsapp.com/send/?phone=8838574431&text&type=phone_number&app_absent=0"><i class="fa-brands fa-whatsapp text-black"></i></a>
                                <a target="blank" href="https://mail.google.com/mail/u/1/#inbox?compose=new"><i class="fa-regular fa-envelope text-black"></i></a>
                                <a target="blank" href="https://www.linkedin.com/in/arun-pandiyan-927081238/"><i class="fa-brands fa-linkedin text-black"></i></a>
                            </div>
                             <b className="d-flex justify-content-center">If you'r facing any bug or issue while using this site feel free to contact </b>
                    </div>
                   
                     
                   
                  
               </div>   
               
       </div>     
       <b className="copy-right sub-b-text d-flex justify-content-center">
                     Copyright &copy; 2024. All rights reserved.
       </b>
    </>
}