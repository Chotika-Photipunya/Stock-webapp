import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from "react-bootstrap/Col";
import './CreateOrder.css';
import './Main.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BsSearch, BsCaretLeftFill } from "react-icons/bs";
import Table from "react-bootstrap/Table";


function Main() {
    return (
        <div className='Main'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col' id='text-page'><h2>ตารางสินค้าทั้งหมด</h2></div>
                    <div className='col' id='text-page'> <Form.Control className='input-search' type="text" placeholder="ค้นหา" /></div>
                    <div className='col' id='icon-search'>
                        <Button className='bnt-search' type="submit"><BsSearch /></Button>
                    </div>
                </div>


                <div className='row'>
                    <Table bordered className='main-table'>
                        <thead>
                            <tr className='text-header-in-table'>
                                <th>ลำดับ</th>
                                <th>รหัสสินค้า</th>
                                <th>รายละเอียดสินค้า</th>
                                <th>สีรองเท้า</th>
                                <th>ไซส์รองเท้า</th>
                                <th>จำนวน(หน่วยลัง)</th>
                                <th>จำนวนถุงในลัง(หน่วยลัง)</th>
                                <th>คลังที่</th>
                                <th>ห้องที่</th>
                                <th>ราคาทุน(ต่อหน่วย)</th>
                                <th>ราคาขาย(ต่อหน่วย)</th>
                                <th>วันที่นำเข้า</th>
                                <th>วันที่นำออก</th>
                                <th>###</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className='text-in-table'>
                                <td>1</td>
                                <td>1808-1</td>
                                <td>สามเส้นคาดเพชร</td>
                                <td>ดำ</td>
                                <td>36-41</td>
                                <td>33</td>
                                <td>5</td>
                                <td>1</td>
                                <td>11</td>
                                <td>100</td>
                                <td>120</td>
                                <td>11-04-62</td>
                                <td>02-01-63</td>
                                <td><Button className='bnt-detail' type="submit">รายละเอียด</Button></td>
                            </tr>
                            
                        </tbody>
                    </Table>





                </div>

            </div>
        </div>
    )
}

export default Main;
