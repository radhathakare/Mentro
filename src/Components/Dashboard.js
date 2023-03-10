import React, { useState } from 'react';
import background from './background.png';
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';
import five from './5.png';
import './Dashboard.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Rating } from 'react-simple-star-rating';
import Button from 'react-bootstrap/Button';
import arrow1 from './arrow.png';
import { Data } from './Data';

const images = [
    "./1.png",
    "./2.png",
    
  ];

function Dashboard() {
    const [rating, setRating] = useState(5);
    const [current,setCurrent] = useState([]);
    const [alldata, setAlldata] = useState([one,two])
    console.log(Data);
    

    return (
        <>
            <img height={400} src={background} alt='background' className='background-img' />
            <>
                {/* {Data.map((item)=>{ */}
                      <Container>
                <Row>
                    <Col>
                        <div className='infocontainer'>
                            <h1 className='rate'>5.0</h1>
                            <Rating initialValue={rating}  className="rating"/>
                            <h2 className='name'>Prankur Gupta</h2>
                            <h4 className='post'>SDE @Amazon</h4>
                            <p className='info'>I am Prankur Gupta, I am working as a Software Development Engineer at Amazon. I can guide you throughout your preparation phase. Trust me when I tell you this 
                            I know the exact recipe to crack the coding interview rounds of top companies for the SDE role.</p>
                            <Button className='bookbutton'>Book a Session</Button>

                        </div>
                    </Col>
                    <Col>
                        <div class="container3">
                            <ul id="menu">
                                <a class="menu-button icon-plus" id="open-menu" href='#menu' title="Show navigation"></a>
                                <a class="menu-button icon-minus" href="#0" title="Hide navigation"></a>
                                <li class="menu-item">
                                <img src={one} alt="" width={140} />
                                </li>
                                <li class="menu-item">
                                <img src={two} alt="" width={140} />
            
                                </li>
                                <li class="menu-item">
                                <img src={three} alt="" width={140} />
                                </li>
                                <li class="menu-item">
                                <img src={four} alt="" width={140} />
                                </li>
                                <li class="menu-item">
                                <img src={five} alt="" width={140} />
                                </li>
                                <li class="menu-item">
                                <img src={one} alt="" width={180} />
                                </li>
                            </ul>
                           
                        </div>
                        <div class="content">
                                <div class="text">
                                <Button className='bookbutton2'>Keshav Agarwal</Button>
                                </div>
                            </div>

                    </Col>
                </Row>
                <Row>
                    <Col> 
                    <div class="circle blue"  > 
                            <img src={arrow1} alt="" width={40} className="arrow1" />
                            </div></Col>
                           
                                <Col>  <div class="circle arrow" >
                                <img src={arrow1} alt="" width={40} className="arrow1" />
                                </div></Col>
               
               
                </Row>
                </Container>
{/* })}  */}
            </>

        </>
    );
}

export default Dashboard;
