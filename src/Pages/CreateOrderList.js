import React from 'react';
import Button from "react-bootstrap/Button";
import Divider from "@material-ui/core/Divider";
import { BiAddToQueue } from "react-icons/bi";
import './CreateOrder.css';
import './CreateOrderList.css';
import Table from "react-bootstrap/Table";

function CreateOrderList() {
    return (
        <div className='CreateOrderList'>
            <div className='container'>
                <div className='row'>
                    <h2 id='text-page'>สร้างใบสั่งซื้อสินค้าใหม่</h2>
                </div>
                <Divider id='line' />
                <div className='row'>
                    <div className='col' id='bnt-add'>
                        <Button className='button-back' type="submit"><BiAddToQueue />เพิ่มรายการสินค้า</Button>
                    </div>
                </div>

                <Table responsive>
                    <thead>
                        <tr>
                            <th>ลำดับ</th>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <th key={index}>รูปภาพสินค้า</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <td key={index}>รหัสสินค้า {index}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>2</td>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <td key={index}>ราคา{index}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>3</td>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <td key={index}>จำนวนที่สั่ง {index}</td>
                            ))}
                        </tr>
                    </tbody>
                </Table>



            </div>

        </div>
    )
}

export default CreateOrderList
