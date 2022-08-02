import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faBurger, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import "./HeadSection.css";
import pic1 from "../../Images/order.png";



const HeadSection = () => {
    const element1 = <FontAwesomeIcon icon={faBurger} />
    const element2 = <FontAwesomeIcon icon={faUserFriends} />
    return (
       <Container>
         <div className='headSec'>
            <div className='headerItems'>
                <div>
                    <h2>459</h2>
                    <p>Total Minus</p>
                </div>
                  {element1}  
            </div>
            <div className='headerItems'>
                <div>
                    <h2>$ 87,561</h2>
                    <p>Total Revenue</p>
                </div>
                  <h1>$</h1>
            </div>
            <div className='headerItems'>
                <div>
                    <h2>247</h2>
                    <p>Total Orders</p>
                </div>
                    <img className='pic1' src={pic1} alt=""/>
            </div>
            <div className='headerItems'>
                <div>
                    <h2>872</h2>
                    <p>Total Customer</p>
                </div>
                  {element2}
            </div>
        </div>
       </Container>
    );
};

export default HeadSection;