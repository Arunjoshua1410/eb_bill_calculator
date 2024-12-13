import React from "react";
export default function Tips(){
    return <>
       <div className="">
            <div className="header bg-secondary p-1 tips-header d-flex justify-content-center">
                <h4 ><b>Tips to Reduce Your Electricity Bill</b></h4>
            </div>
            <div className="header-body ">
                 <div className="row mt-5">
                    <div className="col-12 col-md-12 col-xl-5 d-flex justify-content-end">
                         <img src="assets/home-img-5.jpg" alt="" width={"200px"}/>
                    </div>
                    <div className="col-12 col-md-12 col-xl-7 ">
                         <p><b>Switch to LED Bulbs:</b>LED bulbs are energy-efficient and last longer than traditional incandescent bulbs. 
                         They use significantly less electricity for the same amount of light.</p>
                    </div>
                 </div>

                 <div className="row mt-5">
                    <div className="col-12 col-md-12 col-xl-5 d-flex justify-content-end">
                         <img src="assets/home-img-6.jpg" alt="" width={"200px"}/>
                    </div>
                    <div className="col-12 col-md-12 col-xl-7">
                         <p><b>Unplug Devices:</b> Even when turned off, many devices consume a small amount of electricity phantom or standby power. 
                         Unplug chargers, electronics, and appliances when not in use, or use power strips to easily cut off power to multiple devices.</p>
                    </div>
                 </div>
                 <div className="row mt-5">
                    <div className="col-12 col-md-12 col-xl-5 d-flex justify-content-end">
                         <img src="assets/home-img-7.jpg" alt="" width={"200px"}/>
                    </div>
                    <div className="col-12 col-md-12 col-xl-7">
                         <p><b>Seal Leaks:</b>Insulate your home properly to prevent drafts and leaks, which can lead to energy loss. 
                         This will help your heating and cooling systems work more efficiently.</p>
                    </div>
                 </div>
                 <div className="row mt-5">
                    <div className="col-12 col-md-12 col-xl-5 d-flex justify-content-end">
                         <img src="assets/home-img-8.jpg" alt="" width={"200px"}/>
                    </div>
                    <div className="col-12 col-md-12 col-xl-7">
                         <p><b>Cook Efficiently:</b>Use lids when cooking to retain heat, cook with appropriate pot sizes, 
                         and consider using a microwave or toaster oven for smaller meals as they use less energy than a full-sized oven.</p>
                    </div>
                 </div>
                 <div className="row mt-5 mb-5">
                    <div className="col-12 col-md-12 col-xl-5 d-flex justify-content-end">
                         <img src="assets/home-img-9.jpg" alt="" width={"200px"}/>
                    </div>
                    <div className="col-12 col-md-12 col-xl-7">
                         <p><b>Maximize Natural Light:</b>During the day, open curtains and blinds to let in natural light. This reduces the need for artificial lighting and can also provide some warmth during colder months.</p>
                    </div>
                 </div>
                 <div className="row bonus-bg ">
                        <div className="col-12 col-md-12 col-xl-8 bonus ">
                             <h4 ><b>Bonus Tips</b></h4>
                             <ul>
                                <li>Check the reading meter weekly once and use this Calculator for calculating a weekly payable amount 
                                    it may be very useful to you know your eb bill without consulting others</li>
                                <li>This Chart is clearly describe the units and its rate this helps you to reduce your eb bill. This chart aware you the usage of electricity. 
                                    With the help of this chart you itself know the amount according to the units you consumed</li>
                             </ul>
                            
                        </div>
                        <div className="col-12 col-md-12 col-xl-4 d-flex justify-content-center">
                              <img src="assets/home-img-1.png" alt="" width={"300px"} height={"300px"}/>
                         </div>
                  </div>
                  <div className="row saving">
                       <div className="col-12 col-md-12 col-xl-12 d-flex justify-content-center">
                             <b><h2>Start Saving Today</h2></b>
                       </div>
                       <div className="col-12   col-md-12 col-xl-12  d-flex justify-content-center">
                       <p>Implement these strategies and make use of our tools to see a noticeable difference in your electricity bill. 
                                Every small change adds up to significant savings over time. 
                                Let's work together to make your home more energy-efficient and your bills more manageable.</p>
                       </div>
                  </div>
            </div>
       </div>
    </>
}