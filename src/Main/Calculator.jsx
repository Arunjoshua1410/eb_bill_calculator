import React, { useState } from "react";
export default function Calculator(){
     const [pre,setPre]=useState(null);
     const [cur,setCur]=useState(null);
     const [bill,setBill]=useState(null);
    const handleClear=()=>{
        setPre(null);
        setCur(null);
        setBill(null);
    };
    const handleCalculate=()=>{
        if(pre===null || cur===null){
            return alert("please enter both previous reading and current reading!");
        }
        if(pre>cur){
            return alert("Previous unit must be smaller than current unit!")
        }
        let units=cur-pre;
        if(units<=100){
             setBill("Bill not generated for consumption upto 100 units")
             return;
        }
        let cost=0;
        if(units<=500){
            if(units>400) cost+=(units-400)*6;
            if(units>200) cost+=(Math.min(units,400)-200)*4.5;
            if(units>100) cost+=(Math.min(units,200))*2.25;
        }else{
            if(units>1000) cost+=(units-1000)*11;
            if(units>800) cost+=(Math.min(units,1000)-800)*10;
            if(units>600) cost +=(Math.min(units,800)-600)*9;
            if(units>500) cost+=(Math.min(units,600)-500)*8;
            cost+=(Math.min(units,500)-400)*6;
            cost+=(Math.min(units,400)-100)*4.5;
        }
        setBill(cost);
    }
    return <>
       <div className="mt-6 caclulator-head">
           <div className="row">
                 <div className="col-12 col-md-12 col-xl-12 d-flex justify-content-center">
                     <h2><b>Electricity Bill Calculator</b></h2>
                 </div>
                 <div className="col-12 col-md-12 col-xl-12 d-flex justify-content-center">
                     <p>Use our interactive electricity bill calculator to get an accurate estimate of your monthly electricity costs. 
                        Simply input your usage details, and our calculator will do the rest. 
                        This tool helps you understand where your money is going and how you can start saving.</p>
                 </div>
                 <div className=" d-flex justify-content-center caculator__inner">
                     <div className="calculator__inner__box">
                                <h2>EB Calculator</h2>
                                <input type="number" 
                                className="cal-input" 
                                value={pre!==null?pre:""}
                                onChange={(e)=>setPre(Number(e.target.value))}
                                placeholder="Previous Reading"/>
                                
                                <input type="number" 
                                value={cur!==null?cur:""}
                                onChange={(e)=>setCur(Number(e.target.value))}
                                className="cal-input mt-2"
                                placeholder="Current Reading"/>
                                <button type="button" className="cal-sub-but mt-2 mb-2" onClick={handleCalculate}>Calculate</button>
                                <button type="button" className="cal-clear-but mb-2" onClick={handleClear}>Clear</button>
                            <div>
                                {bill !==null && (
                                    <p>
                                        Total Electricity Bill:{""}
                                        {typeof bill ==="string" ? bill :`${bill.toFixed(2)}`}
                                    </p>
                                )}
                            </div>
                     </div>
                    
                 </div>
                 <div className="row mt-6 guide">
                         <div className="col-12 col-md-12 col-xl-6 d-flex justify-content-center">
                              <h5><b>Guidelines</b></h5>
                         </div>
                         <div className="col-12 col-md-12 col-xl-12 d-flex justify-content-center">
                             <ul>
                                <li>Put last month's reading as the previous reading.</li>
                                <li>Check the current reading on your meter and put it in the current reading.</li>
                                <li>This will only calculate for home use.</li>
                             </ul>
                         </div>
                     </div>
           </div>
       </div>
    </>
}