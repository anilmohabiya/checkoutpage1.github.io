import React from 'react';

import {  Link } from 'react-router-dom/cjs/react-router-dom.min';
const Checkoutp1 =()=>{
    return(
        <>
           <div className="container-fluid">
               <div className="row">
                   <div className="col-md-10 col-10 mx-auto">
                   <nav class="nav nav-pills flex-column flex-sm-row mt-3 text-center">
               
               <Link class="flex-sm-fill text-sm-center nav-link" to="#">Brand</Link>
                            
               <Link class="flex-sm-fill text-sm-center nav-link" to="#">My following</Link>
               <Link class="flex-sm-fill text-sm-center nav-link" to="#">New Arrival</Link>
               <Link class="flex-sm-fill text-sm-center nav-link" to="#">Offers & sales</Link>
               <Link class="flex-sm-fill text-sm-center nav-link" to="#">Trending Products</Link>
               
               <Link class="flex-sm-fill text-sm-center nav-link" to="#">Just Sold</Link>
             </nav>
             </div>
             </div>
             <div className="card shadow"> 
               
                       <p className=" p-1 gx-3 font-weight-bold mt-5 px-5">CHEKOUT</p>
                       <p className=" font-weight-bold p-5 ">Buyer info</p>
                       
                      <div className="row">
                      <div className=" col-md-6 col-12 col-lg-6 col-md-6 col-sm-6 mx-auto p-5">
                       <p>FIRST NAME <span className="p-3">LAST NAME</span></p>
                      
                       
                          <p>richard <span className="p-5">Khan</span> </p>
                          <div class="form-group col-4">
                          <hr/>
                         </div>
                          <p>EMAIL ADDRESS  </p>
                          <p>anilmohabiya1053@gmail.com</p>
                          <div class="form-group col-5">
                          <hr/>
                         </div>
                          <p className="">PHONE NUMBER</p>
                        <p className="  text-decoration-none">8779838450</p>
                        <div class="form-group col-4">
                          <hr/>
                         </div>
                          <p>ADDRESS</p>
                         
                          <p>Malad West Mumbai</p>
                          <div class="form-group col-8">
                          <hr/>
                         </div>
                          <p>COUNTRY <span className="p-3">POSTCODEZIP</span></p>
                          <p>England <i class="fa fa-angle-down" aria-hidden="true"></i>
                         
                          <span className="p-3">121155</span> </p>
                          <div class="form-group col-4">
                          <hr/>
                         </div>

                       </div>
                       
                       <div className=" col-md-12 col-12 col-lg-6  col-sm-12 mx-auto p-5 ">
                       <div className="container">
                         
                    <ul className="cont">
                   <li>
                   <span class="border w-25 p-3 mt-4 gx-3"> <i class="fas fa-arrow-down fa-1x"></i>
                   <i class="fas fa-arrow-up fa-1x"></i>wallet</span>
                  </li>
                  <li>
                        
                   <span class="border w-25 p-3 mt-4"> 
                   <i class="fa fa-credit-card fa-1x mt-5" aria-hidden="true"></i>cash on delivery</span>
                  
                  </li>

                  <li>
                  <span class="border w-25 p-3"> 
                   <i class="fa fa-credit-card fa-1x mt-5 mt-4" aria-hidden="true"></i>credit card<br/></span>
                   
                  </li>
                  </ul>

                  <hr class="new3 "/>
                 
                   </div>
                   <span class="border w-25 p-3 ml-5 mt-1"> 
                   <i class="fa fa-credit-card fa-1x mt-5 mt-2" aria-hidden="true"></i>Dedit card<br/></span>
                   
 
                        
<button type="button" class="btn btn-success btn-md btn-block mt-5">Place Order</button>   
                      </div>
                   </div>

                  

               </div>
               </div>
           
             
             
             
            
          
         
        </>
    )
}
export default Checkoutp1;