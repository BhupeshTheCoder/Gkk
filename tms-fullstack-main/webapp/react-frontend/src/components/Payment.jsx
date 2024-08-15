import React, { useEffect, useState } from "react";
import $ from 'jquery';
import { toast } from "react-toastify"
import axios from "axios"
import Base_Url from "../service/Base_Url"
import swal from 'sweetalert'
import SessionService from "../service/SessionService";

const Payment = (props) =>{
    const [price] = useState(SessionService.getPrice)
    const [user, setUser] = useState(SessionService.getCurrentUser())
    const [homeMaker, setHomeMaker] = useState(SessionService.getCurrentHomeMaker())

    useEffect(()=>{
        console.log("in payments " + price)
    },[])
    // form handler function

  const paymentStart = () => {
    console.log("in payment start " + user.id + " " + homeMaker.id)

    paymentCustomertoServer(user.id, homeMaker.id)
        console.log("payment started..");
        
        let amount=$("#payment_field").val();
        console.log(amount);
        if(amount==='' || amount==null){
            //alert("amount is required !!");
            swal("Payment failed!", "amount is required!", "error");
            // return;
        }
  }
          // creating function to post data on server
    const paymentCustomertoServer=(userId,homeMakerId)=>{
        let amount=$("#payment_field").val(); 

        axios.post(Base_Url+'/customer/create_order/'+userId+'/'+homeMakerId,{amount: amount}).then((response) => {
           
            console.log('response', response)
            if(response.data.status === "created"){
                //open payment form 
                let options={
                    key:'rzp_test_wUqZzqgwq0QV5o',
                    amount: response.data.amount,
                    currency:'INR',
                    name:'MAA KI RASOI (TMS)',
                    description:'Payment',
                    image:'./mkr-logo.png',
                    order_id: response.data.id,

                    handler: function(response){
                        console.log(response.razorpay_payment_id)
                        console.log(response.razorpay_order_id)
                        console.log(response.razorpay_signature)
                        console.log('payment successful' )
                        
                        //for saving at DB
                        updatePaymentOnServer(
                            response.razorpay_payment_id,
                            response.razorpay_order_id,
                            "paid"
                        );  
                        //                      
                        //alert("payment successful !!")
                        //swal("Good job!", "congrates! Payment successful !!", "success");
                    },
                    "prefill": {
                        "name": "",
                        "email": "",
                        "contact": ""
                    },
                    "notes": {
                        "address": "Maa Ki Rasoi"
                    },
                    "theme": {
                        "color": "#3399cc"
                    },
                }
           
            // debugger;
            var rzp = new window.Razorpay(options);
            
            //if payment failed 
            rzp.on('payment.failed', function (response){
                console.log(response.error.code);
                console.log(response.error.description);
                console.log(response.error.source);
                console.log(response.error.step);
                console.log(response.error.reason);
                console.log(response.error.metadata.order_id);
                console.log(response.error.metadata.payment_id);
                //alert("Opps payment failed") 
                swal("Payment failed!", "something went wrong!", "error");
        });
            rzp.open();

    };
            // if(response.status === 204){
            //     toast.warning("something wrong!!!",{position:"bottom-center"})
            // }
            // else
            //     toast.success( " Working",{position:"bottom-center"})
     },(error) => {
         console.log(error)
         toast.error("something went wrong",{position:"bottom-center"})
     })

     }

    function updatePaymentOnServer(payment_id, order_id ,status){
            
        axios.post(`${Base_Url}/customer/update_order`,{payment_id: payment_id ,order_id: order_id ,
             status: status }).then((response) => {
                console.log(response)
                swal("Good job!", "congrates! Payment successful !!", "success");

                // on successful payment redirect to my orders page
                props.history.push("/customer/orders")
    },(error) => {
        console.log(error)
        swal("Payment failed!", "Payment is successful but not captured on server , we will contact you !", "error");
        
        // on un-successful payment redirect to my orders page
        props.history.push("/customer/orders")
    });
}
    return(
        <div>
             <h3 className= "my-3">Payment here</h3>
             <input id="payment_field" className="form-control my-2" readOnly value={price} placeholder={price}/> 
             <div className="container text-center">
                 <button className="btn btn-success" onClick={paymentStart}>Pay</button>
             </div>
        </div>
    )
    }

    
export default Payment;