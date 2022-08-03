import React from 'react';
import { Container } from 'react-bootstrap';
import "./HeadSection.css";
import pic1 from "../../Images/food.png";
import pic2 from "../../Images/doller.png";
import pic3 from "../../Images/order.png";
import pic4 from "../../Images/customers.png";



const HeadSection = () => {
   
    return (
       <Container>
         <div className='headSec'>
            <div className='headerItems'>
                <div>
                    <h2 style={{fontWeight: "bold"}}>459</h2>
                    <p style={{fontWeight: 700}}>Total Minus</p>
                </div>
                  <img style={{width: 110}} src={pic1} alt=""/>
            </div>
            <div className='headerItems'>
                <div>
                    <h2 style={{fontWeight: "bold"}}>$ 87,561</h2>
                    <p style={{fontWeight: 700}}>Total Revenue</p>
                </div>
                  <img style={{width: 100}} src={pic2} alt=""/>
            </div>
            <div className='headerItems'>
                <div>
                    <h2 style={{fontWeight: "bold"}}>247</h2>
                    <p style={{fontWeight: 700}}>Total Orders</p>
                </div>
                    <img className='pic' src={pic3} alt=""/>
            </div>
            <div className='headerItems'>
                <div>
                    <h2 style={{fontWeight: "bold"}}>872</h2>
                    <p style={{fontWeight: 700}}>Total Customer</p>
                </div>
                    <img className='pic' src={pic4} alt=""/>
            </div>
        </div>
       </Container>
    );
};

export default HeadSection;