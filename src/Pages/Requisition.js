import React from 'react'
import './Requisition.css';
import Button from "react-bootstrap/Button";
import Divider from "@material-ui/core/Divider";
import { BsSearch, BsCaretLeftFill } from "react-icons/bs";
import Card from "react-bootstrap/Card";


function Requisition() {
    return (
        <div className='Requisition'>
            <div className='topnav'>
                <div className='row'>
                    <div className='col' id='bnt-back'>
                        <Button className='button-back-requisition' type="submit"><BsCaretLeftFill />กลับ</Button>
                    </div>
                    <div className='text-Requisition'><h2 id='text-'>เบิกสินค้า</h2></div>
                    <div className='search-inline'>
                        <input className='input-search' type="text" placeholder="ค้นหา" />
                        <button className='bnt-search' type="submit"><i class="fa fa-search" /></button>
                    </div>
                </div>
            </div>
            <Divider id='line' />
             <div className='container'>

            <div className='row' id='body-requisition'>
                    <div className='col'>
                        <Card id='card-product-requisition' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                    <Card.Text id='text-in-card'>
                                         Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                <Button className='bnt-in-card' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card id='card-product-requisition' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                    <Card.Text id='text-in-card'>
                                         Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                <Button className='bnt-in-card' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card id='card-product-requisition' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                        <Card.Text id='text-in-card'> 
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                    </Card.Text>
                                <Button className='bnt-in-card' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                </div>


                <div className='row' id='body'>
                    <div className='col'>
                    <Card id='card-product-requisition' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                    <Card.Text id='text-in-card'>
                                         Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                <Button className='bnt-in-card' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                    <Card id='card-product-requisition' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                    <Card.Text id='text-in-card'>
                                         Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                <Button className='bnt-in-card' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                    <Card id='card-product-requisition' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                    <Card.Text id='text-in-card'>
                                         Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                <Button className='bnt-in-card' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                </div>
        </div>

    )
}

export default Requisition;