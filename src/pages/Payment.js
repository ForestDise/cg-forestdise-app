import React from "react";
import Header from "../components/main/payment/Header";
import {dividerClasses} from "@mui/material";
import Footer from "../components/main/payment/Footer";
import Address from "../components/main/payment/Address";
 function Payment(){
     return(
         <div className="font-bodyFont bg-gray-100">
             <div><Header/></div>
             <div><Address/></div>
             <div><Footer/></div>
         </div>

     );
 }

 export default Payment;