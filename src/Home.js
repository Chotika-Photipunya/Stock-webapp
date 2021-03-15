import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Topbar from './Topbar';
import './Home.css';

export default function Home() {

    return (
        <div className="Home">
            
            <Row>
                <Col className="contain2">1 of 2</Col>
                <Col className="contain3">2 of 2</Col>
            </Row>
        </div>
    );
}

