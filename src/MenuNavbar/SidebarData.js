import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'หน้าหลัก',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'สร้างใบสั่งซื้อสินค้า',
        path: '/Reports',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'รับสินค้าเข้าคลัง',
        path: '/Products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'เบิกสินค้า',
        path: '/Team',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'ลงทะเบียนสินค้าใหม่',
        path: '/NewitemsForm',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'ดูTransaction',
        path: '/Support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
];